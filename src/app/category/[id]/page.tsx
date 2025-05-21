"use client";

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
  const category = getCategoryById(params.id);
  
  if (!category) {
    notFound();
  }
  
  const tools = getToolsByCategory(params.id);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted/10 border-b border-border/40">
          <div className="container px-4 py-8 md:px-6 md:py-12">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-4 hover:bg-muted/30">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              {category.icon && (
                <div className="rounded-md bg-primary/10 p-3">
                  <Icon name={category.icon} className="h-6 w-6 text-primary" />
                </div>
              )}
              <h1 className="text-3xl font-bold">{category.name}</h1>
            </div>
            
            <p className="text-muted-foreground max-w-3xl">{category.description}</p>
          </div>
        </div>
        
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Available Tools ({tools.length})</h2>
            <p className="text-muted-foreground">
              Select a tool to view video tutorials
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          {tools.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 bg-muted/10 rounded-lg border border-border/40">
              <div className="rounded-md bg-primary/10 p-4 mb-4">
                <Icon name="info" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">No tools found</h3>
              <p className="text-muted-foreground text-center max-w-md">
                We don't have any tools in this category yet. Check back soon or explore other categories.
              </p>
              <Link href="/" className="mt-4">
                <Button>Explore Categories</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <footer className="w-full border-t border-border/40 bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GuideClip. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 