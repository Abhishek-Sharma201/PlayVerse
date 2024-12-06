"use client";

import {
  Search,
  ChevronRight,
  Users,
  GamepadIcon as GameController,
  ChevronDown,
  MoreVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold">X</span>
          <div className="flex gap-4">
            <button className="hover:text-purple-500">Browse</button>
            <button className="hover:text-purple-500">Shop</button>
            <button className="hover:text-purple-500">News</button>
            <button className="hover:text-purple-500">FAQ</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-900 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
          </div>
          <Button className="bg-transparent hover:bg-gray-800">Log In</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-gray-800 p-4">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Channels</h2>
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </div>
            {[
              { name: "TopPlayers", followers: "25K", image: "/first.png" },
              { name: "AllStarsShine", followers: "21K", image: "/allstarshine.jpeg" },
              { name: "SAM81", followers: "20.5K", image: "/sam81.jpeg" },
              { name: "PowerUP", followers: "19.2K", image: "/powerup.png" },
              { name: "NinjaGO", followers: "18.9K", image: "/ninjago.png" },
            ].map((channel) => (
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
            <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4">Browse More</Button>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Platforms</h2>
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 text-purple-500 bg-purple-500/10 p-2 rounded-lg">
                <GameController className="h-5 w-5" />
                <span>Gaming</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:bg-gray-800 p-2 rounded-lg">
                <Users className="h-5 w-5" />
                <span>MetaVerse</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:bg-gray-800 p-2 rounded-lg">
                <GameController className="h-5 w-5" />
                <span>Retro</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Hero Section */}
          <div className="relative h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-purple-900 to-purple-600 group">
            <div className="absolute inset-0 flex items-center justify-between p-8">
              <div className="max-w-md">
                <span className="text-purple-300">LIVE</span>
                <h1 className="text-4xl font-bold mb-2">Season 9 GameX Valorant Tournament</h1>
                <p className="text-gray-300 mb-4">Join our Season 9 games gaming tournament</p>
                <Button className="bg-red-500 hover:bg-red-600">Watch Tournament</Button>
              </div>
              <Image
                src="/valo.jpg"
                alt="Valorant Character"
                width={400}
                height={400}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Trending Games */}
          <div>
            <h2 className="text-xl font-bold mb-4">Trending Games</h2>
            <div className="grid grid-cols-5 gap-4">
              {[
                { name: "Valorant", image: "/valorant.jpg" },
                { name: "Ori", image: "/ori.jpg" },
                { name: "Fortnite", image: "/fortnite.jpg" },
                { name: "PUBG", image: "/pubg.webp" },
                { name: "Apex Legends", image: "/apex.jpg" },
              ].map((game) => (
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
                    <h3 className="font-semibold mb-2">{game.name}</h3>
                    <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                      Join Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 border-l border-gray-800 p-4">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Articles</h2>
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </div>
            {[1, 2].map((article) => (
              <div key={article} className="mb-4 bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative w-full h-32">
                  <Image
                    src="/background1.jpg"
                    alt="Article thumbnail"
                    width={300}
                    height={150}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Is gaming good to use?</h3>
                  <p className="text-sm text-gray-400">
                    Esports is the future of all games! Join the revolution...
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <span>2 min read</span>
                    <span>•</span>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            ))}
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Browse more</Button>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Tags</h2>
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex flex-wrap gap-2">
              {["Valorant", "Ori", "Fortnite", "PUBG", "Apex Legends"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
