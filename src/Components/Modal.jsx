import React, { Fragment, useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import authContext from "../context/authContext";
import ModalInputs from "./ModalInputs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 360, sm: 600 },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const ctx = useContext(authContext);
  const fadeOut = () => {
    ctx.modalStateHandler(false);
  };

  return (
    <Fragment>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ctx.modalState}
        onClose={fadeOut}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={ctx.modalState}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h5"
              sx={{ fontWeight: "700" }}
              component="h2"
            >
              ADD NEW USER
            </Typography>
            <ModalInputs />
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
}
