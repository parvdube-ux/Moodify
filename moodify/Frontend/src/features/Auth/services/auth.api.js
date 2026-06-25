import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// REGISTER
export async function register({ email, username, password }) {
  const response = await api.post("/api/auth/register", {
    email,
    username,
    password,
  });
  return response.data;
}

// LOGIN
export async function login({ email, username, password }) {
  const response = await api.post("/api/auth/login", {
    email,
    username,
    password,
  });
  return response.data;
}

// GET ME (FIXED ROUTE)
export async function getme() {
  const response = await api.get("/api/auth/getme"); 
  return response.data;
}

// LOGOUT
export async function logout() {
  const response = await api.post("/api/auth/logout");
  return response.data;
}