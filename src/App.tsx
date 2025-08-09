import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./client/auth/pages/RegisterPage";
import LoginPage from "./client/auth/pages/LoginPage";
import ProfilePage from "./client/auth/pages/ProfilePage";
import RoomDetailPage from "./client/rooms/pages/RoomDetail";
import ReservationPage from "./client/reservations/pages/ReservationPage";
import ReservationSumary from "./client/reservations/pages/ReservationSumary";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./client/auth/hooks/ProtectedRoutes";
import LoginAuthPage from "./admin/auth/components/LoginAuthForm";
import Dashboard from "./admin/dashboard/pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/room/detail/:id" element={<RoomDetailPage />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/reservation/:id" element={<ReservationPage />} />
        <Route path="/reservation/sumary" element={<ReservationSumary />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* </Route> */}
        <Route path="/user/login" element={<LoginAuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
