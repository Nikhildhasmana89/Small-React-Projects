import React, { useEffect, useState } from "react";

function App() {
  const [move, setmove] = useState(Array(9).fill(""));
  const [input, setinput] = useState(false);
  const [result, setresult] = useState("");

  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const gamelogic = (index) => {
    if (move[index] !== "") return;

    const newmove = [...move];
    newmove[index] = input ? "X" : "O";
    setmove(newmove);
    setinput(!input);

    const winner = checkwinner(newmove);
    if (winner) {
      setresult(winner + " wins! ");
    }
  };

  const checkwinner = (move) => {
    let winner = null;

    winningCombinations.forEach((combo) => {
      let a = combo[0] - 1;
      let b = combo[1] - 1;
      let c = combo[2] - 1;

      if (move[a] !== "" && move[a] === move[b] && move[a] === move[c]) {
        winner = move[a];
      }
    });

    return winner;
  };

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 text-center my-8">
        Simple Tic-Tac-Toe Game
      </h1>
      <div className="grid grid-cols-3 gap-4 w-48 mx-auto mt-10">
        <button
          onClick={() => gamelogic(0)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[0]}
        </button>
        <button
          onClick={() => gamelogic(1)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[1]}
        </button>
        <button
          onClick={() => gamelogic(2)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[2]}
        </button>

        <button
          onClick={() => gamelogic(3)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[3]}
        </button>
        <button
          onClick={() => gamelogic(4)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[4]}
        </button>
        <button
          onClick={() => gamelogic(5)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[5]}
        </button>

        <button
          onClick={() => gamelogic(6)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[6]}
        </button>
        <button
          onClick={() => gamelogic(7)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[7]}
        </button>
        <button
          onClick={() => gamelogic(8)}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        >
          {move[8]}
        </button>
      </div>
      <div className="text-center mb-4 text-2xl font-bold text-green-700">
        {result}
      </div>
    </>
  );
}

export default App;
