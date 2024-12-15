"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-900 via-purple-800 to-purple-600 shadow-md transition-all duration-300 hover:shadow-lg flex-wrap">
      <div className="flex items-center gap-8">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="hover:opacity-80 transition-opacity duration-300"
        />
        <div className="flex gap-4">
          {["Home", "News", "Dashboard", "About", "Contact", "Service"].map((item) => (
            <button
              key={item}
              className="text-white hover:text-purple-300 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute inset-0 rounded-md bg-purple-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-white rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-all duration-300"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500 h-5 w-5" />
        </div>
        <Button
          onClick={() => router.push("/login")}
          className="bg-transparent hover:bg-purple-200 text-white transition-all duration-300 relative group"
        >
          Log In
          <span className="absolute inset-0 rounded-md bg-purple-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
        </Button>
        <Button
          onClick={() => router.push("/signup")}
          className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 relative group"
        >
          Sign Up
          <span className="absolute inset-0 rounded-md bg-purple-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
        </Button>
      </div>
    </nav>
  );
}
