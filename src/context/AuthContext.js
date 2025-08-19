"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import supabase from "@/libs/supabase";

export function AuthProvider({ children }) {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    // Revisa sesión activa al cargar
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Escucha cambios de sesión
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [setUser]);

  return children;
}
