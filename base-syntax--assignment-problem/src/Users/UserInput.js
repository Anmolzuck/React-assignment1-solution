import React from "react";

//Creating a component
const userInput = (props) => {
  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={props.click} value={props.name} />
    </div>
  );
};

export default userInput;
