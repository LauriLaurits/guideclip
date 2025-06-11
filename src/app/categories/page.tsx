"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CategoryCard } from "@/components/category-card";
import { Star, Search } from "lucide-react";
import { categories, getToolsByCategory } from "@/lib/data";

// Color mapping for categories
const CATEGORY_COLORS = [
  "orange", "pink", "blue", "purple", "teal", "amber", 
  "emerald", "indigo", "cyan", "red", "green", "violet",
  "yellow", "gray", "slate", "zinc", "stone", "neutral"
] as const;

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Add colors to categories
  const categoriesWithColors = categories.map((category, index) => ({
    ...category,
    color: CATEGORY_COLORS[index % CATEGORY_COLORS.length]
  }));

  const filteredCategories = categoriesWithColors.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-black border-b border-gray-800">
          {/* Background gradient */}
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600" />
          
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-16">
              <Badge 
                className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 text-purple-400"
                variant="outline"
              >
                <Star className="mr-2 h-4 w-4" />
                All Categories
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Explore AI Tools by
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Category
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover the perfect AI tools for your needs. Browse through our comprehensive 
                collection of categories, each packed with curated tools and tutorials.
              </p>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-black py-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 bg-black rounded-lg border border-gray-800 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                />
              </div>
              
              {/* Results Count */}
              <div className="text-sm text-gray-400">
                {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'}
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            {filteredCategories.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredCategories.map((category) => {
                    const tools = getToolsByCategory(category.id);
                    const videoCount = tools.reduce((total, tool) => total + tool.videos.length, 0);
                    return (
                      <CategoryCard
                        key={category.id}
                        category={category}
                        stats={`${tools.length} tools • ${videoCount} videos`}
                      />
                    );
                  })}
                </div>
                
                {/* Stats Summary */}
                <div className="mt-16 text-center">
                  <div 
                    className="rounded-2xl p-8 border border-gray-800 backdrop-blur-sm"
                    style={{ backgroundColor: '#6c5ce705' }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Complete AI Tool Library
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                      Access our entire collection of AI tools across {categories.length} categories. 
                      New tools and tutorials added weekly.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">{categories.length}</div>
                        <div className="text-sm text-gray-400">Categories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">20+</div>
                        <div className="text-sm text-gray-400">AI Tools</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">500+</div>
                        <div className="text-sm text-gray-400">Video Tutorials</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="rounded-2xl p-12 border border-gray-800 bg-black/50 max-w-md mx-auto">
                  <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    No categories found
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search terms or browse all categories.
                  </p>
                  <Button
                    onClick={() => setSearchTerm("")}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Clear Search
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 