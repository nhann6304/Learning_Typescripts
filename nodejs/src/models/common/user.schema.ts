import mongoose from "mongoose";
import { IUser } from "../../interface/common/user.interface";

export const userSchema = new mongoose.Schema<IUser>({
    user_name: {
        type: String,
    },

    user_email: {
        type: String,
        required: [true, "Please provide name"],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true,
    },

    user_pass: {
        type: String,
        required: [true, "Please provide password"],
    },
});

userSchema.methods.getNmae = function () {
    return this.user_name
}
