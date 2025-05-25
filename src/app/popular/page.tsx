"use client";

import React, { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ToolCard } from "@/components/tool-card";
import { 
  Star, 
  TrendingUp, 
  Users, 
  Clock, 
  Video,
  Award,
  Filter,
  Grid,
  List,
  Eye,
  Play,
  Download
} from "lucide-react";

// Popular tools with mock statistics
const POPULAR_TOOLS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's powerful conversational AI assistant for text generation and problem-solving",
    category: "chatbots",
    rank: 1,
    stats: {
      views: 125400,
      completions: 89200,
      rating: 4.9,
      weeklyGrowth: 12.5,
      totalVideos: 3,
      totalDuration: 480
    },
    tags: ["writing", "content-creation", "coding", "research"]
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-powered code editor that helps you code 10x faster with intelligent suggestions",
    category: "code-assistants",
    rank: 2,
    stats: {
      views: 98700,
      completions: 67300,
      rating: 4.8,
      weeklyGrowth: 18.2,
      totalVideos: 2,
      totalDuration: 285
    },
    tags: ["coding", "programming", "development", "ide"]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Create stunning AI-generated artwork and images from text descriptions",
    category: "image-generators",
    rank: 3,
    stats: {
      views: 87500,
      completions: 54200,
      rating: 4.7,
      weeklyGrowth: 8.9,
      totalVideos: 1,
      totalDuration: 150
    },
    tags: ["art", "image-generation", "creative", "design"]
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant with strong reasoning capabilities and safety focus",
    category: "chatbots",
    rank: 4,
    stats: {
      views: 76200,
      completions: 48900,
      rating: 4.6,
      weeklyGrowth: 15.7,
      totalVideos: 2,
      totalDuration: 315
    },
    tags: ["reasoning", "analysis", "research", "writing"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster and with fewer errors",
    category: "code-assistants",
    rank: 5,
    stats: {
      views: 65800,
      completions: 42100,
      rating: 4.5,
      weeklyGrowth: 6.3,
      totalVideos: 1,
      totalDuration: 90
    },
    tags: ["coding", "programming", "github", "autocomplete"]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Supercharge your Notion workspace with AI-powered writing and organization",
    category: "productivity",
    rank: 6,
    stats: {
      views: 58400,
      completions: 38700,
      rating: 4.4,
      weeklyGrowth: 9.8,
      totalVideos: 1,
      totalDuration: 120
    },
    tags: ["productivity", "writing", "organization", "workspace"]
  }
];

const TRENDING_CATEGORIES = [
  { name: "Code Assistants", growth: "+23%", tools: 3 },
  { name: "Image Generators", growth: "+18%", tools: 4 },
  { name: "AI Chatbots", growth: "+15%", tools: 3 },
  { name: "Productivity", growth: "+12%", tools: 5 }
];

const PLATFORM_STATS = [
  {
    label: "Total Views",
    value: "2.1M+",
    icon: Eye,
    color: "#00b894",
    growth: "+24%"
  },
  {
    label: "Course Completions",
    value: "450K+",
    icon: Award,
    color: "#6c5ce7",
    growth: "+31%"
  },
  {
    label: "Active Learners",
    value: "89K+",
    icon: Users,
    color: "#fd79a8",
    growth: "+18%"
  },
  {
    label: "Watch Hours",
    value: "125K+",
    icon: Clock,
    color: "#ff9f43",
    growth: "+27%"
  }
];

export default function PopularPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [sortBy, setSortBy] = useState<"rank" | "views" | "growth">("rank");

  const sortedTools = [...POPULAR_TOOLS].sort((a, b) => {
    switch (sortBy) {
      case "views":
        return b.stats.views - a.stats.views;
      case "growth":
        return b.stats.weeklyGrowth - a.stats.weeklyGrowth;
      default:
        return a.rank - b.rank;
    }
  });

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m`;
  };

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
                <TrendingUp className="mr-2 h-4 w-4" />
                Most Popular
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Trending AI Tools
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  This Week
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover the most popular AI tools based on views, completions, and community engagement. 
                See what's trending and join thousands of learners mastering these tools.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="bg-black py-12 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PLATFORM_STATS.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="bg-black border-gray-800 p-6 text-center">
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: stat.color }} />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                    <div className="text-xs text-green-400">{stat.growth} this week</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-black py-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              {/* Sort Options */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Sort by:</span>
                <div className="flex gap-2">
                  {[
                    { key: "rank", label: "Rank" },
                    { key: "views", label: "Views" },
                    { key: "growth", label: "Growth" }
                  ].map((option) => (
                    <Button
                      key={option.key}
                      variant="outline"
                      size="sm"
                      onClick={() => setSortBy(option.key as any)}
                      className={sortBy === option.key ? "border-purple-500 text-purple-400 hover:bg-gray-900" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 mr-2">View:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "border-purple-500 text-purple-400 hover:bg-gray-900" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "border-purple-500 text-purple-400 hover:bg-gray-900" : "border-gray-700 text-gray-300 hover:bg-gray-800"}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Tools */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Top AI Tools
                </h2>
                
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {sortedTools.map((tool) => (
                      <div key={tool.id} className="relative">
                        <div className="absolute -top-2 -left-2 z-10">
                          <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                            #{tool.rank}
                          </Badge>
                        </div>
                        <Card className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors h-full">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                            <div className="flex items-center gap-1 text-yellow-400">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-sm">{tool.stats.rating}</span>
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{tool.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tool.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-black border-gray-700 text-gray-400 text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center mb-4">
                            <div>
                              <div className="text-sm font-semibold text-white">{formatNumber(tool.stats.views)}</div>
                              <div className="text-xs text-gray-500">Views</div>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-green-400">+{tool.stats.weeklyGrowth}%</div>
                              <div className="text-xs text-gray-500">Growth</div>
                            </div>
                          </div>
                          <Button 
                            variant="ghost"
                            className="w-full text-purple-400 hover:text-purple-300 hover:bg-transparent"
                            size="sm"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Start Learning
                          </Button>
                        </Card>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sortedTools.map((tool) => (
                      <Card key={tool.id} className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors">
                        <div className="flex items-center gap-6">
                          {/* Rank */}
                          <div className="text-center min-w-[60px]">
                            <div className="text-2xl font-bold text-purple-400">#{tool.rank}</div>
                            <div className="text-xs text-gray-500">RANK</div>
                          </div>
                          
                          {/* Tool Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                              <div className="flex items-center gap-1 text-yellow-400">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="text-sm">{tool.stats.rating}</span>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{tool.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {tool.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="outline" className="bg-black border-gray-700 text-gray-400 text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {/* Stats */}
                          <div className="hidden sm:grid grid-cols-2 gap-4 text-center min-w-[200px]">
                            <div>
                              <div className="text-lg font-semibold text-white">{formatNumber(tool.stats.views)}</div>
                              <div className="text-xs text-gray-500">VIEWS</div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold text-green-400">+{tool.stats.weeklyGrowth}%</div>
                              <div className="text-xs text-gray-500">GROWTH</div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold text-white">{tool.stats.totalVideos}</div>
                              <div className="text-xs text-gray-500">VIDEOS</div>
                            </div>
                            <div>
                              <div className="text-lg font-semibold text-white">{formatDuration(tool.stats.totalDuration)}</div>
                              <div className="text-xs text-gray-500">DURATION</div>
                            </div>
                          </div>
                          
                          {/* Action */}
                          <Button 
                            variant="ghost"
                            className="text-purple-400 hover:text-purple-300 hover:bg-transparent"
                            size="sm"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Learn
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Trending Categories */}
                <Card className="bg-black border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Trending Categories</h3>
                  <div className="space-y-3">
                    {TRENDING_CATEGORIES.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-white">{category.name}</div>
                          <div className="text-xs text-gray-500">{category.tools} tools</div>
                        </div>
                        <div className="text-sm font-medium text-green-400">{category.growth}</div>
                      </div>
                    ))}
                  </div>
                </Card>
                
                {/* Quick Stats */}
                <Card className="bg-black border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">This Week</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">+24% Growth</div>
                        <div className="text-xs text-gray-500">Overall platform</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Video className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">12 New Videos</div>
                        <div className="text-xs text-gray-500">Added this week</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        <Users className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">5.2K New Users</div>
                        <div className="text-xs text-gray-500">Joined this week</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 