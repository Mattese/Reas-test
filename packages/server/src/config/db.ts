import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MongoDB URI is not defined");
    } else {
      // mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Reas");
      // await mongoose.connect("mongodb://localhost:27017/Reas");
      // console.log("MongoDB connected to:", "mongodb://localhost:27017/Reas");
      await mongoose.connect("mongodb://localhost:27017/test");
      console.log("MongoDB connected to:", "mongodb://localhost:27017/test");
    }
  } catch (error) {
    // TODO: Log error
    // @ts-expect-error error is an instance of Error
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
