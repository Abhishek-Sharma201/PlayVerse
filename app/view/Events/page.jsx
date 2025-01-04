'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Gamepad, Zap, Info, Star, Users, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const newsCategories = [
  {
    id: 1,
    title: "Sports",
    image: "/images/news/download.jpeg", // Adjusted image path
    description: "Play 100+ plus games in category like puzzle, action, arcade and sports",
    imdbRating: 8.5,
    userRating: 4.7,
    releaseDate: "2023-05-15",
    playTime: "20h"
  },
  {
    id: 2,
    title: "Arcade",
    image: "/images/news/OIP.jpeg", // Adjusted image path
    description: "Play 100+ plus games in category like puzzle, action, arcade and sports",
    imdbRating: 7.9,
    userRating: 4.5,
    releaseDate: "2023-04-01",
    playTime: "15h"
  },
  {
    id: 3,
    title: "Action",
    image: "/images/news/maxresdefault.jpg", // Adjusted image path
    description: "Play 100+ plus games in category like puzzle, action, arcade and sports",
    imdbRating: 9.1,
    userRating: 4.9,
    releaseDate: "2023-06-30",
    playTime: "30h"
  },
  {
    id: 4,
    title: "Racing",
    image: "/images/news/best-racing-game-thumb-1670385258926.jpg", // Adjusted image path
    description: "Play 100+ plus games in category like puzzle, action, arcade and sports",
    imdbRating: 8.2,
    userRating: 4.3,
    releaseDate: "2023-03-10",
    playTime: "25h"
  }
]

export default function NewsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsCategories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsCategories.length) % newsCategories.length)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="p-4 md:p-6">
        <div className="flex items-center gap-2">
          <Zap className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Play Verse News
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-w-[170vh] container mx-auto px-4 py-8">
        {/* Hero Carousel */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[3/4] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${newsCategories[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {newsCategories[currentSlide].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-gray-200 mb-6 max-w-xl"
              >
                {newsCategories[currentSlide].description}
              </motion.p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)] flex items-center gap-2">
                  <Gamepad className="w-5 h-5" />
                  Play games
                </button>
                <button className="px-6 py-2 rounded-full bg-transparent border border-purple-500 hover:bg-purple-500/20 transition-all duration-300">
                  Earn token
                </button>
                <button className="px-6 py-2 rounded-full bg-transparent border border-white/20 hover:border-white transition-all duration-300">
                  Explore NFT
                </button>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-black/70 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center hover:bg-black/70 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {newsCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-purple-500 w-6'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {newsCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 items-center text-sm">
                  <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{category.imdbRating} IMDb</span>
                  </div>
                  <div className="flex items-center gap-1 bg-purple-500/20 px-2 py-1 rounded-full">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span>{category.userRating} Users</span>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-500/20 px-2 py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{category.releaseDate}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span>{category.playTime}</span>
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  More Info
                </button>
              </div>
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl group-hover:ring-purple-500/50 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

