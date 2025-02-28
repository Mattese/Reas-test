import { body } from "express-validator";

const leadValidation = [
  body("propertyType").isString().notEmpty(),
  body("region").isString().notEmpty(),
  body("district").isString().optional(),
  body("name").isString().notEmpty(),
  body("email").isEmail(),
  body("phone").isMobilePhone("cs-CZ"),
];

export { leadValidation };
