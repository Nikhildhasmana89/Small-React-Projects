import { useState } from "react";
import "./App.css";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [playerstate, setplayerstate] = useState(null);
  const [computerstate, setcomputerstate] = useState(null);
  const [resultstate, setresultstate] = useState("");

  const gamedata = (choice) => {
    setplayerstate(choice);

    const computerchoice = choices[Math.floor(Math.random() * choices.length)];
    setcomputerstate(computerchoice);

    if (choice === computerchoice) {
      setresultstate("It's a Draw!");
    } else if (
      (choice === "Rock" && computerchoice === "Scissors") ||
      (choice === "Paper" && computerchoice === "Rock") ||
      (choice === "Scissors" && computerchoice === "Paper")
    ) {
      setresultstate("You Win!");
    } else {
      setresultstate("You Lose!");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-8">Rock-Paper-Scissors</h1>

      <div className="flex gap-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          onClick={() => gamedata("Rock")}
        >
          🪨 Rock
        </button>

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          onClick={() => gamedata("Paper")}
        >
          📄 Paper
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          onClick={() => gamedata("Scissors")}
        >
          ✂️ Scissors
        </button>
      </div>

      <div className="mt-6 text-lg">
        <p>Your choice: {playerstate}</p>
        <p>Computer choice: {computerstate}</p>
        <p className="font-bold">Result: {resultstate}</p>
      </div>
    </div>
  );
}

export default App;
