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
    let specialchar = '<>,.:;"{}[]+=_-!@#$%^&*()*-';
    let number = "0123456789";
    if (number) str += number;
    if (character) str += specialchar;

    for (let i = 1; i <= length; i++) {
      char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, character, setpassword, number]);

  // useEffect(() => {
  //   passwordgenerator();
  // }, [length, number, character, passwordgenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
           Password Generator
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            placeholder="Your password will appear here"
            className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none"
            readOnly
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
            Copy
          </button>
        </div>

        <div className="space-y-3 mb-4">
          <label className="flex items-center space-x-2">
            <input
            onChange={() => {
              setnumber((prev) => !prev);
            }} 
            type="checkbox" 
            className="w-4 h-4 accent-purple-600" />
            <span className="text-gray-700">Include Numbers</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
             onChange={() => {
              setcharacter((prev) => !prev);
            }} 
            type="checkbox" className="w-4 h-4 accent-purple-600" />
            <span className="text-gray-700">
              Characters
            </span>
          </label>
        </div>

        {/* Password Length with +/- buttons */}
        <div className="mb-6">
          <label className="block font-medium text-gray-700 mb-2">
            Password Length:{" "}
            <span className="font-bold text-purple-600">12</span>
          </label>
          <input
            type="range"
            min="4"
            max="32"
            defaultValue="12"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
