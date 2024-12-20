import { Request, Response, NextFunction } from "express";
import * as taskService from "../services/taskService";
import { TaskBody } from "../types";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const task = await taskService.getTaskById(Number(id));

    if (!task) {
      res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
  req: Request<{}, {}, TaskBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updatedTask = await taskService.updateTask(Number(id), req.body);
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(Number(id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
