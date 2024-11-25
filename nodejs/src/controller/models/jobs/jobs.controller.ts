import express, { Request, Response } from "express"
import { OK } from "../../../core/success.response"


export const create = async (req: Request, res: Response) => {
    new OK({
        message: "Oke"
    }).send(res)
}