import API from "../api/axios";

// Login
export const login = (email, password) => {
  return API.post("/auth/login", {
    email,
    password,
  });
};

// Register
export const register = (data) => {
  return API.post("/auth/register", data);
};