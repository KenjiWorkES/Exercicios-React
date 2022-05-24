import "./ex8.css";

function Exercicio8() {
  const jokesData = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <>
      <h1 className="title">Exercicio8</h1>
      <div className="jokes">
        {jokesData.map((joke) => (
          <div id={joke.id} key={joke.id} className="jokes__item">
            <h2 className="jokes__question">{joke.setup}</h2>
            <p className="jokes__answer">{joke.punchline}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Exercicio8;
