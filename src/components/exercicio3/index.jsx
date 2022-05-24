import "./ex3.css";
import Button from "./Button";

const clickHandler = (event) => {
  alert("You click on Button " + event.target.id);
};

function Exercicio3() {
  return (
    <>
      <h1 className="title">Exercicio3</h1>
      <div className="alert-button">
        <Button id="1" onClick={clickHandler} className="alert-button__btn">
          Button 1
        </Button>
        <Button id="2" onClick={clickHandler} className="alert-button__btn">
          Button 2
        </Button>
        <Button id="2" onClick={clickHandler} className="alert-button__btn">
          Button 2
        </Button>
      </div>
    </>
  );
}

export default Exercicio3;
