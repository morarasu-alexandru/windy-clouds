import React, { useCallback, useContext } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import ModalCustom from "../modalCustom/modalCustom";
import { GameContext } from "../../context/gameContext";
import style from "./startModal.module.scss";

const StartModal = ({ inputRef }) => {
  const { handleStartGame, isStartModalOpen } = useContext(GameContext);

  const onHandleStart = useCallback(() => {
    handleStartGame();
    setTimeout(() => {
      inputRef.current.focus();
    });
  }, [handleStartGame, inputRef]);

  return (
    <ModalCustom isOpen={isStartModalOpen}>
      <CardContent classes={{ root: style.cardContent }}>
        <Typography
          classes={{ root: style.cardTitle }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Windy clouds game
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align={"center"}
          classes={{
            root: style.text,
          }}
        >
          Type the text from the clouds and hit enter.
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align={"center"}
          classes={{
            root: style.text,
          }}
        >
          You can change the speed of the clouds with up and down arrows. You
          win extra points for clouds that have increased speed.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={onHandleStart}
          variant={"contained"}
          classes={{
            root: style.button,
          }}
        >
          Start
        </Button>
      </CardActions>
    </ModalCustom>
  );
};

export default StartModal;
