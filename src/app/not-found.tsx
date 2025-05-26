"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-none">
                404
              </h1>
            </div>
            
            {/* Error Message */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-red-400 text-sm font-medium">Page Not Found</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Oops! This page doesn't exist
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto">
                The page you're looking for might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Button>
              </Link>
              
              <Link href="/categories">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Browse Tools
                </Button>
              </Link>
            </div>
            
            {/* Helpful Links */}
            <div className="rounded-2xl border border-gray-800 bg-black/50 backdrop-blur-sm p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Popular Destinations</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link 
                  href="/categories" 
                  className="text-center p-4 rounded-lg border border-gray-800 hover:bg-gray-900/50 hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">Categories</div>
                </Link>
                
                <Link 
                  href="/popular" 
                  className="text-center p-4 rounded-lg border border-gray-800 hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Popular</div>
                </Link>
                
                <Link 
                  href="/tags" 
                  className="text-center p-4 rounded-lg border border-gray-800 hover:bg-gray-900/50 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">Tags</div>
                </Link>
                
                <Link 
                  href="/about" 
                  className="text-center p-4 rounded-lg border border-gray-800 hover:bg-gray-900/50 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">About</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 