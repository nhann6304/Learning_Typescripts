import mongoose from "mongoose"
import { IProduct } from "../../../interface/models/product.interface"
import { productSchema } from "../../../models/models/product.schema"
import { CREATE } from "../../../core/success.response";
import data from "../../../data/product.data.json"
import { Request, Response } from "express";
const productRepository = mongoose.model<IProduct>("products", productSchema);

export const mockupData = async (req: Request, res: Response) => {
    new CREATE({
        message: "Mockup data success!!!",
        metadata: await productRepository.create(data),
    }).send(res);
}