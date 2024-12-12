"use client";

import ArticlesSection from "../../self-components/Home-Components/ArticlesSection";
import TagsSection from "../../self-components/Home-Components/TagsSection";

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