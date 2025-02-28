import express, { NextFunction, Request, Response } from "express";

import { leadValidation } from "../validations/leadValidation";
import { validationResult } from "express-validator";
import { leadModel } from "../database/models/leadModel";

const router = express.Router();

router.post(
  "/lead",
  leadValidation,
  (req: Request, res: Response, next: NextFunction) => {
    console.log("req.body", req.body);

    const errors = validationResult(req);
    console.log("errors", errors);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    next();
  },

  (req: Request, res: Response) => {
    console.log("req.body", req.body);
    const lead = req.body;

    const newLead = new leadModel(lead);
    newLead.save((err, result) => {
      if (err) {
        console.error("Error saving lead:", err);
        res.status(500).json({ message: "Internal Server Error while saving lead" });
      } else {
        res.status(201).json({ message: "Lead created" });
      }
    });
  }
);

router.get("/lead", async (req: Request, res: Response) => {
  try {
    const leads = await leadModel.find();
    res.status(200).json(leads);
  } catch (error) {
    console.error("Error getting leads:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
