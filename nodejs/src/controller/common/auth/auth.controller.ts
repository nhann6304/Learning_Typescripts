import { Request, Response } from "express";
import { IUser } from "../../../interface/common/user.interface";
import { CREATE, OK } from "../../../core/success.response";
import { StatusCodes } from "http-status-codes";
import { sign } from "jsonwebtoken";
import { decodeJwt, SignJWT } from "../../../config/jwt.config";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { userSchema } from "../../../models/common/user.schema";
import { comparePassword, hashPassword } from "../../../helper/hashPassword";
import { ok } from "assert";
import { CustomRequest } from "../../../interface/common/request.interface";

const userRepository = mongoose.model<IUser>("Users", userSchema);
export const register = async (
    req: Request<{}, {}, IUser, {}>,
    res: Response
) => {
    const { user_pass, ...data } = req.body;

    if (!user_pass) {
        new OK({ message: "Register failed " }).send(res);
    }

    try {
        const hashedPassword = await hashPassword(user_pass);
        const user: IUser = await userRepository.create({
            user_pass: hashedPassword,
            ...data,
        });

        new CREATE({
            message: "Register success!!!",
            metadata: {
                items: {
                    user_name: user.user_name,
                    user_email: user.user_email,
                },
            },
        }).send(res);
    } catch (error) {
        new OK({
            message: "Register failed",
            metadata: error,
        }).send(res);
    }
};
export const login = async (req: CustomRequest<{}, {}, IUser, {}>, res: Response) => {
    const { user_email, user_pass } = req.body;

    if (!user_email || !user_pass) {
        new OK({ message: "Email or Password not exists" }).send(res);
        return;
    }

    try {
        const user: IUser = await userRepository.findOne({ user_email });

        if (!user) {
            new OK({ message: "User not exists" }).send(res);
            return;
        }

        const isPassword = await comparePassword(user.user_pass, user_pass);

        if (!isPassword) {
            new OK({ message: "Mật khẩu sai" }).send(res);
            return;
        }

        const token = SignJWT({
            _id: user._id,
            user_email: user.user_email,
        });

        res.cookie("token", token, {
            maxAge: 5 * 60 * 10000,
            httpOnly: true,
        });

        new OK({
            message: "Login success",
            metadata: { token },
        }).send(res);

    } catch (error) {
        new OK({
            message: "Login failed!!!",
            metadata: error,
            statusCode: StatusCodes.BAD_REQUEST,
        }).send(res);
    }
};


export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token");
        new OK({
            message: "Logout success",
        }).send(res);
    } catch (error) {
        new OK({
            message: "Logout failed",
            metadata: error,
            statusCode: StatusCodes.BAD_GATEWAY,
        }).send(res);
    }
};


export const getMe = async (req: Request, res: Response) => {
    const cookie = req.cookies;

    const result = decodeJwt<Pick<IUser, "user_email" | "_id">>(cookie.token);

    const dataItem = await userRepository.findOne({ user_email: result.user_email }).select("-user_pass")

    new OK({
        message: "Get me Success",
        metadata: dataItem
    }).send(res)
}

export const sendMail = async (req: CustomRequest, res: Response) => {
    try {
        let testAccount = await nodemailer.createTestAccount();
        const subject = "Welcome to Cuahangsach!";
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_SEND,
                pass: process.env.PASSWORD_EMAIL_SEND,
            },
        });

        const info = await transporter.sendMail({
            from: '"Cuahangsach" <no-reply@cuahangsach.com>',
            to: "fakeEmail@gmail.com",
            subject: subject,
            html: "<h1>Hi</h1>",
        });
        res.json({ message: "Mail sent successfully", info });
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ message: "Failed to send email", error });
    }
};