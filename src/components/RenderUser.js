import React from "react";
import Container from "./UI/Container";

const RenderUser = (props) => {
  return (
    <Container>
      <ul>
        {props.users.map((userObj) => (
          <li key={userObj.id}>
            {userObj.username} ({userObj.age}) years old
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default RenderUser;
