
import dbConnect from "@/utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: Request) {
    try {
      // Connect to the database
      await dbConnect();
      console.log('Hello, im connected in post')
    }



    export default async (req: NextApiRequest, res: NextApiResponse) => {
        if (req.method === 'POST') {
          const {
            firstname,
            lastname,
            middleInit,
            username,
            password,
            age,
            email,
            phone_number,
          } = req.body;
      
          // Validate required fields
          if (!firstname || !lastname || !username || !password || !email) {
            return res.status(400).json({ message: 'Please fill in all required fields.' });
          }
      
          try {
            await connectToDatabase();
      
            // Create the new account in MongoDB
            const newAccount = new Account({
              firstname,
              lastname,
              middleInit,
              username,
              password,
              age,
              email,
              phone_number,
              created_at: new Date(),
              updated_at: new Date(),
            });
      
            // Save the new account document
            await newAccount.save();
      
            return res.status(201).json({ message: 'Account created successfully!', account: newAccount });
          } catch (error) {
            return res.status(500).json({ message: 'Error creating account', error });
          }
        } else {
          return res.status(405).json({ message: 'Method Not Allowed' });
        }
      }
}