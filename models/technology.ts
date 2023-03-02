import { ObjectId } from "mongodb";
import { Category } from "./category";
import { Ring } from "./ring";

export default class Technology {
    constructor(public name: string,
        public description: string,
        public category: Category,
        public ring: Ring,
        public deploy: Boolean,
        public _id?: ObjectId,
        public id?: string,
        public order?: number,
        public ringDescription?: string,
        public user?: string,
        public savedAt?: Date) { }
}