import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Category } from "@/lib/data";
import { getToolsByCategory } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  borderColor?: "orange" | "pink" | "blue" | "red" | "purple" | "teal" | "amber" | "emerald" | "indigo" | "cyan";
  customColor?: string;
  stats?: string;
}

const DEFAULT_COLOR = "#6c5ce7";

// Utility function to get tool count text
const getToolCountText = (count: number): string => {
  return `${count} ${count === 1 ? 'tool' : 'tools'}`;
};

export function CategoryCard({ 
  category, 
  borderColor = "purple",
  customColor = DEFAULT_COLOR,
  stats
}: CategoryCardProps) {
  const toolCount = getToolsByCategory(category.id).length;
  const displayStats = stats || getToolCountText(toolCount);
  
  return (
    <Link href={`/category/${category.id}`} className="group">
      <Card className="h-full bg-black border border-gray-800 transition-all duration-300 hover:border-gray-600 group-hover:shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <CardTitle 
                className="text-white transition-colors duration-200 text-lg leading-tight group-hover:transition-colors"
                style={{ color: 'white' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = customColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'white';
                }}
              >
                {category.name}
              </CardTitle>
            </div>
            {category.icon && (
              <div 
                className="rounded-lg p-2 flex-shrink-0" 
                style={{ backgroundColor: `${customColor}20` }}
              >
                <Icon 
                  name={category.icon} 
                  className="h-5 w-5" 
                  style={{ color: customColor }} 
                />
              </div>
            )}
          </div>
          <CardDescription className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {category.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex justify-between items-center">
            <Badge 
              variant="outline" 
              className="bg-black border-gray-700 text-gray-400 text-xs"
            >
              {displayStats}
            </Badge>
            <div 
              className="flex items-center text-sm font-medium group-hover:transition-colors transition-colors"
              style={{ color: customColor }}
            >
              <span className="mr-1">Explore</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 