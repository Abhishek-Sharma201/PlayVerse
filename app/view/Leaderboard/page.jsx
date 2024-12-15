"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

// Sample player data with updated image paths
const topPlayers = [
  {
    rank: 2,
    username: "ShadowSlayer",
    points: 5000,
    avatar: "/images/allstarshine.jpeg",
    winRate: "68%",
    totalGames: 150,
  },
  {
    rank: 1,
    username: "KissaVGN",
    points: 10000,
    avatar: "/images/first.png",
    winRate: "75%",
    totalGames: 200,
  },
  {
    rank: 3,
    username: "UltraWave",
    points: 2500,
    avatar: "/images/powerup.png",
    winRate: "62%",
    totalGames: 120,
  },
];

const otherPlayers = [
  {
    rank: 4,
    username: "Player4",
    points: 2000,
    avatar: "/images/sam81.jpeg",
    winRate: "60%",
    totalGames: 100,
  },
  {
    rank: 5,
    username: "Player5",
    points: 1500,
    avatar: "/images/ninjago.png",
    winRate: "55%",
    totalGames: 90,
  },
];

function Leaderboard() {
  const [timePeriod, setTimePeriod] = useState("weekly");

  return (
    <div className="min-w-[170vh] flex items-center justify-center bg-slate-900">
      <main className="w-full max-w-6xl p-7 py-12 bg-slate-800/50 rounded-md shadow-md min-h-[100vh]">
        <h1 className="mb-6 text-3xl font-bold text-white text-center animate-pulse">
          Leaderboard
        </h1>

        {/* Search and Time Period selection */}
        <div className="mb-6 flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search players"
              className="pl-8 text-white hover:ring-2 hover:ring-purple-400 transition-all"
            />
          </div>

          <select
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="bg-slate-700 text-white p-2 rounded-md shadow-md hover:bg-slate-600 transition-all"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Player Avatars */}
        <div className="mb-8 flex items-end justify-center gap-4">
          {topPlayers.map((player, index) => (
            <div
              key={player.rank}
              className={`relative w-[200px] ${
                index === 1 ? "translate-y-0 scale-110" : index === 0 ? "translate-y-4 scale-105" : "translate-y-8 scale-100"
              } bg-slate-800/50 text-white p-4 rounded-md transition-transform duration-300 hover:scale-125 shadow-neon`}
            >
              {index === 1 && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-bounce">
                  <div className="p-2 text-2xl">👑</div>
                </div>
              )}
              <Avatar className="h-16 w-16">
                <AvatarImage src={player.avatar} alt={`${player.username} Avatar`} />
                <AvatarFallback>{player.rank}</AvatarFallback>
              </Avatar>
              <span className="mt-2 font-semibold">{player.username}</span>
              <div className="mt-1 text-sm text-slate-400">{player.points} points</div>
              <div className="mt-2 text-xl font-bold text-yellow-500">
                {player.points.toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-slate-400">Win Rate: {player.winRate}</div>
            </div>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="mt-12 bg-slate-800/50 p-4 rounded-md shadow-md hover:shadow-neon transition-shadow duration-300">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400">#</th>
                <th className="text-left text-slate-400">Player</th>
                <th className="text-right text-slate-400">Points</th>
                <th className="text-right text-slate-400">Win Rate</th>
                <th className="text-right text-slate-400">Total Games</th>
              </tr>
            </thead>
            <tbody>
              {otherPlayers.map((player) => (
                <tr
                  key={player.rank}
                  className="hover:bg-slate-800/50 transition-all hover:scale-105 hover:shadow-neon"
                >
                  <td className="text-slate-400">{player.rank}</td>
                  <td className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={player.avatar} alt={`${player.username} Avatar`} />
                      <AvatarFallback>{player.rank}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-slate-200">{player.username}</span>
                  </td>
                  <td className="text-right text-yellow-500">{player.points.toLocaleString()}</td>
                  <td className="text-right text-slate-200">{player.winRate}</td>
                  <td className="text-right text-slate-200">{player.totalGames}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Leaderboard;
