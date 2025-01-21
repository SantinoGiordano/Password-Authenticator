import mongoose from "mongoose"


export interface InerfaceAccount extends Document {
    _id:number
    firstname:string
    lastname:string
    middleInit:string
    age:number
    email:string
    number:string
    created_at:Date
    updated_at:Date
}

const account = new mongoose.Schema