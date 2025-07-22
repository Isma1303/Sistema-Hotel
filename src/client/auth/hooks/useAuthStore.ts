import { create } from "zustand";
import { loginRequest, registerRequest } from "../services/auth";
import type { AuthContextType, Customer } from "../interface/auth.interface";

export const useAuthStore = create<AuthContextType>()((set) => ({
  token: null as string | null,
  user: null as Customer | null,
  loading: false,
  error: null as string | null,

  login: async (email: string, password: string): Promise<void> => {
    set({ loading: true, error: null });
    try {
      const response = await loginRequest({ email, password });
      const { token } = response.data;
      const payload = JSON.parse(atob(token.split(".")[1]));

      set({ token, user: payload, loading: false });
      localStorage.setItem("auth_token", token);
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Login fallido",
        loading: false,
      });
    }
  },

  singUp: async (user: Customer): Promise<void> => {
    set({ loading: true, error: null });
    try {
      const response = await registerRequest(user);
      console.log("nuevo usuario: ", response);
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Login fallido",
        loading: false,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("auth_token");
    set({ token: null, user: null });
  },

  isAuthenticated: () => !!useAuthStore.getState().token,
}));
