import { ObjectId } from "mongodb";

export default class User {
    constructor(public username: string, public password: string, public _id?: ObjectId) {}
}