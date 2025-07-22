import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getRooms } from "../services/rooms.service";
import type { RoomsContextType, Room } from "../interface/room.interface";

interface RoomsProviderProps {
  children: ReactNode;
}
const RoomsContext = createContext<RoomsContextType | undefined>(undefined);

export function useRooms() {
  const context = useContext(RoomsContext);
  if (!context) throw new Error("useRooms debe usarse dentro de RoomsProvider");
  return context;
}
export function RoomsProvider({ children }: RoomsProviderProps) {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRooms = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRooms();
      setRooms(data);
    } catch (err) {
      setError("Error al cargar habitaciones");
      setRooms([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  return (
    <RoomsContext.Provider value={{ rooms, loading, error, fetchRooms }}>
      {children}
    </RoomsContext.Provider>
  );
}
