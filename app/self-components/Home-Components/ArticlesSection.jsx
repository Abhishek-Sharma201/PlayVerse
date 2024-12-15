"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ArticlesSection() {
  const articles = [
    {
      title: "Is gaming good to use?",
      description: "Esports is the future of all games! Join the revolution...",
      image: "/images/background.jpg",
      readTime: "2 min read",
      date: "2 days ago",
    },
    {
      title: "Gaming Revolution 2024",
      description: "Discover how gaming impacts global cultures and technology.",
      image: "/images/background1.jpg",
      readTime: "3 min read",
      date: "5 days ago",
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Articles</h2>
        <MoreVertical className="h-5 w-5 text-gray-500" />
      </div>
      {articles.map((article, index) => (
        <div
          key={index}
          className="mb-4 bg-gray-900 rounded-lg overflow-hidden group"
        >
          <div className="relative w-full h-32">
            <Image
              src={article.image}
              alt="Article thumbnail"
              width={300}
              height={150}
              className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-400">{article.description}</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          </div>
        </div>
      ))}
      <Link href="/view/Articles" passHref>
        <Button className="relative w-full bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 transition-transform duration-300 mt-4 text-white border-2 border-transparent hover:border-purple-400">
          <span className="absolute inset-0 rounded-lg border-2 border-purple-400 opacity-50 blur-md"></span>
          Browse More
        </Button>
      </Link>
    </div>
  );
}
