"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CategoryCard } from "@/components/category-card";
import { Star, Search } from "lucide-react";

// Import categories from homepage data
const CATEGORIES = [
  { id: "chatbots", name: "AI Chatbots", description: "Conversational AI tools for customer service and automation", icon: "message-square", color: "orange" },
  { id: "image-generators", name: "Image Generators", description: "Create stunning visuals with AI-powered image generation", icon: "image", color: "pink" },
  { id: "productivity", name: "Productivity Tools", description: "Boost your workflow with intelligent automation", icon: "briefcase", color: "blue" },
  { id: "code-assistants", name: "Code Assistants", description: "AI-powered coding tools and programming helpers", icon: "code", color: "purple" },
  { id: "writing", name: "Writing & Content", description: "Create compelling content with AI writing assistants", icon: "pen-tool", color: "teal" },
  { id: "audio-processing", name: "Audio Processing", description: "Transform and enhance audio with AI technology", icon: "headphones", color: "amber" },
  { id: "video-editing", name: "Video Editing", description: "Professional video editing powered by artificial intelligence", icon: "video", color: "emerald" },
  { id: "data-analysis", name: "Data Analysis", description: "Extract insights from data using AI analytics tools", icon: "bar-chart", color: "indigo" },
  { id: "research", name: "Research Tools", description: "Accelerate research with AI-powered information gathering", icon: "search", color: "cyan" },
  { id: "automation", name: "Automation", description: "Streamline workflows with intelligent automation platforms", icon: "zap", color: "orange" },
  { id: "translation", name: "Translation", description: "Break language barriers with AI translation services", icon: "globe", color: "pink" },
  { id: "finance", name: "Finance", description: "AI-powered financial analysis and management tools", icon: "dollar-sign", color: "blue" },
  { id: "healthcare", name: "Healthcare", description: "Medical AI tools for diagnosis and patient care", icon: "heart", color: "purple" },
  { id: "education", name: "Education", description: "Transform learning with AI-powered educational tools", icon: "book-open", color: "teal" },
  { id: "marketing", name: "Marketing", description: "Supercharge campaigns with AI marketing automation", icon: "megaphone", color: "amber" },
  { id: "security", name: "Security", description: "Protect systems with AI-driven cybersecurity solutions", icon: "shield", color: "emerald" },
  { id: "gaming", name: "Gaming", description: "Next-generation gaming experiences powered by AI", icon: "gamepad-2", color: "indigo" }
];

const CATEGORY_STATS = {
  chatbots: { tools: 3, videos: 12 },
  "image-generators": { tools: 4, videos: 18 },
  productivity: { tools: 5, videos: 22 },
  "code-assistants": { tools: 3, videos: 15 },
  writing: { tools: 2, videos: 8 },
  "audio-processing": { tools: 2, videos: 9 },
  "video-editing": { tools: 1, videos: 4 },
  "data-analysis": { tools: 2, videos: 7 },
  research: { tools: 1, videos: 3 },
  automation: { tools: 1, videos: 5 },
  translation: { tools: 1, videos: 4 },
  finance: { tools: 1, videos: 3 },
  healthcare: { tools: 1, videos: 2 },
  education: { tools: 1, videos: 3 },
  marketing: { tools: 1, videos: 4 },
  security: { tools: 1, videos: 2 },
  gaming: { tools: 1, videos: 3 }
};

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = CATEGORIES.filter(category =>
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
                    const stats = CATEGORY_STATS[category.id as keyof typeof CATEGORY_STATS] || { tools: 0, videos: 0 };
                    return (
                      <CategoryCard
                        key={category.id}
                        category={category}
                        stats={`${stats.tools} tools • ${stats.videos} videos`}
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
                      Access our entire collection of AI tools across {CATEGORIES.length} categories. 
                      New tools and tutorials added weekly.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">{CATEGORIES.length}</div>
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