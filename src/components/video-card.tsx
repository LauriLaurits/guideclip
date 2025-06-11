import { Video } from "@/lib/data";
import Image from "next/image";
import { PlayCircle, Pause } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VideoCardProps {
  video: Video;
  onPlay: (videoId: string) => void;
  isPlaying: boolean;
  accentColor?: string;
}

export function VideoCard({ 
  video, 
  onPlay, 
  isPlaying, 
  accentColor = "#0984e3" 
}: VideoCardProps) {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case "beginner": return "#00b894";
      case "intermediate": return "#fdcb6e";
      case "advanced": return "#e17055";
      default: return "#6c5ce7";
    }
  };
  
  return (
    <div 
      className="relative cursor-pointer overflow-hidden rounded-xl transition-all duration-300"
      onClick={() => onPlay(video.id)}
    >
      <div className={`rounded-xl p-0.5 relative ${isPlaying ? 'border' : ''}`} style={{ 
        borderColor: isPlaying ? accentColor : 'transparent' 
      }}>
        <div className="relative rounded-xl h-full overflow-hidden border transition-all duration-300 bg-black" style={{
          borderColor: isPlaying ? `${accentColor}80` : '#333',
        }}>
          <div className="p-4">
            {/* Header with title and difficulty */}
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-sm transition-colors duration-300 flex-1 pr-2" style={{
                color: isPlaying ? accentColor : 'white'
              }}>
                {video.title}
              </h4>
              <div className="flex items-center gap-2 flex-shrink-0">
                {video.difficulty && (
                  <Badge 
                    variant="outline"
                    className="text-xs px-2 py-0.5 border"
                    style={{ 
                      color: getDifficultyColor(video.difficulty),
                      borderColor: `${getDifficultyColor(video.difficulty)}50`,
                      backgroundColor: `${getDifficultyColor(video.difficulty)}10`
                    }}
                  >
                    {video.difficulty}
                  </Badge>
                )}
                <span className="text-xs text-gray-500">
                  {formatDuration(video.duration)}
                </span>
                {/* Play/pause button */}
                {isPlaying ? (
                  <Pause className="h-5 w-5" style={{ color: accentColor }} />
                ) : (
                  <PlayCircle className="h-5 w-5 text-white/80 hover:text-white transition-colors duration-300" />
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-xs line-clamp-2 mb-3">
              {video.description}
            </p>

            {/* Tags */}
            {video.tags && video.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {video.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
                {video.tags.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{video.tags.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Chapters indicator */}
            {video.chapters && video.chapters.length > 0 && (
              <div className="flex items-center gap-1 mt-2">
                <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                <span className="text-xs text-gray-500">
                  {video.chapters.length} chapters
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 