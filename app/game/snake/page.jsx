// pages/snake/page.jsx

'use client';  // This tells Next.js this component should be a Client Component

import { useState, useEffect } from 'react';

const initialState = {
  snake: [{ x: 10, y: 10 }],
  direction: 'RIGHT',
  food: { x: 5, y: 5 },
  gameOver: false
};

export default function SnakeGame() {
  const [state, setState] = useState(initialState);

  const resetGame = () => {
    setState(initialState);
  };

  useEffect(() => {
    if (state.gameOver) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setState((prevState) => ({ ...prevState, direction: 'UP' }));
          break;
        case 'ArrowDown':
          setState((prevState) => ({ ...prevState, direction: 'DOWN' }));
          break;
        case 'ArrowLeft':
          setState((prevState) => ({ ...prevState, direction: 'LEFT' }));
          break;
        case 'ArrowRight':
          setState((prevState) => ({ ...prevState, direction: 'RIGHT' }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Slow down snake speed by increasing interval time to 200ms
    const interval = setInterval(() => {
      if (state.gameOver) return;

      const newSnake = [...state.snake];
      const head = { ...newSnake[0] };

      switch (state.direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
        default:
          break;
      }

      newSnake.unshift(head);

      if (head.x === state.food.x && head.y === state.food.y) {
        const newFood = {
          x: Math.floor(Math.random() * 20),
          y: Math.floor(Math.random() * 20)
        };
        setState((prevState) => ({
          ...prevState,
          food: newFood,
          snake: newSnake
        }));
      } else {
        newSnake.pop();
        setState((prevState) => ({
          ...prevState,
          snake: newSnake
        }));
      }

      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || newSnake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)) {
        clearInterval(interval);
        setState((prevState) => ({ ...prevState, gameOver: true }));
      }
    }, 200); // Slower snake speed, 200ms interval

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  }, [state]);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Game Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-green-400">Snake Game</h1>
          {state.gameOver ? (
            <div>
              <p className="text-2xl text-red-500 mb-4">Game Over!</p>
              <p className="text-xl mb-4">Final Score: {state.snake.length - 1}</p>
              <button
                onClick={resetGame}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              <p className="text-xl mb-2">Score: {state.snake.length - 1}</p>
              <div
                className="game-board grid grid-cols-20 gap-1"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(20, 20px)',
                  gridTemplateRows: 'repeat(20, 20px)',
                  gap: '1px'
                }}
              >
                {Array.from({ length: 400 }).map((_, index) => {
                  const x = index % 20;
                  const y = Math.floor(index / 20);
                  const isSnake = state.snake.some((segment) => segment.x === x && segment.y === y);
                  const isFood = state.food.x === x && state.food.y === y;

                  return (
                    <div
                      key={index}
                      className={`w-5 h-5 ${isSnake ? 'bg-green-500' : isFood ? 'bg-red-500' : 'bg-gray-700'}`}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Instructions Section */}
      <div className="w 5 bg-gray-800 p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Game Instructions</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Use the arrow keys to control the snake.</li>
          <li className="mb-2">Eat the red food to grow the snake and increase your score.</li>
          <li className="mb-2">Avoid running into walls or the snake's body.</li>
          <li className="mb-2">When the game is over, click "Retry" to play again.</li>
        </ul>
      </div>
    </div>
  );
}
