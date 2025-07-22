import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import type { Room } from "../interface/room.interface";

const DEFAULT_IMAGE = "/no-image.png";

function RoomAll({ _id, name, price, description, images }: Room) {
  const img = images?.[0] || DEFAULT_IMAGE;

  const roomLink = _id ? `/room/detail/${_id}` : "#";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={Link} to={roomLink}>
        <CardMedia component="img" height="140" src={img} alt="Room Img" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name || "Sin nombre"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description || "Descripción no disponible"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {price || "Precio no disponible"}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={roomLink}
          disabled={!_id}
        >
          Ver Detalles
        </Button>
      </CardActions>
    </Card>
  );
}

export default RoomAll;
