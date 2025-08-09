export interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  phone: number;
  isActive: boolean;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  error: string | null;
  loading: boolean;
  singUp: (data: User) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
