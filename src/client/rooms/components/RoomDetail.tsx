import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import type { Room } from "../interface/room.interface";
import { useEffect, useState } from "react";
import { getRoomDetail as fetchRoom } from "../services/rooms.service";
import { useParams } from "react-router-dom";

const DEFAULT_IMAGE = "/no-image.png";

function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>("");

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
        const data = await fetchRoom(id);
        setRoom(data);
        setCurrentImageUrl(data.images?.[0] || DEFAULT_IMAGE);
      } catch (err) {
        setError("No se pudo cargar la habitación.");
        setCurrentImageUrl(DEFAULT_IMAGE);
      } finally {
        setLoading(false);
      }
    };
    getRoom();
  }, [id]);

  const handleImageError = () => {
    setCurrentImageUrl(DEFAULT_IMAGE);
  };

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

  const nombre = room.name || "Sin Nombre";
  const precio = room.price || "Sin Precio";
  const descripcion = room.description || "Sin Descripcion";
  const amenidades = room.amenities || "Sin Amenidades";
  const tipo = room.type || "Sin Datos";
  const disponibilidad = room.isAvailable || "Sin Datos";

  return (
    <>
      <Card sx={{ maxWidth: 800, margin: "auto" }}>
        <CardMedia
          component="img"
          height="300"
          src={currentImageUrl}
          alt="Room image"
          onError={handleImageError}
        />
        <CardContent>
          <Typography variant="h3">{nombre}</Typography>
          <Typography variant="h5" mt={2}>
            Q{precio}
          </Typography>
          <Typography variant="body1" mt={2}>
            {descripcion}
          </Typography>
          <Typography variant="body1" mt={2}>
            {amenidades}
          </Typography>
          <Typography variant="body1" mt={2}>
            {tipo}
          </Typography>
          <Typography variant="body1" mt={2}>
            {disponibilidad}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
export default RoomDetail;
