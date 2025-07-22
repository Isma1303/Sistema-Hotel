export interface Customer {
  userName: string;
  fullName: string;
  email: string;
  password: string;
  phone: number;
  nationality: string;
  birthDate: Date;
}

export interface AuthContextType {
  user: Customer | null;
  token: string | null;
  error: string | null;
  loading: boolean;
  singUp: (data: Customer) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
