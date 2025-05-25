"use client";

import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Users, ArrowRight } from "lucide-react";

const PRICING_TIERS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI tools",
    color: "#00b894",
    bgColor: "#00b89420",
    icon: Star,
    popular: false,
    features: [
      "Access to 5 popular AI tools",
      "Basic video tutorials (90 seconds each)",
      "Community support",
      "Mobile & desktop access",
      "Basic AI tool finder",
      "Limited downloads per month"
    ],
    limitations: [
      "Limited tool access",
      "No premium tutorials",
      "No offline access"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Everything you need to master AI tools",
    color: "#6c5ce7",
    bgColor: "#6c5ce720",
    icon: Zap,
    popular: true,
    features: [
      "Access to ALL 20+ AI tools",
      "Complete video tutorial library",
      "Advanced AI tool finder with cost analysis",
      "Offline video downloads",
      "Priority email support",
      "Learning progress tracking",
      "Custom learning paths",
      "Early access to new tools",
      "Ad-free experience",
      "Export learning certificates"
    ],
    limitations: []
  },
  {
    id: "business",
    name: "Business",
    price: "$29.99",
    period: "per month",
    description: "For teams and organizations",
    color: "#fd79a8",
    bgColor: "#fd79a820",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Pro",
      "Team management dashboard",
      "Up to 10 team members",
      "Advanced analytics & reporting",
      "Custom branding options",
      "Priority phone & chat support",
      "Team learning progress tracking",
      "Bulk user management",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    limitations: []
  }
];

const FAQ_ITEMS = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with GuideClip Pro, contact us within 30 days for a full refund."
  },
  {
    question: "How often do you add new tools?",
    answer: "We add new AI tools and tutorials every week. Pro subscribers get early access to new content before it's available to free users."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
  }
];

export default function PricingPage() {
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
                Simple, Transparent Pricing
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Master AI Tools at
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Lightning Speed
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan to accelerate your AI learning journey. 
                From free tutorials to comprehensive business solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {PRICING_TIERS.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.id}
                    className={`relative rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                      tier.popular 
                        ? 'border-purple-500/50 bg-gradient-to-b from-purple-900/20 to-blue-900/20' 
                        : 'border-gray-800 bg-black/50'
                    }`}
                    style={{
                      boxShadow: tier.popular ? `0 0 40px ${tier.color}20` : 'none'
                    }}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge 
                          className="px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
                        >
                          <Crown className="mr-1 h-3 w-3" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="p-8">
                      {/* Header */}
                      <div className="text-center mb-8">
                        <div 
                          className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 border"
                          style={{ 
                            backgroundColor: tier.bgColor,
                            borderColor: `${tier.color}30`
                          }}
                        >
                          <Icon className="h-8 w-8" style={{ color: tier.color }} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                        <p className="text-gray-400 mb-4">{tier.description}</p>
                        
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-white">{tier.price}</span>
                          <span className="text-gray-400 ml-2">/{tier.period}</span>
                        </div>
                        
                        <Button
                          className={`w-full text-white border-2 transition-all duration-300 hover:scale-105 ${
                            tier.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-transparent' : ''
                          }`}
                          style={!tier.popular ? { 
                            backgroundColor: tier.color,
                            borderColor: tier.color
                          } : {}}
                          size="lg"
                        >
                          {tier.id === 'free' ? 'Get Started Free' : `Start ${tier.name} Plan`}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Features */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-white">What's included:</h4>
                        <ul className="space-y-3">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <Check 
                                className="h-5 w-5 mt-0.5 flex-shrink-0" 
                                style={{ color: tier.color }} 
                              />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-black border-t border-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Compare Plans
              </h2>
              <p className="text-xl text-gray-400">
                See what's included in each plan
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-800 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-900/50">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Free</th>
                    <th className="text-center p-6 text-white font-semibold bg-purple-900/20">Pro</th>
                    <th className="text-center p-6 text-white font-semibold">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="p-6 text-gray-300">AI Tools Access</td>
                    <td className="p-6 text-center text-gray-400">5 tools</td>
                    <td className="p-6 text-center text-purple-400 bg-purple-900/10">20+ tools</td>
                    <td className="p-6 text-center text-gray-300">20+ tools</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-300">Video Tutorials</td>
                    <td className="p-6 text-center text-gray-400">Basic</td>
                    <td className="p-6 text-center text-purple-400 bg-purple-900/10">Complete Library</td>
                    <td className="p-6 text-center text-gray-300">Complete Library</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-300">Offline Downloads</td>
                    <td className="p-6 text-center text-gray-600">✗</td>
                    <td className="p-6 text-center text-purple-400 bg-purple-900/10">✓</td>
                    <td className="p-6 text-center text-gray-300">✓</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-300">Team Management</td>
                    <td className="p-6 text-center text-gray-600">✗</td>
                    <td className="p-6 text-center text-gray-600 bg-purple-900/10">✗</td>
                    <td className="p-6 text-center text-pink-400">✓</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-300">Priority Support</td>
                    <td className="p-6 text-center text-gray-600">✗</td>
                    <td className="p-6 text-center text-purple-400 bg-purple-900/10">Email</td>
                    <td className="p-6 text-center text-pink-400">Phone & Chat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-black border-t border-gray-800 py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Everything you need to know about GuideClip
              </p>
            </div>
            
            <div className="space-y-6">
              {FAQ_ITEMS.map((item, index) => (
                <div 
                  key={index}
                  className="rounded-xl border border-gray-800 bg-black/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
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
                Ready to Master AI Tools?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who are already using GuideClip to 
                accelerate their AI learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Contact Sales
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