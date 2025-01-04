"use client";

import {
  MoreVertical,
  GamepadIcon as GameController,
  Users,
  ChartNoAxesCombined,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter

export default function SidebarLeft() {
  const router = useRouter(); // Initialize useRouter hook

  const channels = [
    { name: "TopPlayers", followers: "25K", image: "/images/first.png" },
    {
      name: "AllStarsShine",
      followers: "21K",
      image: "/images/allstarshine.jpeg",
    },
    { name: "SAM81", followers: "20.5K", image: "/images/sam81.jpeg" },
    { name: "PowerUP", followers: "19.2K", image: "/images/powerup.png" },
    { name: "NinjaGO", followers: "18.9K", image: "/images/ninjago.png" },
  ];

  // Function to navigate to the leaderboard page
  const navigateToLeaderboard = () => {
    router.push("/view/Leaderboard"); // Replace with the actual route to your leaderboard page
  };

  // Function to navigate to the events page
  const navigateToEvents = () => {
    router.push("/view/Events"); // Replace with the actual route to your events page
  };

  // Function to navigate to the PlayGames page
  const navigateToPlayGames = () => {
    router.push("/view/games"); // Replace with the actual route to your PlayGames page
  };

  return (
    <aside className="w-64 border-r border-gray-800 p-4">
      

      <div>
        <h2 className="font-semibold mb-4">Platforms</h2>
        <div className="flex flex-col gap-2">
          {/* Button for Events */}
          <button
            onClick={navigateToEvents} // Attach the onClick handler for Events
            className="flex items-center gap-2 text-purple-500 bg-purple-500/10 p-2 rounded-lg"
          >
            <CalendarCheck className="h-5 w-5" />
            <span>Events</span>
          </button>
          {/* Button for Leaderboard */}
          <button
            onClick={navigateToLeaderboard} // Attach the onClick handler for Leaderboard
            className="flex items-center gap-2 text-purple-500 bg-purple-500/10 p-2 rounded-lg"
          >
            <ChartNoAxesCombined className="h-5 w-5" />
            <span>Leaderboard</span>
          </button>
          {/* Button for Play Games */}
          <button
            onClick={navigateToPlayGames} // Attach the onClick handler for PlayGames
            className="flex items-center gap-2 text-purple-500 bg-purple-500/10 p-2 rounded-lg"
          >
            <GameController className="h-5 w-5" />
            <span>Play Games</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
