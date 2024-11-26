import mongoose from "mongoose";
import { IProduct } from "../../../interface/models/product.interface";
import { productSchema } from "../../../models/models/product.schema";
import { CREATE, OK } from "../../../core/success.response";
import data from "../../../data/product.data.json";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CustomRequest } from "../../../interface/common/request.interface";
import path from "path";
import fileUpload from "express-fileupload";
const productRepository = mongoose.model<IProduct>("products", productSchema);

export const mockupData = async (req: Request, res: Response) => {
    new CREATE({
        message: "Mockup data success!!!",
        metadata: await productRepository.create(data),
    }).send(res);
};

export const mockupDelete = async (req: Request, res: Response) => {
    new OK({
        message: "Mockup data success!!!",
        metadata: await productRepository.deleteMany(),
    }).send(res);
};

export const findProduct = async (req: Request, res: Response) => {
    const { id, name, fields, limit = 10, page = 1, ...query } = req.query;
    const a = fields as string;
    const fieldsList = a?.split(",").join(" ");
    //pagination
    const skip = (+page - 1) * Number(limit)
    console.log("skip::::", skip);
    let result = [];
    try {
        if (id) {
            result = (await productRepository
                .findOne({ _id: id, name: { $regex: name, $options: "i" }, ...query })
                .select(`${fieldsList}`)) as any;
        } else {
            result = await productRepository
                .find({ ...query, price: { $gt: 100 } })
                .select(`${fieldsList}`)
                .limit(+limit)
                .skip(skip);
        }
        new OK({
            message: "Find Product Success",
            metadata: result,
        }).send(res);
    } catch (error) {
        new OK({
            message: "Find Product Failed",
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        }).send(res);
    }
};

export const createProduct = async (req: CustomRequest<{}, {}, IProduct, {}>, res: Response) => {
    const productImage: any = req.files.image;
    const { ...data } = req.body;
    const imagePath = path.resolve(__dirname, "../../../public/uploads", productImage.name);
    await productImage.mv(imagePath)
    const image = `./uploads/${productImage.name}`
    const items = await productRepository.create({ image, ...data });
    new CREATE({
        message: "Create Product Success",
        metadata: items
    }).send(res)
}


export const uploadProductImage = async (req: CustomRequest, res: Response) => {
    const productImage: any = req.files.image;
    // console.log(path.resolve(__dirname, "../../../public/uploads"));

    new CREATE({
        message: "Upload Image Success",
        metadata: ({ image: { src: `./uploads/${productImage.name}` } })
    }).send(res)
}

