"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn, User, LogOut, Crown } from "lucide-react";

interface AuthButtonProps {
  isAuthenticated?: boolean;
  user?: {
    name?: string;
    email?: string;
    image?: string;
    plan?: "free" | "pro" | "business";
  };
  onSignIn?: () => void;
  onSignOut?: () => void;
}

const PLAN_COLORS = {
  free: { color: "#00b894", bgColor: "#00b89420" },
  pro: { color: "#6c5ce7", bgColor: "#6c5ce720" },
  business: { color: "#fd79a8", bgColor: "#fd79a820" }
};

export function AuthButton({ 
  isAuthenticated = false, 
  user, 
  onSignIn, 
  onSignOut 
}: AuthButtonProps) {
  if (isAuthenticated && user) {
    const planColor = PLAN_COLORS[user.plan || "free"];
    
    return (
      <div className="flex items-center gap-3">
        {/* User Info - Clickable to go to account */}
        <Link href="/account" className="hidden sm:flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          {user.image ? (
            <img 
              src={user.image} 
              alt={user.name || "User"} 
              className="w-8 h-8 rounded-full border border-gray-700"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
              <User className="h-4 w-4 text-gray-400" />
            </div>
          )}
          
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">
              {user.name || "User"}
            </span>
            <div className="flex items-center gap-2">
              <div 
                className="px-2 py-0.5 rounded-full text-xs font-medium border"
                style={{ 
                  backgroundColor: planColor.bgColor,
                  borderColor: `${planColor.color}30`,
                  color: planColor.color
                }}
              >
                {user.plan === "business" && <Crown className="h-3 w-3 mr-1 inline" />}
                {user.plan?.toUpperCase() || "FREE"}
              </div>
            </div>
          </div>
        </Link>
        
        {/* Mobile Account Link */}
        <Link href="/account" className="sm:hidden">
          <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
            <User className="h-4 w-4 text-gray-400" />
          </div>
        </Link>
        
        {/* Sign Out Button */}
        <Button
          onClick={onSignOut}
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 transition-all duration-300 px-2"
        >
          <LogOut className="h-3 w-3 sm:mr-1.5" />
          <span className="hidden sm:inline text-xs">Sign Out</span>
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={onSignIn}
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 hover:scale-105 transition-all duration-300"
      size="sm"
    >
      <LogIn className="h-4 w-4 mr-2" />
      Sign In
    </Button>
  );
} 