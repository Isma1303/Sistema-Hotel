import axios from "axios";
import type { Customer } from "../interface/auth.interface";

//TODO const BASE_URL = process.env.BASE_URL

const BASE_URL = "http://localhost:3000/api";

export const registerRequest = async (user: Customer) => {
  const response = await axios.post(`${BASE_URL}/register/client`, user);
  return response;
};
export const loginRequest = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${BASE_URL}/login/client`, credentials);
  return response;
};

export const profileRequest = async (token: string) => {
  const response = await axios.get(`${BASE_URL}/profile/customer`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
