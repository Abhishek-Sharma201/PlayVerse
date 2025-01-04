"use client";
import { useState, useEffect } from "react";

const ScratchCardGame = () => {
  const [scratched, setScratched] = useState(Array(9).fill(false));
  const [results, setResults] = useState(Array(9).fill(null));
  const [won, setWon] = useState(false);
  const [message, setMessage] = useState("");
  const [bombIndex, setBombIndex] = useState(null); // Store the bomb index

  const numbers = [5, 10, 15, 20, 30, 35];
  const totalCells = 9;

  const initializeGame = () => {
    const randomizedResults = Array(totalCells)
      .fill(null)
      .map(() => numbers[Math.floor(Math.random() * numbers.length)]);

    // Randomly add a bomb to one of the cells
    const bombLocation = Math.floor(Math.random() * totalCells);
    randomizedResults[bombLocation] = "💣";

    setBombIndex(bombLocation); // Store the bomb's location
    setResults(randomizedResults);
    setScratched(Array(totalCells).fill(false));
    setWon(false);
    setMessage("");
  };

  const handleScratch = (index) => {
    if (!scratched[index]) {
      const newScratched = [...scratched];
      newScratched[index] = true;
      setScratched(newScratched);

      // If the user hits the bomb
      if (results[index] === "💣") {
        setMessage("Better luck next time! 💥");
        setWon(false);
        return;
      }

      const revealedItems = results.filter((_, i) => newScratched[i]);
      const countMap = revealedItems.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
      }, {});

      const matchedNumber = Object.keys(countMap).find(
        (key) => countMap[key] >= 3
      );

      if (matchedNumber) {
        setWon(true);
        setMessage(`Congratulations! You won ${matchedNumber} points! 🎉`);
      } else if (newScratched.every((v) => v)) {
        setMessage("Better luck next time! 😢");
      }
    }
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
<div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-500 p-6">
  {/* Left Side: Game Section */}
  <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
    <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">
      Tap & Win!
    </h1>

    {/* Game Grid */}
    <div className="grid grid-cols-3 gap-6 w-[36rem] sm:w-[32rem] md:w-[40rem] lg:w-[44rem] mx-auto p-4 bg-white bg-opacity-10 rounded-2xl shadow-lg backdrop-blur-lg border border-white border-opacity-30">
      {results.map((result, index) => (
        <div
          key={index}
          onClick={() => handleScratch(index)}
          className={`flex items-center justify-center w-24 h-24 rounded-lg cursor-pointer transition-all duration-500 transform hover:scale-105 hover:bg-gray-100 ${
            scratched[index] ? "bg-gray-100 text-gray-800" : "bg-gray-200"
          } shadow-md`}
        >
          {scratched[index] && (
            <span className="text-3xl font-bold animate-fade-in">
              {result === "💣" ? "💣" : result}
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Game Status */}
    {message && (
      <div
        className={`mt-6 text-white font-semibold text-xl px-6 py-3 rounded-lg shadow-md transition-all duration-300 ${
          won ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {message}
      </div>
    )}

    {/* Play Again Button */}
    <button
      className="mt-10 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95"
      onClick={initializeGame}
    >
      Play Again
    </button>
  </div>

  {/* Right Side: Instructions Section */}
  <div className="flex flex-col justify-center w-full lg:w-1/2 bg-white bg-opacity-10 rounded-2xl shadow-lg backdrop-blur-lg border border-white border-opacity-30 p-8 mt-8 lg:mt-0 lg:ml-8 text-white">
    <h2 className="text-3xl font-bold mb-4">How to Play</h2>
    <ul className="text-lg leading-relaxed space-y-4">
      <li>🎯 Tap any square to reveal a number or a bomb.</li>
      <li>🎉 Match 3 of the same numbers to win points.</li>
      <li>💣 If you uncover the bomb, you lose the game!</li>
      <li>🔄 You can restart the game anytime by clicking "Play Again."</li>
      <li>✨ Try to reveal as many squares as possible without hitting the bomb!</li>
    </ul>
    <div className="mt-6 p-4 bg-green-500 text-center text-lg font-semibold rounded-lg shadow-md">
      Tip: Be strategic and avoid the bomb to maximize your chances!
    </div>
  </div>
</div>

  );
};

export default ScratchCardGame;
