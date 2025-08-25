import React, { useState } from "react";

function App() {
  const [input, setinput] = useState("");

  const ButtonClick = (value) => {
    setinput(input + value);
  };

  const logic = () => {
    try {
      setinput(eval(input).toString());
    } catch {
      setinput("Error");
    }
  };

  const clear = () => {
    setinput("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Simple Calculator</h1>

        <div className="bg-white p-4 rounded-2xl shadow-lg w-72">
          <input
            value={input}
            readOnly
            type="text"
            className="w-full mb-3 p-2 text-right text-lg border rounded-lg bg-gray-50"
          />

          <div className="grid grid-cols-4 gap-2">
            <button onClick={() => ButtonClick("1")} className="btn">
              1
            </button>
            <button onClick={() => ButtonClick("2")} className="btn">
              2
            </button>
            <button onClick={() => ButtonClick("3")} className="btn">
              3
            </button>
            <button onClick={clear} className="btn bg-red-400 text-white">
              C
            </button>

            <button onClick={() => ButtonClick("4")} className="btn">
              4
            </button>
            <button onClick={() => ButtonClick("5")} className="btn">
              5
            </button>
            <button onClick={() => ButtonClick("6")} className="btn">
              6
            </button>
            <button
              onClick={() => ButtonClick("/")}
              className="btn bg-blue-400 text-white"
            >
              /
            </button>

            <button onClick={() => ButtonClick("7")} className="btn">
              7
            </button>
            <button onClick={() => ButtonClick("8")} className="btn">
              8
            </button>
            <button onClick={() => ButtonClick("9")} className="btn">
              9
            </button>
            <button
              onClick={() => ButtonClick("*")}
              className="btn bg-blue-400 text-white"
            >
              *
            </button>

            <button onClick={() => ButtonClick("0")} className="btn col-span-2">
              0
            </button>
            <button
              onClick={() => ButtonClick("-")}
              className="btn bg-blue-400 text-white"
            >
              -
            </button>
            <button
              onClick={() => ButtonClick("+")}
              className="btn bg-blue-400 text-white"
            >
              +
            </button>

            <button
              onClick={logic}
              className="btn bg-green-500 text-white col-span-4"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
