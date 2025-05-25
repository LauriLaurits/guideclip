import { Header } from "@/components/header";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Add more categories
  const allCategories = [
    ...categories,
    {
      id: "audio-processing",
      name: "Audio Processing",
      description: "AI tools for audio enhancement, transcription, and voice synthesis",
      icon: "headphones"
    },
    {
      id: "video-editing",
      name: "Video Editing",
      description: "AI-powered video editing, enhancement and creation tools",
      icon: "film"
    },
    {
      id: "data-analysis",
      name: "Data Analysis",
      description: "Tools that help analyze and visualize complex data",
      icon: "bar-chart"
    },
    {
      id: "research",
      name: "Research Assistants",
      description: "AI tools that help with literature review and research",
      icon: "search"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1 px-4 md:px-8 lg:px-16 xl:px-24">
        <section className="w-full py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block bg-[#4b38b3] px-3 py-1 text-sm rounded-md mb-2">
                Quick & Easy AI Learning
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Master AI Tools <br />in 90 Seconds
              </h1>
              <p className="text-lg text-gray-400">
                Concise video tutorials to help you master powerful AI tools and get productive instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-[#1a1a40] text-[#8be9fd] glow-effect glow-blue">
                  Start Learning
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-gray-800">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="aspect-video overflow-hidden rounded-lg bg-black border border-gray-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-[#6c5ce7]/20 p-4">
                    <Play className="h-10 w-10 text-[#6c5ce7]" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                  <p className="text-sm font-medium">Learn ChatGPT in 2 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-16 bg-black border-t border-gray-900 max-w-7xl mx-auto">
          <div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">
                Browse by Category
              </h2>
              <p className="max-w-[700px] text-gray-400">
                Explore our collection of AI tools organized by category
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
              {allCategories.map((category, index) => {
                // Cycle through accent colors
                const accentColors = ["orange", "pink", "blue", "purple", "teal", "amber", "emerald", "indigo", "cyan"] as const;
                const colorIndex = index % accentColors.length;
                const currentColor = accentColors[colorIndex];
                const colorMap = {
                  orange: "#ff9f43",
                  pink: "#fd79a8",
                  blue: "#0984e3",
                  purple: "#6c5ce7",
                  teal: "#00cec9",
                  amber: "#fdcb6e",
                  emerald: "#00b894",
                  indigo: "#5f27cd",
                  cyan: "#00cec9"
                };
                
                return (
                  <CategoryCard 
                    key={category.id} 
                    category={category} 
                    borderColor={currentColor}
                    customColor={colorMap[currentColor]}
                    stats={`${Math.floor(Math.random() * 12) + 2} tools • ${Math.floor(Math.random() * 20) + 5} videos`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-16 border-t border-gray-900 max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="rounded-lg bg-black border border-gray-800 p-6">
              <h3 className="text-2xl font-bold mb-4">Why GuideClip?</h3>
              <ul className="space-y-4">
                {[
                  { title: "Quick & Concise", desc: "Learn essential skills in under 3 minutes", color: "#ff9f43" },
                  { title: "Practical Tutorials", desc: "Focus on real-world applications", color: "#fd79a8" },
                  { title: "Latest AI Tools", desc: "Stay updated with cutting-edge technology", color: "#0984e3" },
                  { title: "Step-by-Step Guidance", desc: "Easy to follow instructions for all levels", color: "#6c5ce7" }
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <div className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full`} style={{ backgroundColor: `${item.color}20` }}>
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Popular This Week</h3>
              <div className="space-y-4">
                {[
                  { title: "ChatGPT for Beginners", duration: "1:45", views: "2.4k", color: "#ff9f43" },
                  { title: "Midjourney Quick Tips", duration: "2:30", views: "1.8k", color: "#fd79a8" },
                  { title: "GitHub Copilot Setup", duration: "1:55", views: "1.2k", color: "#0984e3" }
                ].map((item, i) => (
                  <Link href="#" key={i} className="block">
                    <div className="flex items-center rounded-lg border border-gray-800 p-4 hover:bg-gray-900 transition-colors hover:border-gray-600">
                      <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: `${item.color}20` }}>
                        <Play className="h-6 w-6" style={{ color: item.color }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-white transition-colors duration-200 hover:text-[#8be9fd]">{item.title}</h4>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>{item.duration}</span>
                          <span className="mx-2">•</span>
                          <span>{item.views} views</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="w-full border-t border-gray-900 bg-black px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span className="text-gray-100">Guide</span>
                <span className="text-[#8be9fd]">Clip</span>
                <span className="text-[#fd79a8]">.</span>
              </div>
              <p className="text-gray-400">
                Learn AI tools quickly with bite-sized video tutorials. Master new skills in 90-180 seconds.
              </p>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-medium">Resources</h3>
              <ul className="space-y-2">
                {["Categories", "Tools", "Tutorials", "Blog", "Help Center"].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-400 hover:text-[#8be9fd] transition-colors duration-200 glow-effect">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-medium">Company</h3>
              <ul className="space-y-2">
                {["About", "Careers", "Press", "Contact", "Terms", "Privacy"].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-400 hover:text-[#fd79a8] transition-colors duration-200 glow-effect">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-lg font-medium">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Get the latest tutorials and updates directly to your inbox.
              </p>
              <div className="flex space-x-0">
                <input 
                  placeholder="Email address" 
                  className="bg-black px-4 py-2 rounded-l-md flex-1 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7]"
                />
                <Button className="rounded-l-none bg-[#1a1a40] text-[#8be9fd] glow-effect">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} GuideClip. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Terms", "Privacy", "Cookies", "FAQ", "Contact"].map((item, i) => {
                const colors = ["#ff9f43", "#fd79a8", "#0984e3", "#6c5ce7", "#00cec9"];
                return (
                  <Link key={i} href="#" className="text-sm text-gray-400 transition-colors duration-200 hover:text-white">
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
