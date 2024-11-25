import { NextFunction, Request, Response } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
    console.log("Duyệt qua middleware auth");
    console.log(req.headers.authorization);
    next()
}