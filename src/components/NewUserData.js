import React, { useState } from "react";
import styles from "./NewUserData.module.css";
import Container from "./UI/Container";

const NewUserData = (props) => {
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
    const userData = {
      username: username,
      age: age,
    };

    props.getObjData(userData);
    setUsername("");
    setAge("");
  };
  return (
    <Container>
      <label className={styles.username} for="username">
        Username
      </label>
      <input
        className={styles["username-field"]}
        onChange={logUsername}
        type="text"
        id="username"
        value={username}
      ></input>
      <label className={styles.age} for="age">
        Age (Years)
      </label>
      <input
        className={styles["age-field"]}
        type="number"
        id="age"
        onChange={logAge}
        value={age}
      ></input>

      <input
        className={styles.submit}
        type="button"
        value="Add user"
        onClick={submitData}
      ></input>
    </Container>
  );
};

export default NewUserData;
