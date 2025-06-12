"use client";

import { bundles } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function BundlesPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-black border-b border-gray-800">
          {/* Background gradient */}
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600" />
          
          <div className="relative max-w-7xl mx-auto px-4 py-16 md:px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-16">
              <Badge 
                className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 text-purple-400"
                variant="outline"
              >
                <Icon name="package" className="mr-2 h-4 w-4" />
                Tool Bundles
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Project Tool
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Bundles
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Complete tool sets for specific projects. Everything you need to launch your idea, 
                organized by project type with clear steps and cost estimates.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="px-4 py-2 bg-purple-500/10 border-purple-500/30 text-purple-400">
                  8 Project Types
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-blue-500/10 border-blue-500/30 text-blue-400">
                  Step-by-Step Guides
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-cyan-500/10 border-cyan-500/30 text-cyan-400">
                  Cost Estimates
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                  Time to Launch
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Bundles Grid */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bundles.map((bundle) => (
                <Card key={bundle.id} className="group hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-gray-600 bg-black/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                        <Icon name={bundle.icon || "package"} className="h-6 w-6 text-purple-400" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={getDifficultyColor(bundle.difficultyLevel)}
                      >
                        {bundle.difficultyLevel}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {bundle.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {bundle.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-300">Cost:</span>
                        <p className="text-gray-400">{bundle.estimatedCost}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-300">Launch:</span>
                        <p className="text-gray-400">{bundle.timeToLaunch}</p>
                      </div>
                    </div>

                    {/* Tools Count */}
                    <div className="flex items-center gap-2">
                      <Icon name="package" className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-400">
                        {bundle.tools.length} tools included
                      </span>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-2">
                      <span className="text-sm font-medium text-gray-300">Key Benefits:</span>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {bundle.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="check" className="h-3 w-3 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <Link href={`/bundle/${bundle.id}`} className="block">
                      <Button 
                        variant="outline" 
                        className="w-full border border-purple-500/50 text-purple-400 hover:border-purple-400 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        View Bundle Details
                        <Icon name="arrow-right" className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 lg:px-16 xl:px-24">
            <div className="text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                <CardContent className="p-8">
                                  <h2 className="text-2xl font-bold mb-4">
                  Can&apos;t Find Your Project Type?
                </h2>
                <p className="text-purple-100 mb-6">
                  Tell us what you&apos;re building and we&apos;ll create a custom tool bundle for your specific needs.
                </p>
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Request Custom Bundle
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 