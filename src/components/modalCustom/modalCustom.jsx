import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import style from "./modalCustom.module.scss";

// const styleBox = {
//   //   // position: "absolute",
//   //   // top: "50%",
//   //   // left: "50%",
//   //   // transform: "translate(-50%, -50%)",
//   //   // width: 400,
//   //   // bgcolor: "background.paper",
//   //   // border: "none",
//   //   // outline: "none",
//   //   // boxShadow: 24,
//   //   // p: 4,
// };

const styleCard = {
  // maxWidth: 345,

  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "none",
  outline: "none",
  boxShadow: 24,
};

const ModalCustom = ({ isOpen, children }) => {
  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      classes={{
        root: style.modalWrapper,
      }}
      BackdropProps={{
        classes: {
          root: style.backdropModal,
        },
      }}
    >
      {/*<Box sx={styleBox}>*/}
      <Card
        sx={styleCard}
        classes={{
          root: style.card,
        }}
      >
        {children}
      </Card>
      {/*</Box>*/}
    </Modal>
  );
};

export default ModalCustom;
