import { Request, Response } from "express";

export const create = (req: Request, res: Response) => {
    const { user_email } = req.body;
    console.log(user_email);
    res.send("User email logged");
};
