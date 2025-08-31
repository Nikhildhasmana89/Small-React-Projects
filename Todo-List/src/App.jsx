import React, { useState } from "react";

function App() {
  const [input, setinput] = useState("");
  const [task, settask] = useState([]);

  const AddElement = () => {
    if (input.trim() === "") return; 
    settask([...task, input]);
    setinput("");
  };

  const DeleteElement = (index) => {
    const newtask = [...task];
    newtask.splice(index, 1);
    settask(newtask);
  };

  return (
    <div className="w-full flex flex-col items-center p-6">
      <h1 className="mb-4 text-2xl font-bold text-indigo-700">
        Simple Todo List
      </h1>

      <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white/70 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur">
        <div className="flex items-center gap-2">
          <input
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Write something..."
            type="text"
            className="flex-1 rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
          <button
            onClick={() => {
              AddElement();
            }}
            className="select-none rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition hover:shadow-md active:scale-[0.98] bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Add
          </button>
        </div>

        <ol className="space-y-2">
          {task.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100"
            >
              <span>{task}</span>
              <button
                onClick={() => DeleteElement(index)}
                className="ml-2 rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
