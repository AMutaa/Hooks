import React, { useState, useContext } from "react";
import { UserContext } from "./App";
import DishForm from "./DishForm";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(UserContext);
  console.log("userInfo:", userInfo);

  if (!userInfo.user) return null;

  return (
    <div>
      {isToggled ? (
        <DishForm setToggle={setToggle} />
      ) : (
        <button
          style={{ margin: "20px auto", display: "flex" }}
          onClick={() => setToggle(!isToggled)}
        >
          Open
        </button>
      )}
    </div>
  );
};

export default Toggle;
