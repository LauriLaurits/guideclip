"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Search, Sparkles, DollarSign, Clock, ArrowRight, X, ChevronRight, Check, Database, Globe, CreditCard, Server, Code, Palette, FileText, MessageSquare, BarChart, ShoppingCart, Zap, Megaphone, GraduationCap, Cloud, User, Newspaper, Users, Gamepad2 } from "lucide-react";
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
  tags: string[];
  matchedTags: string[];
}

interface MultiStageInputProps {
  onToolSelect?: (tool: ToolSuggestion) => void;
  className?: string;
}

interface ProjectRequirements {
  projectType: string;
  description: string;
  features: string[];
  techStack: string[];
  budget: string;
  timeline: string;
  experience: string;
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

const PROJECT_TYPES = [
  { id: "website", label: "Website/Web App", icon: Globe, color: "#0984e3" },
  { id: "mobile-app", label: "Mobile App", icon: Code, color: "#6c5ce7" },
  { id: "content", label: "Content Creation", icon: FileText, color: "#fd79a8" },
  { id: "design", label: "Design Project", icon: Palette, color: "#ff9f43" },
  { id: "chatbot", label: "Chatbot/AI Assistant", icon: MessageSquare, color: "#00cec9" },
  { id: "data", label: "Data Analysis", icon: BarChart, color: "#00b894" },
  { id: "ecommerce", label: "E-commerce Store", icon: ShoppingCart, color: "#e17055" },
  { id: "automation", label: "Workflow Automation", icon: Zap, color: "#a29bfe" },
  { id: "marketing", label: "Marketing Campaign", icon: Megaphone, color: "#fd79a8" },
  { id: "education", label: "Educational Platform", icon: GraduationCap, color: "#00b894" },
  { id: "saas", label: "SaaS Product", icon: Cloud, color: "#0984e3" },
  { id: "portfolio", label: "Portfolio/Resume", icon: User, color: "#6c5ce7" },
  { id: "blog", label: "Blog/News Site", icon: Newspaper, color: "#ff9f43" },
  { id: "social", label: "Social Platform", icon: Users, color: "#00cec9" },
  { id: "gaming", label: "Game/Entertainment", icon: Gamepad2, color: "#e17055" },
  { id: "other", label: "Other", icon: Sparkles, color: "#a29bfe" }
];

const COMMON_FEATURES = {
  website: ["User Authentication", "Database", "Payment Processing", "API Integration", "Real-time Updates", "File Upload", "Search Functionality", "Admin Dashboard", "Email Notifications", "Social Media Integration"],
  "mobile-app": ["Push Notifications", "Offline Mode", "Camera Integration", "GPS/Location", "Payment Processing", "User Authentication", "Cloud Sync", "Social Features", "Analytics", "In-App Purchases"],
  content: ["Blog Posts", "Social Media Content", "Marketing Copy", "Product Descriptions", "Email Campaigns", "Video Scripts", "SEO Content", "Technical Documentation", "Creative Writing", "Translations"],
  design: ["Logo Design", "UI/UX Design", "Marketing Materials", "Social Media Graphics", "Product Images", "Illustrations", "Branding", "Print Design", "Web Graphics", "Presentations"],
  chatbot: ["Customer Support", "Lead Generation", "FAQ Automation", "Appointment Booking", "E-commerce Assistant", "Educational Tutor", "Personal Assistant", "Voice Integration", "Multi-language", "Analytics"],
  data: ["Data Visualization", "Predictive Analytics", "Report Generation", "Data Cleaning", "Statistical Analysis", "Machine Learning", "Business Intelligence", "Real-time Monitoring", "Data Integration", "Automated Insights"],
  ecommerce: ["Product Catalog", "Shopping Cart", "Payment Processing", "Inventory Management", "Order Tracking", "Customer Reviews", "Wishlist", "Discount Codes", "Multi-currency", "Shipping Integration"],
  automation: ["Workflow Automation", "Task Scheduling", "Email Automation", "Data Processing", "API Integration", "Notification System", "Report Generation", "File Management", "User Management", "Monitoring"],
  marketing: ["Landing Pages", "Email Campaigns", "Social Media Posts", "SEO Content", "Ad Copy", "Analytics", "Lead Generation", "A/B Testing", "Customer Segmentation", "Campaign Tracking"],
  education: ["Course Management", "Video Lessons", "Quizzes & Tests", "Progress Tracking", "Certificates", "Discussion Forums", "Live Sessions", "Assignment Submission", "Gradebook", "Student Analytics"],
  saas: ["User Management", "Subscription Billing", "API Integration", "Analytics Dashboard", "Multi-tenancy", "Security Features", "Backup & Recovery", "Scalability", "Third-party Integrations", "Customer Support"],
  portfolio: ["Project Showcase", "About Section", "Contact Form", "Resume Download", "Skills Display", "Testimonials", "Blog Integration", "Social Links", "Image Gallery", "SEO Optimization"],
  blog: ["Content Management", "Categories & Tags", "Comment System", "SEO Optimization", "Social Sharing", "Newsletter Signup", "Search Functionality", "Author Profiles", "Related Posts", "Analytics"],
  social: ["User Profiles", "Friend/Follow System", "Content Sharing", "Messaging", "News Feed", "Groups/Communities", "Real-time Chat", "Notifications", "Content Moderation", "Privacy Controls"],
  gaming: ["Game Mechanics", "User Profiles", "Leaderboards", "Achievements", "In-game Purchases", "Multiplayer Features", "Save System", "Analytics", "Social Features", "Content Updates"],
  other: ["Custom Integration", "Automation", "API Development", "Cloud Deployment", "Security Features", "Performance Optimization", "Scalability", "Monitoring", "Testing", "Documentation"]
};

const TECH_STACK_OPTIONS = [
  "React/Next.js", "Vue.js", "Angular", "Node.js", "Python", "PHP", "Ruby", "Java", "C#", ".NET",
  "MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes",
  "WordPress", "Shopify", "Webflow", "No-Code/Low-Code", "Mobile Native", "React Native", "Flutter"
];

const BUDGET_RANGES = [
  { id: "free", label: "Free tools only", color: "#00b894" },
  { id: "low", label: "$0-50/month", color: "#fdcb6e" },
  { id: "medium", label: "$50-200/month", color: "#fd79a8" },
  { id: "high", label: "$200+/month", color: "#e17055" },
  { id: "flexible", label: "Flexible budget", color: "#6c5ce7" }
];

const EXPERIENCE_LEVELS = [
  { id: "beginner", label: "Beginner", desc: "New to AI tools" },
  { id: "intermediate", label: "Intermediate", desc: "Some experience with AI" },
  { id: "advanced", label: "Advanced", desc: "Experienced with AI tools" }
];

export function MultiStageInput({ onToolSelect, className = "" }: MultiStageInputProps) {
  const [currentStage, setCurrentStage] = useState<"project-type" | "details" | "features" | "tech" | "preferences" | "results" | "tool-details">("project-type");
  const [requirements, setRequirements] = useState<ProjectRequirements>({
    projectType: "",
    description: "",
    features: [],
    techStack: [],
    budget: "",
    timeline: "",
    experience: ""
  });
  const [selectedTool, setSelectedTool] = useState<ToolSuggestion | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllProjectTypes, setShowAllProjectTypes] = useState(false);

  const displayedProjectTypes = showAllProjectTypes ? PROJECT_TYPES : PROJECT_TYPES.slice(0, 8);

  // Mock cost data - in real app this would come from API
  const toolCosts: Record<string, { cost: ToolSuggestion["estimatedCost"]; range?: string }> = {
    chatgpt: { cost: "freemium", range: "$0-20/month" },
    claude: { cost: "freemium", range: "$0-20/month" },
    cursor: { cost: "freemium", range: "$0-20/month" },
    midjourney: { cost: "paid", range: "$10-60/month" },
    dalle: { cost: "freemium", range: "$0-15/month" },
    "github-copilot": { cost: "paid", range: "$10/month" },
    "notion-ai": { cost: "freemium", range: "$0-10/month" },
    perplexity: { cost: "freemium", range: "$0-20/month" },
    jasper: { cost: "paid", range: "$39-125/month" },
    runway: { cost: "paid", range: "$12-76/month" },
  };

  const suggestions = useMemo(() => {
    if (!requirements.projectType) return [];

    // Define tool categories needed for different project types
    const projectToolNeeds = {
      website: [
        { category: "Development", priority: 1, tools: ["cursor", "github-copilot"] },
        { category: "Database", priority: 2, tools: ["supabase", "firebase"] },
        { category: "Design", priority: 3, tools: ["midjourney", "dalle"] }
      ],
      "mobile-app": [
        { category: "Development", priority: 1, tools: ["cursor", "github-copilot"] },
        { category: "Design", priority: 2, tools: ["midjourney", "dalle"] },
        { category: "Analytics", priority: 3, tools: ["chatgpt", "claude"] }
      ],
      content: [
        { category: "Writing", priority: 1, tools: ["chatgpt", "claude", "jasper"] },
        { category: "Design", priority: 2, tools: ["midjourney", "dalle"] },
        { category: "Video", priority: 3, tools: ["runway"] }
      ],
      design: [
        { category: "Image Generation", priority: 1, tools: ["midjourney", "dalle"] },
        { category: "Writing", priority: 2, tools: ["chatgpt", "claude"] },
        { category: "Development", priority: 3, tools: ["cursor"] }
      ],
      chatbot: [
        { category: "AI Assistant", priority: 1, tools: ["chatgpt", "claude"] },
        { category: "Development", priority: 2, tools: ["cursor", "github-copilot"] },
        { category: "Design", priority: 3, tools: ["midjourney"] }
      ],
      data: [
        { category: "Analysis", priority: 1, tools: ["chatgpt", "claude"] },
        { category: "Research", priority: 2, tools: ["perplexity"] },
        { category: "Visualization", priority: 3, tools: ["cursor"] }
      ],
      ecommerce: [
        { category: "Development", priority: 1, tools: ["cursor", "github-copilot"] },
        { category: "Content", priority: 2, tools: ["chatgpt", "jasper"] },
        { category: "Design", priority: 3, tools: ["midjourney", "dalle"] }
      ],
      automation: [
        { category: "AI Assistant", priority: 1, tools: ["chatgpt", "claude"] },
        { category: "Development", priority: 2, tools: ["cursor", "github-copilot"] },
        { category: "Content", priority: 3, tools: ["jasper"] }
      ],
      marketing: [
        { category: "Content Creation", priority: 1, tools: ["chatgpt", "jasper"] },
        { category: "Design", priority: 2, tools: ["midjourney", "dalle"] },
        { category: "Video", priority: 3, tools: ["runway"] }
      ],
      education: [
        { category: "Content Creation", priority: 1, tools: ["chatgpt", "claude"] },
        { category: "Design", priority: 2, tools: ["midjourney", "dalle"] },
        { category: "Video", priority: 3, tools: ["runway"] }
      ],
      saas: [
        { category: "Development", priority: 1, tools: ["cursor", "github-copilot"] },
        { category: "Content", priority: 2, tools: ["chatgpt", "claude"] },
        { category: "Design", priority: 3, tools: ["midjourney"] }
      ],
      portfolio: [
        { category: "Development", priority: 1, tools: ["cursor"] },
        { category: "Design", priority: 2, tools: ["midjourney", "dalle"] },
        { category: "Content", priority: 3, tools: ["chatgpt"] }
      ],
      blog: [
        { category: "Writing", priority: 1, tools: ["chatgpt", "claude", "jasper"] },
        { category: "Development", priority: 2, tools: ["cursor"] },
        { category: "Design", priority: 3, tools: ["midjourney"] }
      ],
      social: [
        { category: "Development", priority: 1, tools: ["cursor", "github-copilot"] },
        { category: "Content", priority: 2, tools: ["chatgpt", "jasper"] },
        { category: "Design", priority: 3, tools: ["midjourney", "dalle"] }
      ],
      gaming: [
        { category: "Development", priority: 1, tools: ["cursor", "github-copilot"] },
        { category: "Art & Design", priority: 2, tools: ["midjourney", "dalle"] },
        { category: "Content", priority: 3, tools: ["chatgpt"] }
      ],
      other: [
        { category: "AI Assistant", priority: 1, tools: ["chatgpt", "claude"] },
        { category: "Development", priority: 2, tools: ["cursor"] },
        { category: "Design", priority: 3, tools: ["midjourney"] }
      ]
    };

    const projectNeeds = projectToolNeeds[requirements.projectType as keyof typeof projectToolNeeds] || projectToolNeeds.other;
    const diverseTools: ToolSuggestion[] = [];

    // Get the best tool from each category
    projectNeeds.forEach(need => {
      const availableTools = need.tools
        .map(toolId => tools.find(t => t.id === toolId))
        .filter(Boolean);

      if (availableTools.length > 0) {
        // Pick the first available tool from this category
        const selectedTool = availableTools[0]!;
        const costInfo = toolCosts[selectedTool.id] || { cost: "freemium" as const };
        
        // Calculate match score based on priority and feature matching
        let matchScore = (4 - need.priority) * 30; // Higher priority = higher score
        
        // Add feature matching bonus
        requirements.features.forEach(feature => {
          const featureKeywords = {
            "User Authentication": ["coding", "backend", "development"],
            "Database": ["backend", "database", "development"],
            "Payment Processing": ["backend", "api", "development"],
            "Blog Posts": ["writing", "content-creation", "blog"],
            "Social Media Content": ["social-media", "content-creation", "marketing"],
            "Marketing Copy": ["marketing", "copywriting", "advertising"],
            "Logo Design": ["design", "branding", "creative"],
            "UI/UX Design": ["design", "creative", "web-development"],
            "Customer Support": ["customer-support", "conversation", "automation"],
            "Data Visualization": ["data-analysis", "visualization"],
            "SEO Content": ["seo", "content-creation", "marketing"]
          };

          const keywords = featureKeywords[feature as keyof typeof featureKeywords] || [];
          keywords.forEach(keyword => {
            if (selectedTool.tags.includes(keyword)) {
              matchScore += 10;
            }
          });
        });

        diverseTools.push({
          id: selectedTool.id,
          name: selectedTool.name,
          description: selectedTool.description,
          category: need.category, // Use the need category instead of tool category
          estimatedCost: costInfo.cost,
          costRange: costInfo.range,
          matchScore,
          tags: selectedTool.tags,
          matchedTags: selectedTool.tags.slice(0, 3) // Show first 3 tags
        });
      }
    });

    return diverseTools.sort((a, b) => b.matchScore - a.matchScore);
  }, [requirements]);

  const handleProjectTypeSelect = (type: string) => {
    setRequirements(prev => ({ ...prev, projectType: type }));
    setCurrentStage("details");
  };

  const handleNext = () => {
    switch (currentStage) {
      case "details":
        setCurrentStage("features");
        break;
      case "features":
        setCurrentStage("tech");
        break;
      case "tech":
        setCurrentStage("preferences");
        break;
      case "preferences":
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setCurrentStage("results");
        }, 1500);
        break;
    }
  };

  const handleBack = () => {
    switch (currentStage) {
      case "details":
        setCurrentStage("project-type");
        break;
      case "features":
        setCurrentStage("details");
        break;
      case "tech":
        setCurrentStage("features");
        break;
      case "preferences":
        setCurrentStage("tech");
        break;
      case "results":
        setCurrentStage("preferences");
        break;
      case "tool-details":
        setCurrentStage("results");
        break;
    }
  };

  const handleToolSelect = useCallback((tool: ToolSuggestion) => {
    setSelectedTool(tool);
    setCurrentStage("tool-details");
    onToolSelect?.(tool);
  }, [onToolSelect]);

  const handleReset = useCallback(() => {
    setCurrentStage("project-type");
    setRequirements({
      projectType: "",
      description: "",
      features: [],
      techStack: [],
      budget: "",
      timeline: "",
      experience: ""
    });
    setSelectedTool(null);
  }, []);

  const toggleFeature = (feature: string) => {
    setRequirements(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const toggleTechStack = (tech: string) => {
    setRequirements(prev => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter(t => t !== tech)
        : [...prev.techStack, tech]
    }));
  };

  const canProceed = () => {
    switch (currentStage) {
      case "details":
        return requirements.description.trim().length > 10;
      case "features":
        return requirements.features.length > 0;
      case "tech":
        return true; // Tech stack is optional
      case "preferences":
        return requirements.budget && requirements.experience;
      default:
        return false;
    }
  };

  return (
    <div className={`w-full max-w-6xl mx-auto ${className}`}>
      {/* Progress Bar */}
      {currentStage !== "project-type" && currentStage !== "tool-details" && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
            <span>Step {["details", "features", "tech", "preferences", "results"].indexOf(currentStage) + 1} of 5</span>
            <Button variant="ghost" onClick={handleReset} className="text-gray-400 hover:text-white text-sm">
              Start Over
            </Button>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${(["details", "features", "tech", "preferences", "results"].indexOf(currentStage) + 1) * 20}%` 
              }}
            />
          </div>
        </div>
      )}

      {/* Stage 1: Project Type Selection */}
      {currentStage === "project-type" && (
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">What are you building?</h2>
          </div>
          
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {displayedProjectTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card
                  key={type.id}
                  className="bg-black border-gray-800 hover:border-gray-600 transition-all cursor-pointer group p-4"
                  onClick={() => handleProjectTypeSelect(type.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="rounded-lg p-2 flex-shrink-0"
                      style={{ backgroundColor: `${type.color}20` }}
                    >
                      <Icon 
                        className="h-5 w-5" 
                        style={{ color: type.color }}
                      />
                    </div>
                    <h3 className="text-sm font-semibold group-hover:text-gray-300 transition-colors" style={{ color: type.color }}>
                      {type.label}
                    </h3>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {!showAllProjectTypes && PROJECT_TYPES.length > 8 && (
            <div className="text-center mt-6">
              <Button
                onClick={() => setShowAllProjectTypes(true)}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8"
              >
                See All Project Types ({PROJECT_TYPES.length - 8} more)
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
          
          {showAllProjectTypes && (
            <div className="text-center mt-6">
              <Button
                onClick={() => setShowAllProjectTypes(false)}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8"
              >
                Show Less
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Stage 2: Project Details */}
      {currentStage === "details" && (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Tell us about your project</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-3">
                Describe your project in detail
              </label>
              <textarea
                value={requirements.description}
                onChange={(e) => setRequirements(prev => ({ ...prev, description: e.target.value }))}
                placeholder="e.g., I want to build an e-commerce website for selling handmade jewelry. It needs user accounts, payment processing, inventory management, and a blog section for marketing..."
                className="w-full h-32 bg-black border border-gray-800 rounded-lg p-4 text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none transition-colors resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                {requirements.description.length}/500 characters
              </p>
            </div>
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 hover:text-gray-400 transition-all duration-300"
              >
                ← Back
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                disabled={!canProceed()}
                className={`transition-all duration-300 ${
                  canProceed()
                    ? "border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400"
                    : "border-gray-600/30 text-gray-600 cursor-not-allowed"
                }`}
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stage 3: Features Selection */}
      {currentStage === "features" && (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">What features do you need?</h2>
            <p className="text-gray-400 text-lg">
              Select all the features your project will require
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {COMMON_FEATURES[requirements.projectType as keyof typeof COMMON_FEATURES]?.map((feature) => {
                const isSelected = requirements.features.includes(feature);
                return (
                  <Card
                    key={feature}
                    className={`bg-black transition-all cursor-pointer group p-4 ${
                      isSelected
                        ? "border-purple-500/50 bg-purple-600/10"
                        : "border-gray-800 hover:border-gray-600"
                    }`}
                    onClick={() => toggleFeature(feature)}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium transition-colors ${
                        isSelected ? "text-purple-300" : "text-white group-hover:text-gray-300"
                      }`}>
                        {feature}
                      </span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? "border-purple-500 bg-purple-500"
                          : "border-gray-600 group-hover:border-gray-500"
                      }`}>
                        {isSelected && (
                          <Check className="h-3 w-3 text-white" />
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 hover:text-gray-400 transition-all duration-300"
              >
                ← Back
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                disabled={!canProceed()}
                className={`transition-all duration-300 ${
                  canProceed()
                    ? "border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400"
                    : "border-gray-600/30 text-gray-600 cursor-not-allowed"
                }`}
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stage 4: Tech Stack */}
      {currentStage === "tech" && (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">What's your tech stack?</h2>
            <p className="text-gray-400 text-lg">
              Select the technologies you're using or planning to use (optional)
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
              {TECH_STACK_OPTIONS.map((tech) => {
                const isSelected = requirements.techStack.includes(tech);
                return (
                  <Card
                    key={tech}
                    className={`bg-black transition-all cursor-pointer group p-3 ${
                      isSelected
                        ? "border-blue-500/50 bg-blue-600/10"
                        : "border-gray-800 hover:border-gray-600"
                    }`}
                    onClick={() => toggleTechStack(tech)}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium transition-colors ${
                        isSelected ? "text-blue-300" : "text-white group-hover:text-gray-300"
                      }`}>
                        {tech}
                      </span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-600 group-hover:border-gray-500"
                      }`}>
                        {isSelected && (
                          <Check className="h-2.5 w-2.5 text-white" />
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 hover:text-gray-400 transition-all duration-300"
              >
                ← Back
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                disabled={!canProceed()}
                className={`transition-all duration-300 ${
                  canProceed()
                    ? "border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400"
                    : "border-gray-600/30 text-gray-600 cursor-not-allowed"
                }`}
              >
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stage 5: Preferences */}
      {currentStage === "preferences" && (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Final preferences</h2>
            <p className="text-gray-400 text-lg">
              Help us tailor recommendations to your budget and experience level
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Budget */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What's your budget for AI tools?</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {BUDGET_RANGES.map((budget) => {
                  const isSelected = requirements.budget === budget.id;
                  return (
                    <Card
                      key={budget.id}
                      className={`bg-black transition-all cursor-pointer group p-4 ${
                        isSelected
                          ? "border-orange-500/50 bg-orange-600/10"
                          : "border-gray-800 hover:border-gray-600"
                      }`}
                      onClick={() => setRequirements(prev => ({ ...prev, budget: budget.id }))}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <DollarSign className={`h-5 w-5 ${isSelected ? 'text-orange-400' : 'text-gray-400 group-hover:text-gray-300'}`} />
                          <span className={`font-medium transition-colors ${
                            isSelected ? "text-orange-300" : "text-white group-hover:text-gray-300"
                          }`}>
                            {budget.label}
                          </span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-orange-500 bg-orange-500"
                            : "border-gray-600 group-hover:border-gray-500"
                        }`}>
                          {isSelected && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What's your experience with AI tools?</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {EXPERIENCE_LEVELS.map((level) => {
                  const isSelected = requirements.experience === level.id;
                  return (
                    <Card
                      key={level.id}
                      className={`bg-black transition-all cursor-pointer group p-4 ${
                        isSelected
                          ? "border-green-500/50 bg-green-600/10"
                          : "border-gray-800 hover:border-gray-600"
                      }`}
                      onClick={() => setRequirements(prev => ({ ...prev, experience: level.id }))}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <div className={`font-medium transition-colors ${
                            isSelected ? "text-green-300" : "text-white group-hover:text-gray-300"
                          }`}>
                            {level.label}
                          </div>
                          <div className={`text-sm opacity-80 transition-colors ${
                            isSelected ? "text-green-400" : "text-gray-400"
                          }`}>
                            {level.desc}
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "border-green-500 bg-green-500"
                            : "border-gray-600 group-hover:border-gray-500"
                        }`}>
                          {isSelected && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 hover:text-gray-400 transition-all duration-300"
              >
                ← Back
              </Button>
              <Button
                variant="outline"
                onClick={handleNext}
                disabled={!canProceed()}
                className={`transition-all duration-300 ${
                  canProceed()
                    ? "border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400"
                    : "border-gray-600/30 text-gray-600 cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Finding Tools...</span>
                  </div>
                ) : (
                  <>
                    Get Recommendations
                    <Sparkles className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stage 6: Results */}
      {currentStage === "results" && (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Perfect AI Tools for Your Project</h2>
            <p className="text-gray-400 text-lg">
              Here are the essential tools you need for your {requirements.projectType.replace("-", " ")} project
            </p>
          </div>

          {/* Cost Summary */}
          {suggestions.length > 0 && (
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-blue-400" />
                Estimated Monthly Cost
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    ${suggestions.filter(s => s.estimatedCost === "free").length * 0}
                  </div>
                  <div className="text-sm text-gray-400">Free Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    $15-45
                  </div>
                  <div className="text-sm text-gray-400">Freemium Range</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    $25-85
                  </div>
                  <div className="text-sm text-gray-400">Total Estimated</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Costs vary based on usage. Many tools offer free tiers to get started.
              </p>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {suggestions.map((tool, index) => (
              <Card
                key={tool.id}
                className="bg-black border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer group"
                onClick={() => handleToolSelect(tool)}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-purple-600/20 text-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        #{index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors text-lg">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-purple-400 font-medium">
                          {tool.category}
                        </p>
                      </div>
                    </div>
                    <Badge className={COST_COLORS[tool.estimatedCost]}>
                      {COST_LABELS[tool.estimatedCost]}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    {tool.costRange && (
                      <div className="flex items-center text-gray-400 text-sm">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {tool.costRange}
                      </div>
                    )}
                    <div className="flex items-center text-purple-400 text-sm font-medium">
                      View Details
                      <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {suggestions.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-900/50 rounded-lg p-8">
                <Sparkles className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No perfect matches found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your requirements or budget to see more options
                </p>
                <Button
                  onClick={handleReset}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Start New Search
                </Button>
              </div>
            </div>
          )}

          <div className="text-center">
            <div className="flex justify-center space-x-4">
              <Button
                onClick={handleBack}
                variant="outline"
                className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 hover:text-gray-400 transition-all duration-300"
              >
                ← Back to Preferences
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Start New Search
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stage 7: Tool Details */}
      {currentStage === "tool-details" && selectedTool && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              className="border-gray-500/50 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 hover:text-gray-400 transition-all duration-300"
            >
              ← Back to Results
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
              className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:border-red-400 hover:text-red-400 transition-all duration-300"
            >
              <X className="h-4 w-4 mr-2" />
              New Search
            </Button>
          </div>

          <Card className="bg-black border-gray-800">
            <div className="p-8 space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedTool.name}</h3>
                  <p className="text-gray-400 capitalize text-lg">{selectedTool.category.replace("-", " ")}</p>
                </div>
                <Badge className={COST_COLORS[selectedTool.estimatedCost]} variant="outline">
                  {COST_LABELS[selectedTool.estimatedCost]}
                </Badge>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">{selectedTool.description}</p>
              
              {selectedTool.matchedTags.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3">Why this tool matches your project:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTool.matchedTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-green-500/10 text-green-400 border-green-500/30"
                      >
                        {tag.replace("-", " ")}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedTool.costRange && (
                <div className="flex items-center space-x-4 p-6 bg-gray-900/50 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-400" />
                  <div>
                    <p className="text-white font-medium text-lg">Estimated Cost</p>
                    <p className="text-gray-400">{selectedTool.costRange}</p>
                  </div>
                </div>
              )}
              
              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                  <Clock className="h-4 w-4 mr-2" />
                  View Tutorials
                </Button>
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 flex-1">
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