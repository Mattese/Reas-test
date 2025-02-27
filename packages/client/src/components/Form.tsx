import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Paper, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { stepOneSchema, stepTwoSchema } from "../validationSchema/schemas";

import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepOneFormData, StepTwoFormData } from "../types";
import { postLead } from "../api/lead";
import { toast } from "react-toastify";

const TwoStepForm = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, watch, setValue, control, formState, getValues } = useForm({
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

  const {
    control: controlSecondStep,
    handleSubmit: handleSumbitSecondStep,
    formState: formStateSecondStep,
  } = useForm({
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

  const handleFormSubmit: SubmitHandler<StepTwoFormData> = async (data) => {
    const finalData = { ...getValues(), ...data };
    try {
      setIsLoading(true);
      await postLead(finalData);
      toast.success("Formulář byl úspěšně odeslán!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Odeslání formuláře se nezdařilo. Zkuste to prosím znovu.");
    } finally {
      setIsLoading(false);
    }
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
            formState={formStateSecondStep}
            isLoading={isLoading}
          />
        )}
      </Box>
    </Paper>
  );
};

export default TwoStepForm;
