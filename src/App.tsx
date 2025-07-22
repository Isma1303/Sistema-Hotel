import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./client/auth/pages/RegisterPage";
import LoginPage from "./client/auth/pages/LoginPage";
import ProfilePage from "./client/auth/pages/ProfilePage";
import RoomDetailPage from "./client/rooms/pages/RoomDetail";
import ReservationPage from "./client/reservations/pages/ReservationPage";
import ReservationSumary from "./client/reservations/pages/ReservationSumary";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/detail/:id" element={<RoomDetailPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/reservation/sumary" element={<ReservationSumary />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
