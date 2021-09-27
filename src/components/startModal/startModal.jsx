import React, { useCallback, useContext } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import ModalCustom from "../modalCustom/modalCustom";
import { GameContext } from "../../context/gameContext";

const StartModal = () => {
  const { handleStartGame, isStartModalOpen } = useContext(GameContext);

  return (
    <ModalCustom isOpen={isStartModalOpen}>
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
          <Button
            onClick={handleStartGame}
            variant={"contained"}
            color="primary"
          >
            Start
          </Button>
        </CardActions>
      </>
    </ModalCustom>
  );
};

export default StartModal;
