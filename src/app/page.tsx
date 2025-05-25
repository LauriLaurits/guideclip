"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryCard } from "@/components/category-card";
import { MultiStageInput } from "@/components/multi-stage-input";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Import the ToolSuggestion type from the multi-stage-input component
interface ToolSuggestion {
  id: string;
  name: string;
  description: string;
  category: string;
  estimatedCost: "free" | "freemium" | "paid";
  costRange?: string;
  matchScore: number;
}

// Constants for better maintainability
const ADDITIONAL_CATEGORIES = [
  {
    id: "audio-processing",
    name: "Audio Processing",
    description: "AI tools for audio enhancement, transcription, and voice synthesis",
    icon: "headphones"
  },
  {
    id: "video-editing",
    name: "Video Editing",
    description: "AI-powered video editing, enhancement and creation tools",
    icon: "film"
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    description: "Tools that help analyze and visualize complex data",
    icon: "bar-chart"
  },
  {
    id: "research",
    name: "Research Assistants",
    description: "AI tools that help with literature review and research",
    icon: "search"
  }
] as const;

const ACCENT_COLORS = [
  "orange", "pink", "blue", "purple", "teal", 
  "amber", "emerald", "indigo", "cyan"
] as const;

const COLOR_MAP = {
  orange: "#ff9f43",
  pink: "#fd79a8",
  blue: "#0984e3",
  purple: "#6c5ce7",
  teal: "#00cec9",
  amber: "#fdcb6e",
  emerald: "#00b894",
  indigo: "#5f27cd",
  cyan: "#00cec9"
} as const;

const WHY_GUIDECLIP_FEATURES = [
  { 
    title: "Quick & Concise", 
    desc: "Learn essential skills in under 3 minutes", 
    color: "#ff9f43" 
  },
  { 
    title: "Practical Tutorials", 
    desc: "Focus on real-world applications", 
    color: "#fd79a8" 
  },
  { 
    title: "Latest AI Tools", 
    desc: "Stay updated with cutting-edge technology", 
    color: "#0984e3" 
  },
  { 
    title: "Step-by-Step Guidance", 
    desc: "Easy to follow instructions for all levels", 
    color: "#6c5ce7" 
  }
] as const;

// Realistic dummy data for popular tools
const POPULAR_VIDEOS = [
  { 
    title: "ChatGPT: Complete Beginner's Guide", 
    duration: "2:15", 
    views: "12.4k", 
    color: "#ff9f43",
    description: "Master ChatGPT basics, prompting techniques, and productivity tips"
  },
  { 
    title: "Cursor AI: Code 10x Faster", 
    duration: "1:45", 
    views: "8.7k", 
    color: "#fd79a8",
    description: "Learn Cursor's AI-powered coding features and shortcuts"
  },
  { 
    title: "Midjourney: Create Stunning Art", 
    duration: "2:30", 
    views: "15.2k", 
    color: "#0984e3",
    description: "Generate professional artwork with advanced prompting"
  },
  { 
    title: "Claude: Advanced Reasoning AI", 
    duration: "1:55", 
    views: "6.3k", 
    color: "#00cec9",
    description: "Leverage Claude for complex analysis and writing tasks"
  },
  { 
    title: "GitHub Copilot: Setup & Tips", 
    duration: "1:30", 
    views: "9.8k", 
    color: "#6c5ce7",
    description: "Install, configure, and maximize GitHub Copilot"
  },
  { 
    title: "Notion AI: Supercharge Your Workspace", 
    duration: "2:00", 
    views: "7.1k", 
    color: "#fdcb6e",
    description: "Automate writing, planning, and organization with Notion AI"
  }
] as const;

export default function Home() {
  const router = useRouter();
  const allCategories = [...categories, ...ADDITIONAL_CATEGORIES];
  
  const handleToolSelect = (tool: ToolSuggestion) => {
    // Navigate to the tool page
    router.push(`/tool/${tool.id}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-block bg-purple-600/20 border border-purple-500/30 px-4 py-2 text-sm rounded-full mb-2 w-fit">
                  <Sparkles className="inline h-4 w-4 mr-2 text-purple-400" />
                  <span className="text-purple-400">Quick & Easy AI Learning</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Master AI Tools <br />
                  <span className="text-purple-400">in 90 Seconds</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Concise video tutorials to help you master powerful AI tools and get productive instantly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                    Start Learning
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <Play className="mr-2 h-4 w-4" /> 
                    Watch Demo
                  </Button>
                </div>
              </div>
              
              <div className="relative mx-auto w-full max-w-[500px]">
                <div className="aspect-video overflow-hidden rounded-lg bg-black border border-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-purple-600/20 p-4">
                      <Play className="h-10 w-10 text-purple-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                    <p className="text-sm font-medium">Learn ChatGPT in 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Tool Finder Section */}
        <section className="w-full py-20 bg-gradient-to-br from-gray-900/50 via-purple-900/20 to-blue-900/30 border-y border-gray-800 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 px-6 py-3 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <span className="text-purple-400 font-medium">AI-Powered Tool Discovery</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Find Your Perfect AI Tool
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Discover the right AI tools for your needs with our intelligent recommendation system. 
                Get personalized suggestions with cost estimates and detailed comparisons.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-sm font-medium">Free Tools Available</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-orange-400 text-sm font-medium">Cost Transparency</span>
                </div>
                <div className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-cyan-400 text-sm font-medium">Smart Matching</span>
                </div>
              </div>
            </div>
            
            <MultiStageInput onToolSelect={handleToolSelect} />
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="w-full py-16 px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Browse by Category
              </h2>
              <p className="max-w-[700px] text-gray-400">
                Explore our collection of AI tools organized by category
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allCategories.map((category, index) => {
                const colorIndex = index % ACCENT_COLORS.length;
                const currentColor = ACCENT_COLORS[colorIndex];
                
                return (
                  <CategoryCard 
                    key={category.id} 
                    category={category} 
                    borderColor={currentColor}
                    customColor={COLOR_MAP[currentColor]}
                    stats={`${Math.floor(Math.random() * 12) + 2} tools • ${Math.floor(Math.random() * 20) + 5} videos`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Features & Popular Section */}
        <section className="w-full py-16 border-t border-gray-900 px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
              {/* Why GuideClip */}
              <div className="rounded-lg bg-black border border-gray-800 p-6">
                <h3 className="text-2xl font-bold mb-6">Why GuideClip?</h3>
                <ul className="space-y-4">
                  {WHY_GUIDECLIP_FEATURES.map((item, index) => (
                    <li key={index} className="flex">
                      <div 
                        className="mr-3 flex h-6 w-6 items-center justify-center rounded-full" 
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <div 
                          className="h-3 w-3 rounded-full" 
                          style={{ backgroundColor: item.color }} 
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Videos */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Popular This Week</h3>
                <div className="space-y-4">
                  {POPULAR_VIDEOS.slice(0, 4).map((item, index) => (
                    <Link href="#" key={index} className="block group">
                      <div className="flex items-center rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors hover:border-gray-600">
                        <div 
                          className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full" 
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <Play className="h-6 w-6" style={{ color: item.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                            {item.description}
                          </p>
                          <div className="flex items-center text-sm text-gray-400">
                            <span>{item.duration}</span>
                            <span className="mx-2">•</span>
                            <span>{item.views} views</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Show All Popular Videos Button */}
                <div className="text-center pt-4">
                  <Button 
                    variant="outline" 
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    View All Popular Videos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
