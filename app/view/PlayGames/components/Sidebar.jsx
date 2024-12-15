import { Home, Zap, Flame, Clock, Gamepad2, Target, Swords, Car, Shirt, CastleIcon as ChessKnight, WalletCardsIcon as Cards, Boxes } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Zap, label: "Popular" },
    { icon: Flame, label: "Trending" },
    { icon: Clock, label: "New" },
    { icon: Gamepad2, label: "Action" },
    { icon: Target, label: "Shooting" },
    { icon: Swords, label: "Battle" },
    { icon: Car, label: "Racing" },
    { icon: Shirt, label: "Sports" },
    { icon: ChessKnight, label: "Strategy" },
    { icon: Cards, label: "Cards" },
    { icon: Boxes, label: "Puzzle" },
  ];

  return (
    <aside className="fixed hidden h-[calc(100vh-4rem)] w-16 flex-col gap-2 border-r border-gray-800 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg p-2 md:flex mr-4">
      {menuItems.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:bg-gray-700 hover:text-white flex items-center justify-center transition-colors duration-200"
        >
          <item.icon className="h-5 w-5 text-purple-400 hover:text-yellow-400 transition-colors duration-200" />
          <span className="sr-only">{item.label}</span>
        </Button>
      ))}
    </aside>
  );
}