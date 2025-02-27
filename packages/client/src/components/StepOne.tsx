import { Typography, FormControl, Autocomplete, TextField, Button } from "@mui/material";
import { useEffect } from "react";
import {
  Control,
  Controller,
  FormState,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { propertyTypes, regions, districtsByRegion } from "./const";
import { StepOneFormData } from "../types";

interface StepOneProps {
  handleStepOneSubmit: React.FormEventHandler<HTMLFormElement>;
  watch: UseFormWatch<StepOneFormData>;
  setValue: UseFormSetValue<StepOneFormData>;
  control: Control<StepOneFormData, unknown>;
  formState: FormState<StepOneFormData>;
}
export const StepOne: React.FC<StepOneProps> = ({
  handleStepOneSubmit,
  watch,
  setValue,
  control,
  formState,
}) => {
  const { errors } = formState;

  const selectedRegion = watch("region");

  useEffect(() => {
    setValue("district", "");
  }, [selectedRegion, setValue]);

  return (
    <form onSubmit={handleStepOneSubmit}>
      <Typography variant="h6">Krok 1: Informace o nemovitosti</Typography>

      <FormControl fullWidth variant="outlined" margin="normal">
        <Controller
          name="propertyType"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={propertyTypes}
              onChange={(event, value) => field.onChange(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!errors.propertyType}
                  label="Typ nemovitosti"
                  helperText={errors.propertyType ? errors.propertyType.message : ""}
                />
              )}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <Controller
          name="region"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={regions}
              onChange={(event, value) => field.onChange(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={!!errors.region}
                  label="Kraj"
                  helperText={errors.region ? errors.region.message : ""}
                />
              )}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <Controller
          name="district"
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={
                selectedRegion
                  ? districtsByRegion[selectedRegion as keyof typeof districtsByRegion]
                  : []
              }
              disabled={!selectedRegion || selectedRegion === "Hlavní město Praha"}
              onChange={(event, value) => field.onChange(value)}
              renderInput={(params) => <TextField {...params} label="Region" />}
            />
          )}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Další
      </Button>
    </form>
  );
};
