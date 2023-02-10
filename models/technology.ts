import { ObjectId } from "mongodb";
import { Category } from "./category";

export default class Technology {
    constructor(public name: string, public description: string, public category: Category, public _id?: ObjectId, public id?: string) {}
}