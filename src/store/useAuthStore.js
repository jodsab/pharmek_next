import { create } from "zustand";
import supabase from "@/libs/supabase";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),

  logout: async () => {
    try {
      await supabase.auth.signOut();
      set({ user: null });
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  },
}));
