import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tool } from "@/lib/data";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Clock, Play } from "lucide-react";

interface ToolCardProps {
  tool: Tool;
  borderClass?: string;
  borderColor?: "orange" | "pink" | "blue" | "red" | "purple";
  iconClass?: string;
  iconBgClass?: string;
}

export function ToolCard({ 
  tool, 
  borderClass = "hover:border-primary",
  borderColor = "purple",
  iconClass = "text-primary",
  iconBgClass = "bg-primary/10"
}: ToolCardProps) {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Extract the color name from the classes for hover effects
  const hoverClass = iconClass.replace("text-", "hover:text-");
  
  return (
    <Link href={`/tool/${tool.id}`}>
      <Card className={`h-full bg-black card-with-border-hover ${borderColor}-border glow-effect`}>
        <div className="aspect-video relative bg-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`rounded-full ${iconBgClass.replace("/10", "/20")} p-3`}>
              <Play className={`h-6 w-6 ${iconClass}`} />
            </div>
          </div>
          
          <div className="absolute top-2 right-2">
            <Badge variant="outline" className="bg-black/70 border-gray-800 text-white">
              {tool.videos.length} {tool.videos.length === 1 ? 'video' : 'videos'}
            </Badge>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className={`text-white transition-colors duration-200 ${hoverClass}`}>{tool.name}</CardTitle>
            {tool.icon && (
              <div className={`rounded-md ${iconBgClass} p-2`}>
                <Icon name={tool.icon} className={`h-5 w-5 ${iconClass}`} />
              </div>
            )}
          </div>
          <CardDescription className="text-gray-400">{tool.description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm">
              <Clock className="mr-1 h-4 w-4" />
              <span>{formatDuration(tool.videos[0]?.duration ?? 0)}</span>
            </div>
            <span className="text-xs text-gray-400">Watch Videos →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 