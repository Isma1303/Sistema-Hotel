export interface Reservation {
  client: string;
  room_id: string;
  checkIn: Date;
  checkOut: Date;
  status: string;
  total: number;
  confirmedByClient: string;
}
