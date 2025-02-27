import { StepOneFormData, StepTwoFormData } from "../types";
import axiosInstance from "../main";

interface Lead extends StepOneFormData, StepTwoFormData {}

export const postLead = async (lead: Lead) => {
  return await axiosInstance.post("/api/lead", lead);
};
