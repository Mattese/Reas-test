import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Paper, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { stepOneSchema, stepTwoSchema } from "../validationSchema/schemas";

import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";

export interface StepOneFormData {
  propertyType: string;
  region: string;
  district?: string;
}

export interface StepTwoFormData {
  name: string;
  email: string;
  phone: string;
}

const TwoStepForm = () => {
  const [step, setStep] = useState(1);

  const { handleSubmit, watch, setValue, control, formState } = useForm({
    resolver: yupResolver(stepOneSchema),
    defaultValues: {
      propertyType: "",
      region: "",
      district: "",
    },
  });

  const onSubmit: SubmitHandler<StepOneFormData> = () => {
    setStep(2);
  };

  const { control: controlSecondStep, handleSubmit: handleSumbitSecondStep } = useForm({
    resolver: yupResolver(stepTwoSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const handleBack = () => {
    setStep(1);
  };

  const handleFormSubmit: SubmitHandler<StepTwoFormData> = (data) => {
    // const finalData = { ...formData, ...data };
    console.log("Final Data:", data);
    alert("Formulář byl odeslán! Zkontrolujte konzoli pro data.");
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        {step === 1 ? (
          <StepOne
            control={control}
            setValue={setValue}
            watch={watch}
            handleStepOneSubmit={handleSubmit(onSubmit)}
            formState={formState}
          />
        ) : (
          <StepTwo
            handleSubmitSecondForm={handleSumbitSecondStep(handleFormSubmit)}
            onBack={handleBack}
            control={controlSecondStep}
          />
        )}
      </Box>
    </Paper>
  );
};

export default TwoStepForm;
