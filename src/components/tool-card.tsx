import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tool } from "@/lib/data";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Clock, Play, ArrowRight, DollarSign, Zap, Code, Plug } from "lucide-react";

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

// Get pricing badge color and text
const getPricingBadge = (tool: Tool) => {
  const { model, startingPrice, discount } = tool.pricing;
  
  switch (model) {
    case "free":
      return { text: "Free", color: "bg-green-500/20 text-green-400 border-green-500/30" };
    case "freemium":
      return { text: `Free + ${startingPrice}`, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" };
    case "paid":
      return { text: `From ${startingPrice}`, color: "bg-orange-500/20 text-orange-400 border-orange-500/30" };
    case "subscription":
      return { text: `${startingPrice}/mo`, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" };
    default:
      return { text: "Contact", color: "bg-gray-500/20 text-gray-400 border-gray-500/30" };
  }
};

// Get feature tags to display
const getFeatureTags = (tool: Tool) => {
  const tags = [];
  
  if (tool.features.hasFreeTier) tags.push({ text: "free-tier", icon: null });
  if (tool.features.noCodeRequired) tags.push({ text: "no-code", icon: Code });
  if (tool.features.hasAPI) tags.push({ text: "api", icon: Plug });
  if (tool.pricing.discount) tags.push({ text: tool.pricing.discount, icon: Zap });
  
  return tags.slice(0, 3); // Show max 3 feature tags
};

export function ToolCard({ 
  tool, 
  customColor = DEFAULT_COLOR,
  borderColor = "purple"
}: ToolCardProps) {
  const firstVideoDuration = tool.videos[0]?.duration ?? 0;
  const videoCount = tool.videos.length;
  const pricingBadge = getPricingBadge(tool);
  const featureTags = getFeatureTags(tool);
  
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
          
          {/* Pricing Badge - Top Left */}
          <div className="absolute top-3 left-3">
            <Badge 
              variant="outline" 
              className={`${pricingBadge.color} text-xs backdrop-blur-sm font-medium`}
            >
              <DollarSign className="h-3 w-3 mr-1" />
              {pricingBadge.text}
            </Badge>
          </div>
          
          {/* Video Count Badge - Top Right */}
          <div className="absolute top-3 right-3">
            <Badge 
              variant="outline" 
              className="bg-black/80 border-gray-700 text-white text-xs backdrop-blur-sm"
            >
              {getVideoCountText(videoCount)}
            </Badge>
          </div>
          
          {/* Discount Badge - Bottom Right */}
          {tool.pricing.discount && (
            <div className="absolute bottom-3 right-3">
              <Badge 
                variant="outline" 
                className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 text-xs backdrop-blur-sm animate-pulse"
              >
                <Zap className="h-3 w-3 mr-1" />
                {tool.pricing.discount}
              </Badge>
            </div>
          )}
          
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
        <CardContent className="pt-0 space-y-3">
          {/* Feature Tags */}
          <div className="flex flex-wrap gap-1.5">
            {featureTags.map((tag, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs"
              >
                {tag.icon && <tag.icon className="h-3 w-3 mr-1" />}
                {tag.text}
              </Badge>
            ))}
          </div>
          
          {/* Bottom Row */}
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