"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthButton } from "@/components/auth-button";
import { MultiStageInput } from "@/components/multi-stage-input";
import { useRouter } from "next/navigation";

interface HeaderProps {
  showSearch?: boolean;
}

// ToolSuggestion type for proper typing
interface ToolSuggestion {
  id: string;
  name: string;
  description: string;
  category: string;
  estimatedCost: "free" | "freemium" | "paid";
  costRange?: string;
  matchScore: number;
}

const NAVIGATION_LINKS = [
  { href: "/categories", label: "Browse Tools", hoverColor: "hover:text-purple-400" },
  { href: "/tags", label: "Tags", hoverColor: "hover:text-purple-400" },
  { href: "/popular", label: "Popular", hoverColor: "hover:text-purple-400" },
  { href: "/pricing", label: "Pricing", hoverColor: "hover:text-purple-400" },
  { href: "/about", label: "About", hoverColor: "hover:text-purple-400" },
] as const;

export function Header({ showSearch = false }: HeaderProps) {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const handleToolSelect = (tool: ToolSuggestion) => {
    // Close the search modal
    setIsSearchOpen(false);
    // Navigate to the tool page
    router.push(`/tool/${tool.id}`);
  };

  return (
    <>
      <header className="w-full border-b border-gray-900 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-8 lg:px-16 xl:px-24">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-3xl font-bold tracking-tight">
              <span className="text-white">Guide</span>
              <span className="text-white">Clip</span>
              <span className="text-pink-400 text-3xl leading-none">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map(({ href, label, hoverColor }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium text-gray-400 transition-colors duration-200 cursor-pointer ${hoverColor}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {showSearch && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="search"
                  placeholder="Quick search..."
                  className="w-64 h-9 bg-black rounded-full border border-gray-800 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            )}
            
            <Button
              onClick={toggleSearch}
              variant="outline"
              size="sm"
              className="border-purple-600 text-purple-400 hover:border-purple-400 hover:text-purple-400 transition-colors"
            >
              <Search className="h-4 w-4 mr-2" />
              AI Tool Finder
            </Button>
            
            <AuthButton 
              isAuthenticated={true}
              user={{
                name: "John Doe",
                email: "john@example.com",
                plan: "pro"
              }}
              onSignIn={() => {
                // TODO: Implement Google sign in
                console.log("Sign in clicked");
              }}
              onSignOut={() => {
                // TODO: Implement sign out
                console.log("Sign out clicked");
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleSearch}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              onClick={toggleMobileMenu}
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-900 bg-black">
            <nav className="flex flex-col space-y-1 px-4 py-4">
              {NAVIGATION_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors py-2 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* AI Tool Finder Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-6xl bg-black border border-gray-800 rounded-lg p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">AI Tool Finder</h2>
              <Button
                onClick={toggleSearch}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <MultiStageInput onToolSelect={handleToolSelect} />
          </div>
        </div>
      )}
    </>
  );
} 