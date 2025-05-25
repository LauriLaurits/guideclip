import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tool } from "@/lib/data";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Clock, Play, ArrowRight } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
  borderColor?: "orange" | "pink" | "blue" | "red" | "purple" | "teal" | "amber" | "emerald" | "indigo" | "cyan";
  customColor?: string;
}

const DEFAULT_COLOR = "#6c5ce7";

// Utility function for formatting duration
const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// Utility function to get video count text
const getVideoCountText = (count: number): string => {
  return `${count} ${count === 1 ? 'video' : 'videos'}`;
};

export function ToolCard({ 
  tool, 
  customColor = DEFAULT_COLOR,
  borderColor = "purple"
}: ToolCardProps) {
  const firstVideoDuration = tool.videos[0]?.duration ?? 0;
  const videoCount = tool.videos.length;
  
  return (
    <Link href={`/tool/${tool.id}`} className="group">
      <Card className="h-full bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:shadow-lg">
        {/* Video Preview Section */}
        <div className="aspect-video relative bg-black overflow-hidden rounded-t-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="rounded-full p-3 transition-transform group-hover:scale-110" 
              style={{ backgroundColor: `${customColor}20` }}
            >
              <Play 
                className="h-6 w-6 transition-colors" 
                style={{ color: customColor }} 
              />
            </div>
          </div>
          
          {/* Video Count Badge */}
          <div className="absolute top-3 right-3">
            <Badge 
              variant="outline" 
              className="bg-black/80 border-gray-700 text-white text-xs backdrop-blur-sm"
            >
              {getVideoCountText(videoCount)}
            </Badge>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>
        
        {/* Card Header */}
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <CardTitle 
                className="text-white transition-colors duration-200 text-lg leading-tight"
                style={{ color: 'white' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = customColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                {tool.name}
              </CardTitle>
            </div>
            {tool.icon && (
              <div 
                className="rounded-lg p-2 flex-shrink-0" 
                style={{ backgroundColor: `${customColor}20` }}
              >
                <Icon 
                  name={tool.icon} 
                  className="h-5 w-5" 
                  style={{ color: customColor }} 
                />
              </div>
            )}
          </div>
          <CardDescription className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {tool.description}
          </CardDescription>
        </CardHeader>
        
        {/* Card Content */}
        <CardContent className="pt-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm">
              <Clock className="mr-1.5 h-4 w-4" />
              <span>{formatDuration(firstVideoDuration)}</span>
            </div>
            <div 
              className="flex items-center text-sm font-medium transition-colors"
              style={{ color: customColor }}
            >
              <span className="mr-1">Watch</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 