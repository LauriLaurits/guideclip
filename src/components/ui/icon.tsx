import { LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] as React.ComponentType<LucideProps>;
  
  if (!LucideIcon) {
    // Fallback to a default icon or return null
    return null;
  }
  
  return <LucideIcon {...props} />;
} 