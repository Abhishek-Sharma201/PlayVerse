import { ModeToggle } from "@/components/theme-trigger";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import React from "react";

const LandingPageNav = () => {
  const isMobile = useIsMobile;

  return (
    <nav className="flex items-center justify-between px-32 h-[10dvh] w-screen overflow-hidden bg-black/20">
      <div className="flex flex-col items-center justify-center">LOGO</div>
      {isMobile ? (
        <ul className="text-[1rem] font-[500] flex items-center justify-center gap-6 p-2 w-[max-content] h-full">
          <Link
            href="/about"
            className="h-full flex flex-col items-center justify-center px-4 hover:bg-white hover:text-black rounded-sm transition-all"
          >
            <li>About</li>
          </Link>
          <Link
            href="/login"
            className="h-full flex flex-col items-center justify-center px-4 hover:bg-white hover:text-black rounded-sm transition-all"
          >
            <li>Login</li>
          </Link>
          <Link
            href="/view/games"
            className="h-full flex flex-col items-center justify-center px-4 hover:bg-white hover:text-black rounded-sm transition-all"
          >
            <li>Games</li>
          </Link>
          <Link
            href="#"
            className="h-full flex flex-col items-center justify-center px-4 hover:bg-white hover:text-black rounded-sm transition-all"
          >
            <li>
              <ModeToggle />
            </li>
          </Link>
        </ul>
      ) : (
        <button>Menu</button>
      )}
    </nav>
  );
};

export default LandingPageNav;
