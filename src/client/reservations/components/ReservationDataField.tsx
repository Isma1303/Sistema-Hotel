import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Dayjs } from "dayjs";

interface Props {
  arrivalDate: Dayjs | null;
  departureDate: Dayjs | null;
}

const ReservationDataField: React.FC<Props> = ({
  arrivalDate,
  departureDate,
}) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Datos de tu reserva
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1">Nombre de habitación</Typography>
            <Typography>Suite Doble Deluxe</Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1">Personas</Typography>
            <Typography>4</Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1">Estado</Typography>
            <CheckCircleIcon color="success" />
          </Grid>

          <Grid item xs={6} sm={6}>
            <Typography variant="subtitle1">Fecha de llegada</Typography>
            <Typography>
              {arrivalDate ? arrivalDate.format("MM/DD/YYYY") : "-"}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Typography variant="subtitle1">Fecha de salida</Typography>
            <Typography>
              {departureDate ? departureDate.format("MM/DD/YYYY") : "-"}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle1">Subtotal</Typography>
            <Typography>Q450.00</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={1} sx={{ p: 2 }}>
        <Stack spacing={1}>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1">Subtotal</Typography>
            <Typography variant="body1">Q450.00</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">Q450.00</Typography>
          </Box>
        </Stack>
        <Button className="bg-amber-950" href="/reservation/sumary">
          Continuar
        </Button>
      </Paper>
    </Box>
  );
};

export default ReservationDataField;
