"use client";

import React from "react";
import { use } from "react";
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
  params: Promise<{
    id: string;
  }>;
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
  research: { color: "#5f27cd", bgColor: "#5f27cd20" },
  automation: { color: "#a29bfe", bgColor: "#a29bfe20" },
  translation: { color: "#74b9ff", bgColor: "#74b9ff20" },
  finance: { color: "#55a3ff", bgColor: "#55a3ff20" },
  healthcare: { color: "#fd79a8", bgColor: "#fd79a820" },
  education: { color: "#00b894", bgColor: "#00b89420" },
  marketing: { color: "#ff7675", bgColor: "#ff767520" },
  security: { color: "#636e72", bgColor: "#636e7220" },
  gaming: { color: "#e84393", bgColor: "#e8439320" }
} as const;

const DEFAULT_COLOR = { color: "#6c5ce7", bgColor: "#6c5ce720" } as const;

const TOOL_BORDER_COLORS = ["orange", "pink", "blue", "purple", "teal"] as const;

export default function CategoryPage({ params }: CategoryPageProps) {
  // Use React.use() to unwrap the params Promise
  const { id } = use(params);
  const category = getCategoryById(id);
  
  if (!category) {
    notFound();
  }
  
  const tools = getToolsByCategory(id);
  const colorSet = CATEGORY_COLORS[category.id as keyof typeof CATEGORY_COLORS] || DEFAULT_COLOR;
  
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Category Header with Enhanced Design */}
        <div className="relative bg-black border-b border-gray-800">
          {/* Background gradient */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${colorSet.color}, transparent 70%)`
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
                Back to Categories
              </Button>
            </Link>
            
            <div className="flex items-center gap-6 mb-8">
              {category.icon && (
                <div 
                  className="rounded-xl p-4 border border-gray-800 backdrop-blur-sm" 
                  style={{ 
                    backgroundColor: colorSet.bgColor,
                    boxShadow: `0 0 20px ${colorSet.color}20`
                  }}
                >
                  <Icon 
                    name={category.icon} 
                    className="h-10 w-10" 
                    style={{ color: colorSet.color }} 
                  />
                </div>
              )}
              <div>
                <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {category.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div 
                    className="px-3 py-1 rounded-full text-sm font-medium border"
                    style={{ 
                      backgroundColor: colorSet.bgColor,
                      borderColor: `${colorSet.color}30`,
                      color: colorSet.color
                    }}
                  >
                    {tools.length} {tools.length === 1 ? 'tool' : 'tools'} available
                  </div>
                  <div className="h-1 w-1 rounded-full bg-gray-600" />
                  <span className="text-gray-400 text-sm">
                    Learn in 90 seconds
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-4xl leading-relaxed text-lg">
              {category.description}
            </p>
          </div>
        </div>
        
        {/* Tools Grid with Enhanced Background */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            {tools.length > 0 ? (
              <>
                <div className="mb-10">
                  <h2 className="text-3xl font-bold mb-3 text-white">
                    Featured Tools
                  </h2>
                  <p className="text-gray-400 text-lg">
                    Master these AI tools with our step-by-step video tutorials
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {tools.map((tool, index) => {
                    const colorIndex = index % TOOL_BORDER_COLORS.length;
                    const currentColor = TOOL_BORDER_COLORS[colorIndex];
                    
                    return (
                      <div key={tool.id} className="group">
                        <ToolCard 
                          tool={tool} 
                          borderColor={currentColor}
                          customColor={colorSet.color}
                        />
                      </div>
                    );
                  })}
                </div>
                
                {/* Call to Action Section */}
                <div className="mt-16 text-center">
                  <div 
                    className="rounded-2xl p-8 border border-gray-800 backdrop-blur-sm"
                    style={{ backgroundColor: `${colorSet.color}05` }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Ready to master {category.name.toLowerCase()}?
                    </h3>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                      Start with any tool above and learn the fundamentals in just 90 seconds. 
                      Our tutorials are designed to get you productive quickly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        className="text-white border-2 transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: colorSet.color,
                          borderColor: colorSet.color
                        }}
                        size="lg"
                      >
                        Start Learning Now
                      </Button>
                      <Link href="/">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                        >
                          Explore More Categories
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <EnhancedEmptyState 
                categoryName={category.name}
                colorSet={colorSet}
              />
            )}
          </div>
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

// Enhanced empty state component
function EnhancedEmptyState({ categoryName, colorSet }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div 
        className="rounded-2xl p-8 mb-8 border border-gray-800 backdrop-blur-sm"
        style={{ 
          backgroundColor: `${colorSet.color}05`,
          boxShadow: `0 0 30px ${colorSet.color}10`
        }}
      >
        <Icon 
          name="construction" 
          className="h-16 w-16 mx-auto mb-4" 
          style={{ color: colorSet.color }} 
        />
      </div>
      
      <h3 className="text-3xl font-bold mb-4 text-white">
        Coming Soon!
      </h3>
      
      <p className="text-gray-400 text-center max-w-lg leading-relaxed mb-8 text-lg">
        We're working hard to bring you the best {categoryName.toLowerCase()} tools. 
        Check back soon or explore other categories to discover amazing AI tools.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button 
            className="text-white border-2 transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: colorSet.color,
              borderColor: colorSet.color
            }}
            size="lg"
          >
            Explore Other Categories
          </Button>
        </Link>
        <Button 
          variant="outline" 
          size="lg"
          className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
        >
          Get Notified
        </Button>
      </div>
    </div>
  );
} 