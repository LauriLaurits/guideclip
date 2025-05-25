import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b border-gray-900 bg-black">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-gray-100">Guide</span>
            <span className="text-gray-100">Clip</span>
            <span className="text-[#fd79a8]">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-[#8be9fd]">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-[#fd79a8]">
            Categories
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-[#6c5ce7]">
            Popular
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-[#00cec9]">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search for AI tools..."
              className="w-full h-9 bg-black rounded-full border border-gray-800 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]"
            />
          </div>
          <Button className="bg-[#1a1a40] text-[#8be9fd] hover:bg-[#2d2d67]" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
} 