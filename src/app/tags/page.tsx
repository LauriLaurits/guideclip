"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Search, Tag, TrendingUp } from "lucide-react";

// Mock data for all tags
const ALL_TAGS = [
  { name: "AI", count: 15, color: "#6c5ce7", trending: true },
  { name: "Development", count: 8, color: "#00b894", trending: false },
  { name: "Design", count: 6, color: "#fd79a8", trending: true },
  { name: "Video", count: 4, color: "#ff9f43", trending: false },
  { name: "Research", count: 3, color: "#00cec9", trending: false },
  { name: "Assistant", count: 5, color: "#a29bfe", trending: true },
  { name: "Code", count: 7, color: "#55a3ff", trending: false },
  { name: "Creative", count: 4, color: "#e17055", trending: false },
  { name: "New", count: 6, color: "#00b894", trending: true },
  { name: "Search", count: 2, color: "#fdcb6e", trending: false },
  { name: "Analytics", count: 3, color: "#74b9ff", trending: false },
  { name: "Automation", count: 4, color: "#a29bfe", trending: true },
  { name: "Business", count: 5, color: "#fd79a8", trending: false },
  { name: "Education", count: 3, color: "#00b894", trending: false },
  { name: "Finance", count: 2, color: "#fdcb6e", trending: false },
  { name: "Marketing", count: 4, color: "#e17055", trending: false },
  { name: "Productivity", count: 6, color: "#6c5ce7", trending: true },
  { name: "Social", count: 2, color: "#fd79a8", trending: false },
  { name: "Writing", count: 5, color: "#00cec9", trending: false },
  { name: "Image", count: 4, color: "#ff9f43", trending: false }
] as const;

export default function TagsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter tags based on search
  const filteredTags = ALL_TAGS.filter(tag =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort tags by count (descending)
  const sortedTags = [...filteredTags].sort((a, b) => b.count - a.count);
  
  // Get trending tags
  const trendingTags = ALL_TAGS.filter(tag => tag.trending).slice(0, 6);
  
  // Get popular tags (top 8 by count)
  const popularTags = [...ALL_TAGS].sort((a, b) => b.count - a.count).slice(0, 8);

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
                <Tag className="mr-2 h-4 w-4" />
                Browse by Tags
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Explore Tools by
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Tags
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Find the perfect tools for your needs by browsing our comprehensive tag system. 
                Each tag represents a specific use case, technology, or category.
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-black py-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 bg-black rounded-lg border border-gray-800 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors"
                />
              </div>
              
              {/* Results Count */}
              <div className="text-sm text-gray-400">
                {sortedTags.length} {sortedTags.length === 1 ? 'tag' : 'tags'} • {ALL_TAGS.reduce((sum, tag) => sum + tag.count, 0)} total tools
              </div>
            </div>
          </div>
        </div>

        {/* Tags Content */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            {/* Trending Tags */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="h-6 w-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">Trending Tags</h2>
                <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-orange-400 text-xs font-medium">Hot</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {trendingTags.map((tag) => (
                  <Link 
                    href={`/tags/${tag.name.toLowerCase()}`} 
                    key={tag.name}
                    className="group"
                  >
                    <div 
                      className="rounded-xl border border-gray-800 p-6 text-center hover:bg-gray-900/50 transition-all duration-300 hover:scale-105"
                      style={{
                        '--hover-border-color': tag.color
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = tag.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#374151';
                      }}
                    >
                      <div 
                        className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${tag.color}20` }}
                      >
                        <Tag className="h-6 w-6" style={{ color: tag.color }} />
                      </div>
                      <h3 className="font-semibold text-white group-hover:text-gray-300 transition-colors mb-2">
                        {tag.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {tag.count} {tag.count === 1 ? 'tool' : 'tools'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Star className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Popular Tags</h2>
                <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400 text-xs font-medium">Most Used</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularTags.map((tag) => (
                  <Link 
                    href={`/tags/${tag.name.toLowerCase()}`} 
                    key={tag.name}
                    className="group"
                  >
                    <div 
                      className="rounded-xl border border-gray-800 p-6 hover:bg-gray-900/50 transition-all duration-300"
                      style={{
                        '--hover-border-color': tag.color
                      } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = tag.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#374151';
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${tag.color}20` }}
                        >
                          <Tag className="h-6 w-6" style={{ color: tag.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-gray-300 transition-colors mb-1">
                            {tag.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {tag.count} {tag.count === 1 ? 'tool' : 'tools'}
                          </p>
                          {tag.trending && (
                            <Badge className="mt-2 px-2 py-0.5 text-xs bg-orange-500/20 text-orange-400 border-orange-500/30">
                              Trending
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Tags */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">All Tags</h2>
              
              {sortedTags.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {sortedTags.map((tag) => (
                    <Link 
                      href={`/tags/${tag.name.toLowerCase()}`} 
                      key={tag.name}
                      className="group"
                    >
                      <div 
                        className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-800 hover:bg-gray-900/50 transition-all duration-300"
                        style={{
                          '--hover-border-color': tag.color
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = tag.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#374151';
                        }}
                      >
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${tag.color}20` }}
                        >
                          <Tag className="h-4 w-4" style={{ color: tag.color }} />
                        </div>
                        <span className="font-medium text-white group-hover:text-gray-300 transition-colors">
                          {tag.name}
                        </span>
                        <Badge 
                          className="text-xs"
                          style={{ 
                            backgroundColor: `${tag.color}20`,
                            color: tag.color,
                            borderColor: `${tag.color}30`
                          }}
                        >
                          {tag.count}
                        </Badge>
                        {tag.trending && (
                          <TrendingUp className="h-4 w-4 text-orange-400" />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="rounded-2xl p-12 border border-gray-800 bg-black/50 max-w-md mx-auto">
                    <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      No tags found
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Try adjusting your search terms or browse all tags.
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

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div 
                className="rounded-2xl p-8 border border-gray-800 backdrop-blur-sm"
                style={{ backgroundColor: '#6c5ce705' }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Can't find what you're looking for?
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Browse our categories or use our AI tool finder to get personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/categories">
                    <Button 
                      variant="outline"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                      size="lg"
                    >
                      Browse Categories
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                    >
                      AI Tool Finder
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 