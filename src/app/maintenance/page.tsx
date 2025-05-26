"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wrench, Clock, Mail, Twitter, Github, Sparkles } from "lucide-react";

export default function MaintenancePage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <main className="flex-1 flex items-center justify-center px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <span className="text-4xl font-bold tracking-tight">
              <span className="text-white">Guide</span>
              <span className="text-white">Clip</span>
              <span className="text-pink-400 text-4xl leading-none">.</span>
            </span>
          </div>

          {/* Animated maintenance icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-purple-500/30 flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
                <Wrench className="h-12 w-12 text-purple-400" />
              </div>
              <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-blue-500/20 animate-ping"></div>
            </div>
          </div>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium">Under Maintenance</span>
          </div>

          {/* Main message */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            We&apos;re Making Things Better
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto">
            GuideClip is currently undergoing scheduled maintenance to improve your learning experience. We&apos;ll be back soon!
          </p>

          {/* Countdown timer */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Estimated time remaining</span>
            </div>
            
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg border border-gray-800 bg-gray-900/50 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-xs text-gray-400">Hours</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg border border-gray-800 bg-gray-900/50 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-xs text-gray-400">Minutes</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg border border-gray-800 bg-gray-900/50 flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-xs text-gray-400">Seconds</span>
              </div>
            </div>
          </div>

          {/* Email notification signup */}
          <div className="rounded-2xl border border-gray-800 bg-black/50 backdrop-blur-sm p-8 mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Get Notified When We&apos;re Back</h3>
            </div>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black border-gray-800 focus:ring-2 focus:border-transparent text-white placeholder-gray-500 flex-1"
                  required
                />
                <Button 
                  type="submit"
                  variant="outline"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-400 text-sm font-medium">Thanks! We&apos;ll notify you when we&apos;re back online.</span>
                </div>
              </div>
            )}
          </div>

          {/* What we're working on */}
          <div className="text-left max-w-md mx-auto mb-8">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">What we&apos;re improving:</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Enhanced AI tool recommendations
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Faster video loading times
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                New tutorial categories
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                Improved user experience
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} GuideClip. We&apos;ll be back soon!</p>
      </footer>
    </div>
  );
} 