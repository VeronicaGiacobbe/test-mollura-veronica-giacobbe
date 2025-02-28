"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Grid2,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)`
  box-shadow: none;
`;

export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  color: theme.typography.h5.color,
  span: {
    color: theme.palette.primary.main,
  },
}));

export const ActionsBox = styled(Box)`
  display: flex;
`;

export const ShareButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  textTransform: "none",
  fontSize: "1rem",
  padding: "0.5rem 1.25rem",
}));

export const StyledContainer = styled(Container)`
  padding: 40px !important;
`;

export const StyledAvatar = styled(Avatar)<{ bgcolor: string }>`
  font-size: 1rem;
  background-color: ${(props) => props.bgcolor};
  width: 2.5rem;
  height: 2.5rem;
  margin-left: -0.5rem;
  &:first-of-type {
    margin-left: 0.5rem;
  }
`;

export const StyledGrid = styled(Grid2)`
  height: 12.2rem;
  border: 1px solid #f1f1ee;
  border-top: none;
`;

export const StyledGridItem = styled(Grid2)`
  border-left: 1px solid #f1f1ee;
`;
