import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StartModal = ({ handleStartGame, isGameStarted, handleResetGame }) => {
  const handleStart = useCallback(() => {
    handleStartGame();
  }, [handleStartGame]);

  return (
    <Modal
      open={!isGameStarted}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Windy clouds game
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={handleStart} variant={"contained"} color="primary">
              Start
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
};

export default StartModal;
