"use client";

import React from "react";
import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VideoCard } from "@/components/video-card";
import { YouTubePlayer } from "@/components/youtube-player";
import { LocalVideoPlayer } from "@/components/local-video-player";
import { TutorialSteps } from "@/components/tutorial-steps";
import { tutorialData } from "@/lib/tutorial-data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, List, Video, Play, ExternalLink, BookOpen, Star, FileText, CreditCard, DollarSign, Zap, Crown, Gift, Keyboard } from "lucide-react";
import { getToolById, getCategoryById } from "@/lib/data";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type Props = {
  params: Promise<{
    id: string;
  }>;
}

// Tool color configuration based on category
const TOOL_COLORS = {
  "ai-chatbots": { color: "#ff9f43", bgColor: "#ff9f4320" },
  "ai-image-generators": { color: "#fd79a8", bgColor: "#fd79a820" },
  "design-tools": { color: "#0984e3", bgColor: "#0984e320" },
  "ai-code-assistants": { color: "#6c5ce7", bgColor: "#6c5ce720" },
  "ai-writing": { color: "#00cec9", bgColor: "#00cec920" },
  "spreadsheets": { color: "#00b894", bgColor: "#00b89420" },
  "video-editing": { color: "#e17055", bgColor: "#e1705520" },
  "productivity-tools": { color: "#a29bfe", bgColor: "#a29bfe20" },
  "payment-processing": { color: "#55a3ff", bgColor: "#55a3ff20" },
  "marketing-tools": { color: "#ff7675", bgColor: "#ff767520" }
} as const;

const DEFAULT_COLOR = { color: "#6c5ce7", bgColor: "#6c5ce720" } as const;

export default function ToolPage({ params }: Props) {
  // Use React.use() to unwrap the params Promise
  const { id } = use(params);
  const tool = getToolById(id);
  
  if (!tool) {
    notFound();
  }
  
  const category = getCategoryById(tool.category);
  const [activeVideo, setActiveVideo] = useState(tool.videos[0]?.id || "");
  const [activeTab, setActiveTab] = useState<"videos" | "steps">("steps");
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const colorSet = TOOL_COLORS[tool.category as keyof typeof TOOL_COLORS] || DEFAULT_COLOR;
  
  // Get tutorial steps for this tool
  const tutorialSteps = tutorialData[id as keyof typeof tutorialData];
  
  const handlePlayVideo = (videoId: string) => {
    setActiveVideo(videoId);
    setActiveTab("videos");
  };
  
  const handleStepComplete = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };
  
  const currentVideo = tool.videos.find(video => video.id === activeVideo);
  
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const totalDuration = tool.videos.reduce((acc, video) => acc + video.duration, 0);
  const totalStepsDuration = tutorialSteps?.reduce((acc, step) => acc + step.duration, 0) || 0;
  
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Enhanced Tool Header */}
        <div className="relative bg-black border-b border-gray-800">
          {/* Background gradient */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${colorSet.color}, transparent 70%)`
            }}
          />
          
          <div className="relative max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-gray-900/50 text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>
              
              {category && (
                <Link href={`/category/${category.id}`}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover:bg-gray-900/50 text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {category.name}
                  </Button>
                </Link>
              )}
            </div>
            
            {/* Tool Header Content */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-6">
                  {tool.icon && (
                    <div 
                      className="rounded-xl p-4 border border-gray-800 backdrop-blur-sm" 
                      style={{ 
                        backgroundColor: colorSet.bgColor,
                        boxShadow: `0 0 20px ${colorSet.color}20`
                      }}
                    >
                      <Icon 
                        name={tool.icon} 
                        className="h-12 w-12" 
                        style={{ color: colorSet.color }} 
                      />
                    </div>
                  )}
                  <div>
                    <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {tool.name}
                    </h1>
                    {category && (
                      <div 
                        className="px-3 py-1 rounded-full text-sm font-medium border inline-block"
                        style={{ 
                          backgroundColor: colorSet.bgColor,
                          borderColor: `${colorSet.color}30`,
                          color: colorSet.color
                        }}
                      >
                        {category.name}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 max-w-4xl leading-relaxed text-lg mb-6">
                  {tool.description}
                </p>
                
                {/* Tool Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Video className="h-5 w-5" style={{ color: colorSet.color }} />
                    <span>{tool.videos.length} video{tool.videos.length === 1 ? '' : 's'}</span>
                  </div>
                  {tutorialSteps && (
                    <>
                      <div className="h-1 w-1 rounded-full bg-gray-600 self-center" />
                      <div className="flex items-center gap-2 text-gray-400">
                        <FileText className="h-5 w-5" style={{ color: colorSet.color }} />
                        <span>{tutorialSteps.length} detailed steps</span>
                      </div>
                    </>
                  )}
                  <div className="h-1 w-1 rounded-full bg-gray-600 self-center" />
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-5 w-5" style={{ color: colorSet.color }} />
                    <span>{formatDuration(totalDuration + totalStepsDuration)} total content</span>
                  </div>
                  <div className="h-1 w-1 rounded-full bg-gray-600 self-center" />
                  <div className="flex items-center gap-2 text-gray-400">
                    <Star className="h-5 w-5" style={{ color: colorSet.color }} />
                    <span>Learn in 90 seconds</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col gap-4 lg:flex-shrink-0">
                <Button 
                  className="text-white border-2 transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: colorSet.color,
                    borderColor: colorSet.color
                  }}
                  size="lg"
                  onClick={() => setActiveTab("steps")}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Step-by-Step
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                  onClick={() => currentVideo && handlePlayVideo(currentVideo.id)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Videos
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant={activeTab === "steps" ? "default" : "outline"}
              onClick={() => setActiveTab("steps")}
              className={`transition-all duration-300 ${
                activeTab === "steps" 
                  ? "text-white" 
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              }`}
              style={{ 
                backgroundColor: activeTab === "steps" ? colorSet.color : "transparent",
                borderColor: activeTab === "steps" ? colorSet.color : undefined
              }}
              disabled={!tutorialSteps}
            >
              <FileText className="mr-2 h-4 w-4" />
              Step-by-Step Guide
              {tutorialSteps && (
                <Badge 
                  variant="outline" 
                  className="ml-2 border-current text-current"
                >
                  {tutorialSteps.length} steps
                </Badge>
              )}
            </Button>
            
            <Button
              variant={activeTab === "videos" ? "default" : "outline"}
              onClick={() => setActiveTab("videos")}
              className={`transition-all duration-300 ${
                activeTab === "videos" 
                  ? "text-white" 
                  : "border-gray-700 text-gray-300 hover:bg-gray-800"
              }`}
              style={{ 
                backgroundColor: activeTab === "videos" ? colorSet.color : "transparent",
                borderColor: activeTab === "videos" ? colorSet.color : undefined
              }}
            >
              <Video className="mr-2 h-4 w-4" />
              Video Tutorials
              <Badge 
                variant="outline" 
                className="ml-2 border-current text-current"
              >
                {tool.videos.length} video{tool.videos.length === 1 ? '' : 's'}
              </Badge>
            </Button>
          </div>

          {/* Tab Content */}
          {activeTab === "steps" && tutorialSteps ? (
            <TutorialSteps 
              steps={tutorialSteps}
              toolName={tool.name}
              accentColor={colorSet.color}
              onStepComplete={handleStepComplete}
              completedSteps={completedSteps}
            />
          ) : activeTab === "steps" && !tutorialSteps ? (
            <div 
              className="rounded-xl p-12 border border-gray-800 backdrop-blur-sm text-center"
              style={{ backgroundColor: `${colorSet.color}05` }}
            >
              <div 
                className="rounded-full p-6 mx-auto mb-6 w-fit"
                style={{ backgroundColor: colorSet.bgColor }}
              >
                <BookOpen className="h-12 w-12" style={{ color: colorSet.color }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Step-by-Step Guide Coming Soon
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                We're working on creating detailed step-by-step tutorials for {tool.name}. 
                In the meantime, check out our video tutorials to get started!
              </p>
              <Button 
                onClick={() => setActiveTab("videos")}
                style={{ backgroundColor: colorSet.color }}
                className="text-white hover:opacity-90"
              >
                <Video className="mr-2 h-4 w-4" />
                Watch Video Tutorials
              </Button>
            </div>
          ) : (
            // Video Content (existing implementation)
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Video Player Section */}
              <div className="lg:col-span-2">
                {currentVideo ? (
                  <div className="space-y-8">
                    {/* Video Player */}
                    <div className="rounded-xl overflow-hidden border border-gray-800 bg-black shadow-2xl">
                      {currentVideo.localVideoSrc ? (
                        <LocalVideoPlayer 
                          videoSrc={currentVideo.localVideoSrc}
                          poster={currentVideo.poster}
                          autoPlay={true}
                          title={currentVideo.title}
                          accentColor={colorSet.color}
                          chapters={currentVideo.chapters}
                        />
                      ) : currentVideo.youtubeId ? (
                        <YouTubePlayer videoId={currentVideo.youtubeId} autoPlay={true} />
                      ) : (
                        <div className="aspect-video flex items-center justify-center bg-gray-900 text-gray-400">
                          Video not available
                        </div>
                      )}
                    </div>
                    
                    {/* Video Info */}
                    <div 
                      className="rounded-xl p-8 border border-gray-800 backdrop-blur-sm"
                      style={{ backgroundColor: `${colorSet.color}05` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="text-3xl font-bold text-white">{currentVideo.title}</h2>
                        {currentVideo.difficulty && (
                          <Badge 
                            variant="outline"
                            className="px-3 py-1"
                            style={{ 
                              color: currentVideo.difficulty === "beginner" ? "#00b894" :
                                     currentVideo.difficulty === "intermediate" ? "#fdcb6e" : "#e17055",
                              borderColor: `${currentVideo.difficulty === "beginner" ? "#00b894" :
                                             currentVideo.difficulty === "intermediate" ? "#fdcb6e" : "#e17055"}50`,
                              backgroundColor: `${currentVideo.difficulty === "beginner" ? "#00b894" :
                                                currentVideo.difficulty === "intermediate" ? "#fdcb6e" : "#e17055"}10`
                            }}
                          >
                            {currentVideo.difficulty}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{currentVideo.description}</p>
                      
                      <div className="flex items-center gap-4 text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5" style={{ color: colorSet.color }} />
                          <span>{formatDuration(currentVideo.duration)}</span>
                        </div>
                        <div className="h-1 w-1 rounded-full bg-gray-600" />
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5" style={{ color: colorSet.color }} />
                          <span>Tutorial {tool.videos.findIndex(v => v.id === currentVideo.id) + 1} of {tool.videos.length}</span>
                        </div>
                        {currentVideo.chapters && currentVideo.chapters.length > 0 && (
                          <>
                            <div className="h-1 w-1 rounded-full bg-gray-600" />
                            <div className="flex items-center gap-2">
                              <List className="h-5 w-5" style={{ color: colorSet.color }} />
                              <span>{currentVideo.chapters.length} chapters</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Tags */}
                      {currentVideo.tags && currentVideo.tags.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Topics covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {currentVideo.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Video Resources */}
                      {currentVideo.resources && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Keyboard Shortcuts */}
                          {currentVideo.resources.shortcuts.length > 0 && (
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Keyboard className="h-4 w-4" style={{ color: colorSet.color }} />
                                Keyboard Shortcuts
                              </h4>
                              <div className="space-y-2">
                                {currentVideo.resources.shortcuts.map((shortcut, index) => (
                                  <div key={index} className="flex items-center gap-3">
                                    <kbd className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-300 font-mono">
                                      {shortcut.split(' - ')[0]}
                                    </kbd>
                                    <span className="text-gray-400 text-sm">
                                      {shortcut.split(' - ')[1] || shortcut}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Useful Commands */}
                          {currentVideo.resources.commands.length > 0 && (
                            <div>
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <FileText className="h-4 w-4" style={{ color: colorSet.color }} />
                                Commands & Prompts
                              </h4>
                              <div className="space-y-2">
                                {currentVideo.resources.commands.map((command, index) => (
                                  <div key={index} className="p-2 bg-gray-800 rounded border border-gray-700">
                                    <code className="text-gray-300 text-sm font-mono">
                                      {command}
                                    </code>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Helpful Links */}
                          {currentVideo.resources.links.length > 0 && (
                            <div className="md:col-span-2">
                              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <ExternalLink className="h-4 w-4" style={{ color: colorSet.color }} />
                                Helpful Resources
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {currentVideo.resources.links.map((link, index) => (
                                  <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 rounded border border-gray-700 hover:border-gray-600 transition-colors group"
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-white font-medium text-sm group-hover:text-blue-400">
                                        {link.name}
                                      </span>
                                      <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-blue-400" />
                                    </div>
                                    {link.description && (
                                      <p className="text-gray-400 text-xs">
                                        {link.description}
                                      </p>
                                    )}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Video Transcript */}
                    {currentVideo.transcript && (
                      <div 
                        className="rounded-xl p-6 border border-gray-800 backdrop-blur-sm"
                        style={{ backgroundColor: `${colorSet.color}05` }}
                      >
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <FileText className="h-5 w-5" style={{ color: colorSet.color }} />
                          Video Transcript
                        </h3>
                        <div className="prose prose-invert max-w-none">
                          <p className="text-gray-300 leading-relaxed text-sm">
                            {currentVideo.transcript}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex aspect-video items-center justify-center rounded-xl border border-gray-800 bg-black">
                    <div className="text-center space-y-4">
                      <div 
                        className="rounded-full p-6 mx-auto"
                        style={{ backgroundColor: colorSet.bgColor }}
                      >
                        <Video className="h-12 w-12" style={{ color: colorSet.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Select a tutorial to start</h3>
                        <p className="text-gray-400">Choose from the playlist on the right</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Tutorials Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-20">
                  <div 
                    className="rounded-xl p-6 border border-gray-800 backdrop-blur-sm mb-6"
                    style={{ backgroundColor: `${colorSet.color}05` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-white">Video Playlist</h2>
                      <Badge 
                        variant="outline" 
                        className="border-gray-700 bg-black/50 backdrop-blur-sm"
                      >
                        {tool.videos.length} video{tool.videos.length === 1 ? '' : 's'}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      {tool.videos.map((video) => (
                        <div key={video.id} className="group">
                          <VideoCard 
                            video={video} 
                            onPlay={handlePlayVideo}
                            isPlaying={activeVideo === video.id} 
                            accentColor={colorSet.color}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Learning Progress */}
                  <div 
                    className="rounded-xl p-6 border border-gray-800 backdrop-blur-sm"
                    style={{ backgroundColor: `${colorSet.color}05` }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-4">Your Progress</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Completed</span>
                        <span className="text-white">0 / {tool.videos.length}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-300"
                          style={{ 
                            backgroundColor: colorSet.color,
                            width: '0%'
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500">
                        Complete all tutorials to master {tool.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Courses & Resources Section */}
          <div className="mt-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Courses & Resources
              </h2>
              <p className="text-gray-400 text-lg">
                Master {tool.name} with these curated courses and resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Pricing & Access Card */}
              <Card className="bg-black border-gray-800 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: colorSet.bgColor }}
                  >
                    <DollarSign className="h-6 w-6" style={{ color: colorSet.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {tool.name} Pricing
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {tool.pricing.model === "free" ? "Completely Free" :
                       tool.pricing.model === "freemium" ? "Free with Premium Options" :
                       tool.pricing.model === "paid" ? "Paid Tool" : 
                       "Subscription Service"}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {tool.pricing.startingPrice && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Starting at</span>
                      <span className="text-white font-semibold">{tool.pricing.startingPrice}</span>
                    </div>
                  )}
                  
                  {tool.pricing.freeFeatures && tool.pricing.freeFeatures.length > 0 && (
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <Gift className="h-4 w-4 text-green-400" />
                        Free Features
                      </h4>
                      <ul className="space-y-1">
                        {tool.pricing.freeFeatures.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {tool.pricing.paidFeatures && tool.pricing.paidFeatures.length > 0 && (
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <Crown className="h-4 w-4" style={{ color: colorSet.color }} />
                        Premium Features
                      </h4>
                      <ul className="space-y-1">
                        {tool.pricing.paidFeatures.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colorSet.color }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {tool.pricing.discount && (
                    <div 
                      className="p-3 rounded-lg border text-center"
                      style={{ 
                        backgroundColor: `${colorSet.color}10`,
                        borderColor: `${colorSet.color}30`
                      }}
                    >
                      <Badge 
                        className="mb-2"
                        style={{ 
                          backgroundColor: colorSet.color,
                          color: "white"
                        }}
                      >
                        Special Offer
                      </Badge>
                      <p className="text-white font-medium">{tool.pricing.discount}</p>
                      {tool.pricing.couponCode && (
                        <p className="text-gray-400 text-sm mt-1">
                          Code: <span className="font-mono text-white">{tool.pricing.couponCode}</span>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </Card>
              
              {/* Official Resource Card */}
              <Card className="bg-black border-gray-800 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: colorSet.bgColor }}
                  >
                    <ExternalLink className="h-6 w-6" style={{ color: colorSet.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Official Platform
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Get started with {tool.name} directly
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Access the official {tool.name} platform to start using this powerful tool. 
                    Perfect for beginners and professionals alike.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Zap className="h-4 w-4 text-green-400" />
                      Instant access to all features
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <BookOpen className="h-4 w-4 text-blue-400" />
                      Official documentation included
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Star className="h-4 w-4 text-yellow-400" />
                      Regular updates and improvements
                    </div>
                  </div>
                  
                  {tool.pricing.affiliateUrl && (
                    <Button 
                      asChild
                      className="w-full text-white border-2 transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: colorSet.color,
                        borderColor: colorSet.color
                      }}
                      size="lg"
                    >
                      <a 
                        href={tool.pricing.affiliateUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Visit {tool.name}
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </div>
            
            {/* Recommended Courses Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                Recommended Learning Paths
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course recommendations based on tool type */}
                {tool.category === "ai-chatbots" && (
                  <>
                    <Card className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <BookOpen className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Prompt Engineering Mastery</h4>
                          <p className="text-gray-400 text-sm">Complete guide to AI prompts</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        Learn advanced prompting techniques to get better results from AI chatbots.
                      </p>
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Explore Course
                      </Button>
                    </Card>
                    
                    <Card className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Video className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">AI for Business</h4>
                          <p className="text-gray-400 text-sm">Practical AI applications</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        Implement AI chatbots in your business workflow for maximum productivity.
                      </p>
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Explore Course
                      </Button>
                    </Card>
                  </>
                )}
                
                {tool.category === "ai-image-generators" && (
                  <>
                    <Card className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-pink-500/20">
                          <BookOpen className="h-5 w-5 text-pink-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">AI Art Fundamentals</h4>
                          <p className="text-gray-400 text-sm">Master AI image generation</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        Learn to create stunning visuals with AI image generation tools.
                      </p>
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Explore Course
                      </Button>
                    </Card>
                    
                    <Card className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-orange-500/20">
                          <Video className="h-5 w-5 text-orange-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Commercial AI Art</h4>
                          <p className="text-gray-400 text-sm">Monetize your AI creations</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        Turn your AI art skills into a profitable business venture.
                      </p>
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Explore Course
                      </Button>
                    </Card>
                  </>
                )}
                
                {/* Default courses for other categories */}
                {!["ai-chatbots", "ai-image-generators"].includes(tool.category) && (
                  <>
                    <Card className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: `${colorSet.color}20` }}>
                          <BookOpen className="h-5 w-5" style={{ color: colorSet.color }} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{tool.name} Masterclass</h4>
                          <p className="text-gray-400 text-sm">Complete {tool.name} guide</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        Comprehensive course covering all aspects of {tool.name} from beginner to advanced.
                      </p>
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Explore Course
                      </Button>
                    </Card>
                    
                    <Card className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <Video className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">Productivity Boost</h4>
                          <p className="text-gray-400 text-sm">Optimize your workflow</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        Learn advanced techniques to maximize your productivity with {tool.name}.
                      </p>
                      <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Explore Course
                      </Button>
                    </Card>
                  </>
                )}
                
                {/* Universal course for all tools */}
                <Card className="bg-black border-gray-800 p-6 hover:border-gray-700 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-yellow-500/20">
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Tool Integration</h4>
                      <p className="text-gray-400 text-sm">Connect with other tools</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    Learn how to integrate {tool.name} with other tools in your workflow.
                  </p>
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Explore Course
                  </Button>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="mt-16">
            <div 
              className="rounded-2xl p-8 border border-gray-800 backdrop-blur-sm text-center"
              style={{ backgroundColor: `${colorSet.color}05` }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to master {tool.name}?
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                {tutorialSteps 
                  ? "Follow our detailed step-by-step guide or watch video tutorials to become proficient in just minutes."
                  : "Follow along with our video tutorials and become proficient in just minutes."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {tutorialSteps && (
                  <Button 
                    className="text-white border-2 transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: colorSet.color,
                      borderColor: colorSet.color
                    }}
                    size="lg"
                    onClick={() => setActiveTab("steps")}
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Step-by-Step Guide
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                  onClick={() => tool.videos[0] && handlePlayVideo(tool.videos[0].id)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  {tutorialSteps ? "Watch Videos Instead" : "Start from Beginning"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 