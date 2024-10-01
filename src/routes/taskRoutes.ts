import { createTask, getAllTasks, updateTask } from "../controllers/TaskController";
import { Router } from "express";

const router = Router()

router.get("/", getAllTasks)
router.post("/", createTask)
router.put("/update", updateTask)
export default router