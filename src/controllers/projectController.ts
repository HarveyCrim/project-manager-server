import { PrismaClient } from "@prisma/client"
import {Request, Response} from "express"

const prisma = new PrismaClient()

export const getProjects = async (req: Request, res: Response): Promise<void> => {

    try{
        const projects = await prisma.project.findMany()
        console.log(projects)
        res.json(projects)
    }
    catch(err){
        res.status(500).json(err)
    }
}

export const createProject = async (req: Request, res: Response): Promise<void> => {
    try{
        const newProject = await prisma.project.create({
            data: req.body
        })
        res.status(201).json({message: "created"})
    }
    catch(err){
        res.status(500).json(err)
    }
}