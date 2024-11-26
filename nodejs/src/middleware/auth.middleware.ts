import { NextFunction, Request, Response } from "express";
import { OK } from "../core/success.response";
import { StatusCodes } from "http-status-codes";
import { IUser } from "../interface/common/user.interface";
import { CustomRequest } from "../interface/common/request.interface";
import { decodeJwt } from "../config/jwt.config";

export function auth(req: CustomRequest, res: Response, next: NextFunction) {

    const cookies = req.cookies;
    if (cookies && cookies.token) {
        const user = decodeJwt(cookies.token);
        req.user = user as IUser
        next();
    } else {
        new OK({
            message: "Vui lòng đăng nhập lại",
            statusCode: StatusCodes.GATEWAY_TIMEOUT
        }).send(res);
    }
}
