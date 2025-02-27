import express, { Request, Response } from "express";

import { leadModel } from "../models/lead";
const { leadValidation, validate } = require("../validations/leadValidation");
import { check } from "express-validator";

const router = express.Router();

router.post("/lead", check());

// router.post("/lead", leadValidation, validate, async (req: Request, res: Response) => {
//   try {
//     const lead = new leadModel(req.body);
//     await lead.save();
//     res.status(201).json(lead);
//   } catch (error) {
//     // TODO: Log error
//     // @ts-expect-error error is an instance of Error
//     res.status(500).json({ message: error.message });
//   }
// });

export default router;
