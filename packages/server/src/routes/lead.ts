import express, { Request, Response } from "express";

import { leadModel } from "../models/lead";
const { leadValidation, validate } = require("../validations/leadValidation");
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/lead",
  body("propertyType").isString().notEmpty(),
  body("region").isString().notEmpty(),
  body("district").isString().optional(),
  body("name").isString().notEmpty(),
  body("email").isEmail(),
  body("phone").isMobilePhone("cs-CZ"),
  (req: Request, res: Response, next) => {
    console.log("req.body", req.body);

    const errors = validationResult(req);
    console.log("errors", errors);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  },
  async (req: Request, res: Response) => {
    console.log("req.body", req.body);

    try {
      // Create a new lead
      // const newLead = new leadModel(req.body);
      // await newLead.save();

      // Respond with the created lead
      // res.status(201).json({ message: "Lead created", lead: newLead });
      res.status(201).json({ message: "Lead created" });
    } catch (error) {
      console.error("Error saving lead:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export default router;
