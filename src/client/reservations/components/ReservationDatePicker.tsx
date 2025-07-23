import React from "react";
import { Box, Typography, InputAdornment } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Dayjs } from "dayjs";

interface Props {
  outboundDate: Dayjs | null;
  inboundDate: Dayjs | null;
  setOutboundDate: (date: Dayjs | null) => void;
  setInboundDate: (date: Dayjs | null) => void;
}

const FlightDatePicker: React.FC<Props> = ({
  outboundDate,
  inboundDate,
  setOutboundDate,
  setInboundDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 2, borderRadius: 2, backgroundColor: "#fff" }}>
        <Typography variant="subtitle1" gutterBottom>
          Agenda tu Visita
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <DatePicker
            label="Llegada"
            value={outboundDate}
            onChange={setOutboundDate}
            format="MM/DD/YYYY"
            slotProps={{
              textField: {
                fullWidth: true,
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon color="action" />
                    </InputAdornment>
                  ),
                },
                sx: { backgroundColor: "#fafafa", borderRadius: 1 },
              },
            }}
          />
          <DatePicker
            label="Salida"
            value={inboundDate}
            onChange={setInboundDate}
            format="MM/DD/YYYY"
            slotProps={{
              textField: {
                fullWidth: true,
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon color="action" />
                    </InputAdornment>
                  ),
                },
                sx: { backgroundColor: "#fafafa", borderRadius: 1 },
              },
            }}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default FlightDatePicker;
