import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Select,
  styled,
  Typography,
} from "@mui/material";

export const StyledCard = styled(Card)`
  box-shadow: none;
`;

export const ImageContainer = styled(Box)`
  position: relative;
`;

export const CheckboxContainer = styled(Box)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 1rem;
  height: 1rem;
  color: #323232 !important;
`;

export const MoreIconContainer = styled(Box)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #323232 !important;
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
`;

export const StyledMoreVertIcon = styled(MoreVertIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;

export const StyledCardContent = styled(CardContent)`
  padding: 0 !important;
  box-shadow: none;
`;

export const ConfigLink = styled(Typography)(({ theme }) => ({
  textDecoration: "underline",
  cursor: "pointer",
  color: theme.palette.primary.main,
}));

export const AddButton = styled(Button)(({ theme }) => ({
  fontSize: "0.625rem",
  backgroundColor: "#f8f8f8",
  color: theme.palette.primary.main,
}));

export const StyledSelect = styled(Select)`
  font-size: 1rem;
  background-color: #f8f8f8;
`;
