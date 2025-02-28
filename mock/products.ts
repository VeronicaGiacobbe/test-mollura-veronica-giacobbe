import chair1 from "../public/chair1.jpeg";
import chair2 from "../public/chair2.jpeg";
import chair3 from "../public/chair3.jpeg";
import chair4 from "../public/chair4.jpeg";
import lamp from "../public/lamp.jpeg";
import library from "../public/library.jpeg";

import { Product } from "../types";

export const initialProducts: Product[] = [
  {
    id: "1",
    title: "Fat Lounge Chair Gentle 2 0193",
    category: "Armchairs",
    brand: "Tom Dixon",
    status: "Proposed Items",
    src: chair1,
    price: "2586,00",
    configurations: 2,
    stockStatus: "In Stock",
  },

  {
    id: "2",
    title: "Mad Chair Poltroncina - Base Girevole",
    category: "Armchairs",
    brand: "Poliform",
    status: "Proposed Items",
    src: chair2,
    price: "2586,00",
    configurations: 2,
    stockStatus: "Available",
  },
  {
    id: "3",
    title: "Grand Repos & Ottman",
    category: "Armchairs",
    brand: "Tom Dixon",
    status: "Proposed Items",
    src: chair3,
    price: "2586,00",
    configurations: 2,
    stockStatus: "Available",
  },
  {
    id: "4",
    title: "Krossin Sistema a Parete",
    category: "Library",
    brand: "Kriptonite",
    status: "Proposed Items",
    src: library,
    price: "674,00",
    configurations: 2,
    stockStatus: "Available",
  },
  {
    id: "5",
    title: "Snoopy White Lampada da Tavolo",
    category: "Lamp",
    brand: "Flos",
    status: "Approved",
    src: lamp,
    price: "990,00",
    configurations: 2,
    stockStatus: "In Stock",
  },
  {
    id: "6",
    title: "Fat Lounge Chair Gentle 2 0193",
    category: "Armchairs",
    brand: "Tom Dixon",
    status: "Approved",
    src: chair4,
    price: "2586,00",
    configurations: 2,
    stockStatus: "Available",
  },
  {
    id: "7",
    title: "637 Utrecht Blanket Stitch",
    category: "Armchairs",
    brand: "Cassina",
    status: "Confirmed",
    src: chair4,
    price: "3490,20",
    configurations: 2,
    stockStatus: "Available",
  },
];
