import "./ex4.css";
import React, { useState } from "react";

function Exercicio4() {
  const [cont, setCont] = useState(0);

  const incrementHandler = () => {
    setCont(cont + 1);
  };

  return (
    <>
      <h1 className="title">Exercicio4</h1>
      <div className="cont-button">
        <p className="cont-button__text">
          Button has been clicked: {cont} times
        </p>
        <button onClick={incrementHandler} className="cont-button__btn">
          Click me!
        </button>
      </div>
    </>
  );
}

export default Exercicio4;
