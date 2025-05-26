import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from "lucide-react";

const SOCIAL_ICONS = [Twitter, Facebook, Instagram, Youtube, Linkedin] as const;

const RESOURCE_LINKS = [
  "Categories", 
  "Tools", 
  "Tutorials", 
  "Blog", 
  "Help Center"
] as const;

const COMPANY_LINKS = [
  "About", 
  "Careers", 
  "Press", 
  "Contact", 
  "Terms", 
  "Privacy"
] as const;

const FOOTER_LINKS = [
  "Terms", 
  "Privacy", 
  "Cookies", 
  "FAQ", 
  "Contact"
] as const;

// Color scheme for different sections
const SECTION_COLORS = {
  social: "#8be9fd",      // Cyan
  resources: "#ff9f43",   // Orange  
  company: "#fd79a8",     // Pink
  newsletter: "#00cec9",  // Teal
  footerLinks: "#6c5ce7"  // Purple
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-900 bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Guide</span>
              <span className="text-white">Clip</span>
              <span className="text-pink-400 text-2xl leading-none">.</span>
              <span className="text-gray-400 text-sm ml-1">™</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Learn AI tools quickly with bite-sized video tutorials. Master new skills in 90-180 seconds.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_ICONS.map((Icon, index) => (
                <Button 
                  key={index} 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full text-gray-400 hover:bg-gray-900 transition-colors"
                  style={{
                    '--hover-color': SECTION_COLORS.social
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = SECTION_COLORS.social;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#9ca3af'; // gray-400
                  }}
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
          
          {/* Resources Section */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              {RESOURCE_LINKS.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = SECTION_COLORS.resources;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af'; // gray-400
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Section */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = SECTION_COLORS.company;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#9ca3af'; // gray-400
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Get the latest tutorials and updates directly to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Email address" 
                className="bg-black border-gray-800 focus:ring-2 focus:border-transparent text-white placeholder-gray-500"
                style={{
                  '--focus-ring-color': SECTION_COLORS.newsletter
                } as React.CSSProperties}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = SECTION_COLORS.newsletter;
                  e.currentTarget.style.boxShadow = `0 0 0 2px ${SECTION_COLORS.newsletter}40`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#374151'; // gray-800
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <Button 
                variant="outline"
                size="icon" 
                className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 hover:text-teal-400 transition-all duration-300"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 order-2 md:order-1">
            &copy; {currentYear} GuideClip. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 order-1 md:order-2">
            {FOOTER_LINKS.map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-xs text-gray-400 transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = SECTION_COLORS.footerLinks;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9ca3af'; // gray-400
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 