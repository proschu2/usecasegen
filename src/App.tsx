import React, { useEffect, useState } from "react";
import "./App.css";
import Generator from "./Generator";
import { Combination, getRandomElement } from "./combinations";

function App() {
  const [c, setC] = useState<Combination>();

  const handleClick = () => {
    setC(getRandomElement(c) as Combination);
  };
  const handleEnter = (event: any) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      handleClick();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEnter);
    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  });

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="container">
      {c && <Generator handleClick={handleClick} combination={c} />}
    </div>
  );
}

export default App;
