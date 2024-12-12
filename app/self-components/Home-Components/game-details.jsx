"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GameDetails({ params }) {
  const router = useRouter();
  const [game, setGame] = useState(null);

  const games = [
    {
      id: "valorant",
      name: "Valorant",
      image: "/images/valorant.jpg",
      description: "Valorant is a tactical 5v5 shooter with unique agents that combines precision gunplay and strategic team coordination. With a range of characters each offering diverse abilities, players must work together to complete objectives. Constant updates and an evolving meta ensure a fresh and competitive experience for everyone.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.riotgames.valorant",
      collaborations: [
        {
          name: "HyperX",
          description: "Exclusive gaming peripherals partnership for ultimate performance.",
          link: "https://www.hyperxgaming.com/"
        },
        {
          name: "Alienware",
          description: "Valorant optimized for Alienware gaming systems.",
          link: "https://www.alienware.com/"
        }
      ]
    },
    {
      id: "ori",
      name: "Ori",
      image: "/images/ori.jpg",
      description: "Ori is a visually stunning platformer that takes players on an emotional journey through a magical forest. The game is known for its breathtaking visuals, challenging puzzles, and deeply touching narrative. It combines smooth gameplay with a beautiful soundtrack, making it a truly immersive experience.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.moonstudios.ori",
      collaborations: []
    },
    {
      id: "fortnite",
      name: "Fortnite",
      image: "/images/fortnite.jpg",
      description: "Fortnite is a globally popular battle royale game that blends action, creativity, and community. Players compete to be the last one standing while building structures to gain an edge. With frequent events, new game modes, and collaborations, Fortnite offers endless excitement and creativity.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.epicgames.fortnite",
      collaborations: [
        {
          name: "Marvel",
          description: "Exclusive events featuring iconic Marvel superheroes.",
          link: "https://www.marvel.com/"
        }
      ]
    },
    {
      id: "pubg",
      name: "PUBG",
      image: "/images/pubg.webp",
      description: "PUBG delivers an intense battle royale experience with realistic gameplay and vast open maps. Players can team up or go solo as they scavenge for weapons, vehicles, and supplies, all while avoiding elimination. Its immersive graphics and competitive gameplay keep players engaged.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.pubg.imobile",
      collaborations: []
    },
    {
      id: "apex-legends",
      name: "Apex Legends",
      image: "/images/apex.jpg",
      description: "Apex Legends is a fast-paced battle royale game with unique heroes and abilities. Players select from a roster of Legends, each with distinct skills, and work together to outplay opponents. Its dynamic gameplay and tactical opportunities make every match exhilarating.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.ea.gp.apexlegendsmobile",
      collaborations: [
        {
          name: "Twitch",
          description: "Stream Apex Legends and earn exclusive rewards.",
          link: "https://www.twitch.tv/"
        }
      ]
    }
  ];

  useEffect(() => {
    const selectedGame = games.find((g) => g.id === params.id);
    setGame(selectedGame);
  }, [params.id]);

  if (!game) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
        <div className="lg:w-1/2 flex justify-center items-center">
          <Image
            src={game.image}
            alt={game.name}
            width={600}
            height={500}
            className="rounded-lg border-4 border-purple-500 shadow-md"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-10 text-left flex flex-col justify-center h-full">
          <button
            onClick={() => router.back()}
            className="mb-6 text-purple-700 underline hover:text-purple-500 transition-colors"
          >
            Back to Games
          </button>
          <h1 className="text-6xl font-bold mb-8 neon-text">{game.name}</h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">{game.description}</p>
          <a
            href={game.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform duration-300 text-white py-4 px-16 rounded-full shadow-lg hover:shadow-green-400/50"
          >
            Download on Play Store
          </a>
          {game.collaborations && game.collaborations.length > 0 && (
            <div className="mt-12">
              <h2 className="text-4xl font-semibold mb-6 text-purple-500">Featured Collaborations</h2>
              <div className="space-y-6">
                {game.collaborations.map((collab, index) => (
                  <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600">
                    <div className="lg:w-3/4">
                      <h3 className="text-2xl font-bold text-white mb-2">{collab.name}</h3>
                      <p className="text-gray-300">{collab.description}</p>
                    </div>
                    <a
                      href={collab.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 lg:mt-0 lg:ml-auto bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-full transition-transform hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
