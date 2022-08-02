import React from "react";

const RenderText = () => {
  const [name, setName] = React.useState("");
  const [input, setInput] = React.useState("");
  
  function addName() {
    setName(input);
  }

  function delName() {
    setName("");
    setInput("")
  }

  function handleInputChange (e) {
    setInput(e.target.value)
  }

  return (
    <div>
      <p>Hello My name is {name} </p>
      Enter Your Name:{" "}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={addName}>Add Name</button>
      <button onClick={delName}>Del Name</button>
    </div>
  );
};

export default RenderText;
