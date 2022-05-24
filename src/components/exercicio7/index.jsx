import React, { useState } from "react";

import "./ex7.css";

function Exercicio7() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    alert("Hello " + firstName + " " + lastName);
    setFirstName("");
    setLastName("");
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <h1 className="title">Exercicio7</h1>
      <form className="greet" onSubmit={submitHandler}>
        <input
          onChange={firstNameChangeHandler}
          className="greet__input"
          value={firstName}
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={lastNameChangeHandler}
          className="greet__input"
          value={lastName}
          type="text"
          placeholder="Last Name"
        />
        <button className="greet__button" type="submit">
          GREET ME
        </button>
      </form>
    </>
  );
}

export default Exercicio7;
