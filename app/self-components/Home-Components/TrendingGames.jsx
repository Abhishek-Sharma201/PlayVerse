"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TrendingGames() {
  const router = useRouter();

  const games = [
    { id: "Clothes", name: "Clothes", image: "/images/products/download.jpeg", description: "A tactical 5v5 shooter with unique agents." },
    { id: "Gadgets", name: "Gadgets", image: "/images/products/images.jpeg", description: "A visually stunning platformer with emotional storytelling." },
    { id: "Accessorise", name: "Accessorise", image: "/images/products/download (1).jpeg", description: "A popular battle royale game with building mechanics." },
    { id: "Laptops", name: "Laptops", image: "/images/products/download (2).jpeg", description: "An intense battle royale game featuring realistic gameplay." },
    { id: "Mobiles", name: "Mobiles", image: "/images/products/download (3).jpeg", description: "A fast-paced battle royale with unique heroes and abilities." },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Trending Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="group relative rounded-xl overflow-hidden bg-gray-800 border border-gray-600 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={game.image}
              alt={game.name}
              width={200}
              height={250}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
              <h3 className="font-semibold mb-2 text-white text-center neon-text">{game.name}</h3>
              <Button
                onClick={() => router.push(`/view/Home/game-details/${game.id}`)}
                className="bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition-transform duration-300 w-full text-white border-2 border-transparent hover:border-purple-400 neon-border"
              >
                See More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
