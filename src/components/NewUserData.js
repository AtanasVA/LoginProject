import React, { useState } from "react";
import styles from "./NewUserData.module.css";
import Container from "./UI/Container";
import Button from "./UI/Button";

const NewUserData = ({ getObjData }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const logUsername = (event) => {
    setUsername(event.target.value);
  };
  const logAge = (event) => {
    setAge(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0 || +age < 1) {
      return alert("Incorrect entry");
    }

    getObjData(username, age);
    setUsername("");
    setAge("");
  };
  return (
    <>
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

        <Button className={styles.submit} type="button" onClick={submitData}>
          Add user
        </Button>
      </Container>
    </>
  );
};

export default NewUserData;
