export interface Room {
  _id: string;
  name: string;
  type?: string;
  description?: string;
  price: string;
  capacity?: string;
  images: string[];
  isAvailable: boolean;
  amenities?: string;
}

export interface RoomsContextType {
  rooms: Room[];
  loading: boolean;
  error: string | null;
  fetchRooms: () => Promise<void>;
}
