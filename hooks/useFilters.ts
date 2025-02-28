import { useState } from "react";
import { Status } from "../types";

type FilterKeys = keyof {
  category: string[];
  brand: string[];
  status: Status;
};

export const useFilters = (initialFilters: {
  category: string[];
  brand: string[];
  status: string[];
}) => {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (field: FilterKeys, value: string | string[]) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      brand: [],
      status: [],
    });
  };

  return { filters, handleFilterChange, clearFilters };
};
