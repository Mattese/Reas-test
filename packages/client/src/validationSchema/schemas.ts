import * as Yup from "yup";

export const stepOneSchema = Yup.object().shape({
  propertyType: Yup.string().required("Typ nemovitosti je povinný"),
  region: Yup.string().required("Kraj je povinný"),
  district: Yup.string(),
});

export const stepTwoSchema = Yup.object().shape({
  name: Yup.string().required("Jméno je povinné"),
  email: Yup.string().email("Neplatný email").required("Email je povinný"),
  phone: Yup.string().required("Telefonní číslo je povinné"),
});
