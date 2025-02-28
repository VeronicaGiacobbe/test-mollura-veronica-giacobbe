import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
`;

export const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  background: theme.palette.text.secondary,
  width: "21rem",
  paddingLeft: "2.5rem",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.typography.h6.color,
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  marginRight: "0.625rem",
}));

export const StyledBadge = styled(Badge)`
  background-color: #d32f2f;
  color: #fff;
  padding: 0.125rem 0.5rem;
  margin-left: 0.5rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

export const SearchBox = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #f8f8f8, #ffffff);
  border-radius: 0.5rem;
  width: 100%;
  gap: 1rem;
  padding: 0 0 0 2.5rem;
`;

export const SearchInputBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: 60%;
`;

export const StyledToolbar = styled(Toolbar)`
  background-color: #fff;
  color: #000;
  height: 5rem;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

export const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "1rem",
  textTransform: "none",
  color: theme.palette.text.primary,
}));

export const FormControlStyled = styled(FormControl)`
  margin: 0.5rem;
  min-width: 7.5rem;
  background-color: #f8f8f8;
  color: theme.palette.text.primary;
`;

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "#A3A3A0",
  marginLeft: "1rem",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginleft: "0.5rem",
  flex: 1,
  fontSize: "1rem",
  color: theme.palette.text.secondary,
}));

export const StyledDivider = styled(Divider)`
  height: 2rem;
  padding: 0 0 0 1.5rem;
`;
