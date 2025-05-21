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
        duration: 120
      },
      {
        id: "chatgpt-prompts",
        title: "Advanced ChatGPT Prompting",
        description: "Master prompt engineering to get better results from ChatGPT",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 180
      }
    ]
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's alternative to ChatGPT with strong reasoning capabilities",
    category: "chatbots",
    videos: [
      {
        id: "claude-intro",
        title: "Claude AI Quickstart",
        description: "How to start using Claude in under 3 minutes",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 150
      }
    ]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI art generator that creates images from text descriptions",
    category: "image-generators",
    videos: [
      {
        id: "midjourney-basics",
        title: "Midjourney Basics",
        description: "How to create your first AI image with Midjourney",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 90
      },
      {
        id: "midjourney-advanced",
        title: "Advanced Midjourney Techniques",
        description: "Learn advanced prompting for better Midjourney results",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 180
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
      }
    ]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster",
    category: "code-assistants",
    videos: [
      {
        id: "copilot-setup",
        title: "Setting Up GitHub Copilot",
        description: "How to install and configure GitHub Copilot in your IDE",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 120
      }
    ]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI writing assistant integrated with Notion",
    category: "writing",
    videos: [
      {
        id: "notion-ai-intro",
        title: "Notion AI in 2 Minutes",
        description: "Quick guide to using Notion AI for better writing",
        youtubeId: "dQw4w9WgXcQ", // This is a placeholder - replace with actual YouTube ID
        duration: 120
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