"use client";

import React, { useState } from "react";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToolCard } from "@/components/tool-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Search, Filter, Tag } from "lucide-react";
import { tools } from "@/lib/data";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

// Mock data for popular tags
const POPULAR_TAGS = [
  { name: "AI", count: 15, color: "#6c5ce7" },
  { name: "Development", count: 8, color: "#00b894" },
  { name: "Design", count: 6, color: "#fd79a8" },
  { name: "Video", count: 4, color: "#ff9f43" },
  { name: "Research", count: 3, color: "#00cec9" },
  { name: "Assistant", count: 5, color: "#a29bfe" },
  { name: "Code", count: 7, color: "#55a3ff" },
  { name: "Creative", count: 4, color: "#e17055" },
  { name: "New", count: 6, color: "#00b894" },
  { name: "Search", count: 2, color: "#fdcb6e" }
] as const;

const SORT_OPTIONS = [
  { value: "relevance", label: "Most Relevant" },
  { value: "newest", label: "Newest First" },
  { value: "popular", label: "Most Popular" },
  { value: "name", label: "Name A-Z" }
] as const;

export default function TagPage({ params }: TagPageProps) {
  const { tag } = use(params);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  
  // Decode the tag parameter
  const decodedTag = decodeURIComponent(tag);
  const tagName = decodedTag.charAt(0).toUpperCase() + decodedTag.slice(1);
  
  // Filter tools by tag (mock implementation - in real app this would come from API)
  const getToolsByTag = (tagFilter: string) => {
    // Mock filtering - in real app this would be more sophisticated
    const tagLower = tagFilter.toLowerCase();
    return tools.filter(tool => 
      tool.tags.some(t => t.toLowerCase().includes(tagLower)) ||
      tool.name.toLowerCase().includes(tagLower) ||
      tool.description.toLowerCase().includes(tagLower)
    );
  };
  
  const taggedTools = getToolsByTag(decodedTag);
  const tagInfo = POPULAR_TAGS.find(t => t.name.toLowerCase() === decodedTag.toLowerCase());
  
  // Apply search filter
  const filteredTools = taggedTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Apply sorting
  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id.localeCompare(a.id); // Mock newest sorting
      case "popular":
        return b.videos.length - a.videos.length; // Sort by video count as popularity proxy
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0; // relevance - keep original order
    }
  });

  if (taggedTools.length === 0) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Tag Header */}
        <div className="relative bg-black border-b border-gray-800">
          {/* Background gradient */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${tagInfo?.color || '#6c5ce7'}, transparent 70%)`
            }}
          />
          
          <div className="relative max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm" 
                className="mb-6 hover:bg-gray-900/50 text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <div className="flex items-center gap-6 mb-8">
              <div 
                className="rounded-xl p-4 border border-gray-800 backdrop-blur-sm" 
                style={{ 
                  backgroundColor: `${tagInfo?.color || '#6c5ce7'}20`,
                  boxShadow: `0 0 20px ${tagInfo?.color || '#6c5ce7'}20`
                }}
              >
                <Tag 
                  className="h-10 w-10" 
                  style={{ color: tagInfo?.color || '#6c5ce7' }} 
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {tagName} Tools
                </h1>
                <div className="flex items-center gap-4">
                  <Badge 
                    className="px-3 py-1 text-sm font-medium border"
                    style={{ 
                      backgroundColor: `${tagInfo?.color || '#6c5ce7'}20`,
                      borderColor: `${tagInfo?.color || '#6c5ce7'}30`,
                      color: tagInfo?.color || '#6c5ce7'
                    }}
                  >
                    {sortedTools.length} {sortedTools.length === 1 ? 'tool' : 'tools'} found
                  </Badge>
                  <div className="h-1 w-1 rounded-full bg-gray-600" />
                  <span className="text-gray-400 text-sm">
                    Learn with 90-second tutorials
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-4xl leading-relaxed text-lg">
              Discover and master {tagName.toLowerCase()} tools with our curated collection of quick tutorials. 
              Each tool comes with step-by-step guides to get you productive fast.
            </p>
          </div>
        </div>
        
        {/* Controls Section */}
        <div className="bg-black py-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
              {/* Search and Sort */}
              <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="search"
                    placeholder={`Search ${tagName.toLowerCase()} tools...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full h-10 bg-black rounded-lg border border-gray-800 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-10 bg-black rounded-lg border border-gray-800 py-2 pl-10 pr-8 text-sm text-white focus:border-gray-600 focus:outline-none transition-colors appearance-none cursor-pointer min-w-[160px]"
                  >
                    {SORT_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Popular Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-400 mr-2">Popular tags:</span>
                {POPULAR_TAGS.slice(0, 5).map((popularTag) => (
                  <Link 
                    href={`/tags/${popularTag.name.toLowerCase()}`} 
                    key={popularTag.name}
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      popularTag.name.toLowerCase() === decodedTag.toLowerCase()
                        ? 'text-white border'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
                    }`}
                    style={popularTag.name.toLowerCase() === decodedTag.toLowerCase() ? {
                      backgroundColor: `${popularTag.color}20`,
                      borderColor: `${popularTag.color}30`,
                      color: popularTag.color
                    } : {}}
                  >
                    {popularTag.name}
                    <span className="ml-1 text-xs opacity-75">({popularTag.count})</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            {sortedTools.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {sortedTools.map((tool) => (
                    <div key={tool.id} className="group">
                      <ToolCard 
                        tool={tool} 
                        customColor={tagInfo?.color}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Results Summary */}
                <div className="mt-16 text-center">
                  <div 
                    className="rounded-2xl p-8 border border-gray-800 backdrop-blur-sm"
                    style={{ backgroundColor: `${tagInfo?.color || '#6c5ce7'}05` }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Found {sortedTools.length} {tagName} {sortedTools.length === 1 ? 'Tool' : 'Tools'}
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                      Start learning with any tool above. Our 90-second tutorials will get you productive quickly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/categories">
                        <Button 
                          variant="outline"
                          className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                          size="lg"
                        >
                          Explore More Categories
                        </Button>
                      </Link>
                      <Link href="/">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                        >
                          Back to Home
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div 
                  className="rounded-2xl p-12 border border-gray-800 backdrop-blur-sm max-w-md mx-auto"
                  style={{ 
                    backgroundColor: `${tagInfo?.color || '#6c5ce7'}05`,
                    boxShadow: `0 0 30px ${tagInfo?.color || '#6c5ce7'}10`
                  }}
                >
                  <Tag 
                    className="h-16 w-16 mx-auto mb-4" 
                    style={{ color: tagInfo?.color || '#6c5ce7' }} 
                  />
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    No tools found
                  </h3>
                  <p className="text-gray-400 text-center leading-relaxed mb-8 text-lg">
                    No tools match your search criteria. Try adjusting your search terms or explore other tags.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setSearchTerm("")}
                      className="text-white border-2 transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: tagInfo?.color || '#6c5ce7',
                        borderColor: tagInfo?.color || '#6c5ce7'
                      }}
                      size="lg"
                    >
                      Clear Search
                    </Button>
                    <Link href="/categories">
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                      >
                        Browse Categories
                      </Button>
                    </Link>
                  </div>
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