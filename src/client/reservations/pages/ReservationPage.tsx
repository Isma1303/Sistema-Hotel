import {
  Box,
  CssBaseline,
  Typography,
  Container,
  Divider,
  Button,
} from "@mui/material";
import FlightDatePicker from "../components/ReservationDatePicker";
import ReservationDataField from "../components/ReservationDataField";
import { useState } from "react";
import { Dayjs } from "dayjs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Headet";

function ReservationPage() {
  const [outboundDate, setOutboundDate] = useState<Dayjs | null>(null);
  const [inboundDate, setInboundDate] = useState<Dayjs | null>(null);

  return (
    <>
      <Header />
      <CssBaseline />
      <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Reserva de Hotel
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ mb: 4 }}>
            <FlightDatePicker
              outboundDate={outboundDate}
              inboundDate={inboundDate}
              setOutboundDate={setOutboundDate}
              setInboundDate={setInboundDate}
            />
          </Box>

          <ReservationDataField
            arrivalDate={outboundDate}
            departureDate={inboundDate}
          />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default ReservationPage;
