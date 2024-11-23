import { Request, Response } from "express";

export const findAllTask = (req: Request, res: Response) => {
    res.send("findAll Task")
}