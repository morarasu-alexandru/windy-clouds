import React, { useCallback, useContext } from "react";
import ModalCustom from "../modalCustom/modalCustom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { GameContext } from "../../context/gameContext";
import style from "../endModal/endModal.module.scss";

const EndModal = ({ inputRef }) => {
  const { isEndModalOpen, finalPoints, handleStartGame } =
    useContext(GameContext);

  const onHandleStart = useCallback(() => {
    handleStartGame();
    setTimeout(() => {
      inputRef.current.focus();
    });
  }, [handleStartGame, inputRef]);

  return (
    <ModalCustom isOpen={isEndModalOpen}>
      <CardContent classes={{ root: style.cardContent }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          classes={{ root: style.cardTitle }}
        >
          End Game
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          classes={{
            root: style.text,
          }}
        >
          Total number of points: {finalPoints}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          classes={{
            root: style.button,
          }}
          onClick={onHandleStart}
          variant={"contained"}
          color="primary"
        >
          Try again
        </Button>
      </CardActions>
    </ModalCustom>
  );
};

export default EndModal;
