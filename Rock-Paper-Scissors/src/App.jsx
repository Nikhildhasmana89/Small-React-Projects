import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const choice = ["Rock", "Paper", "scissor"];
  const [playerstate, setplayerstate] = useState(null);
  const [computerstate, setcomputerstate] = useState(null);
  const [resultstate, setresultstate] = useState("");

  const Playerchoice = (choice) => {
     setplayerstate(choice);
  
     
     const computerchoice = choice[Math.floor(Math.random * choice.length)];
     setcomputerstate(random);
     
     if (choice === computerchoice) {
       console.log("Its Draw");
      } else if (
        (choice === "Rock" && computerchoice === "Scissor") ||
        (choice === "Paper" && computerchoice === "Rock") ||
        (choice === "Scissor" && computerchoice === "Paper")
  ) {
    //console.log('You Win');
    resultstate('You Win')
  } else {
    //console.log('You Lose');
    resultstate('You Lose')
    
  }
};
  
  return (
    <>
      <div className="w-full h-screen bg-black">
        <div>
          <h1>Rock-Paper-Scissor Game </h1>
          <button
            onClick={() => playerstate('Rock')}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Rock
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
            Paper
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
            Scissor
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
