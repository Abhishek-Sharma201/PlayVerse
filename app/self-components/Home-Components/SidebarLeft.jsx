"use client";

import { MoreVertical, GamepadIcon as GameController, Users, ChartNoAxesCombined, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";  // Import useRouter

export default function SidebarLeft() {
  const router = useRouter();  // Initialize useRouter hook

  const channels = [
    { name: "TopPlayers", followers: "25K", image: "/images/first.png" },
    { name: "AllStarsShine", followers: "21K", image: "/images/allstarshine.jpeg" },
    { name: "SAM81", followers: "20.5K", image: "/images/sam81.jpeg" },
    { name: "PowerUP", followers: "19.2K", image: "/images/powerup.png" },
    { name: "NinjaGO", followers: "18.9K", image: "/images/ninjago.png" },
  ];

  // Function to navigate to the events page
  const navigateToEvents = () => {
    router.push("/view/Events");  // Change "/events" to the actual path of your events page
  };

  return (
    <aside className="w-64 border-r border-gray-800 p-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Channels</h2>
          <MoreVertical className="h-5 w-5 text-gray-500" />
        </div>
        {channels.map((channel) => (
          <div
            key={channel.name}
            className="flex items-center gap-3 mb-4 hover:bg-gray-800 p-2 rounded-lg cursor-pointer group"
          >
            <div className="relative w-8 h-8">
              <Image
                src={channel.image}
                alt={channel.name}
                width={32}
                height={32}
                className="rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <p className="font-medium">{channel.name}</p>
              <p className="text-sm text-gray-400">{channel.followers} followers</p>
            </div>
          </div>
        ))}
        <Button className="relative w-full bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition-transform duration-300 mt-4 text-white border-2 border-transparent hover:border-purple-400">
          <span className="absolute inset-0 rounded-lg border-2 border-purple-400 opacity-50 blur-md"></span>
          Browse More
        </Button>
      </div>

      <div>
        <h2 className="font-semibold mb-4">Platforms</h2>
        <div className="flex flex-col gap-2">
          {/* Update the button to navigate to events page */}
          <button
            onClick={navigateToEvents}  // Attach the onClick handler
            className="flex items-center gap-2 text-purple-500 bg-purple-500/10 p-2 rounded-lg"
          >
            <CalendarCheck className="h-5 w-5" />
            <span>Events</span>
          </button>
          <button className="flex items-center gap-2 text-purple-500 bg-purple-500/10 p-2 rounded-lg">
            <ChartNoAxesCombined className="h-5 w-5" />
            <span>Leaderboard</span>
          </button>
          <button className="flex items-center gap-2 text-purple-500 bg-purple-500/10 p-2 rounded-lg">
            <GameController className="h-5 w-5" />
            <span>Play Games</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
