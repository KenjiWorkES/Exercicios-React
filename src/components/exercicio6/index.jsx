import Item from "./Item";
import "./ex6.css";

function Exercicio6() {
  const animalArray = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <>
      <h1 className="title">Exercicio6</h1>
      <ul className="list">
        {animalArray.map((animal) => (
          <Item>{animal}</Item>
        ))}
      </ul>
    </>
  );
}

export default Exercicio6;
