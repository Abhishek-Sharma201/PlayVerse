"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-blue-900 via-purple-800 to-purple-600 group shadow-lg">
      <div className="absolute inset-0 flex items-center justify-between p-8">
        <div className="max-w-md text-white z-10">
          <span className="text-purple-200">LIVE</span>
          <h1 className="text-4xl font-bold mb-2">
            Season 9 GameX Valorant Tournament
          </h1>
          <p className="text-purple-100 mb-4">
            Join our Season 9 gaming tournament
          </p>
          <Button
            className="relative w-full bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition-transform duration-300 mt-4 text-white border-2 border-transparent hover:border-purple-400"
            onClick={() =>
              window.open(
                "https://www.youtube.com/embed/HHaJiF55gIw?si=cZPkpF1kUGhD87hw",
                "_blank"
              )
            } // Replace with your video URL
          >
            <span className="absolute inset-0 rounded-lg border-2 border-purple-400 opacity-50 blur-md"></span>
            Watch More
          </Button>
        </div>
        <Image
          src="/images/valo.jpg"
          alt="Valorant Character"
          width={400}
          height={400}
          className="object-contain absolute right-0 bottom-0 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
