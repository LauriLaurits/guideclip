import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Category } from "@/lib/data";
import { getToolsByCategory } from "@/lib/data";

interface CategoryCardProps {
  category: Category;
  borderClass?: string;
  borderColor?: "orange" | "pink" | "blue" | "red" | "purple";
  iconClass?: string;
  iconBgClass?: string;
}

export function CategoryCard({ 
  category, 
  borderClass = "hover:border-primary", 
  borderColor = "purple",
  iconClass = "text-primary", 
  iconBgClass = "bg-primary/10" 
}: CategoryCardProps) {
  const toolCount = getToolsByCategory(category.id).length;
  
  // Extract the color name from the classes for hover effects
  const hoverClass = iconClass.replace("text-", "hover:text-");
  
  return (
    <Link href={`/category/${category.id}`}>
      <Card className={`h-full bg-black card-with-border-hover ${borderColor}-border`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className={`text-white transition-colors duration-200 ${hoverClass}`}>{category.name}</CardTitle>
            {category.icon && (
              <div className={`rounded-md ${iconBgClass} p-2`}>
                <Icon name={category.icon} className={`h-5 w-5 ${iconClass}`} />
              </div>
            )}
          </div>
          <CardDescription className="text-gray-400">{category.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="bg-black border-gray-800 text-gray-400">
              {toolCount} {toolCount === 1 ? 'tool' : 'tools'}
            </Badge>
            <span className="text-xs text-gray-400">View Tools →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 