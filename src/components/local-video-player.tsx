"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VideoChapter {
  time: number;
  title: string;
  description: string;
}

interface LocalVideoPlayerProps {
  videoSrc: string;
  poster?: string;
  autoPlay?: boolean;
  title?: string;
  accentColor?: string;
  chapters?: VideoChapter[];
}

export function LocalVideoPlayer({ 
  videoSrc, 
  poster, 
  autoPlay = false, 
  title,
  accentColor = "#6c5ce7",
  chapters = []
}: LocalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showChapters, setShowChapters] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };

    const updateDuration = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [videoSrc]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    
    video.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress((newTime / duration) * 100);
  };

  const jumpToChapter = (time: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = time;
    setCurrentTime(time);
    setProgress((time / duration) * 100);
    setShowChapters(false);
  };

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    setCurrentTime(0);
    setProgress(0);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="relative group rounded-lg overflow-hidden bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full aspect-video"
        src={videoSrc}
        poster={poster}
        autoPlay={autoPlay}
        muted={isMuted}
        playsInline
        onClick={togglePlay}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: accentColor }}></div>
        </div>
      )}

      {/* Play/Pause Overlay */}
      {!isPlaying && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Button
            onClick={togglePlay}
            className="rounded-full p-4 transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: accentColor }}
          >
            <Play className="h-8 w-8 text-white fill-white" />
          </Button>
        </div>
      )}

      {/* Chapters Overlay */}
      {showChapters && chapters.length > 0 && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-8">
          <div className="bg-gray-900 rounded-lg p-6 max-w-md w-full max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5" style={{ color: accentColor }} />
                Chapters
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowChapters(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </Button>
            </div>
            <div className="space-y-2">
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => jumpToChapter(chapter.time)}
                  className="w-full text-left p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-medium text-sm">{chapter.title}</span>
                    <span className="text-gray-400 text-xs">{formatTime(chapter.time)}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{chapter.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Controls Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-all duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0'
      }`}>
        
        {/* Chapter Markers */}
        {chapters.length > 0 && (
          <div className="relative w-full h-1 bg-gray-600 rounded-full mb-2">
            {chapters.map((chapter, index) => (
              <div
                key={index}
                className="absolute top-0 w-1 h-1 bg-white rounded-full cursor-pointer hover:scale-150 transition-transform"
                style={{ 
                  left: `${(chapter.time / duration) * 100}%`,
                  marginLeft: '-2px'
                }}
                onClick={() => jumpToChapter(chapter.time)}
                title={chapter.title}
              />
            ))}
          </div>
        )}
        
        {/* Progress Bar */}
        <div 
          className="w-full h-2 bg-gray-600 rounded-full mb-3 cursor-pointer relative overflow-hidden"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full rounded-full transition-all duration-150"
            style={{ 
              backgroundColor: accentColor,
              width: `${progress}%`
            }}
          />
          
          {/* Progress Handle */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-150"
            style={{ 
              left: `${progress}%`,
              marginLeft: '-8px'
            }}
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlay}
              className="text-white hover:bg-white/20 p-2"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={restart}
              className="text-white hover:bg-white/20 p-2"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="text-white hover:bg-white/20 p-2"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>

            {chapters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowChapters(true)}
                className="text-white hover:bg-white/20 p-2"
              >
                <BookOpen className="h-4 w-4" />
              </Button>
            )}

            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {title && (
              <span className="text-white text-sm font-medium max-w-64 truncate">
                {title}
              </span>
            )}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="text-white hover:bg-white/20 p-2"
            >
              <Maximize className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 