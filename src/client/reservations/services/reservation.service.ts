import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const reservationRequest = async () => {
  const response = await axios.post(`${BASE_URL}/reservation`);
  return response;
};
