import { Request, Response } from "express";
import { IUser } from "../../../interface/common/user.interface";
import { OK } from "../../../core/success.response";
import { StatusCodes } from "http-status-codes";
import { sign } from "jsonwebtoken";
import { SignJWT } from "../../../config/jwt.config";



export const create = (req: Request<{}, {}, IUser, {}>, res: Response) => {
    // Request < Params = { }, ResBody = any, ReqBody = any, Query = any >
    const { user_name, password } = req.body

    if (!user_name || !password) {
        new OK({
            message: `Login fail!!! user_name or password not exit`,
            statusCode: StatusCodes.BAD_REQUEST
        }).send(res)
        return;
    }
    const id = new Date().getDay();
    const payload = { id, user_name }
    const token = SignJWT(payload)
    console.log(token);

    new OK({
        message: "Login Success",
        metadata: [{ id, token }]
    }).send(res)


};