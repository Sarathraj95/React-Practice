import React, { useState } from "react";

function Name() {
  const [name, setName] = useState("Sarathraj");
  const [name1, setName1] = useState("Balaji");

  const handleClick = () => {
    setName("Hello Sarathraj");
    setName1("Hello Balaji");
  };

  return (
    <div>
      <h2>{name}</h2>
      <h2>{name1}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Name;
