import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
// import Counter from "./Components/Counter";
// import RenderText from "./Components/RenderText";

function App() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  // useEffect(() => {
  //   setName("Rohit");
  //   console.log("use effect run");
  // }, []);

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <RenderText/> */}

      {/* // Props  */}
      <Card data={{ title: "Card 1", desc: "Card 2 description" }} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      {name}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default App;
