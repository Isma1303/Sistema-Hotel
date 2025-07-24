export interface Reservation {
  clien_id: string;
  room_id: string;
  checkIn: Date;
  checkOut: Date;
  status: string;
  total?: number;
  confirmedByClient?: string;
}

export interface ReservationContextType {
  reservation: Reservation[];
  loading: boolean;
  error: string | null;
  fetchReservation: () => Promise<void>;
}
