import "./ex5.css";

function Exercicio5() {
  const animalArray = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <>
      <h1 className="title">Exercicio5</h1>
      <ul className="list">
        {animalArray.map((animal) => (
          <li className="list__item">{animal}</li>
        ))}
      </ul>
    </>
  );
}

export default Exercicio5;
