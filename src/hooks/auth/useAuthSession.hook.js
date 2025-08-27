import { useAuthStore } from "@/store/useAuthStore";
import * as authService from "@/services/authService";

export const useAuth = () => {
  const { user, setUser, clearUser } = useAuthStore();

  const register = async (values) => {
    const res = await authService.register(values);

    if (res.user) {
      setUser(res.user);
      return { ok: true, ...res };
    }

    return { ok: false, ...res };
  };

  const login = async ({ email, password }) => {
    const res = await authService.login({ email, password });

    if (res.user) {
      setUser(res.user);
      return { ok: true, ...res };
    }

    return { ok: false, ...res };
  };

  const logout = async () => {
    const res = await authService.logout();
    if (res.ok) clearUser();
    return res;
  };

  return { user, register, login, logout };
};
