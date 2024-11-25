import { Request, Response } from "express";
import { IUser } from "../../../interface/common/user.interface";
import { CREATE, OK } from "../../../core/success.response";
import { StatusCodes } from "http-status-codes";
import { sign } from "jsonwebtoken";
import { decodeJwt, SignJWT } from "../../../config/jwt.config";
import mongoose from "mongoose";
import { userSchema } from "../../../models/common/user.schema";
import { hashPassword } from "../../../helper/hashPassword";


const userRepository = mongoose.model<IUser>("Users", userSchema);
export const register = async (req: Request<{}, {}, IUser, {}>, res: Response) => {
    const { user_pass, ...data } = req.body;

    if (!user_pass) {
        new OK({ message: "Register failed " }).send(res);
    }

    try {
        const hashedPassword = await hashPassword(user_pass);
        const user: IUser = await userRepository.create({ user_pass: hashedPassword, ...data });

        const token = SignJWT({
            id: user._id,
            user_email: user.user_email,
        });

        new CREATE({
            message: "Register success!!!",
            metadata: {
                items: {
                    user_name: user.user_name,
                    user_email: user.user_email
                },
                token,
            },
        }).send(res);
    } catch (error) {
        new OK({
            message: "Register failed",
            metadata: error,
        }).send(res);
    }
};

export const login = (req: Request, res: Response) => {
    new OK({
        message: "Login"
    }).send(res)
}