import React, { useEffect, useState } from "react";

function App() {
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

  const gamelogic = (e) => {
    if (e.target.innerHTML !== "") return;
    if (input === false) {
      setinput((e.target.innerHTML = "O"));
      setinput(true);
    } else {
      setinput((e.target.innerHTML = "X"));
      setinput(false);
    }
  };

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 text-center my-8">
        Simple Tic-Tac-Toe Game
      </h1>
      <div className="grid grid-cols-3 gap-4 w-48 mx-auto mt-10">
        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>
        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>
        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>

        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>
        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>
        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>

        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>
        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>
        <button
          onClick={gamelogic}
          className="w-16 h-16 flex items-center justify-center text-2xl font-bold border border-gray-400 bg-white hover:bg-gray-100 active:bg-gray-300 transition-all rounded-md shadow-sm"
        ></button>
      </div>
    </>
  );
}

export default App;
