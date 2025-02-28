"use client";

import { Box, CardContent, Grid2, Typography } from "@mui/material";
import React from "react";
import {
  ActionsBox,
  HeaderBox,
  ShareButton,
  StyledAvatar,
  StyledCard,
  StyledContainer,
  StyledGrid,
  StyledGridItem,
  Title,
} from "./InfoOverview.styles";

const InfoOverview: React.FC = () => {
  return (
    <StyledContainer maxWidth={false}>
      <StyledCard>
        <HeaderBox>
          <Title gutterBottom>
            Projects <span>/ New home</span>
          </Title>

          <ActionsBox>
            <ShareButton size="medium" variant="contained">
              Share with client
            </ShareButton>
            <StyledAvatar bgcolor="#d32f2f">GM</StyledAvatar>
            <StyledAvatar bgcolor="#CCCCC9">RP</StyledAvatar>
          </ActionsBox>
        </HeaderBox>

        <StyledGrid container>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <CardContent style={{ height: "100%" }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Box>
                  <Typography variant="subtitle1" color="#323232">
                    To
                  </Typography>
                  <Typography variant="body1" color="#323232">
                    Rino Platania
                  </Typography>
                  <Typography variant="body1" color="#323232">
                    Shipping to Milan, Italy
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" color="#323232">
                    Project #0000012452
                  </Typography>
                  <Typography variant="caption" color="#A3A3A0" display="block">
                    Last save 2 minutes ago
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Grid2>

          {["To be paid", "Paid", "Total Order"].map((label) => (
            <StyledGridItem size={{ xs: 12, md: 3 }} key={label}>
              <CardContent>
                <Typography variant="subtitle1" color="#323232">
                  {label}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="#323232"
                >
                  0,00 €
                </Typography>
                <Typography variant="subtitle2" color="#A3A3A0">
                  VAT 22% included
                </Typography>
              </CardContent>
            </StyledGridItem>
          ))}
        </StyledGrid>
      </StyledCard>
    </StyledContainer>
  );
};

export default InfoOverview;
