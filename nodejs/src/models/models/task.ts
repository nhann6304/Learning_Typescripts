import mongoose from "mongoose";
import { ITask } from "../../interface/models/task.interface";


export interface ITaskModel extends ITask, Document { }

const TaskSchema = new mongoose.Schema<ITask>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    completed: Boolean
})

export default TaskSchema

