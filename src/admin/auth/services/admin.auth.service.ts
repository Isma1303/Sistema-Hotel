import axios from "axios";
import type { User } from "../interface/auth.interface";

const BASE_URL = "http://localhost:3000/api";

export const loginRequest = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response;
};

export const registerRequest = async (user: User) => {
  const response = await axios.post(`${BASE_URL}/register`, user);
  return response;
};

export const logout = async () => {
  const response = await axios.post(`${BASE_URL}/logout`);
  return response;
};
