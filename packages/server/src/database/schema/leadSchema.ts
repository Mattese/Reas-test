import mongoose from "mongoose";

export const leadSchema = new mongoose.Schema({
  propertyType: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  district: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
