import express, { Request, Response } from "express"
import { OK } from "../../../core/success.response"


export const create = async (req: Request, res: Response) => {
    new OK({
        message: "Oke"
    }).send(res)
}


export const find = async (req: Request, res: Response) => {
    new OK({
        message: "Oke"
    }).send(res)
}

export const update = async (req: Request, res: Response) => {
    new OK({
        message: "Oke"
    }).send(res)
}


export const deleted = async (req: Request, res: Response) => {
    new OK({
        message: "Oke"
    }).send(res)
}