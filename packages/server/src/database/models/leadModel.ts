import mongoose from "mongoose";
import { leadSchema } from "../schema/leadSchema";

export const leadModel = mongoose.model("leads", leadSchema);
