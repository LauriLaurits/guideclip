"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Star, 
  Zap, 
  Users, 
  Target, 
  Heart, 
  Lightbulb,
  Award,
  Globe,
  Clock,
  TrendingUp,
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former AI researcher at Google. Passionate about making AI accessible to everyone.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Full-stack engineer with 10+ years building scalable platforms.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Emily Watson",
    role: "Head of Content",
    bio: "Educational content creator with expertise in AI tools and workflows.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "David Kim",
    role: "Lead Designer",
    bio: "UX/UI designer focused on creating intuitive learning experiences.",
    image: null,
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const COMPANY_STATS = [
  {
    number: "50,000+",
    label: "Active Learners",
    icon: Users,
    color: "#00b894"
  },
  {
    number: "20+",
    label: "AI Tools Covered",
    icon: Zap,
    color: "#6c5ce7"
  },
  {
    number: "500+",
    label: "Video Tutorials",
    icon: Clock,
    color: "#fd79a8"
  },
  {
    number: "95%",
    label: "Completion Rate",
    icon: TrendingUp,
    color: "#ff9f43"
  }
];

const VALUES = [
  {
    title: "Accessibility First",
    description: "We believe AI education should be accessible to everyone, regardless of technical background.",
    icon: Heart,
    color: "#fd79a8"
  },
  {
    title: "Quality Content",
    description: "Every tutorial is carefully crafted and tested to ensure maximum learning efficiency.",
    icon: Award,
    color: "#6c5ce7"
  },
  {
    title: "Innovation",
    description: "We stay ahead of the curve, covering the latest AI tools and technologies.",
    icon: Lightbulb,
    color: "#ff9f43"
  },
  {
    title: "Community",
    description: "Building a supportive community of AI enthusiasts and professionals.",
    icon: Users,
    color: "#00b894"
  }
];

export default function AboutPage() {
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
                <Star className="mr-2 h-4 w-4" />
                About GuideClip
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Democratizing
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Education
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're on a mission to make AI tools accessible to everyone through 
                bite-sized, practical tutorials that get you productive in 90 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  The AI revolution is happening now, but many people feel left behind by complex 
                  tutorials and overwhelming documentation. We believe everyone deserves to harness 
                  the power of AI tools, regardless of their technical background.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  That's why we created GuideClip - to break down AI tools into digestible, 
                  actionable tutorials that get you results fast. No fluff, no theory, 
                  just practical skills you can use immediately.
                </p>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Target className="mr-2 h-5 w-5" />
                  Join Our Mission
                </Button>
              </div>
              
              <div 
                className="rounded-2xl p-8 border border-gray-800 backdrop-blur-sm"
                style={{ backgroundColor: '#6c5ce705' }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {COMPANY_STATS.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div 
                          className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3"
                          style={{ backgroundColor: `${stat.color}20` }}
                        >
                          <Icon className="h-6 w-6" style={{ color: stat.color }} />
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-black border-t border-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-400">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="bg-black border-gray-800 p-6 text-center hover:border-gray-700 transition-colors">
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4"
                      style={{ backgroundColor: `${value.color}20` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: value.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-black border-t border-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-400">
                The passionate people behind GuideClip
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <Card key={index} className="bg-black border-gray-800 p-6 text-center hover:border-gray-700 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-black border-t border-gray-800 py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                GuideClip was born from frustration. Our founder, Sarah, was trying to learn 
                ChatGPT for her marketing agency but found herself drowning in 3-hour YouTube 
                tutorials filled with unnecessary theory.
              </p>
              <p>
                "I just wanted to know how to write better email campaigns," she recalls. 
                "But every tutorial started with the history of AI and took forever to get 
                to the practical stuff."
              </p>
              <p>
                That's when the idea hit: What if we could teach AI tools in 90 seconds? 
                Just the essential steps, no fluff, straight to results.
              </p>
              <p>
                Today, GuideClip helps thousands of professionals master AI tools quickly, 
                so they can focus on what matters most - growing their businesses and 
                advancing their careers.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black border-t border-gray-800 py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <div 
              className="rounded-2xl p-12 border border-gray-800 backdrop-blur-sm"
              style={{ backgroundColor: '#6c5ce705' }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Join the AI Revolution
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Ready to master AI tools and accelerate your career? 
                Start your journey with GuideClip today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start Learning Free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 