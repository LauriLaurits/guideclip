"use client";

import React from "react";

interface TutorialPlaceholderProps {
  stepNumber: number;
  title: string;
  actionType: "click" | "type" | "navigate" | "wait" | "observe";
  accentColor?: string;
  width?: number;
  height?: number;
  toolName?: string;
  targetElement?: string;
}

export function TutorialPlaceholder({ 
  stepNumber, 
  title, 
  actionType, 
  accentColor = "#6c5ce7",
  width = 800,
  height = 450,
  toolName = "Tool",
  targetElement = ""
}: TutorialPlaceholderProps) {
  
  const getActionIcon = () => {
    switch (actionType) {
      case "click":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
            <path d="M13 13l6 6"/>
          </svg>
        );
      case "type":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
        );
      case "wait":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
        );
      case "observe":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12l2 2 4-4"/>
          </svg>
        );
    }
  };

  const renderMockInterface = () => {
    const toolLower = toolName.toLowerCase();
    
    // Figma Interface Mockup
    if (toolLower.includes('figma')) {
      return (
        <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden relative">
          {/* Figma Header */}
          <div className="bg-gray-800 h-12 flex items-center px-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="text-white text-sm font-medium">Figma</span>
            </div>
            <div className="ml-auto flex gap-2">
              {title.includes('New') && (
                <div 
                  className="px-4 py-1.5 rounded-md border-2 border-dashed cursor-pointer transition-all hover:scale-105"
                  style={{ 
                    borderColor: accentColor,
                    backgroundColor: `${accentColor}20`
                  }}
                >
                  <span style={{ color: accentColor }} className="text-sm font-medium">
                    + New Design File
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-64 bg-gray-850 border-r border-gray-700 p-4">
              <div className="space-y-2">
                <div className="text-gray-400 text-xs uppercase tracking-wide">Tools</div>
                {title.includes('Frame') && (
                  <div 
                    className="flex items-center gap-2 p-2 rounded cursor-pointer border-2 border-dashed"
                    style={{ 
                      borderColor: accentColor,
                      backgroundColor: `${accentColor}15`
                    }}
                  >
                    <div className="w-4 h-4 border border-gray-400 rounded"></div>
                    <span style={{ color: accentColor }} className="text-sm">Frame Tool (F)</span>
                  </div>
                )}
                <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                  <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  <span className="text-gray-300 text-sm">Select</span>
                </div>
              </div>
            </div>
            
            {/* Canvas */}
            <div className="flex-1 bg-gray-900 relative">
              <div className="absolute inset-4 border border-gray-700 rounded-lg flex items-center justify-center">
                {title.includes('Frame') ? (
                  <div 
                    className="border-2 border-dashed w-48 h-80 rounded-lg flex items-center justify-center"
                    style={{ borderColor: accentColor }}
                  >
                    <span style={{ color: accentColor }} className="text-sm">iPhone 14 Pro Frame</span>
                  </div>
                ) : (
                  <span className="text-gray-500">Canvas Area</span>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Canva Interface Mockup
    if (toolLower.includes('canva')) {
      return (
        <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
          {/* Canva Header */}
          <div className="bg-white h-14 flex items-center px-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
              <span className="text-gray-800 font-semibold">Canva</span>
            </div>
            {title.includes('Sign') && (
              <div className="ml-auto">
                <div 
                  className="px-6 py-2 rounded-lg border-2 border-dashed cursor-pointer transition-all hover:scale-105"
                  style={{ 
                    borderColor: accentColor,
                    backgroundColor: `${accentColor}20`
                  }}
                >
                  <span style={{ color: accentColor }} className="font-medium">
                    Sign up
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex h-full">
            {/* Templates Sidebar */}
            <div className="w-80 bg-gray-50 border-r border-gray-200 p-4">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Templates</h3>
                {title.includes('Instagram') && (
                  <div 
                    className="p-3 border-2 border-dashed rounded-lg cursor-pointer"
                    style={{ 
                      borderColor: accentColor,
                      backgroundColor: `${accentColor}10`
                    }}
                  >
                    <span style={{ color: accentColor }} className="font-medium">
                      📱 Instagram Post
                    </span>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">Template {i}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Canvas */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center">
              <div className="w-80 h-80 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Design Canvas</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ChatGPT Interface Mockup
    if (toolLower.includes('chatgpt') || toolLower.includes('chat')) {
      return (
        <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden relative">
          {/* ChatGPT Header */}
          <div className="bg-gray-900 h-12 flex items-center px-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white font-medium">ChatGPT</span>
            </div>
            {title.includes('Access') && (
              <div className="ml-auto">
                <div 
                  className="px-4 py-1.5 rounded border-2 border-dashed cursor-pointer"
                  style={{ 
                    borderColor: accentColor,
                    backgroundColor: `${accentColor}20`
                  }}
                >
                  <span style={{ color: accentColor }} className="text-sm">
                    New Chat
                  </span>
                </div>
              </div>
            )}
          </div>
          
          {/* Chat Area */}
          <div className="p-6 space-y-4">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="text-center">
                <h2 className="text-white text-xl mb-2">How can I help you today?</h2>
              </div>
              
              {title.includes('prompt') || title.includes('write') ? (
                <div 
                  className="border-2 border-dashed rounded-lg p-4"
                  style={{ 
                    borderColor: accentColor,
                    backgroundColor: `${accentColor}10`
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4" style={{ backgroundColor: accentColor }}></div>
                    <span style={{ color: accentColor }} className="font-medium">
                      Type your prompt here...
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Example: &quot;Write a professional email about...&quot;
                  </div>
                </div>
              ) : (
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="text-gray-300 text-sm">
                    Start typing your message...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Excel Interface Mockup
    if (toolLower.includes('excel')) {
      return (
        <div className="w-full h-full bg-white rounded-lg overflow-hidden relative">
          {/* Excel Header */}
          <div className="bg-green-600 h-12 flex items-center px-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">X</span>
              </div>
              <span className="text-white font-medium">Microsoft Excel</span>
            </div>
          </div>
          
          {/* Ribbon */}
          <div className="bg-gray-100 h-10 border-b border-gray-300 flex items-center px-4">
            <div className="flex gap-4 text-sm">
              <span className="text-gray-600">File</span>
              <span className="text-gray-600">Home</span>
              {title.includes('chart') || title.includes('Chart') ? (
                <span 
                  className="px-2 py-1 rounded border-2 border-dashed"
                  style={{ 
                    borderColor: accentColor,
                    backgroundColor: `${accentColor}15`,
                    color: accentColor
                  }}
                >
                  Insert
                </span>
              ) : (
                <span className="text-gray-600">Insert</span>
              )}
            </div>
          </div>
          
          {/* Spreadsheet Grid */}
          <div className="p-4">
            <div className="grid grid-cols-5 gap-1">
              <div className="bg-gray-200 p-2 text-xs font-medium text-center">A</div>
              <div className="bg-gray-200 p-2 text-xs font-medium text-center">B</div>
              <div className="bg-gray-200 p-2 text-xs font-medium text-center">C</div>
              <div className="bg-gray-200 p-2 text-xs font-medium text-center">D</div>
              <div className="bg-gray-200 p-2 text-xs font-medium text-center">E</div>
              
              {[1,2,3,4,5].map(row => (
                <React.Fragment key={row}>
                  {['A','B','C','D','E'].map(col => (
                    <div 
                      key={`${col}${row}`} 
                      className={`border border-gray-300 p-2 text-xs ${
                        title.includes('formula') && col === 'A' && row === 1 ? 
                        'border-2 border-dashed' : ''
                      }`}
                      style={{ 
                        borderColor: title.includes('formula') && col === 'A' && row === 1 ? accentColor : undefined,
                        backgroundColor: title.includes('formula') && col === 'A' && row === 1 ? `${accentColor}15` : undefined
                      }}
                    >
                      {col === 'A' && row === 1 && title.includes('Budget') ? 'Income' :
                       col === 'B' && row === 1 && title.includes('Budget') ? '$5000' :
                       ''}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Generic Interface
    return (
      <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden relative border border-gray-700">
        {/* Generic Header */}
        <div className="bg-gray-800 h-12 flex items-center px-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div 
              className="w-6 h-6 rounded flex items-center justify-center"
              style={{ backgroundColor: accentColor }}
            >
              <span className="text-white text-xs font-bold">{toolName.charAt(0)}</span>
            </div>
            <span className="text-white font-medium">{toolName}</span>
          </div>
          
          {actionType === 'click' && targetElement && (
            <div className="ml-auto">
              <div 
                className="px-4 py-1.5 rounded border-2 border-dashed cursor-pointer transition-all hover:scale-105"
                style={{ 
                  borderColor: accentColor,
                  backgroundColor: `${accentColor}20`
                }}
              >
                <span style={{ color: accentColor }} className="text-sm font-medium">
                  {targetElement}
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Main Content Area */}
        <div className="p-6 flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <div 
              className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              <div style={{ color: accentColor }}>
                {getActionIcon()}
              </div>
            </div>
            <div className="text-white font-medium">{title}</div>
            <div className="text-gray-400 text-sm">
              {actionType === 'click' ? 'Click to continue' :
               actionType === 'type' ? 'Type the required text' :
               actionType === 'navigate' ? 'Navigate to the location' :
               actionType === 'wait' ? 'Wait for the action to complete' :
               'Observe the result'}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="relative rounded-lg overflow-hidden"
      style={{ width, height }}
    >
      {/* Step Number Overlay */}
      <div className="absolute top-4 left-4 z-20">
        <div 
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 backdrop-blur-sm"
          style={{ 
            borderColor: accentColor,
            backgroundColor: `${accentColor}90`
          }}
        >
          <span className="text-white text-sm font-bold">
            {stepNumber}
          </span>
        </div>
      </div>
      
      {/* Action Type Badge */}
      <div className="absolute top-4 right-4 z-20">
        <div 
          className="flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-sm border"
          style={{ 
            backgroundColor: `${accentColor}90`,
            borderColor: accentColor
          }}
        >
          <div className="text-white">
            {getActionIcon()}
          </div>
          <span className="text-white text-sm font-medium capitalize">
            {actionType}
          </span>
        </div>
      </div>
      
      {/* Main Interface Mockup */}
      {renderMockInterface()}
      
      {/* Click Indicator */}
      {actionType === 'click' && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute animate-ping w-6 h-6 rounded-full"
            style={{ 
              backgroundColor: `${accentColor}40`,
              top: '50%',
              right: '20%',
              transform: 'translate(-50%, -50%)'
            }}
          />
          <div 
            className="absolute w-4 h-4 rounded-full"
            style={{ 
              backgroundColor: accentColor,
              top: '50%',
              right: '20%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      )}
    </div>
  );
} 