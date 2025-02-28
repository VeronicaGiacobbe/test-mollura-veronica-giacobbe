import { Badge, Box, MenuItem, Typography } from "@mui/material";
import React, { JSX } from "react";
import type { ProductCardProps } from "../../../../types";
import {
  AddButton,
  CheckboxContainer,
  ConfigLink,
  ImageContainer,
  MoreIconContainer,
  StyledCard,
  StyledCardContent,
  StyledCheckbox,
  StyledMoreVertIcon,
  StyledSelect,
} from "./ProductCard.styles";
import CircleIcon from "@mui/icons-material/Circle";
import { generateBadgeColor } from "../../../../utils";

const ProductCard: React.FC<ProductCardProps> = ({ data }): JSX.Element => {
  return (
    <StyledCard>
      <ImageContainer>
        <img
          src={data.src.src}
          alt={data.title}
          style={{
            width: "100%",
            height: "23.125rem",
            filter: "contrast(0.9)",
          }}
        />
        <CheckboxContainer>
          <StyledCheckbox />
        </CheckboxContainer>
        <MoreIconContainer>
          <StyledMoreVertIcon />
        </MoreIconContainer>
      </ImageContainer>

      <StyledCardContent>
        <Typography variant="subtitle1" fontWeight="bold" color="#323232">
          {data.brand}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {data.title}
        </Typography>

        <Box display="flex" alignItems="center" gap={4}>
          <ConfigLink variant="body2">
            {data.configurations} configuration proposed
          </ConfigLink>
          <AddButton size="small">Add new</AddButton>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="subtitle1" color="#323232">
            {data.price} €
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <CircleIcon
                  style={{
                    color: generateBadgeColor(data.stockStatus),
                    fontSize: 12,
                  }}
                />
              }
            />
            <Typography variant="subtitle1" color="#323232">
              {data.stockStatus}
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap="8px" mt="8px">
          <StyledSelect defaultValue={"01"} size="small" disabled>
            <MenuItem value={"01"}>01</MenuItem>
            <MenuItem value={"02"}>02</MenuItem>
            <MenuItem value={"03"}>03</MenuItem>
          </StyledSelect>
          <StyledSelect defaultValue={data.status} size="small" disabled>
            <MenuItem value="Proposed Items">Proposed</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </StyledSelect>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard;
