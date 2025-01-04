'use client';  // This tells Next.js this component should be a Client Component

import { useState } from 'react';

const triviaQuestions = [
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Tesla", "Curie"], answer: "Einstein" },
];

export default function Trivia() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === triviaQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < triviaQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Game Over! Your score is: ${score}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 to-blue-500 text-black p-6">
      <div className="max-w-lg w-full text-center bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">Trivia Quiz Game</h1>
        <p className="text-xl mb-4">Score: <span className="font-semibold">{score}</span></p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">{triviaQuestions[currentQuestionIndex].question}</h2>
          <div className="flex flex-col space-y-4">
            {triviaQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        {currentQuestionIndex === triviaQuestions.length - 1 && (
          <p className="text-lg font-semibold mt-6 text-purple-300">Click a button to end the game!</p>
        )}
      </div>
    </div>
  );
}
