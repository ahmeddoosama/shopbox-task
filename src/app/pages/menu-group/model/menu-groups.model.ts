import { Collection } from "../../home/model/home.model";

export interface Menu {
    id: number
    name: string
    image: string
    price: number
    menu_groups: menu_groups[]
}

export interface menu_groups {
    quantity: number
    taxPercentage: number
    sellable_list: Collection[]
}