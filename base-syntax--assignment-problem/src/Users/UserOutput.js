import React from "react";
import "./style.css";

const userOutput = (props) => {
  return (
    <div className="output">
      <p>
        Hi my name is {props.name} and my age is {props.age}
      </p>
      <p>I live in {props.city}</p>
    </div>
  );
};

export default userOutput;
