import React from "react";
import ModalCustom from "../modalCustom/modalCustom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

const EndModal = ({ isOpen, points, handleStartGame }) => {
  return (
    <ModalCustom isOpen={isOpen}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            End Game
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total number of points: {points}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleStartGame} variant={"contained"} color="primary">
          Try again
        </Button>
      </CardActions>
    </ModalCustom>
  );
};

export default EndModal;