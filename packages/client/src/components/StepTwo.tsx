import { IconButton, Typography, TextField, Button, FormControl } from "@mui/material";
import { Control, Controller, FormState } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StepTwoFormData } from "../types";

interface StepTwoProps {
  onBack: () => void;
  control: Control<StepTwoFormData, unknown>;
  handleSubmitSecondForm: React.FormEventHandler<HTMLFormElement>;
  formState: FormState<StepTwoFormData>;
  isLoading: boolean;
}

export const StepTwo: React.FC<StepTwoProps> = ({
  handleSubmitSecondForm,
  onBack,
  control,
  formState,
  isLoading,
}) => {
  const { errors } = formState;
  return (
    <form onSubmit={handleSubmitSecondForm}>
      <FormControl fullWidth variant="outlined" margin="normal">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="delete" onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">Krok 2: Kontaktní informace</Typography>
        </div>{" "}
      </FormControl>

      <FormControl fullWidth variant="outlined" margin="normal">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              label="Jméno"
              {...field}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
          )}
        />{" "}
      </FormControl>
      <FormControl fullWidth variant="outlined" margin="normal">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              label="Email"
              {...field}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined" margin="normal">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              label="Telefonní číslo"
              {...field}
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ""}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined" margin="normal">
        <Button type="submit" variant="contained" color="primary" loading={isLoading}>
          Odeslat
        </Button>
      </FormControl>
    </form>
  );
};
