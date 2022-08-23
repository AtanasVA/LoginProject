import React, { useState } from "react";

const SingleUserData = ({ username, age }) => {
  const [usernameRender, setUsernameRender] = useState("");
  const [ageRender, setAgeRender] = useState("");

  setUsernameRender(usernameRender);
  setAgeRender(ageRender);

  console.log(usernameRender, ageRender);
  return (
    <p>
      {usernameRender}
      {ageRender}
    </p>
  );
};

export default SingleUserData;
