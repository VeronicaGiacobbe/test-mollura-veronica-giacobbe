import { AppBar, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = styled(Container)`
  padding: 0 !important;
`;

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  background-color: transparent;
`;

export const StyledBox = styled(Box)`
  border-bottom: 1px solid;
  border-color: divider;
  padding: 0 2.5rem;
`;
