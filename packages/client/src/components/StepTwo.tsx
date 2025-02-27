import { IconButton, Typography, TextField, Button } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StepTwoFormData } from "../types";

interface StepTwoProps {
  onBack: () => void;
  control: Control<StepTwoFormData, unknown>;
  handleSubmitSecondForm: React.FormEventHandler<HTMLFormElement>;
}

export const StepTwo: React.FC<StepTwoProps> = ({
  handleSubmitSecondForm,
  onBack,
  control,
}) => {
  return (
    <form onSubmit={handleSubmitSecondForm}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="delete" onClick={onBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6">Krok 2: Kontaktní informace</Typography>
      </div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <TextField label="Jméno" {...field} />}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => <TextField label="Email" {...field} />}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => <TextField label="Telefonní číslo" {...field} />}
      />

      <Button type="submit" variant="contained" color="primary">
        Odeslat
      </Button>
    </form>
  );
};
