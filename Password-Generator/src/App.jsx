import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [character, setcharacter] = useState(false);
  const [number, setnumber] = useState(false);
  const [password, setpassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (number) str += "1234567890";
    if (character) str += '!@#$%^&*()_+=?><,./":;{}[]';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, character, number]);

  const copybutton = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("Password copied!");
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, number, character, passwordgenerator]);

  return (
    <>
      <div className="text-center my-6">
        <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-lg">
          Password Generator
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Create strong and secure passwords instantly
        </p>
      </div>
      <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md">
        <input
          value={password}
          readOnly
          placeholder="Password"
          type="text"
          className="p-2 border rounded w-full"
        />

        <button
          onClick={() => {
            copybutton();
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Copy
        </button>

        <div>
          <input
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setlength(e.target.value);
            }}
            type="range"
            className="w-full accent-blue-500"
          />
          <div className="text-sm text-gray-600 mt-1">Length: {length}</div>
        </div>

        <label className="flex items-center gap-2">
          <input
            value={character}
            onChange={() => {
              setcharacter((prev) => !prev);
            }}
            type="checkbox"
            className="w-4 h-4 accent-blue-500"
          />
          <span className="text-sm">Include Symbols</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            value={number}
            defaultChecked={number}
            onChange={() => {
              setnumber((prev) => !prev);
            }}
            type="checkbox"
            className="w-4 h-4 accent-blue-500"
          />
          <span className="text-sm">Include Numbers</span>
        </label>
      </div>
    </>
  );
}

export default App;
