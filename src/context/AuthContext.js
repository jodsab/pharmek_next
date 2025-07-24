"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/useAppStore";
import supabase from "@/lib/supabaseClient";

export function AuthProvider({ children }) {
  const setUser = useAppStore((state) => state.setUser);

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
