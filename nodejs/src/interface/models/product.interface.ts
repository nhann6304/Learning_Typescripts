import { EProduct } from "../../enums/product.enum"

export interface IProduct {
    name: string,
    price: number,
    featured?: boolean,
    rating: number,
    createAt?: Date
    company: EProduct | string
}