import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b border-gray-900 bg-black">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">
            <span className="text-white">Guide</span>
            <span className="text-accent-blue">Clip</span>
            <span className="text-accent-red">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: "Home", hover: "hover:text-accent-orange" },
            { name: "Categories", hover: "hover:text-accent-pink" },
            { name: "Popular", hover: "hover:text-accent-blue" },
            { name: "About", hover: "hover:text-accent-red" }
          ].map((item) => (
            <Link 
              key={item.name} 
              href="#" 
              className={`text-sm font-medium text-gray-400 transition-colors duration-200 ${item.hover}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search for AI tools..."
              className="w-full h-9 bg-black rounded-full border border-gray-800 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange"
            />
          </div>
          <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
} 