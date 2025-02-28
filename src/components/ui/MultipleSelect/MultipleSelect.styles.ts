import { FormControl, InputLabel, styled } from "@mui/material";

export const StyledFormControl = styled(FormControl)`
  width: 7.4375rem;
  border: 0;
`;

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1rem",
  textTransform: "capitalize",
}));
