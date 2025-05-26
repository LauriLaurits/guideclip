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
import { useState } from "react";

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

// Realistic dummy data for popular tools
const POPULAR_VIDEOS = [
  { 
    title: "Excel: Master Formulas & Functions", 
    duration: "1:30", 
    views: "45.2k",
    color: "#ff9f43",
    description: "Essential Excel formulas every professional should know"
  },
  { 
    title: "Stripe: Setup Payments in 2 Minutes", 
    duration: "2:00", 
    views: "28.7k",
    color: "#fd79a8",
    description: "Complete guide to integrating Stripe payments"
  },
  { 
    title: "Figma: UI Design Fundamentals", 
    duration: "1:45", 
    views: "38.1k",
    color: "#0984e3",
    description: "Create professional UI designs with Figma basics"
  },
  { 
    title: "ChatGPT: Advanced Prompting Tips", 
    duration: "2:15", 
    views: "52.3k",
    color: "#00cec9",
    description: "Master ChatGPT with advanced prompting techniques"
  },
  { 
    title: "Notion: Database Setup Guide", 
    duration: "1:55", 
    views: "31.8k",
    color: "#6c5ce7",
    description: "Build powerful databases in Notion workspace"
  },
  { 
    title: "Google Analytics: Track Everything", 
    duration: "2:30", 
    views: "24.6k",
    color: "#fdcb6e",
    description: "Set up GA4 and understand your website data"
  }
] as const;

// Realistic dummy data for new AI tools
const NEW_AI_TOOLS = [
  { 
    title: "ChatGPT-4o: Advanced Conversations", 
    duration: "2:15", 
    addedDate: "2 days ago",
    color: "#00b894",
    description: "Master the latest ChatGPT model with advanced reasoning and multimodal capabilities",
    tags: ["AI", "Chat", "New"]
  },
  { 
    title: "Claude 3.5 Sonnet: Code & Analysis", 
    duration: "1:50", 
    addedDate: "5 days ago",
    color: "#6c5ce7",
    description: "Leverage Claude's enhanced coding and analytical capabilities for complex tasks",
    tags: ["AI", "Code", "Analysis"]
  },
  { 
    title: "Midjourney V6: Image Generation", 
    duration: "2:30", 
    addedDate: "1 week ago",
    color: "#fd79a8",
    description: "Create stunning AI-generated images with the latest Midjourney features",
    tags: ["AI", "Image", "Creative"]
  },
  { 
    title: "GitHub Copilot Chat: AI Coding", 
    duration: "1:40", 
    addedDate: "1 week ago",
    color: "#ff9f43",
    description: "Boost your coding productivity with AI-powered code suggestions and chat",
    tags: ["AI", "Development", "Code"]
  }
] as const;

// Realistic dummy data for new tools
const NEW_TOOLS = [
  { 
    title: "Perplexity: Research Made Easy", 
    duration: "1:55", 
    addedDate: "1 week ago",
    color: "#fd79a8",
    description: "AI-powered search engine that provides accurate, real-time answers with source citations for comprehensive research",
    tags: ["AI", "Research", "Search"]
  },
  { 
    title: "RunwayML: Video Generation", 
    duration: "2:25", 
    addedDate: "2 weeks ago",
    color: "#ff9f43",
    description: "Create stunning AI-generated videos from text prompts and transform your creative workflow with advanced video tools",
    tags: ["AI", "Video", "Creative"]
  },
  { 
    title: "Framer: No-Code Website Builder", 
    duration: "2:10", 
    addedDate: "2 weeks ago",
    color: "#00cec9",
    description: "Build responsive, interactive websites without coding using Framer's powerful design and animation capabilities",
    tags: ["Design", "No-Code", "Web"]
  },
  { 
    title: "Linear: Project Management", 
    duration: "1:35", 
    addedDate: "3 weeks ago",
    color: "#a29bfe",
    description: "Streamline your team's workflow with Linear's fast, intuitive project management and issue tracking system",
    tags: ["Productivity", "Management", "Team"]
  }
] as const;

// Deterministic stats for categories to avoid hydration mismatch
const CATEGORY_STATS = {
  // AI Categories
  "ai-chatbots": "8 tools • 24 videos",
  "ai-image-generators": "12 tools • 36 videos", 
  "ai-code-assistants": "6 tools • 18 videos",
  "ai-writing": "10 tools • 28 videos",
  
  // Design & Creative
  "design-tools": "15 tools • 42 videos",
  "video-editing": "9 tools • 27 videos",
  "photo-editing": "8 tools • 24 videos",
  
  // Business & Finance
  "payment-processing": "5 tools • 15 videos",
  "accounting-finance": "7 tools • 21 videos",
  "spreadsheets": "6 tools • 18 videos",
  
  // Development & Tech
  "development-tools": "12 tools • 36 videos",
  "databases": "8 tools • 24 videos",
  "cloud-platforms": "10 tools • 30 videos",
  
  // Productivity & Organization
  "productivity-tools": "14 tools • 42 videos",
  "project-management": "9 tools • 27 videos",
  "communication": "7 tools • 21 videos",
  
  // Marketing & Analytics
  "marketing-tools": "11 tools • 33 videos",
  "analytics": "8 tools • 24 videos",
  "email-marketing": "6 tools • 18 videos",
  
  // E-commerce & Sales
  "ecommerce": "9 tools • 27 videos",
  "crm": "7 tools • 21 videos"
} as const;

export default function Home() {
  const router = useRouter();
  const allCategories = [...categories];
  const [showAllCategories, setShowAllCategories] = useState(false);
  const displayedCategories = showAllCategories ? allCategories : allCategories.slice(0, 8);
  
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
                <div className="inline-block bg-blue-600/20 border border-blue-500/30 px-4 py-2 text-sm rounded-full mb-2 w-fit">
                  <span className="text-blue-400">Quick & Easy Tool Learning</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Master Any Tool <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">in 90 Seconds</span>
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Concise video tutorials to help you master popular tools and software - from AI tools like ChatGPT to business essentials like Excel, Stripe, and Figma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300">
                    <Play className="mr-2 h-4 w-4" /> 
                    Start Learning
                  </Button>
                </div>
              </div>
              
              <div className="relative mx-auto w-full max-w-[500px]">
                <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-6 backdrop-blur-sm">
                      <Play className="h-10 w-10 text-blue-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                    <p className="text-sm font-medium text-white">Learn Excel in 90 seconds</p>
                    <div className="flex items-center mt-1 text-xs text-gray-400">
                      <span>1:30</span>
                      <span className="mx-2">•</span>
                      <span className="text-blue-400">45.2k views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Statistics Section */}
        <section className="w-full py-12 bg-black border-y border-gray-800">
          <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">2.1M+</div>
                <div className="text-gray-400">Video Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">450K+</div>
                <div className="text-gray-400">Tutorials Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-400">Popular Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">90s</div>
                <div className="text-gray-400">Average Tutorial</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Finder Section */}
        <section data-section="ai-tool-finder" className="w-full py-20 bg-black border-y border-gray-800 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-blue-900/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
                <span className="text-purple-400 text-sm font-medium">Smart Tool Discovery</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Find Your Perfect Tool
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Discover the right tools for your needs with our intelligent recommendation system. 
                Get personalized suggestions for AI tools, business software, design apps, and more.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-400 text-xs font-medium">Free Tools Available</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                  <span className="text-amber-400 text-xs font-medium">Cost Transparency</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400 text-xs font-medium">Smart Matching</span>
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
                Explore our collection of tools organized by category - from AI tools to business software
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayedCategories.map((category, index) => {
                const colorIndex = index % ACCENT_COLORS.length;
                const currentColor = ACCENT_COLORS[colorIndex];
                const stats = CATEGORY_STATS[category.id as keyof typeof CATEGORY_STATS] || "3 tools • 9 videos";
                
                return (
                  <CategoryCard 
                    key={category.id} 
                    category={category} 
                    borderColor={currentColor}
                    customColor={COLOR_MAP[currentColor]}
                    stats={stats}
                  />
                );
              })}
            </div>
            
            {!showAllCategories && allCategories.length > 8 && (
              <div className="text-center mt-8">
                <Button
                  onClick={() => setShowAllCategories(true)}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8"
                >
                  See All Categories ({allCategories.length - 8} more)
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
            
            {showAllCategories && (
              <div className="text-center mt-8">
                <Button
                  onClick={() => setShowAllCategories(false)}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8"
                >
                  Show Less
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-600/15 border border-purple-500/25 px-4 py-2 rounded-full mb-6">
                <span className="text-purple-300 text-sm font-medium">Simple Pricing</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
                Start Learning Today
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan to accelerate your tool mastery journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Free Plan */}
              <div className="relative rounded-2xl border border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 border border-emerald-500/25 bg-emerald-500/15">
                      <Sparkles className="h-8 w-8 text-emerald-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                    <p className="text-gray-400 mb-4">Perfect for getting started</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">$0</span>
                      <span className="text-gray-400 ml-2">/forever</span>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
                      size="lg"
                    >
                      Get Started Free
                    </Button>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      Access to 8 popular tools
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      90-second tutorials
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      Community support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      Mobile & desktop access
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="relative rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-900/15 to-blue-900/15 backdrop-blur-sm transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 0 30px #6c5ce715' }}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white border-0 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 border border-purple-500/25 bg-purple-500/15">
                      <ChevronRight className="h-8 w-8 text-purple-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-gray-400 mb-4">Everything you need to master tools</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">$9.99</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                      size="lg"
                    >
                      Start Pro Trial
                    </Button>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      Access to ALL 25+ tools
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      Complete tutorial library
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      Advanced tool finder
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      Offline downloads
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      Priority support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-purple-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                      </div>
                      Ad-free experience
                    </li>
                  </ul>
                </div>
              </div>

              {/* Business Plan */}
              <div className="relative rounded-2xl border border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 border border-pink-500/25 bg-pink-500/15">
                      <Play className="h-8 w-8 text-pink-300" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Business</h3>
                    <p className="text-gray-400 mb-4">For teams and organizations</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">$29.99</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
                      size="lg"
                    >
                      Contact Sales
                    </Button>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pink-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                      </div>
                      Everything in Pro
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pink-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                      </div>
                      Team management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pink-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                      </div>
                      Up to 10 team members
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pink-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                      </div>
                      Advanced analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pink-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                      </div>
                      Priority phone support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pink-500/15 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-pink-400" />
                      </div>
                      Custom integrations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">
                All plans include a 30-day money-back guarantee
              </p>
              <Link href="/pricing">
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  View Detailed Pricing
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tools & Features Section */}
        <section className="w-full py-20 border-t border-gray-900 px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Discover & Learn
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest tools and master the most popular ones with our curated tutorials
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* New AI Tools */}
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">New AI Tools</h3>
                  <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-400 text-xs font-medium">Featured</span>
                  </div>
                </div>
                
                <div className="space-y-4 flex-1">
                  {NEW_AI_TOOLS.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div 
                        className="rounded-xl border border-gray-800 p-4 hover:bg-gray-900/50 transition-all duration-300"
                        style={{
                          '--hover-border-color': item.color
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#374151';
                        }}
                        onClick={() => {
                          // Navigate to tool page - you can implement this later
                          console.log(`Navigate to tool: ${item.title}`);
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div 
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" 
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            <Play className="h-5 w-5" style={{ color: item.color }} />
                          </div>
                          <span className="text-xs text-gray-500">{item.addedDate}</span>
                        </div>
                        
                        <h4 className="font-semibold text-white group-hover:text-gray-300 transition-colors mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 2).map((tag, tagIndex) => (
                              <Link 
                                href={`/tags/${tag.toLowerCase()}`} 
                                key={tagIndex}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {tag}
                              </Link>
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center pt-6 mt-auto">
                  <Link href="/categories">
                    <Button 
                      variant="outline" 
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                    >
                      Browse AI Tools
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* New Tools */}
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">New Tools</h3>
                  <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    <span className="text-emerald-400 text-xs font-medium">Fresh</span>
                  </div>
                </div>
                
                <div className="space-y-4 flex-1">
                  {NEW_TOOLS.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div 
                        className="rounded-xl border border-gray-800 p-4 hover:bg-gray-900/50 transition-all duration-300"
                        style={{
                          '--hover-border-color': item.color
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#374151';
                        }}
                        onClick={() => {
                          // Navigate to tool page - you can implement this later
                          console.log(`Navigate to tool: ${item.title}`);
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div 
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" 
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            <Play className="h-5 w-5" style={{ color: item.color }} />
                          </div>
                          <span className="text-xs text-gray-500">{item.addedDate}</span>
                        </div>
                        
                        <h4 className="font-semibold text-white group-hover:text-gray-300 transition-colors mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 2).map((tag, tagIndex) => (
                              <Link 
                                href={`/tags/${tag.toLowerCase()}`} 
                                key={tagIndex}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {tag}
                              </Link>
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center pt-6 mt-auto">
                  <Link href="/tools/new">
                    <Button 
                      variant="outline" 
                      className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
                    >
                      View All New Tools
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Popular This Week */}
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Popular This Week</h3>
                  <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-400 text-xs font-medium">Trending</span>
                  </div>
                </div>
                
                <div className="space-y-4 flex-1">
                  {POPULAR_VIDEOS.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div 
                        className="flex items-center rounded-xl border border-gray-800 p-4 hover:bg-gray-900/50 transition-all duration-300"
                        style={{
                          '--hover-border-color': item.color
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = item.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#374151';
                        }}
                        onClick={() => {
                          // Navigate to tool page - you can implement this later
                          console.log(`Navigate to tool: ${item.title}`);
                        }}
                      >
                        <div 
                          className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg" 
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          <Play className="h-6 w-6" style={{ color: item.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white group-hover:text-gray-300 transition-colors mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-400">
                              <span>{item.duration}</span>
                              <span className="mx-2">•</span>
                              <span>{item.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center pt-6 mt-auto">
                  <Link href="/popular">
                    <Button 
                      variant="outline" 
                      className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                    >
                      View All Popular
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
