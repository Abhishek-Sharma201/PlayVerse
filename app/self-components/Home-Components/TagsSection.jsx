"use client";

import { MoreVertical } from "lucide-react";

const tags = ["Valorant", "Ori", "Fortnite", "PUBG", "Apex Legends"];

export default function TagsSection() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Tags</h2>
        <MoreVertical className="h-5 w-5 text-gray-500" />
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gradient-to-r from-purple-700 to-purple-500 rounded-full text-sm text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}