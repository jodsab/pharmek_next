import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductsStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
