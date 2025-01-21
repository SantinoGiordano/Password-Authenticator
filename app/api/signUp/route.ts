import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import { Account } from '@/app/model/Account';

export async function POST(request: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract data from the request body
    const { firstname, lastname, middleInit, phone_number, email, age, username, password } = await request.json();

    // Validation for required fields
    if (!firstname || !lastname || !middleInit || !phone_number || !email || !age || !username || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the username already exists
    const existingUser = await Account.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    // Create a new account (No _id field in data)
    const newAccount = new Account({
      firstname,
      lastname,
      middleInit,
      email,
      phone_number,
      age,
      username,
      password,
    });

    // Save the new account to MongoDB
    await newAccount.save();

    // Return success response
    return NextResponse.json(newAccount, { status: 201 });
  } catch (error: any) {
    console.error("Error during account creation:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
