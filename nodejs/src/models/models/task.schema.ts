import mongoose from "mongoose";
import { ITask } from "../../interface/models/task.interface";

export const TaskSchema = new mongoose.Schema<ITask>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    completed: Boolean
})



