import express from "express";
import leadRoutes from "./routes/lead";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();
const app = express();
// connectDB();

app.use(express.json());
app.use("/api", leadRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
