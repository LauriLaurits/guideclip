import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail, Send, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-900 bg-black">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="text-xl font-bold">
              <span className="text-white">Guide</span>
              <span className="text-primary">Clip</span>
              <span>.</span>
            </div>
            <p className="text-sm text-gray-400">
              Learn AI tools quickly with bite-sized video tutorials. Master new skills in 90-180 seconds.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400 hover:text-primary hover:bg-gray-900">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              {["Categories", "Tools", "Tutorials", "Blog", "Help Center"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-400 accent-hover">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              {["About", "Careers", "Press", "Contact", "Terms", "Privacy"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-400 accent-hover">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-medium">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest tutorials and updates directly to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Email address" 
                className="bg-black border-gray-800 focus-purple"
              />
              <Button size="icon" className="btn-primary">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 order-2 md:order-1">
            &copy; {new Date().getFullYear()} GuideClip. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 order-1 md:order-2">
            {["Terms", "Privacy", "Cookies", "FAQ", "Contact"].map((item, i) => (
              <Link key={i} href="#" className="text-xs text-gray-400 accent-hover">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 