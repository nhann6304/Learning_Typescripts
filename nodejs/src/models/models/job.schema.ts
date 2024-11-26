import mongoose from "mongoose";
import { IJob } from "../../interface/models/Job.interface";
import { EStatus } from "../../enums/status.enum";

export const jobSchema = new mongoose.Schema<IJob>({
    company: {
        type: String,
        required: [true, "Please provide company name"],
    },
    position: {
        type: String,
    },
    status: {
        type: String,
        enum: {
            values: Object.values(EStatus),
            message: "Không nằm trong Enum"
        },
        default: EStatus.PENDING
    },
    createBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
},
    { timestamps: true }
)