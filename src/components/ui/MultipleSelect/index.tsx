"use client";
import { Box, Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { StyledFormControl, StyledInputLabel } from "./MultipleSelect.styles";
import { JSX } from "react";

type MultipleSelectCheckmarksProps = {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (value: string[]) => void;
  clearFilters: () => void;
};

const MultipleSelectCheckmarks: React.FC<MultipleSelectCheckmarksProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  clearFilters,
}): JSX.Element => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    onChange(event.target.value as string[]);
  };

  const handleClearFilters = () => {
    clearFilters();
  };

  return (
    <>
      <StyledFormControl size="small" variant="filled">
        <StyledInputLabel>{label}</StyledInputLabel>
        <Select
          multiple
          displayEmpty
          value={selectedValues}
          onChange={handleChange}
          renderValue={(selected: string[]) => {
            return selected.join(", ");
          }}
          sx={{
            borderRadius: "0.75rem",
            border: "0",
            "&::before": { borderBottom: "none !important" },
            "&::after": { borderBottom: "none !important" },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selectedValues.includes(option)} />
              <ListItemText primary={option} sx={{ color: "#323232" }} />
            </MenuItem>
          ))}

          <Box display="flex" justifyContent="center">
            <Button
              variant="text"
              onClick={handleClearFilters}
              sx={{
                textDecoration: "underline",
                fontSize: "0.875rem",
                color: "#323232",
              }}
              size="small"
            >
              Clear Filter
            </Button>
          </Box>
        </Select>
      </StyledFormControl>
    </>
  );
};

export default MultipleSelectCheckmarks;
