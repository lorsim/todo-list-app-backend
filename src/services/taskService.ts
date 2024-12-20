import prisma from "../utils/prismaClient";
import { TaskBody } from "../types";

export const getAllTasks = async () => {
  return await prisma.task.findMany();
};

export const getTaskById = async (id: number) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

export const createTask = async (data: TaskBody) => {
  return await prisma.task.create({
    data: {
      title: data.title!,
      color: data.color!,
      completed: false,
    },
  });
};

export const updateTask = async (id: number, data: TaskBody) => {
  return await prisma.task.update({
    where: { id },
    data: {
      ...(data.title && { title: data.title }),
      ...(data.color && { color: data.color }),
      ...(data.completed !== undefined && { completed: data.completed }),
    },
  });
};

export const deleteTask = async (id: number) => {
  return await prisma.task.delete({
    where: { id },
  });
};
