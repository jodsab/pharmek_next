import { create } from "zustand";

export const useAppStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),

  theme: "light",
  setTheme: (theme) => set({ theme }),
}));
