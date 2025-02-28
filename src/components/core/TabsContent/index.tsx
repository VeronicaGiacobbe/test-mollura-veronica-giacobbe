"use client";

import MultipleSelectCheckmarks from "@/components/ui/MultipleSelect";
import { GridView, LayersOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid2,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { useFilters } from "../../../../hooks/useFilters";
import { initialProducts } from "../../../../mock/products";
import type { FilterKeys, TabsLabel } from "../../../../types";
import ProductCard from "../../ui/ProductCard";
import { StyledAppBar, StyledBox, StyledContainer } from "./TabsContent.styles";

const categories = ["Proposed Items", "Approved", "Confirmed"];

const fields: FilterKeys[] = ["category", "brand"];

const TabsContent = () => {
  const [activeTab, setActiveTab] = useState<TabsLabel>("Proposed Items");
  const { filters, handleFilterChange, clearFilters } = useFilters({
    category: [],
    brand: [],
    status: [],
  });
  const [selectedValues, setSelectedValues] = useState<
    Record<FilterKeys, string[]>
  >({
    category: [],
    brand: [],
    status: [],
  });

  const products = useMemo(
    () => initialProducts.filter((product) => product.status === activeTab),
    [activeTab]
  );

  const filteredProducts = useMemo(() => {
    if (fields.every((field) => filters[field].length === 0)) {
      return products;
    }

    return products.filter((product) =>
      fields.every(
        (field) =>
          filters[field].length === 0 || filters[field].includes(product[field])
      )
    );
  }, [products, filters]);

  const handleChangeTab = (_: React.SyntheticEvent, value: TabsLabel) => {
    setActiveTab(value);
    handleClearFilters();
    handleFilterChange("status", value);
  };

  const handleMultiSelectChange = (field: FilterKeys, value: string[]) => {
    handleFilterChange(field, value);
    setSelectedValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleClearFilters = () => {
    clearFilters();
    setSelectedValues({
      category: [],
      brand: [],
      status: [],
    });
  };

  return (
    <StyledContainer maxWidth={false}>
      <StyledAppBar position="static">
        <StyledBox>
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": { color: "#A3A3A0" },
              "& .Mui-selected": { color: "#323232!important" },
              "& .MuiTabs-indicator": { backgroundColor: "#323232" },
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </StyledBox>
      </StyledAppBar>

      <Container
        maxWidth={false}
        sx={{
          paddingX: "2.5rem!important",
          paddingY: "1rem!important",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb="3rem"
        >
          <Typography variant="body2" color="#323232">
            {filteredProducts.length} items
          </Typography>
          <Box display="flex" gap="0.5rem" alignItems="center">
            <GridView
              sx={{ height: "1.25rem", width: "1.25rem", color: "#323232" }}
            />
            <LayersOutlined
              sx={{ height: "1.25rem", width: "1.25rem", color: "#A3A3A0" }}
            />

            {fields.map((field) => (
              <MultipleSelectCheckmarks
                key={field}
                label={field}
                options={Array.from(new Set(products.map((p) => p[field])))}
                selectedValues={selectedValues[field]}
                onChange={(value) => handleMultiSelectChange(field, value)}
                clearFilters={handleClearFilters}
              />
            ))}
          </Box>
        </Box>

        <Grid2 container spacing={2} mt={2}>
          {filteredProducts.map((product) => (
            <Grid2 size={{ md: 4, lg: 3 }} key={product.id}>
              <ProductCard data={product} />
            </Grid2>
          ))}
        </Grid2>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#F8F8F8"
          p="2.5rem 1.5rem"
          borderRadius={2}
          mt="4rem"
          height="6.25rem"
        >
          <Box display="flex" flexDirection="column">
            <Typography color="#323232">Featured Products</Typography>
            <Typography color="#323232">
              {filteredProducts.length} items
            </Typography>
          </Box>
          <Button size="medium" variant="contained">
            Share with client
          </Button>
        </Box>
      </Container>
    </StyledContainer>
  );
};

export default TabsContent;
