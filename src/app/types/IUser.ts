import { Document } from "mongoose";

export default interface IUser extends Document {
    userName: string,
    email: string,
    password: string,
}