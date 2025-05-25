"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Search, Sparkles, DollarSign, Clock, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { tools, categories } from "@/lib/data";

interface ToolSuggestion {
  id: string;
  name: string;
  description: string;
  category: string;
  estimatedCost: "free" | "freemium" | "paid";
  costRange?: string;
  matchScore: number;
}

interface MultiStageInputProps {
  onToolSelect?: (tool: ToolSuggestion) => void;
  className?: string;
}

const COST_COLORS = {
  free: "bg-green-500/20 text-green-400 border-green-500/30",
  freemium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  paid: "bg-red-500/20 text-red-400 border-red-500/30",
} as const;

const COST_LABELS = {
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
} as const;

export function MultiStageInput({ onToolSelect, className = "" }: MultiStageInputProps) {
  const [currentStage, setCurrentStage] = useState<"input" | "suggestions" | "details">(
    "input"
  );
  const [query, setQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState<ToolSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock cost data - in real app this would come from API
  const toolCosts: Record<string, { cost: ToolSuggestion["estimatedCost"]; range?: string }> = {
    chatgpt: { cost: "freemium", range: "$0-20/month" },
    claude: { cost: "freemium", range: "$0-20/month" },
    midjourney: { cost: "paid", range: "$10-60/month" },
    dalle: { cost: "freemium", range: "$0-15/month" },
    "github-copilot": { cost: "paid", range: "$10/month" },
    "notion-ai": { cost: "freemium", range: "$0-10/month" },
  };

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];

    const queryLower = query.toLowerCase();
    const matchedTools: ToolSuggestion[] = [];

    tools.forEach((tool) => {
      let matchScore = 0;
      
      // Name match (highest priority)
      if (tool.name.toLowerCase().includes(queryLower)) {
        matchScore += 10;
      }
      
      // Description match
      if (tool.description.toLowerCase().includes(queryLower)) {
        matchScore += 5;
      }
      
      // Category match
      const category = categories.find(c => c.id === tool.category);
      if (category?.name.toLowerCase().includes(queryLower)) {
        matchScore += 3;
      }

      // Keyword matching for common use cases
      const keywords = {
        "write": ["writing", "content", "text", "blog", "article"],
        "code": ["programming", "development", "coding", "software"],
        "image": ["picture", "photo", "art", "visual", "design"],
        "chat": ["conversation", "talk", "assistant", "help"],
        "productivity": ["work", "efficient", "organize", "manage"],
      };

      Object.entries(keywords).forEach(([key, values]) => {
        if (queryLower.includes(key) || values.some(v => queryLower.includes(v))) {
          if (tool.description.toLowerCase().includes(key) || 
              tool.category.includes(key) ||
              values.some(v => tool.description.toLowerCase().includes(v))) {
            matchScore += 2;
          }
        }
      });

      if (matchScore > 0) {
        const costInfo = toolCosts[tool.id] || { cost: "freemium" as const };
        matchedTools.push({
          id: tool.id,
          name: tool.name,
          description: tool.description,
          category: tool.category,
          estimatedCost: costInfo.cost,
          costRange: costInfo.range,
          matchScore,
        });
      }
    });

    return matchedTools
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 6);
  }, [query]);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setCurrentStage("suggestions");
    setIsLoading(false);
  }, [query]);

  const handleToolSelect = useCallback((tool: ToolSuggestion) => {
    setSelectedTool(tool);
    setCurrentStage("details");
    onToolSelect?.(tool);
  }, [onToolSelect]);

  const handleReset = useCallback(() => {
    setCurrentStage("input");
    setQuery("");
    setSelectedTool(null);
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && query.trim()) {
      handleSearch();
    }
  }, [handleSearch, query]);

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Stage 1: Input */}
      {currentStage === "input" && (
        <div className="space-y-4">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-2xl font-bold text-white">What do you want to build?</h2>
            <p className="text-gray-400">
              Tell us your project idea and we'll suggest the perfect AI tools with cost estimates
            </p>
          </div>
          
          <div className="relative">
            <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-400" />
            <Input
              type="text"
              placeholder="e.g., I want to create a blog with AI-generated images and content..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full h-14 bg-black border-gray-800 pl-12 pr-32 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Button
              onClick={handleSearch}
              disabled={!query.trim() || isLoading}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-6"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Find Tools
                </>
              )}
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {["Write a blog", "Create app", "Generate images", "Build chatbot", "Analyze data"].map((suggestion) => (
              <Button
                key={suggestion}
                variant="outline"
                size="sm"
                onClick={() => setQuery(suggestion)}
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Stage 2: Suggestions */}
      {currentStage === "suggestions" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">Recommended Tools</h3>
              <p className="text-gray-400">Based on: "{query}"</p>
            </div>
            <Button
              variant="ghost"
              onClick={handleReset}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4 mr-2" />
              New Search
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((tool) => (
              <Card
                key={tool.id}
                className="bg-black border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer group"
                onClick={() => handleToolSelect(tool)}
              >
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {tool.name}
                    </h4>
                    <Badge className={COST_COLORS[tool.estimatedCost]}>
                      {COST_LABELS[tool.estimatedCost]}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 capitalize">
                      {tool.category.replace("-", " ")}
                    </span>
                    {tool.costRange && (
                      <div className="flex items-center text-gray-400">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {tool.costRange}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center text-purple-400 text-sm font-medium">
                    View Details
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {suggestions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">No tools found for your query. Try a different search term.</p>
            </div>
          )}
        </div>
      )}

      {/* Stage 3: Tool Details */}
      {currentStage === "details" && selectedTool && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setCurrentStage("suggestions")}
              className="text-gray-400 hover:text-white"
            >
              ← Back to Results
            </Button>
            <Button
              variant="ghost"
              onClick={handleReset}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4 mr-2" />
              New Search
            </Button>
          </div>

          <Card className="bg-black border-gray-800">
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedTool.name}</h3>
                  <p className="text-gray-400 capitalize">{selectedTool.category.replace("-", " ")}</p>
                </div>
                <Badge className={COST_COLORS[selectedTool.estimatedCost]} variant="outline">
                  {COST_LABELS[selectedTool.estimatedCost]}
                </Badge>
              </div>
              
              <p className="text-gray-300">{selectedTool.description}</p>
              
              {selectedTool.costRange && (
                <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-400" />
                  <div>
                    <p className="text-white font-medium">Estimated Cost</p>
                    <p className="text-gray-400">{selectedTool.costRange}</p>
                  </div>
                </div>
              )}
              
              <div className="flex space-x-3">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  View Tutorials
                </Button>
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
} 