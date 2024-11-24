import { Request, Response } from "express";
import mongoose from "mongoose";
import { ITask } from "../../../interface/models/task.interface";
import { Ires } from "../../../interface/common/response.interface";
import { CREATE, OK } from "../../../core/success.response";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { TaskSchema } from "../../../models/models/task.schema";

const taskRepository = mongoose.model<ITask>("tasks", TaskSchema);

export const createTask = async (req: Request, res: Response) => {
    new CREATE({
        message: "Create Task success!!!",
        metadata: await taskRepository.create(req.body),
    }).send(res);
};

export const findAllTask = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { id } = req.query;
    let result: ITask | ITask[];
    try {
        if (id) {
            result = await taskRepository.findById({ _id: id });
            result = result ? result : [];
        } else {
            result = await taskRepository.find();
        }
        new OK({
            message: "get task success",
            metadata: result,
        }).send(res);
    } catch (error) {
        throw new Error("Lỗi bên server");
    }
};

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.query;
    const value: ITask = req.body;
    const result = await taskRepository.findByIdAndUpdate({ _id: id }, { ...value }, { new: true });
    new OK({
        message: "Update Task Success!!",
        metadata: result,
    }).send(res);
};

export const deletedTask = async (req: Request, res: Response) => {
    const { id } = req.query;
    try {
        const result = await taskRepository.findOneAndDelete({ _id: id });

        if (!result) {
            new OK({
                message: "Task not found",
            }).send(res);
        }

        new OK({
            message: "Delete Task Success!!",
        }).send(res);
    } catch (error) {
        new OK({
            message: "Delete Fail!!",
            statusCode: StatusCodes.BAD_REQUEST
        }).send(res);
    }
};
