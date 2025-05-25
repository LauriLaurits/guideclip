"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { ToolCard } from "@/components/tool-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { getCategoryById, getToolsByCategory } from "@/lib/data";
import { Icon } from "@/components/ui/icon";

type Props = {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: Props) {
  // Handle params as a Promise in newer Next.js
  const unwrappedParams = params as { id: string };
  const category = getCategoryById(unwrappedParams.id);
  
  if (!category) {
    notFound();
  }
  
  const tools = getToolsByCategory(unwrappedParams.id);

  // Determine color based on category id
  const categoryColors = {
    chatbots: { color: "#ff9f43", bgColor: "#ff9f4320" },
    "image-generators": { color: "#fd79a8", bgColor: "#fd79a820" },
    productivity: { color: "#0984e3", bgColor: "#0984e320" },
    "code-assistants": { color: "#6c5ce7", bgColor: "#6c5ce720" },
    writing: { color: "#00cec9", bgColor: "#00cec920" },
    "audio-processing": { color: "#fdcb6e", bgColor: "#fdcb6e20" },
    "video-editing": { color: "#e17055", bgColor: "#e1705520" },
    "data-analysis": { color: "#00b894", bgColor: "#00b89420" },
    research: { color: "#5f27cd", bgColor: "#5f27cd20" }
  };
  
  const defaultColor = { color: "#6c5ce7", bgColor: "#6c5ce720" };
  const colorSet = categoryColors[category.id as keyof typeof categoryColors] || defaultColor;
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-black border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-16 xl:px-24">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-4 hover:bg-gray-900">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              {category.icon && (
                <div className="rounded-md p-3" style={{ backgroundColor: colorSet.bgColor }}>
                  <Icon name={category.icon} className="h-6 w-6" style={{ color: colorSet.color }} />
                </div>
              )}
              <h1 className="text-3xl font-bold">{category.name}</h1>
            </div>
            
            <p className="text-gray-400 max-w-3xl">{category.description}</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-16 xl:px-24">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Available Tools ({tools.length})</h2>
            <p className="text-gray-400">
              Select a tool to view video tutorials
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool, index) => {
              const colors = ["orange", "pink", "blue", "purple", "teal"] as const;
              const colorIndex = index % colors.length;
              const currentColor = colors[colorIndex];
              
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
          
          {tools.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 bg-black rounded-lg border border-gray-800">
              <div className="rounded-md p-4 mb-4" style={{ backgroundColor: colorSet.bgColor }}>
                <Icon name="info" className="h-8 w-8" style={{ color: colorSet.color }} />
              </div>
              <h3 className="text-xl font-medium mb-2">No tools found</h3>
              <p className="text-gray-400 text-center max-w-md">
                We don't have any tools in this category yet. Check back soon or explore other categories.
              </p>
              <Link href="/" className="mt-4">
                <Button className="bg-black border border-gray-800 hover:bg-gray-900 text-white">
                  Explore Categories
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <footer className="w-full border-t border-gray-900 bg-black py-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GuideClip. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 