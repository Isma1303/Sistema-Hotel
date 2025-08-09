import axios from "axios";
import type { Room, RoomsContextType } from "../interface/room.interface";

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

export const addRooms = async (): Promise<Room[]> => {
  try {
    const response = await axios.post(`${BASE_URL}/add/room`);
    return response.data;
  } catch (error) {
    console.error("Error al crear habitacion:", error);
    throw error;
  }
};

export const updateRoom = async (id: number) => {
  try {
    const response = await axios.put(`${BASE_URL}/room/update/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar habitacion:", error);
    throw error;
  }
};
