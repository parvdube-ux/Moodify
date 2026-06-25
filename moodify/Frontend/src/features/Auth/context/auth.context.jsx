import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await axios.get(
        "https://moodify-3d5t.onrender.com/api/auth/me",
        {
          withCredentials: true,
        }
      );

      setuser(res.data.user);
    } catch (err) {
      setuser(null);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setuser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};