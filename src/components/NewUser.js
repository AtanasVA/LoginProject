import React from "react";
import styles from "./NewUser.module.css";

const NewUser = () => {
  return (
    <div className={styles.containter}>
      <label className={styles.username} for="username">
        Username
      </label>
      <input
        className={styles["username-field"]}
        type="text"
        id="username"
      ></input>
      <label className={styles.age} for="age">
        Age (Years)
      </label>
      <input className={styles["age-field"]} type="number" id="age"></input>

      <input className={styles.submit} type="button" value="Add user"></input>
    </div>
  );
};

export default NewUser;
