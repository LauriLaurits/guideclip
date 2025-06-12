"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TutorialPlaceholder } from "@/components/tutorial-placeholder";
import Image from "next/image";
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  Circle, 
  Clock,
  Target,
  Lightbulb,
  AlertCircle,
  ExternalLink,
  MousePointer,
  Keyboard,
  Eye
} from "lucide-react";

export interface TutorialStep {
  id: string;
  title: string;
  description: string;
  instruction: string;
  image?: string;
  imageAlt?: string;
  duration: number; // in seconds
  difficulty: "easy" | "medium" | "hard";
  tips?: string[];
  warnings?: string[];
  actionType: "click" | "type" | "navigate" | "wait" | "observe";
  targetElement?: string;
  expectedResult?: string;
  shortcuts?: string[];
}

interface TutorialStepsProps {
  steps: TutorialStep[];
  toolName: string;
  accentColor?: string;
  onStepComplete?: (stepId: string) => void;
  completedSteps?: string[];
}

export function TutorialSteps({ 
  steps, 
  toolName, 
  accentColor = "#6c5ce7",
  onStepComplete,
  completedSteps = []
}: TutorialStepsProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const currentStepData = steps[currentStep];
  const totalDuration = steps.reduce((acc, step) => acc + step.duration, 0);
  const completedDuration = steps
    .slice(0, currentStep)
    .reduce((acc, step) => acc + step.duration, 0);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "#00b894";
      case "medium": return "#fdcb6e";
      case "hard": return "#e17055";
      default: return "#6c5ce7";
    }
  };

  const getActionIcon = (actionType: string) => {
    switch (actionType) {
      case "click": return <MousePointer className="h-4 w-4" />;
      case "type": return <Keyboard className="h-4 w-4" />;
      case "navigate": return <ExternalLink className="h-4 w-4" />;
      case "wait": return <Clock className="h-4 w-4" />;
      case "observe": return <Eye className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  const handleStepComplete = (stepId: string) => {
    onStepComplete?.(stepId);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const isStepCompleted = (stepId: string) => completedSteps.includes(stepId);

  return (
    <div className="space-y-8">
      {/* Progress Header */}
      <div 
        className="rounded-xl p-6 border border-gray-800 backdrop-blur-sm"
        style={{ backgroundColor: `${accentColor}05` }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">
            Step-by-Step Tutorial: {toolName}
          </h2>
          <Badge 
            variant="outline" 
            className="border-gray-700 bg-black/50 backdrop-blur-sm"
          >
            {currentStep + 1} of {steps.length}
          </Badge>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="text-white">
              {formatDuration(completedDuration)} / {formatDuration(totalDuration)}
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500"
              style={{ 
                backgroundColor: accentColor,
                width: `${(currentStep / steps.length) * 100}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Current Step Detail */}
      {currentStepData && (
        <Card className="border-gray-800 bg-black/50 backdrop-blur-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-start gap-6 mb-6">
              <div 
                className="rounded-full p-3 border-2"
                style={{ 
                  backgroundColor: `${accentColor}20`,
                  borderColor: accentColor
                }}
              >
                {getActionIcon(currentStepData.actionType)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {currentStepData.title}
                  </h3>
                  <Badge 
                    className="text-xs"
                    style={{ 
                      backgroundColor: `${getDifficultyColor(currentStepData.difficulty)}20`,
                      color: getDifficultyColor(currentStepData.difficulty),
                      borderColor: `${getDifficultyColor(currentStepData.difficulty)}30`
                    }}
                  >
                    {currentStepData.difficulty}
                  </Badge>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    {formatDuration(currentStepData.duration)}
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {currentStepData.description}
                </p>
                
                <div 
                  className="rounded-lg p-4 border-l-4 mb-4"
                  style={{ 
                    backgroundColor: `${accentColor}10`,
                    borderLeftColor: accentColor
                  }}
                >
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" style={{ color: accentColor }} />
                    What to do:
                  </h4>
                  <p className="text-gray-300">{currentStepData.instruction}</p>
                  
                  {currentStepData.targetElement && (
                    <p className="text-sm text-gray-400 mt-2">
                      <strong>Look for:</strong> {currentStepData.targetElement}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Step Image or Placeholder */}
            <div className="mb-6">
              <div className="rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
                {currentStepData.image ? (
                  <Image
                    src={currentStepData.image}
                    alt={currentStepData.imageAlt || `Step ${currentStep + 1} visual guide`}
                    width={1200}
                    height={675}
                    quality={100}
                    className="w-full h-auto"
                    priority
                    unoptimized={true}
                  />
                ) : (
                  <TutorialPlaceholder
                    stepNumber={currentStep + 1}
                    title={currentStepData.title}
                    actionType={currentStepData.actionType}
                    accentColor={accentColor}
                    width={800}
                    height={450}
                    toolName={toolName}
                    targetElement={currentStepData.targetElement}
                  />
                )}
              </div>
            </div>

            {/* Tips and Warnings */}
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              {currentStepData.tips && currentStepData.tips.length > 0 && (
                <div className="rounded-lg p-4 bg-emerald-500/10 border border-emerald-500/20">
                  <h5 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Pro Tips
                  </h5>
                  <ul className="space-y-1">
                    {currentStepData.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-emerald-300 flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentStepData.warnings && currentStepData.warnings.length > 0 && (
                <div className="rounded-lg p-4 bg-amber-500/10 border border-amber-500/20">
                  <h5 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Important Notes
                  </h5>
                  <ul className="space-y-1">
                    {currentStepData.warnings.map((warning, index) => (
                      <li key={index} className="text-sm text-amber-300 flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Keyboard Shortcuts */}
            {currentStepData.shortcuts && currentStepData.shortcuts.length > 0 && (
              <div className="rounded-lg p-4 bg-blue-500/10 border border-blue-500/20 mb-6">
                <h5 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                  <Keyboard className="h-4 w-4" />
                  Keyboard Shortcuts
                </h5>
                <div className="flex flex-wrap gap-2">
                  {currentStepData.shortcuts.map((shortcut, index) => (
                    <kbd 
                      key={index}
                      className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs text-gray-300"
                    >
                      {shortcut}
                    </kbd>
                  ))}
                </div>
              </div>
            )}

            {/* Expected Result */}
            {currentStepData.expectedResult && (
              <div className="rounded-lg p-4 bg-purple-500/10 border border-purple-500/20 mb-6">
                <h5 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Expected Result
                </h5>
                <p className="text-sm text-purple-300">{currentStepData.expectedResult}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleStepComplete(currentStepData.id)}
                  className="border-emerald-600 text-emerald-400 hover:bg-emerald-600/10"
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark Complete
                </Button>

                <Button
                  onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                  disabled={currentStep === steps.length - 1}
                  style={{ backgroundColor: accentColor }}
                  className="text-white hover:opacity-90"
                >
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* All Steps Overview */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">All Steps Overview</h3>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <Card 
              key={step.id}
              className={`border-gray-800 bg-black/30 backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                index === currentStep ? 'ring-2' : ''
              } ${isStepCompleted(step.id) ? 'bg-emerald-500/5 border-emerald-500/30' : ''}`}
              style={{ 
                boxShadow: index === currentStep ? `0 0 0 2px ${accentColor}` : undefined
              }}
              onClick={() => setCurrentStep(index)}
            >
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className={`rounded-full p-2 border-2 ${
                        isStepCompleted(step.id) 
                          ? 'bg-emerald-500/20 border-emerald-500' 
                          : index === currentStep
                            ? 'border-2'
                            : 'border-gray-600'
                      }`}
                      style={{ 
                        borderColor: index === currentStep && !isStepCompleted(step.id) ? accentColor : undefined
                      }}
                    >
                      {isStepCompleted(step.id) ? (
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-400">
                      Step {index + 1}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-gray-400 line-clamp-1">{step.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    {formatDuration(step.duration)}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 