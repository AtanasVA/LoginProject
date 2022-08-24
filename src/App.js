import React, { useState } from "react";
import NewUserData from "./components/NewUserData";
import RenderUser from "./components/RenderUser";

function App() {
  const [usersData, setUsersData] = useState([]);

  const getObjData = (user, age) => {
    setUsersData((oldUsersData) => {
      return [
        ...oldUsersData,
        { username: user, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <NewUserData getObjData={getObjData}></NewUserData>
      <RenderUser users={usersData}></RenderUser>
    </div>
  );
}

export default App;
