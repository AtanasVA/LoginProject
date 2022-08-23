import React, { useState } from "react";
import RenderUser from "./RenderUser";
import NewUserData from "./NewUserData";

const users = [];

const NewUser = () => {
  const getObjData = (obj) => {
    users.push(obj);
    users.map((userObj) => console.log(userObj));
  };
  return (
    <>
      <NewUserData getObjData={getObjData}></NewUserData>
      <RenderUser usersArray={users}></RenderUser>
    </>
  );
};

export default NewUser;
