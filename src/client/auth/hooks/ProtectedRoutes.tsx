import type { JSX } from "react";
import { Navigate } from "react-router-dom";

import { useAuthStore } from "./useAuthStore";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
