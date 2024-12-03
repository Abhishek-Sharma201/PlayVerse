import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronsRight } from "lucide-react";
import React from "react";

const ThreeDText = () => {
  return (
    <div className="h-[50dvh] w-full flex flex-col items-center justify-center gap-12">
      <h1 className="text-[6rem]">PlayVerse</h1>
      <button className="flex items-center justify-center gap-1 border border-zinc-800 py-4 px-6 rounded-md hover:bg-zinc-900 hover:gap-[.7rem] hover:text-white transition-all">
        Get Started <ChevronsRight />
      </button>
    </div>
  );
};

export default ThreeDText;
