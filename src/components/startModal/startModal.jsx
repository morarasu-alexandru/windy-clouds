import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import ModalCustom from "../modalCustom/modalCustom";

const StartModal = ({ handleStartGame, isOpen }) => {
  const handleStart = useCallback(() => {
    handleStartGame();
  }, [handleStartGame]);

  return (
    <ModalCustom isOpen={isOpen}>
      <>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Windy clouds game
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Type the text from the clouds and hit enter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You can change the speed of the clouds with up and down arrows.
              You win extra points for clouds that have increased speed.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleStart} variant={"contained"} color="primary">
            Start
          </Button>
        </CardActions>
      </>
    </ModalCustom>
  );
};

export default StartModal;
