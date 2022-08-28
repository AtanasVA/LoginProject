import React, { useState } from "react";
import styles from "./NewUserData.module.css";
import Container from "./UI/Container";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const NewUserData = ({ getObjData }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [validateInput, setValidateInput] = useState();

  const logUsername = (event) => {
    setUsername(event.target.value);
  };
  const logAge = (event) => {
    setAge(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();

    if (username.trim().length === 0) {
      setValidateInput({
        title: "Oops, don't leave the 'Username' field empty",
      });
      return;
    }
    if (age.trim().length === 0) {
      setValidateInput({
        title: "Oops, don't leave the 'Age' field empty",
      });
      return;
    }

    if (+age < 1) {
      setValidateInput({
        title: "Oops, 'Age' must be greater than 0",
      });
      return;
    }

    getObjData(username, age);
    setUsername("");
    setAge("");
  };

  const onConfirm = () => {
    setValidateInput(null);
  };
  return (
    <>
      {validateInput && (
        <ErrorModal error={validateInput} onConfirm={onConfirm} />
      )}
      <Container>
        <label className={styles.username} htmlFor="username">
          Username
        </label>
        <input
          className={styles["username-field"]}
          onChange={logUsername}
          type="text"
          id="username"
          value={username}
        ></input>
        <label className={styles.age} htmlFor="age">
          Age (Years)
        </label>
        <input
          className={styles["age-field"]}
          type="number"
          id="age"
          onChange={logAge}
          value={age}
        ></input>

        <Button type="button" onClick={submitData}>
          Add user
        </Button>
      </Container>
    </>
  );
};

export default NewUserData;
