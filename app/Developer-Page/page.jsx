"use client";

import React, { useState } from "react";

const DeveloperPage = () => {
  // Initial game list state
  const [games, setGames] = useState([
    {
      id: 1,
      title: "The finals one night down",
      image: "/images/games/coverundefined-1694770506607.avif",
      date: "Oct 29 2024 05:30 pm",
      spotsLeft: "12 spots left",
    },
    {
      id: 2,
      title: "Warzone Season6 Game Night",
      image: "/images/games/download (1).jpeg",
      date: "Oct 30 2024 08:30 pm",
      spotsLeft: "80 spots left",
    },
    {
      id: 3,
      title: "Call of Duty MW2 Multiplayer",
      image: "/images/games/download (2).jpeg",
      date: "Oct 31 2024 03:30 pm",
      spotsLeft: "7 spots left",
    },
    {
      id: 4,
      title: "FC 24 Game Day",
      image: "/images/games/download (3).jpeg",
      date: "Oct 31 2024 04:30 pm",
      spotsLeft: "9 spots left",
    },
    {
      id: 5,
      title: "Roblox-Party Night",
      image: "/images/games/download (4).jpeg",
      date: "Oct 31 2024 06:30 pm",
      spotsLeft: "4 spots left",
    },
    {
      id: 6,
      title: "Apex Legend Night of Glory",
      image: "/images/games/download.jpeg",
      date: "Nov 14 2024 03:30 pm",
      spotsLeft: "18 spots left",
    },
  ]);

  const [editTitle, setEditTitle] = useState(""); // Temporary input for updates
  const [editId, setEditId] = useState(null); // Track which game to update
  const [newGame, setNewGame] = useState({
    title: "",
    image: "",
    date: "",
    spotsLeft: "",
  });

  const [showAddGameForm, setShowAddGameForm] = useState(false); // Control form visibility

  // Function to delete a game by ID
  const deleteGame = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  // Function to enable editing a specific game
  const enableEdit = (id, currentTitle) => {
    setEditId(id);
    setEditTitle(currentTitle);
  };

  // Function to update a game's title
  const updateGame = () => {
    setGames(
      games.map((game) =>
        game.id === editId ? { ...game, title: editTitle } : game
      )
    );
    setEditId(null);
    setEditTitle("");
  };

  // Function to handle adding a new game
  const handleAddGame = (e) => {
    e.preventDefault();

    // Create a new game with a unique ID
    const newGameData = {
      id: games.length + 1,
      title: newGame.title,
      image: newGame.image,
      date: newGame.date,
      spotsLeft: newGame.spotsLeft,
    };

    // Add new game to the list
    setGames([...games, newGameData]);

    // Reset form state
    setNewGame({ title: "", image: "", date: "", spotsLeft: "" });
    setShowAddGameForm(false); // Close form after submission
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-gray-100">
      <div className="container mx-auto p-4">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center neon-box rounded-md p-6 shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out bg-opacity-70 bg-darkBlue">
          <div className="flex items-center space-x-4">
            <img
              src="/images/OIP (1).jpeg"
              alt="Profile Avatar"
              className="w-16 h-16 rounded-full ring-4 ring-neon ring-opacity-60 transition-all duration-300 ease-in-out hover:ring-8"
            />
            <div>
              <h1 className="text-3xl font-bold neon-text">Ron Stoppable</h1>
              <p className="text-gray-400">GameHost - Loved gaming since 6</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={() => setShowAddGameForm(!showAddGameForm)}
              className="px-4 py-2 bg-neon text-darkBg rounded hover:scale-110 transition-all duration-300"
            >
              {showAddGameForm ? "Cancel" : "Add Game"}
            </button>
          </div>
        </div>

        {/* Add Game Form */}
        {showAddGameForm && (
          <div className="mt-6 p-6 bg-gray-800 rounded-lg neon-box shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out">
            <h3 className="text-xl font-bold mb-2 text-neon">Add a New Game</h3>
            <form onSubmit={handleAddGame}>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 text-white mb-2 focus:outline-none hover:ring-2 hover:ring-neon"
                placeholder="Game Title"
                value={newGame.title}
                onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
                required
              />
              <input
                type="url"
                className="w-full p-2 rounded bg-gray-700 text-white mb-2 focus:outline-none hover:ring-2 hover:ring-neon"
                placeholder="Image URL"
                value={newGame.image}
                onChange={(e) => setNewGame({ ...newGame, image: e.target.value })}
                required
              />
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 text-white mb-2 focus:outline-none hover:ring-2 hover:ring-neon"
                placeholder="Date"
                value={newGame.date}
                onChange={(e) => setNewGame({ ...newGame, date: e.target.value })}
                required
              />
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 text-white mb-2 focus:outline-none hover:ring-2 hover:ring-neon"
                placeholder="Spots Left"
                value={newGame.spotsLeft}
                onChange={(e) => setNewGame({ ...newGame, spotsLeft: e.target.value })}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-neon text-darkBg rounded hover:scale-110 transition-all duration-300"
              >
                Add Game
              </button>
            </form>
          </div>
        )}

        {/* Update Section */}
        {editId && (
          <div className="mt-6 p-6 bg-gray-800 rounded-lg neon-box shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out">
            <h3 className="text-xl font-bold mb-2 text-neon">Update Game</h3>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white mb-2 focus:outline-none hover:ring-2 hover:ring-neon"
              placeholder="Enter new game title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <button
              onClick={updateGame}
              className="px-4 py-2 bg-neon text-darkBg rounded hover:scale-110 transition-all duration-300"
            >
              Update
            </button>
          </div>
        )}

        {/* Game Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 p-4 rounded-lg shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out neon-box bg-opacity-80"
            >
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full rounded-md shadow-lg"
                />
                <span className="absolute top-2 left-2 bg-black bg-opacity-60 text-sm px-2 py-1 rounded text-gray-300">
                  {game.spotsLeft}
                </span>
              </div>
              <h3 className="text-xl font-semibold mt-4 text-neon">{game.title}</h3>
              <p className="text-sm text-gray-400">{game.date}</p>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => enableEdit(game.id, game.title)}
                  className="px-2 py-1 bg-blue-500 rounded hover:scale-110 transition-all duration-300"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteGame(game.id)}
                  className="px-2 py-1 bg-red-500 rounded hover:scale-110 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
