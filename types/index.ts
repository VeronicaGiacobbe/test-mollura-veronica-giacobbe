export type FilterKeys = "category" | "brand" | "status";
export type Status = "Proposed Items" | "Approved" | "Confirmed";
export type StockStatus = "In Stock" | "Available";

export interface ProductCardProps {
  data: Product;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  brand: string;
  status: Status;
  price: string;
  stockStatus: StockStatus;
  configurations: number;
  src: { src: string };
}

export type TabsLabel = "Proposed Items" | "Approved" | "Confirmed";
