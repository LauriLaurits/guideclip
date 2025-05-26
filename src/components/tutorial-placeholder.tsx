"use client";

import React from "react";

interface TutorialPlaceholderProps {
  stepNumber: number;
  title: string;
  actionType: "click" | "type" | "navigate" | "wait" | "observe";
  accentColor?: string;
  width?: number;
  height?: number;
}

export function TutorialPlaceholder({ 
  stepNumber, 
  title, 
  actionType, 
  accentColor = "#6c5ce7",
  width = 800,
  height = 450
}: TutorialPlaceholderProps) {
  const getActionIcon = () => {
    switch (actionType) {
      case "click":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
            <path d="M13 13l6 6"/>
          </svg>
        );
      case "type":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M6 8h.01"/>
            <path d="M10 8h.01"/>
            <path d="M14 8h.01"/>
            <path d="M18 8h.01"/>
            <path d="M8 12h.01"/>
            <path d="M12 12h.01"/>
            <path d="M16 12h.01"/>
            <path d="M7 16h10"/>
          </svg>
        );
      case "navigate":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        );
      case "wait":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
        );
      case "observe":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        );
      default:
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12l2 2 4-4"/>
          </svg>
        );
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
      style={{ width, height }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${accentColor}20 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${accentColor}15 0%, transparent 50%)`
          }}
        />
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(${accentColor}20 1px, transparent 1px), linear-gradient(90deg, ${accentColor}20 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-4 p-8">
        {/* Step Number */}
        <div 
          className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 mb-4"
          style={{ 
            borderColor: accentColor,
            backgroundColor: `${accentColor}20`
          }}
        >
          <span 
            className="text-2xl font-bold"
            style={{ color: accentColor }}
          >
            {stepNumber}
          </span>
        </div>
        
        {/* Action Icon */}
        <div 
          className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
          style={{ 
            backgroundColor: `${accentColor}30`,
            color: accentColor
          }}
        >
          {getActionIcon()}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white max-w-md mx-auto leading-tight">
          {title}
        </h3>
        
        {/* Action Type Badge */}
        <div 
          className="inline-block px-3 py-1 rounded-full text-sm font-medium border"
          style={{ 
            backgroundColor: `${accentColor}15`,
            borderColor: `${accentColor}30`,
            color: accentColor
          }}
        >
          {actionType.charAt(0).toUpperCase() + actionType.slice(1)} Action
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        </div>
        <div className="absolute bottom-4 left-4 opacity-20">
          <div 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        </div>
        <div className="absolute top-1/3 left-8 opacity-15">
          <div 
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </div>
      
      {/* Corner Accent */}
      <div 
        className="absolute top-0 right-0 w-20 h-20 opacity-10"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, transparent 70%)`
        }}
      />
    </div>
  );
} 