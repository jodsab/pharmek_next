import { useAppStore } from "@/store/useAuthStore";
import { supabase } from "@/lib/supabase"; // Asegúrate de importar correctamente tu instancia

export const useAuthSession = () => {
  const setUser = useAppStore((state) => state.setUser);

  // 🟢 LOGIN
  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      return { error };
    }

    if (data?.session?.user) {
      setUser(data.session.user);
    }

    return { data };
  };

  // 🔴 LOGOUT
  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout error:", error.message);
      return { error };
    }

    setUser(null);
    return { success: true };
  };

  // 🟡 REGISTER
  const register = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Register error:", error.message);
      return { error };
    }

    // No se inicia sesión automáticamente si Supabase tiene activado el email de confirmación
    if (data?.user) {
      setUser(data.user);
    }

    return { data };
  };

  return {
    login,
    logout,
    register,
  };
};
