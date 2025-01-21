import mongoose from "mongoose";

export interface InerfaceAccount extends Document {
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
  },
  username: {
    type: String,
    required: true,
    unique:true
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
    default: Date.now()

  },
  updated_at: {
    type: Date,
    default: Date.now()
  },
});

export const Account = mongoose.models.account || mongoose.model<InerfaceAccount>('account',account)