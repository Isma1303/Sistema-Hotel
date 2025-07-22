export interface Review {
  rating: number;
  client_id: string;
  room_id: string;
  comment: string;
}

export interface ReviewContextType {
  review: Review[];
  loading: boolean;
  error: string | null;
  fetchReviews: () => Promise<void>;
}
