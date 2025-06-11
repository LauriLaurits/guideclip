"use client";

import React from "react";
import { getBundleById, getToolsByBundle } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
}

export default function BundlePage({ params }: Props) {
  const { id } = React.use(params);
  const bundle = getBundleById(id);
  
  if (!bundle) {
    notFound();
  }

  const tools = getToolsByBundle(id);

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
        <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
              <Icon name={bundle.icon || "package"} className="h-8 w-8 text-purple-400" />
            </div>
            <Badge 
              variant="outline" 
              className={getDifficultyColor(bundle.difficultyLevel)}
            >
              {bundle.difficultyLevel}
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {bundle.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {bundle.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="text-center">
              <span className="text-sm text-gray-400">Estimated Cost</span>
              <p className="text-lg font-semibold text-white">{bundle.estimatedCost}</p>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-400">Time to Launch</span>
              <p className="text-lg font-semibold text-white">{bundle.timeToLaunch}</p>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-400">Tools Included</span>
              <p className="text-lg font-semibold text-white">{tools.length} tools</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Implementation Steps */}
            <Card className="bg-black/50 backdrop-blur-sm border border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Icon name="list-checks" className="h-5 w-5 text-purple-400" />
                  Implementation Steps
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Follow these steps to build your {bundle.projectType.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {bundle.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
                        <span className="text-purple-400 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Tools in Bundle */}
            <Card className="bg-black/50 backdrop-blur-sm border border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Icon name="package" className="h-5 w-5 text-purple-400" />
                  Tools in This Bundle
                </CardTitle>
                <CardDescription className="text-gray-400">
                  All the tools you need for your {bundle.projectType.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tools.map((tool) => (
                    <Link 
                      href={`/tool/${tool.id}`} 
                      key={tool.id}
                      className="block group"
                    >
                      <div className="p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors bg-black/30">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                            <Icon name={tool.icon || "tool"} className="h-4 w-4 text-purple-400 group-hover:text-purple-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                              {tool.name}
                            </h3>
                            <p className="text-sm text-gray-400 line-clamp-2">
                              {tool.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                                {tool.pricing.startingPrice}
                              </Badge>
                              {tool.features.hasFreeTier && (
                                <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                                  Free Tier
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card className="bg-black/50 backdrop-blur-sm border border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Icon name="star" className="h-5 w-5 text-yellow-400" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {bundle.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="check" className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-black/50 backdrop-blur-sm border border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Icon name="bar-chart" className="h-5 w-5 text-purple-400" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Project Type:</span>
                  <span className="text-sm font-medium text-gray-300">{bundle.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Difficulty:</span>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getDifficultyColor(bundle.difficultyLevel)}`}
                  >
                    {bundle.difficultyLevel}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Tools Count:</span>
                  <span className="text-sm font-medium text-gray-300">{tools.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Free Tools:</span>
                  <span className="text-sm font-medium text-gray-300">
                    {tools.filter(tool => tool.features.hasFreeTier).length}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Ready to Start?</h3>
                <p className="text-purple-100 text-sm mb-4">
                  Get started with this bundle today and launch your {bundle.projectType.toLowerCase()} in {bundle.timeToLaunch}.
                </p>
                <Button variant="secondary" className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  Start Building Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Bundles */}
        <div className="text-center mt-12">
          <Link href="/bundles">
            <Button variant="outline" className="bg-black/50 backdrop-blur-sm border-gray-600 text-gray-300 hover:text-white hover:border-gray-500">
              <Icon name="arrow-left" className="mr-2 h-4 w-4" />
              Back to All Bundles
            </Button>
          </Link>
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 