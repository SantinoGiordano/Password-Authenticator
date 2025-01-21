import mongoose from "mongoose";

export interface InerfaceAccount extends Document {
  _id: number;
  firstname: string;
  lastname: string;
  middleInit: string;
  username: string;
  password: string;
  age: number;
  email: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
}

const account = new mongoose.Schema<InerfaceAccount>({
  _id: {
    type: Number,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },
  middleInit: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
});
