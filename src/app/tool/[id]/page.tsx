"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/header";
import { VideoCard } from "@/components/video-card";
import { YouTubePlayer } from "@/components/youtube-player";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ChevronLeft, Clock, List, Video } from "lucide-react";
import { getToolById, getCategoryById } from "@/lib/data";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: {
    id: string;
  };
}

export default function ToolPage({ params }: Props) {
  const tool = getToolById(params.id);
  
  if (!tool) {
    notFound();
  }
  
  const category = getCategoryById(tool.category);
  const [activeVideo, setActiveVideo] = useState(tool.videos[0]?.id || "");
  
  const handlePlayVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };
  
  const currentVideo = tool.videos.find(video => video.id === activeVideo);
  
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-muted/10 border-b border-border/40">
          <div className="container px-4 py-8 md:px-6 md:py-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <Link href="/">
                <Button variant="ghost" size="sm" className="hover:bg-muted/30">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>
              
              {category && (
                <Link href={`/category/${category.id}`}>
                  <Button variant="ghost" size="sm" className="hover:bg-muted/30">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {category.name}
                  </Button>
                </Link>
              )}
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {tool.icon && (
                    <div className="rounded-md bg-primary/10 p-3">
                      <Icon name={tool.icon} className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <h1 className="text-3xl font-bold">{tool.name}</h1>
                </div>
                <p className="text-muted-foreground max-w-3xl">{tool.description}</p>
              </div>
              
              <div className="flex-shrink-0 flex items-center gap-4 ml-auto">
                <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 text-sm bg-muted/20">
                  <Video className="h-4 w-4" />
                  <span>{tool.videos.length} {tool.videos.length === 1 ? 'tutorial' : 'tutorials'}</span>
                </Badge>
                
                {currentVideo && (
                  <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1 text-sm bg-secondary/20">
                    <Clock className="h-4 w-4" />
                    <span>{formatDuration(currentVideo.duration)}</span>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8 md:px-6 md:py-12">         
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              {currentVideo ? (
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden border border-border/40">
                    <YouTubePlayer videoId={currentVideo.youtubeId} autoPlay={true} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{currentVideo.title}</h2>
                    <p className="text-muted-foreground">{currentVideo.description}</p>
                    <div className="flex items-center gap-4 pt-2">
                      <Badge variant="outline" className="px-3 py-1.5">
                        Duration: {formatDuration(currentVideo.duration)}
                      </Badge>
                      <Button variant="ghost" size="sm" className="hover:bg-muted/30">
                        <List className="mr-2 h-4 w-4" />
                        Transcript
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center rounded-lg border border-border/40 bg-muted/30">
                  <div className="text-center space-y-2">
                    <div className="rounded-full bg-muted/50 p-4 mx-auto">
                      <Video className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">No video selected</p>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <div className="sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Tutorials</h2>
                  <Badge variant="outline" className="bg-muted/30">
                    {tool.videos.length} {tool.videos.length === 1 ? 'video' : 'videos'}
                  </Badge>
                </div>
                <div className="space-y-4">
                  {tool.videos.map((video) => (
                    <VideoCard 
                      key={video.id} 
                      video={video} 
                      onPlay={handlePlayVideo}
                      isPlaying={activeVideo === video.id} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
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