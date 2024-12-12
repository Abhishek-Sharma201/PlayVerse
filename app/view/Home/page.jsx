"use client";

import Navbar from "../../self-components/Home-Components/Navbar";
import SidebarLeft from "../../self-components/Home-Components/SidebarLeft";
import HeroSection from "../../self-components/Home-Components/HeroSection";
import TrendingGames from "../../self-components/Home-Components/TrendingGames";
import SidebarRight from "../../self-components/Home-Components/SidebarRight";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-blue-300 via-blue-100 to-white text-navy">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <SidebarLeft className="w-full md:w-1/4" />
        <main className="flex-1 p-4 md:p-6">
          <HeroSection />
          <TrendingGames />
        </main>
        <SidebarRight className="w-full md:w-1/4" />
      </div>
    </div>
  );
}