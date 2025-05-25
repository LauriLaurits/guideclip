import { Video } from "@/lib/data";
import { PlayCircle, Pause, Clock } from "lucide-react";

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
          <div className="flex items-center gap-4 p-3">
            {/* Thumbnail with overlay */}
            <div className="relative w-20 h-20 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                alt={video.title}
                className={`w-full h-full object-cover ${isPlaying ? 'scale-110' : 'hover:scale-110'} transition-transform duration-500`}
              />
              
              {/* Simple overlay */}
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300" style={{
                opacity: isPlaying ? 0.3 : 0.6
              }}></div>
              
              {/* Duration badge */}
              <div className="absolute bottom-1 right-1 bg-black/70 px-1.5 py-0.5 rounded text-[10px] font-medium">
                {formatDuration(video.duration)}
              </div>
              
              {/* Play/pause button */}
              <div className="absolute inset-0 flex items-center justify-center">
                {isPlaying ? (
                  <Pause className="h-8 w-8" style={{ color: accentColor }} />
                ) : (
                  <PlayCircle className="h-8 w-8 text-white/80 hover:text-white transition-colors duration-300" />
                )}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm mb-1 line-clamp-1 transition-colors duration-300" style={{
                color: isPlaying ? accentColor : 'white'
              }}>
                {video.title}
              </h4>
              <p className="text-gray-400 text-xs line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 