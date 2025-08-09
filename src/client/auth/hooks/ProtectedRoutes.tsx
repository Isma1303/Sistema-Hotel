import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";

const ProtectedRoute = () => {
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
