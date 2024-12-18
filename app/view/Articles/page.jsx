"use client";

import { motion } from "framer-motion";
import { Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GameArticle() {
  const games = [
    {
      id: 1,
      title: "Apex Legends",
      image: "/images/apex.jpg",
      description:
        "The 1st place is bagged by Apex Legend developed by EA sports and has rapidly got some massive following among gaming players. You can team up with your friends and visit",
      link: "#",
    },
    {
      id: 2,
      title: "Call of Duty: Warzone",
      image: "/images/COD.jpg",
      description:
        "The 2nd place is bagged by COD Warzone by Activision and is hard to miss out. Top players around the world are seen streaming it every day which goes to show you to boost your hard block in a fast-pacing fps game.",
      link: "#",
    },
    {
      id: 3,
      title: "Fall Guys",
      image: "/images/OIP.jpeg",
      description:
        "Yes, 3rd place is bagged by Fall guys. BR doesn't mean that they kill be shooting each other, Fall guys took a unique approach towards BR where hundreds of players competing to finish the race first wins the game.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6 relative overflow-hidden">
      {/* Diagonal lines background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] bg-[length:500px_500px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight"
        >
          Top Battle Royal Games
        </motion.h1>

        {/* Author section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-12"
        >
          <Image
            src="/images/OIP (1).jpeg"
            alt="Author"
            width={50}
            height={50}
            className="rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
          <div>
            <h2 className="text-white font-semibold">John Doe.</h2>
            <div className="flex gap-3 mt-2">
              {[Twitter, Facebook, Youtube, Instagram].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-300 mb-12 max-w-3xl"
        >
          Do you play games? If yes! your answer will definitely be yes in front
          of the cases. Today's gaming have revolutionized the gaming industry
          and especially battle royal games have gone viral! Here and definitely
          you have played one of them atleast for today I am going to show you
          top the battle royal games for regular.
        </motion.p>

        {/* Game cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {/* Neon border effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{ padding: "1px" }}
              >
                <div className="absolute inset-0 bg-gray-800 rounded-xl"></div>
              </div>

              <div className="relative p-4">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={300}
                  height={200}
                  className="w-full rounded-lg mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2">
                  {game.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{game.description}</p>
                <Link
                  href={game.link}
                  className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Add Comments
          </button>
        </motion.div>
      </div>
    </div>
  );
}
