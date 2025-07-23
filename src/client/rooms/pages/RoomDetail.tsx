import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomDetail } from "../services/rooms.service";
import RoomDetail from "../components/RoomDetail";
import { Box, CircularProgress, Typography } from "@mui/material";
import type { Room } from "../interface/room.interface";
import Header from "../../../components/Headet";
import Footer from "../../../components/Footer";

function RoomDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID de habitación inválido.");
      setLoading(false);
      return;
    }

    const getRoom = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getRoomDetail(id);
        setRoom(data);
      } catch (err) {
        setError("No se pudo cargar la habitación.");
        setRoom(null);
      } finally {
        setLoading(false);
      }
    };

    getRoom();
  }, [id]);

  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>
          Cargando habitación...
        </Typography>
      </Box>
    );
  }

  if (error || !room) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography color="error">
          {error || "Habitación no encontrada."}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Header />
      <Box mt={4}>
        <RoomDetail {...room} />
      </Box>
      <Footer />
    </>
  );
}

export default RoomDetailPage;
