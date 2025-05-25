export type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
  videos: Video[];
  icon?: string;
  tags: string[];
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
  {
    id: "audio-processing",
    name: "Audio Processing",
    description: "AI tools for audio enhancement, transcription, and voice synthesis",
    icon: "headphones"
  },
  {
    id: "video-editing",
    name: "Video Editing",
    description: "AI-powered video editing, enhancement and creation tools",
    icon: "film"
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    description: "Tools that help analyze and visualize complex data",
    icon: "bar-chart"
  },
  {
    id: "research",
    name: "Research Assistants",
    description: "AI tools that help with literature review and research",
    icon: "search"
  },
  {
    id: "automation",
    name: "Automation Tools",
    description: "AI-powered workflow and task automation solutions",
    icon: "zap"
  },
  {
    id: "translation",
    name: "Translation & Language",
    description: "AI tools for translation and language processing",
    icon: "languages"
  },
  {
    id: "finance",
    name: "Finance & Analytics",
    description: "AI tools for financial analysis and market insights",
    icon: "trending-up"
  },
  {
    id: "healthcare",
    name: "Healthcare AI",
    description: "AI applications for healthcare and medical analysis",
    icon: "heart-pulse"
  },
  {
    id: "education",
    name: "Education & Learning",
    description: "AI-powered educational tools and learning platforms",
    icon: "graduation-cap"
  },
  {
    id: "marketing",
    name: "Marketing & SEO",
    description: "AI tools for marketing automation and SEO optimization",
    icon: "megaphone"
  },
  {
    id: "security",
    name: "Security & Privacy",
    description: "AI-powered security and privacy protection tools",
    icon: "shield-check"
  },
  {
    id: "gaming",
    name: "Gaming & Entertainment",
    description: "AI tools for game development and entertainment",
    icon: "gamepad-2"
  }
];

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's powerful conversational AI assistant for text generation and problem-solving",
    category: "chatbots",
    tags: ["writing", "content-creation", "coding", "research", "brainstorming", "customer-support", "education", "text-generation", "conversation", "problem-solving", "creative-writing", "copywriting", "email", "documentation"],
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
    tags: ["reasoning", "analysis", "research", "writing", "coding", "data-analysis", "document-analysis", "academic", "complex-tasks", "safety", "ethics", "long-form-content", "technical-writing"],
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
    tags: ["coding", "programming", "development", "ide", "autocomplete", "code-generation", "debugging", "refactoring", "web-development", "backend", "frontend", "javascript", "python", "react", "nextjs", "typescript"],
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
    tags: ["art", "image-generation", "creative", "design", "illustration", "concept-art", "marketing", "social-media", "branding", "visual-content", "digital-art", "fantasy", "realistic", "portraits", "landscapes"],
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
    tags: ["image-generation", "art", "creative", "design", "marketing", "social-media", "illustrations", "product-images", "concept-art", "visual-content", "branding", "advertising"],
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
    tags: ["coding", "programming", "autocomplete", "code-generation", "development", "github", "vscode", "pair-programming", "debugging", "web-development", "backend", "frontend", "api", "database"],
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
    tags: ["writing", "productivity", "note-taking", "documentation", "project-management", "content-creation", "brainstorming", "organization", "collaboration", "knowledge-management", "planning"],
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
    tags: ["search", "research", "information", "fact-checking", "citations", "academic", "web-search", "knowledge", "learning", "investigation", "sources"],
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
    tags: ["marketing", "copywriting", "content-creation", "blog", "social-media", "advertising", "email-marketing", "seo", "branding", "sales", "landing-pages", "product-descriptions"],
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
    category: "video-editing",
    tags: ["video-editing", "video-generation", "creative", "film", "animation", "visual-effects", "content-creation", "social-media", "marketing", "storytelling", "motion-graphics"],
    videos: [
      {
        id: "runway-intro",
        title: "Runway ML Video Generation",
        description: "Create AI videos with Runway ML",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ]
  },
  {
    id: "whisper",
    name: "OpenAI Whisper",
    description: "AI-powered speech recognition and transcription tool",
    category: "audio-processing",
    tags: ["transcription", "speech-recognition", "audio", "voice", "subtitles", "accessibility", "content-creation", "podcasts", "meetings", "interviews"],
    videos: [
      {
        id: "whisper-intro",
        title: "Whisper AI Transcription",
        description: "Transcribe audio with OpenAI Whisper",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      }
    ]
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "AI voice synthesis and cloning for realistic speech generation",
    category: "audio-processing",
    tags: ["voice-synthesis", "text-to-speech", "voice-cloning", "audio", "content-creation", "podcasts", "audiobooks", "narration", "multilingual"],
    videos: [
      {
        id: "elevenlabs-intro",
        title: "ElevenLabs Voice Cloning",
        description: "Create realistic AI voices with ElevenLabs",
        youtubeId: "dQw4w9WgXcQ",
        duration: 150
      }
    ]
  },
  {
    id: "tableau",
    name: "Tableau AI",
    description: "AI-enhanced data visualization and business intelligence platform",
    category: "data-analysis",
    tags: ["data-visualization", "business-intelligence", "analytics", "dashboards", "reporting", "insights", "charts", "graphs", "data-science"],
    videos: [
      {
        id: "tableau-intro",
        title: "Tableau AI Analytics",
        description: "Create powerful data visualizations with Tableau AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 200
      }
    ]
  },
  {
    id: "research-rabbit",
    name: "ResearchRabbit",
    description: "AI-powered research discovery and literature mapping tool",
    category: "research",
    tags: ["research", "literature-review", "academic", "papers", "citations", "discovery", "knowledge-mapping", "scholarly", "science"],
    videos: [
      {
        id: "research-rabbit-intro",
        title: "ResearchRabbit for Literature Review",
        description: "Discover research papers with AI assistance",
        youtubeId: "dQw4w9WgXcQ",
        duration: 140
      }
    ]
  },
  {
    id: "zapier",
    name: "Zapier AI",
    description: "AI-powered workflow automation connecting thousands of apps",
    category: "automation",
    tags: ["automation", "workflow", "integration", "productivity", "no-code", "apps", "triggers", "actions", "efficiency", "business-process"],
    videos: [
      {
        id: "zapier-intro",
        title: "Zapier AI Automation",
        description: "Automate workflows with Zapier AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 165
      }
    ]
  },
  {
    id: "deepl",
    name: "DeepL",
    description: "AI-powered translation service with superior accuracy",
    category: "translation",
    tags: ["translation", "language", "multilingual", "localization", "communication", "global", "accuracy", "context", "business"],
    videos: [
      {
        id: "deepl-intro",
        title: "DeepL Translation Mastery",
        description: "Professional translation with DeepL AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 110
      }
    ]
  },
  {
    id: "bloomberg-gpt",
    name: "Bloomberg GPT",
    description: "AI assistant specialized in financial analysis and market insights",
    category: "finance",
    tags: ["finance", "trading", "market-analysis", "investment", "economics", "financial-data", "stocks", "portfolio", "risk-assessment"],
    videos: [
      {
        id: "bloomberg-intro",
        title: "Bloomberg GPT for Finance",
        description: "AI-powered financial analysis and insights",
        youtubeId: "dQw4w9WgXcQ",
        duration: 190
      }
    ]
  },
  {
    id: "khan-academy-ai",
    name: "Khan Academy AI",
    description: "AI tutor providing personalized learning experiences",
    category: "education",
    tags: ["education", "learning", "tutoring", "personalized", "students", "teaching", "curriculum", "adaptive", "knowledge", "skills"],
    videos: [
      {
        id: "khan-ai-intro",
        title: "Khan Academy AI Tutor",
        description: "Personalized learning with AI assistance",
        youtubeId: "dQw4w9WgXcQ",
        duration: 135
      }
    ]
  },
  {
    id: "semrush-ai",
    name: "SEMrush AI",
    description: "AI-powered SEO and marketing analytics platform",
    category: "marketing",
    tags: ["seo", "marketing", "analytics", "keywords", "content-optimization", "competitor-analysis", "digital-marketing", "traffic", "rankings"],
    videos: [
      {
        id: "semrush-intro",
        title: "SEMrush AI for SEO",
        description: "Boost your SEO with AI-powered insights",
        youtubeId: "dQw4w9WgXcQ",
        duration: 175
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