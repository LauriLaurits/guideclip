import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Category } from "@/lib/data";
import { getToolsByCategory } from "@/lib/data";

interface CategoryCardProps {
  category: Category;
  borderColor?: "orange" | "pink" | "blue" | "red" | "purple" | "teal" | "amber" | "emerald" | "indigo" | "cyan";
  customColor?: string;
  stats?: string;
  iconClass?: string;
  iconBgClass?: string;
}

export function CategoryCard({ 
  category, 
  borderColor = "purple",
  customColor = "#6c5ce7",
  stats,
  iconClass, 
  iconBgClass
}: CategoryCardProps) {
  const toolCount = getToolsByCategory(category.id).length;
  
  return (
    <Link href={`/category/${category.id}`}>
      <Card 
        className="h-full bg-black border border-gray-800 transition-all duration-300 hover:border-gray-400"
        style={{ borderColor: "#333" }}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white transition-colors duration-200 hover:text-[#8be9fd]">{category.name}</CardTitle>
            {category.icon && (
              <div className="rounded-md p-2" style={{ backgroundColor: `${customColor}20` }}>
                <Icon name={category.icon} className="h-5 w-5" style={{ color: customColor }} />
              </div>
            )}
          </div>
          <CardDescription className="text-gray-400">{category.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="bg-black border-gray-800 text-gray-400">
              {stats || `${toolCount} ${toolCount === 1 ? 'tool' : 'tools'}`}
            </Badge>
            <span className="text-xs text-gray-400 hover:text-[#8be9fd] transition-colors">View Tools →</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
} 