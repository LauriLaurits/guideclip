"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  User, 
  Crown, 
  Star, 
  Clock, 
  Video, 
  Award, 
  TrendingUp, 
  Settings,
  CreditCard,
  Download,
  Play
} from "lucide-react";

// Mock user data - in real app this would come from authentication
const MOCK_USER = {
  name: "John Doe",
  email: "john@example.com",
  image: null,
  plan: "pro" as const,
  joinDate: "2024-01-15",
  stats: {
    toolsCompleted: 12,
    totalWatchTime: 1847, // in seconds
    certificatesEarned: 5,
    streakDays: 7
  }
};

const RECENT_ACTIVITY = [
  {
    id: 1,
    type: "completed",
    tool: "ChatGPT",
    title: "Advanced ChatGPT Prompting",
    timestamp: "2 hours ago",
    duration: 180
  },
  {
    id: 2,
    type: "started",
    tool: "Midjourney",
    title: "Midjourney Basics",
    timestamp: "1 day ago",
    duration: 150
  },
  {
    id: 3,
    type: "certificate",
    tool: "Cursor",
    title: "AI Code Assistant Mastery",
    timestamp: "3 days ago",
    duration: 0
  }
];

const PLAN_COLORS = {
  free: { color: "#00b894", bgColor: "#00b89420" },
  pro: { color: "#6c5ce7", bgColor: "#6c5ce720" },
  business: { color: "#fd79a8", bgColor: "#fd79a820" }
};

export default function AccountPage() {
  const planColor = PLAN_COLORS[MOCK_USER.plan];
  
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Account Header */}
        <div className="relative bg-black border-b border-gray-800">
          {/* Background gradient */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${planColor.color}, transparent 70%)`
            }}
          />
          
          <div className="relative max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-6">
                {MOCK_USER.image ? (
                  <img 
                    src={MOCK_USER.image} 
                    alt={MOCK_USER.name} 
                    className="w-20 h-20 rounded-xl border border-gray-800"
                  />
                ) : (
                  <div 
                    className="w-20 h-20 rounded-xl border border-gray-800 flex items-center justify-center backdrop-blur-sm"
                    style={{ backgroundColor: planColor.bgColor }}
                  >
                    <User className="h-10 w-10" style={{ color: planColor.color }} />
                  </div>
                )}
                
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    Welcome back, {MOCK_USER.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div 
                      className="px-3 py-1 rounded-full text-sm font-medium border"
                      style={{ 
                        backgroundColor: planColor.bgColor,
                        borderColor: `${planColor.color}30`,
                        color: planColor.color
                      }}
                    >
                      {MOCK_USER.plan === "business" && <Crown className="h-4 w-4 mr-1 inline" />}
                      {MOCK_USER.plan.toUpperCase()} PLAN
                    </div>
                    <span className="text-gray-400 text-sm">
                      Member since {new Date(MOCK_USER.joinDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 md:ml-auto">
                <Button 
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
                <Button 
                  variant="outline"
                  className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Manage Subscription
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 lg:px-16 xl:px-24">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="bg-black border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "#00b89420" }}
                  >
                    <Video className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{MOCK_USER.stats.toolsCompleted}</p>
                    <p className="text-sm text-gray-400">Tools Completed</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "#6c5ce720" }}
                  >
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{formatDuration(MOCK_USER.stats.totalWatchTime)}</p>
                    <p className="text-sm text-gray-400">Watch Time</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "#fd79a820" }}
                  >
                    <Award className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{MOCK_USER.stats.certificatesEarned}</p>
                    <p className="text-sm text-gray-400">Certificates</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black border-gray-800 p-6">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "#ff9f4320" }}
                  >
                    <TrendingUp className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{MOCK_USER.stats.streakDays}</p>
                    <p className="text-sm text-gray-400">Day Streak</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card className="bg-black border-gray-800 p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {RECENT_ACTIVITY.map((activity) => (
                      <div key={activity.id} className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                        <div className={`p-2 rounded-lg ${
                          activity.type === "completed" ? "bg-green-500/20" :
                          activity.type === "started" ? "bg-blue-500/20" :
                          "bg-yellow-500/20"
                        }`}>
                          {activity.type === "completed" ? (
                            <Star className="h-5 w-5 text-green-400" />
                          ) : activity.type === "started" ? (
                            <Play className="h-5 w-5 text-blue-400" />
                          ) : (
                            <Award className="h-5 w-5 text-yellow-400" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <p className="font-medium text-white">{activity.title}</p>
                          <p className="text-sm text-gray-400">{activity.tool} • {activity.timestamp}</p>
                        </div>
                        
                        {activity.duration > 0 && (
                          <Badge variant="outline" className="bg-black border-gray-700">
                            {formatDuration(activity.duration)}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="bg-black border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline"
                      className="w-full justify-start border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Continue Learning
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Videos
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800"
                    >
                      <Award className="mr-2 h-4 w-4" />
                      View Certificates
                    </Button>
                  </div>
                </Card>

                {/* Plan Benefits */}
                <Card className="bg-black border-gray-800 p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Your Plan Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Access to all 20+ AI tools
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Offline video downloads
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Priority email support
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      Learning certificates
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 