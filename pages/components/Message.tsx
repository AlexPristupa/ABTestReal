/**
 * @description Компонент вывода модального окна с сообщениями web api backend
 */
import React from "react";
import Modal from "@material-ui/core/Modal";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface IMessgeProps {
  open: boolean;
  message?: string;
  successResponse: boolean;
  updateOpen: (rc: boolean) => void;
}

const Message = (props: IMessgeProps) => {
  const classes = useStyles();

  /**
   * @description Вызвать callback для закрытия модалки
   */
  const handleClose = () => {
    props.updateOpen(false);
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      {props.successResponse ? (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong>{props.message}</strong>
        </Alert>
      ) : (
        <Alert severity="error">
          <AlertTitle>Ошибка</AlertTitle>
          <strong>{props.message}</strong>
        </Alert>
      )}
    </Modal>
  );
};

Message.prototype = {
  open: PropTypes.bool,
  successResponse: PropTypes.bool,
  message: PropTypes.string,
  updateOpen: PropTypes.func.isRequired,
};

export default Message;
