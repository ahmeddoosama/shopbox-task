import { Collection } from "../../home/model/home.model";

export interface Menu {
    id: number
    name: string
    image: string
    price: number
    taxPercentage: number
    collection: Collection[]
}