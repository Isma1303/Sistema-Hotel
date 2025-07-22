import axios from "axios";
import type { RoomsContextType, Room } from "../interface/room.interface";

const BASE_URL = "http://localhost:3000/api";
export const getRooms = async (): Promise<Room[]> => {
  try {
    const response = await axios.get<RoomsContextType>(`${BASE_URL}/rooms`);
    return response.data.rooms;
  } catch (error) {
    console.error("Error al obtener habitaciones:", error);
    throw error;
  }
};

export const getRoomDetail = async (id: string): Promise<Room> => {
  const response = await axios.get(`${BASE_URL}/room/${id}`);
  const data = response.data;
  if (data && data.room) {
    return data.room as Room;
  } else if (data && data.data) {
    return data.data as Room;
  }
  throw new Error("Formato de datos de habitación inesperado.");
};
