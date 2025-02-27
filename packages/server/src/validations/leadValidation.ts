import { NextFunction } from "express";
import { body, validationResult } from "express-validator";

const leadValidation = [
  body("estateType").isString().notEmpty(),
  body("fullname").isString().notEmpty(),
  body("phone")
    .isString()
    .matches(/^\d{3} \d{3} \d{3}$/)
    .withMessage("Phone must be in the format xxx xxx xxx"),
  body("email").isEmail().withMessage("Must be a valid email"),
  body("region").isString().notEmpty(),
  body("district").isString().notEmpty(),
];

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // TODO: Log errors
    // @ts-expect-error errors is an instance of Result
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { leadValidation, validate };
