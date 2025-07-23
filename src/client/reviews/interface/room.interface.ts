export interface Room {
  id: string;
  name: string;
  type: string;
  description?: string;
  price: string;
  capacity: string;
  images?: string;
  isAvailable: boolean;
  amenities?: string;
}

export interface GetRoomsResponse {
  rooms: Room[];
}
