import { useState, useEffect } from "react";
import "./index.css";
import Cv from "./Portfolio/cv/cv";
import Home from "./Portfolio/Home/home";
const App = () => {
  const [color, setcolor] = useState(() => {
    const storedcolor = localStorage.getItem("color");
    return (
      storedcolor ||
      "linear-gradient(15deg,rgba(218,34,255,0.6),rgba(151,51,23,0.7))"
    );
  });
  const [text, settext] = useState(() => {
    const storedtext = localStorage.getItem("text");
    return storedtext || "red";
  });
  useEffect(() => {
    document.body.style.background = color;
    localStorage.setItem("color", color);
    document.body.style.color = text;
    localStorage.setItem("text", text);
  }, [color, text]);
  const handle = (e) => {
    e.preventDefault();
    setcolor(
      color ===
        "linear-gradient(15deg,rgba(218,34,255,0.6),rgba(151,51,23,0.7))"
        ? "black"
        : "linear-gradient(15deg,rgba(218,34,255,0.6),rgba(151,51,23,0.7))"
    );
    settext(text === "red" ? "black" : "red");
  };
  return (
    <div>
      <button type="button" onClick={handle}>
        &#9776;
      </button>
      <Home />
        <Cv />
    </div>
  );
};
export default App;
