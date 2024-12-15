// Home.js
import { Search, Menu, Bell, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GameCard from "./components/GameCard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-800 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gradient-to-r from-gray-800 via-purple-900 to-gray-800 backdrop-blur shadow-[0_0_15px_rgba(139,92,246,1)] transition-all duration-300">
        <div className="flex h-16 items-center px-4 gap-4">
          <Button variant="ghost" size="icon" className="md:hidden hover:scale-110 hover:text-purple-500">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-white p-1 shadow-[0_0_15px_rgba(59,130,246,1)] hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                className="w-10 h-10"
              >
                <path d="M10 6v18h12V6H10zM8 4h16v20H8V4z" fill="white" />
                <path d="M2 10h3v12H2zm20 0h3v12h-3z" fill="white" />
                <image
                  href="/images/logo.png"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>
            <span className="hidden font-bold text-white md:inline-block hover:text-purple-400">
              play verse games
            </span>
          </div>
          <div className="flex-1 md:max-w-screen-sm">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search"
                className="w-full bg-gray-800 pl-8 text-white placeholder-gray-400 border-gray-700 focus:shadow-[0_0_10px_rgba(139,92,246,1)]"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500 hover:scale-110 transition-all">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500 hover:scale-110 transition-all">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-500 hover:scale-110 transition-all">
              <User className="h-5 w-5" />
            </Button>
            <Button className="hidden bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white md:inline-flex hover:shadow-[0_0_15px_rgba(139,92,246,1)]">
              Log in
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex pt-16">
        <Sidebar />
        <main className="min-w-[160vh] ml-12 flex-1 px-4 py-8">
          {/* Welcome Section */}
          <div className="mb-8 flex flex-col items-center gap-8 text-white md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-white p-1 shadow-[0_0_15px_rgba(59,130,246,1)] hover:shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  className="w-10 h-10"
                >
                  <path d="M10 6v18h12V6H10zM8 4h16v20H8V4z" fill="white" />
                  <path d="M2 10h3v12H2zm20 0h3v12h-3z" fill="white" />
                  <image
                    href="/images/logo.png"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold">
                Welcome to play verse Games
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-purple-600/20 p-2">
                  <svg
                    className="h-4 w-4 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </div>
                <span>4000+ games</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-purple-600/20 p-2">
                  <svg
                    className="h-4 w-4 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span>No install needed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-purple-600/20 p-2">
                  <svg
                    className="h-4 w-4 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>On any device</span>
              </div>
            </div>
          </div>

          {/* Featured Games */}
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-bold text-white border-b-4 border-purple-500 hover:border-blue-400 transition-all">
              Featured games
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <GameCard
                className="hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg"
                title="Bloxd.io"
                image="/images/games/OIP (1).jpeg"
                tag="UPDATED"
                link="https://www.crazygames.com/game/bloxdhop-io"
              />
              <GameCard
                className="hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg"
                title="Smash Karts"
                image="/images/games/download.jpeg"
                tag="HOT"
                link="https://www.crazygames.com/game/smash-karts"
              />
              <GameCard
                className="hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg"
                title="Dead Shot"
                image="/images/games/coverundefined-1694770506607.avif"
                tag="NEW"
                link="https://www.crazygames.com/game/deadshot-io"
              />
              <GameCard
                className="hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg"
                title="Racing Limits"
                image="/images/games/OIP.jpeg"
                tag="FEATURED"
                link="https://www.crazygames.com/game/racing-limits"
              />
            </div>
          </section>

          {/* New Games */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">New games</h2>
              <Button variant="link" className="text-purple-400 hover:underline">
                View more
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <GameCard
                className="hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg"
                title="Roverc"
                image="/images/games/download (1).jpeg"
                tag="NEW"
                link="https://www.crazygames.com/game/rovercraft"
              />
              <GameCard
                className="hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg"
                title="Supermarket Simulation"
                image="/images/games/download (2).jpeg"
                tag="NEW"
                link="https://www.crazygames.com/game/supermarket-simulator-cashier-game"
              />
              <GameCard
                className="hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg"
                title="10x10 Classic"
                image="/images/games/download (3).jpeg"
                tag="NEW"
                link="https://www.crazygames.com/game/10x10-arabian-nights"
              />
              <GameCard
                className="hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:shadow-[0_8px_15px_rgba(139,92,246,0.9)] rounded-lg"
                title="HAZMOB FPS"
                image="/images/games/download (4).jpeg"
                tag="NEW"
                link="https://www.crazygames.com/game/hazmob-fps-online-shooter"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
