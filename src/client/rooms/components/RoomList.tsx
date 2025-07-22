import RoomAll from "./RoomCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useRooms } from "../hooks/useRooms";

function RoomsList() {
  const { rooms, loading, error } = useRooms();

  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>
          Cargando habitaciones...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  const availableRooms = rooms.filter((room) => room.isAvailable);

  if (availableRooms.length === 0) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6">
          No hay habitaciones disponibles actualmente.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {rooms.map((room) => (
        <Grid item xs={12} sm={6} md={4} key={room._id}>
          <RoomAll {...room} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RoomsList;
