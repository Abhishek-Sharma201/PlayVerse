"use client";

import ArticlesSection from "@/components/Home-components/ArticlesSection";
import TagsSection from "@/components/Home-components/TagsSection";

export default function SidebarRight() {
  return (
    <aside className="w-80 border-l border-gray-800 p-4">
      {/* Articles Section */}
      <ArticlesSection />

      {/* Tags Section */}
      <TagsSection />
    </aside>
  );
}