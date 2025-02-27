import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MongoDB URI is not defined");
    } else {
      await mongoose.connect(process.env.MONGODB_URI, {}, (error) => {
        throw error;
      });
      console.log("MongoDB connected");
    }
  } catch (error) {
    // TODO: Log error
    // @ts-expect-error error is an instance of Error
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
