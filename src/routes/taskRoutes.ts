import { RequestHandler, Router } from "express";
import * as taskController from "../controllers/taskController";

const router = Router();

router.get("/tasks", taskController.getTasks as RequestHandler);
router.get("/tasks/:id", taskController.getTask as unknown as RequestHandler);
router.post("/tasks", taskController.createTask as RequestHandler);
router.put("/tasks/:id", taskController.updateTask as RequestHandler);
router.delete("/tasks/:id", taskController.deleteTask as RequestHandler);

export default router;
