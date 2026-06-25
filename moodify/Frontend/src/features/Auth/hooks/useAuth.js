import { login, register, getme, logout } from "../services/auth.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setuser, loading, setloading } = context;

  // 🔐 ONLY SOURCE OF TRUTH = /me
  async function handleGetme() {
    try {
      const data = await getme();
      setuser(data.user);
    } catch (error) {
      setuser(null);
    }
  }

  async function handleLogin({ username, email, password }) {
    setloading(true);

    try {
      await login({ username, email, password });

      // IMPORTANT: do NOT trust login response
      await handleGetme();

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    } finally {
      setloading(false);
    }
  }

  async function handleRegister({ username, email, password }) {
    setloading(true);

    try {
      await register({ username, email, password });

      // IMPORTANT: sync from backend
      await handleGetme();

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    } finally {
      setloading(false);
    }
  }

  async function handleLogout() {
    setloading(true);

    try {
      await logout();
      setuser(null);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    handleGetme();
  }, []);

  return {
    user,
    loading,
    handleGetme,
    handleLogin,
    handleLogout,
    handleRegister,
  };
};