import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MongoDB URI is not defined");
    } else {
      console.log("Connecting to MongoDB...", process.env.MONGODB_URI);
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected to:", process.env.MONGODB_URI);
    }
  } catch (error) {
    // TODO: Log error
    // @ts-expect-error error is an instance of Error
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
