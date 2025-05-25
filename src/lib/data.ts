export type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
  videos: Video[];
  icon?: string;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: number; // in seconds
};

export type Category = {
  id: string;
  name: string;
  description: string;
  icon?: string;
};

export const categories: Category[] = [
  {
    id: "chatbots",
    name: "AI Chatbots",
    description: "AI-powered conversation tools for various use cases",
    icon: "message-square",
  },
  {
    id: "image-generators",
    name: "Image Generators",
    description: "Tools that create images from text descriptions",
    icon: "image",
  },
  {
    id: "productivity",
    name: "Productivity Tools",
    description: "AI tools to boost your productivity and workflow",
    icon: "briefcase",
  },
  {
    id: "code-assistants",
    name: "Code Assistants",
    description: "AI tools that help with programming and development",
    icon: "code",
  },
  {
    id: "writing",
    name: "Writing & Content",
    description: "Tools for content creation and writing assistance",
    icon: "pen-tool",
  },
];

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's powerful conversational AI assistant for text generation and problem-solving",
    category: "chatbots",
    videos: [
      {
        id: "chatgpt-intro",
        title: "Getting Started with ChatGPT",
        description: "Learn how to set up and use ChatGPT in less than 2 minutes",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 135
      },
      {
        id: "chatgpt-prompts",
        title: "Advanced ChatGPT Prompting",
        description: "Master prompt engineering to get better results from ChatGPT",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 180
      },
      {
        id: "chatgpt-productivity",
        title: "ChatGPT for Productivity",
        description: "Use ChatGPT to automate daily tasks and boost productivity",
        youtubeId: "dQw4w9WgXcQ",
        duration: 165
      }
    ]
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant with strong reasoning capabilities and safety focus",
    category: "chatbots",
    videos: [
      {
        id: "claude-intro",
        title: "Claude AI Quickstart",
        description: "How to start using Claude in under 3 minutes",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 115
      },
      {
        id: "claude-analysis",
        title: "Claude for Data Analysis",
        description: "Leverage Claude's reasoning for complex analysis tasks",
        youtubeId: "dQw4w9WgXcQ",
        duration: 200
      }
    ]
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-powered code editor that helps you code 10x faster with intelligent suggestions",
    category: "code-assistants",
    videos: [
      {
        id: "cursor-setup",
        title: "Cursor Setup & First Steps",
        description: "Install and configure Cursor for maximum productivity",
        youtubeId: "dQw4w9WgXcQ",
        duration: 105
      },
      {
        id: "cursor-features",
        title: "Cursor AI Features Deep Dive",
        description: "Master Cursor's AI-powered coding features",
        youtubeId: "dQw4w9WgXcQ",
        duration: 195
      }
    ]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI art generator that creates stunning images from text descriptions",
    category: "image-generators",
    videos: [
      {
        id: "midjourney-basics",
        title: "Midjourney Basics",
        description: "How to create your first AI image with Midjourney",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 150
      },
      {
        id: "midjourney-advanced",
        title: "Advanced Midjourney Techniques",
        description: "Learn advanced prompting for better Midjourney results",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 210
      },
      {
        id: "midjourney-styles",
        title: "Midjourney Style Guide",
        description: "Master different art styles and techniques in Midjourney",
        youtubeId: "dQw4w9WgXcQ",
        duration: 175
      }
    ]
  },
  {
    id: "dalle",
    name: "DALL-E",
    description: "OpenAI's image generation model that creates images from text prompts",
    category: "image-generators",
    videos: [
      {
        id: "dalle-intro",
        title: "DALL-E in 90 Seconds",
        description: "Quick intro to generating images with DALL-E",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 90
      },
      {
        id: "dalle-tips",
        title: "DALL-E Pro Tips",
        description: "Advanced techniques for better DALL-E results",
        youtubeId: "dQw4w9WgXcQ",
        duration: 140
      }
    ]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster and smarter",
    category: "code-assistants",
    videos: [
      {
        id: "copilot-setup",
        title: "Setting Up GitHub Copilot",
        description: "How to install and configure GitHub Copilot in your IDE",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 90
      },
      {
        id: "copilot-tips",
        title: "GitHub Copilot Pro Tips",
        description: "Advanced techniques to get the most out of Copilot",
        youtubeId: "dQw4w9WgXcQ",
        duration: 155
      }
    ]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI writing assistant integrated with Notion for enhanced productivity",
    category: "writing",
    videos: [
      {
        id: "notion-ai-intro",
        title: "Notion AI in 2 Minutes",
        description: "Quick guide to using Notion AI for better writing",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 120
      },
      {
        id: "notion-ai-workflows",
        title: "Notion AI Workflows",
        description: "Create powerful workflows with Notion AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 185
      }
    ]
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    description: "AI-powered search engine that provides accurate, sourced answers",
    category: "productivity",
    videos: [
      {
        id: "perplexity-intro",
        title: "Perplexity AI Basics",
        description: "Learn to search smarter with Perplexity AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 95
      }
    ]
  },
  {
    id: "jasper",
    name: "Jasper AI",
    description: "AI writing assistant for marketing copy, blogs, and content creation",
    category: "writing",
    videos: [
      {
        id: "jasper-intro",
        title: "Jasper AI for Content Creation",
        description: "Create compelling content with Jasper AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 160
      }
    ]
  },
  {
    id: "runway",
    name: "Runway ML",
    description: "AI-powered creative tools for video editing and generation",
    category: "image-generators",
    videos: [
      {
        id: "runway-intro",
        title: "Runway ML Video Generation",
        description: "Create AI videos with Runway ML",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ]
  }
];

export const getToolsByCategory = (categoryId: string): Tool[] => {
  return tools.filter(tool => tool.category === categoryId);
};

export const getToolById = (id: string): Tool | undefined => {
  return tools.find(tool => tool.id === id);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
}; 