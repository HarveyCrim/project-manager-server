import { PrismaClient } from "@prisma/client"
import {Request, Response} from "express"

const prisma = new PrismaClient()

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try{
        const {projectId} = req.query
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId)
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true
            }
        })
        res.json(tasks)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try{
        const task = await prisma.task.create({
            data: req.body
        })
        res.json(task)
    }
    catch(err){
        res.json(err)
    }
}

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    console.log("in here")
    const {taskId, status} = req.query
    try{
        const updatedTask = await prisma.task.update({
            where: {
                id: Number(taskId)
            },
            data: {
                status: status?.toString()
            }
        })
        res.status(201).json(updatedTask)
    }
    catch(err){
        res.status(500).json(err)
    }
}