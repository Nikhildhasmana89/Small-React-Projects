import { useState } from "react";
import { Jokedata } from "./Components/Api";
import Container from "./Components/Container";

function App() {
  const [input, setinput] = useState(null);

  const randomjoke = async () => {
    const newJoke = await Jokedata();
    setinput(newJoke);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Random Joke Generator
      </h1>

      {input ? (
        <Container
          type={input.type}
          setup={input.setup}
          punchline={input.punchline}
        />
      ) : (
        <p className="text-gray-500 mb-4">Click the button to get a joke!</p>
      )}

      <button
        onClick={randomjoke}
        className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300"
      >
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
