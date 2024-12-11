import mongoose from "mongoose";
import { IProduct } from "../../interface/models/product.interface";
import { EProduct } from "../../enums/product.enum";


export const productSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: [true, "Name không được để trống"]
    },
    price: {
        type: Number,
        required: [true, "Price không được để trống"]
    },
    featured: {
        type: Boolean,
        default: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    image: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: Object.values(EProduct),
            message: `{VALUE} không hỗ trợ`
        }
    }
})
