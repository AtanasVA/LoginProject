import React, { useState } from "react";
import RenderUser from "./RenderUser";
import NewUserData from "./NewUserData";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const getObjData = (obj) => {
    setUsername(obj.username);
    setAge(obj.age);
  };
  return (
    <>
      <NewUserData getObjData={getObjData}></NewUserData>
      <RenderUser username={username} age={age}></RenderUser>
    </>
  );
};

export default NewUser;
