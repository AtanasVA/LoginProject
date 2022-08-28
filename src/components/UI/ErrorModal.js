import React from "react";
import Button from "./Button";
import Container from "./Container";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.background} onClick={props.onConfirm}>
      <div className={styles.container}>
        <Container>
          <div>
            <h1 className={styles["error-message"]}>{props.error.title}</h1>
          </div>
          <Button onClick={props.onConfirm}>Confirm</Button>
        </Container>
      </div>
    </div>
  );
};

export default ErrorModal;
