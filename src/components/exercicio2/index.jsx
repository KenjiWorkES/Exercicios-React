import "./ex2.css";

const clickHandler = () => {
  alert("Clicked!");
};

function Exercicio2() {
  return (
    <>
      <h1 className="title">Exercicio2</h1>
      <div className="alert-button">
        <button onClick={clickHandler} className="alert-button__btn">
          Click Me!
        </button>
      </div>
    </>
  );
}

export default Exercicio2;
