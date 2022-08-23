import React, { useState } from "react";
import Container from "./UI/Container";
import SingleUserData from "./SingleUserData";

const users = [];

const RenderUser = (props) => {
  users.push(props);

  if (users.length <= 1) {
    return (
      <Container>
        <p>No entries found</p>
      </Container>
    );
  }
  console.log(users);
  return (
    <Container>
      <ul>
        {users.map(({ username, age }) => {
          <SingleUserData username={username} age={age} />;
        })}
      </ul>
    </Container>
  );
};

export default RenderUser;
