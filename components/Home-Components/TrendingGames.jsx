"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TrendingGames() {
  const games = [
    { name: "Valorant", image: "/images/valorant.jpg" },
    { name: "Ori", image: "/images/ori.jpg" },
    { name: "Fortnite", image: "/images/fortnite.jpg" },
    { name: "PUBG", image: "/images/pubg.webp" },
    { name: "Apex Legends", image: "/images/apex.jpg" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Trending Games</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {games.map((game) => (
          <div
            key={game.name}
            className="group relative rounded-xl overflow-hidden"
          >
            <Image
              src={game.image}
              alt={game.name}
              width={200}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <h3 className="font-semibold mb-2 text-white">{game.name}</h3>
              <Button className="bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition-transform duration-300 w-full text-white border-2 border-transparent hover:border-purple-400">
                Join Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}