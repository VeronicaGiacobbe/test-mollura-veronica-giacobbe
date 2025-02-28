"use client";
import {
  AccountCircleOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Divider, InputLabel, Select } from "@mui/material";
import React, { JSX } from "react";
import {
  FormControlStyled,
  LogoBox,
  SearchBox,
  SearchInputBox,
  StyledAppBar,
  StyledBadge,
  StyledButton,
  StyledDivider,
  StyledIconButton,
  StyledInputBase,
  StyledToolbar,
  StyledTypography,
} from "./Header.styles";

const Header: React.FC = (): JSX.Element => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoBox>
          <StyledTypography variant="h6">mohd</StyledTypography>
          <StyledBadge>Pro</StyledBadge>
        </LogoBox>
        <SearchBox>
          <SearchInputBox>
            <SearchIcon sx={{ marginRight: "0.5rem" }} />
            <StyledInputBase placeholder="Search for products" />
          </SearchInputBox>
          <StyledButton variant="text" sx={{ marginLeft: "0.3125rem" }}>
            Browse by category
            <ManageSearchIcon sx={{ marginLeft: "0.3125rem" }} />
            <StyledDivider orientation="vertical" />
          </StyledButton>
        </SearchBox>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ ml: "1rem", paddingRight: "2.5rem" }}
        >
          <FormControlStyled size="small">
            <InputLabel>Projects</InputLabel>
            <Select label="Project" disabled />
          </FormControlStyled>
          <StyledIconButton>
            <NotificationsOutlined />
          </StyledIconButton>
          <StyledIconButton>
            <AccountCircleOutlined />
          </StyledIconButton>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
