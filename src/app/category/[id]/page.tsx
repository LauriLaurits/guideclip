"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToolCard } from "@/components/tool-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { getCategoryById, getToolsByCategory } from "@/lib/data";
import { Icon } from "@/components/ui/icon";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

// Category color configuration
const CATEGORY_COLORS = {
  chatbots: { color: "#ff9f43", bgColor: "#ff9f4320" },
  "image-generators": { color: "#fd79a8", bgColor: "#fd79a820" },
  productivity: { color: "#0984e3", bgColor: "#0984e320" },
  "code-assistants": { color: "#6c5ce7", bgColor: "#6c5ce720" },
  writing: { color: "#00cec9", bgColor: "#00cec920" },
  "audio-processing": { color: "#fdcb6e", bgColor: "#fdcb6e20" },
  "video-editing": { color: "#e17055", bgColor: "#e1705520" },
  "data-analysis": { color: "#00b894", bgColor: "#00b89420" },
  research: { color: "#5f27cd", bgColor: "#5f27cd20" }
} as const;

const DEFAULT_COLOR = { color: "#6c5ce7", bgColor: "#6c5ce720" } as const;

const TOOL_BORDER_COLORS = ["orange", "pink", "blue", "purple", "teal"] as const;

export default function CategoryPage({ params }: CategoryPageProps) {
  // Handle params as a Promise in newer Next.js
  const unwrappedParams = params as { id: string };
  const category = getCategoryById(unwrappedParams.id);
  
  if (!category) {
    notFound();
  }
  
  const tools = getToolsByCategory(unwrappedParams.id);
  const colorSet = CATEGORY_COLORS[category.id as keyof typeof CATEGORY_COLORS] || DEFAULT_COLOR;
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Category Header */}
        <div className="bg-black border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-16 xl:px-24">
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm" 
                className="mb-4 hover:bg-gray-900 text-gray-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              {category.icon && (
                <div 
                  className="rounded-lg p-3" 
                  style={{ backgroundColor: colorSet.bgColor }}
                >
                  <Icon 
                    name={category.icon} 
                    className="h-8 w-8" 
                    style={{ color: colorSet.color }} 
                  />
                </div>
              )}
              <div>
                <h1 className="text-4xl font-bold text-white">{category.name}</h1>
                <p className="text-gray-400 mt-2">{tools.length} tools available</p>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
        
        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-16 xl:px-24">
          {tools.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2 text-white">
                  Available Tools ({tools.length})
                </h2>
                <p className="text-gray-400">
                  Select a tool to view video tutorials and learn how to use it effectively
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tools.map((tool, index) => {
                  const colorIndex = index % TOOL_BORDER_COLORS.length;
                  const currentColor = TOOL_BORDER_COLORS[colorIndex];
                  
                  return (
                    <ToolCard 
                      key={tool.id} 
                      tool={tool} 
                      borderColor={currentColor}
                      customColor={colorSet.color}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <EmptyState 
              categoryName={category.name}
              colorSet={colorSet}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Empty state component for better organization
interface EmptyStateProps {
  categoryName: string;
  colorSet: { color: string; bgColor: string };
}

function EmptyState({ categoryName, colorSet }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-black rounded-lg border border-gray-800">
      <div 
        className="rounded-lg p-4 mb-6" 
        style={{ backgroundColor: colorSet.bgColor }}
      >
        <Icon 
          name="info" 
          className="h-12 w-12" 
          style={{ color: colorSet.color }} 
        />
      </div>
      
      <h3 className="text-2xl font-medium mb-3 text-white">
        No tools found
      </h3>
      
      <p className="text-gray-400 text-center max-w-md leading-relaxed mb-6">
        We don't have any tools in the {categoryName} category yet. 
        Check back soon or explore other categories to discover amazing AI tools.
      </p>
      
      <Link href="/">
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
        >
          Explore Categories
        </Button>
      </Link>
    </div>
  );
} 