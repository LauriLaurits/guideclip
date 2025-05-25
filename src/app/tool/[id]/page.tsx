"use client";

import React from "react";
import { useState, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { VideoCard } from "@/components/video-card";
import { YouTubePlayer } from "@/components/youtube-player";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, List, Video, Play, ExternalLink, BookOpen, Star } from "lucide-react";
import { getToolById, getCategoryById } from "@/lib/data";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{
    id: string;
  }>;
}

// Tool color configuration based on category
const TOOL_COLORS = {
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

export default function ToolPage({ params }: Props) {
  // Use React.use() to unwrap the params Promise
  const { id } = use(params);
  const tool = getToolById(id);
  
  if (!tool) {
    notFound();
  }
  
  const category = getCategoryById(tool.category);
  const [activeVideo, setActiveVideo] = useState(tool.videos[0]?.id || "");
  const colorSet = TOOL_COLORS[tool.category as keyof typeof TOOL_COLORS] || DEFAULT_COLOR;
  
  const handlePlayVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };
  
  const currentVideo = tool.videos.find(video => video.id === activeVideo);
  
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const totalDuration = tool.videos.reduce((acc, video) => acc + video.duration, 0);
  
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
                    <span>{tool.videos.length} {tool.videos.length === 1 ? 'tutorial' : 'tutorials'}</span>
                  </div>
                  <div className="h-1 w-1 rounded-full bg-gray-600 self-center" />
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-5 w-5" style={{ color: colorSet.color }} />
                    <span>{formatDuration(totalDuration)} total content</span>
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
                  onClick={() => currentVideo && handlePlayVideo(currentVideo.id)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Learning
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit Official Site
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">         
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
              {/* Video Player Section */}
              <div className="lg:col-span-2">
                {currentVideo ? (
                  <div className="space-y-8">
                    {/* Video Player */}
                    <div className="rounded-xl overflow-hidden border border-gray-800 bg-black shadow-2xl">
                      <YouTubePlayer videoId={currentVideo.youtubeId} autoPlay={true} />
                    </div>
                    
                    {/* Video Info */}
                    <div 
                      className="rounded-xl p-8 border border-gray-800 backdrop-blur-sm"
                      style={{ backgroundColor: `${colorSet.color}05` }}
                    >
                      <h2 className="text-3xl font-bold text-white mb-4">{currentVideo.title}</h2>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{currentVideo.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4">
                        <Badge 
                          variant="outline" 
                          className="px-4 py-2 text-sm border-gray-700 bg-black/50 backdrop-blur-sm"
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          Duration: {formatDuration(currentVideo.duration)}
                        </Badge>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all duration-300"
                        >
                          <List className="mr-2 h-4 w-4" />
                          View Transcript
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all duration-300"
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Resources
                        </Button>
                      </div>
                    </div>
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
              <div>
                <div className="sticky top-20">
                  <div 
                    className="rounded-xl p-6 border border-gray-800 backdrop-blur-sm mb-6"
                    style={{ backgroundColor: `${colorSet.color}05` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-white">Tutorial Playlist</h2>
                      <Badge 
                        variant="outline" 
                        className="border-gray-700 bg-black/50 backdrop-blur-sm"
                      >
                        {tool.videos.length} {tool.videos.length === 1 ? 'video' : 'videos'}
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      {tool.videos.map((video, index) => (
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
            
            {/* Call to Action Section */}
            <div className="mt-20">
              <div 
                className="rounded-2xl p-8 border border-gray-800 backdrop-blur-sm text-center"
                style={{ backgroundColor: `${colorSet.color}05` }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to master {tool.name}?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                  Follow along with our step-by-step tutorials and become proficient in just minutes. 
                  Start with the first video and work your way through the complete guide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="text-white border-2 transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: colorSet.color,
                      borderColor: colorSet.color
                    }}
                    size="lg"
                    onClick={() => tool.videos[0] && handlePlayVideo(tool.videos[0].id)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start from Beginning
                  </Button>
                  {category && (
                    <Link href={`/category/${category.id}`}>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                      >
                        Explore More {category.name}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 