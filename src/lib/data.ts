export type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
  videos: Video[];
  icon?: string;
  tags: string[];
  pricing: {
    model: "free" | "freemium" | "paid" | "subscription";
    startingPrice?: string;
    freeFeatures?: string[];
    paidFeatures?: string[];
    affiliateUrl?: string;
    couponCode?: string;
    discount?: string;
  };
  features: {
    hasFreeTier: boolean;
    noCodeRequired: boolean;
    hasAPI: boolean;
    hasIntegrations: boolean;
    platforms: string[];
  };
  toolType: "ai" | "software" | "service" | "platform";
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
  // AI Categories
  {
    id: "ai-chatbots",
    name: "AI Chatbots",
    description: "AI-powered conversation tools for various use cases",
    icon: "message-square",
  },
  {
    id: "ai-image-generators",
    name: "AI Image Generators",
    description: "Tools that create images from text descriptions",
    icon: "image",
  },
  {
    id: "ai-code-assistants",
    name: "AI Code Assistants",
    description: "AI tools that help with programming and development",
    icon: "code",
  },
  {
    id: "ai-writing",
    name: "AI Writing & Content",
    description: "AI tools for content creation and writing assistance",
    icon: "pen-tool",
  },
  
  // Design & Creative
  {
    id: "design-tools",
    name: "Design Tools",
    description: "Professional design software for graphics, UI/UX, and creative work",
    icon: "palette",
  },
  {
    id: "video-editing",
    name: "Video Editing",
    description: "Video editing software and platforms for content creation",
    icon: "film"
  },
  {
    id: "photo-editing",
    name: "Photo Editing",
    description: "Image editing and photo manipulation software",
    icon: "camera"
  },
  
  // Business & Finance
  {
    id: "payment-processing",
    name: "Payment Processing",
    description: "Payment gateways and financial transaction tools",
    icon: "credit-card"
  },
  {
    id: "accounting-finance",
    name: "Accounting & Finance",
    description: "Financial management, accounting, and bookkeeping tools",
    icon: "calculator"
  },
  {
    id: "spreadsheets",
    name: "Spreadsheets & Data",
    description: "Spreadsheet software and data analysis tools",
    icon: "table"
  },
  
  // Development & Tech
  {
    id: "development-tools",
    name: "Development Tools",
    description: "IDEs, code editors, and development platforms",
    icon: "terminal"
  },
  {
    id: "databases",
    name: "Databases",
    description: "Database management systems and data storage solutions",
    icon: "database"
  },
  {
    id: "cloud-platforms",
    name: "Cloud Platforms",
    description: "Cloud computing and hosting services",
    icon: "cloud"
  },
  
  // Productivity & Organization
  {
    id: "productivity-tools",
    name: "Productivity Tools",
    description: "Task management, note-taking, and productivity software",
    icon: "briefcase",
  },
  {
    id: "project-management",
    name: "Project Management",
    description: "Project planning, tracking, and team collaboration tools",
    icon: "kanban-square"
  },
  {
    id: "communication",
    name: "Communication",
    description: "Messaging, video conferencing, and team communication tools",
    icon: "message-circle"
  },
  
  // Marketing & Analytics
  {
    id: "marketing-tools",
    name: "Marketing Tools",
    description: "Digital marketing, SEO, and advertising platforms",
    icon: "megaphone"
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Web analytics, data tracking, and business intelligence tools",
    icon: "bar-chart"
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    description: "Email campaign management and automation tools",
    icon: "mail"
  },
  
  // E-commerce & Sales
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Online store platforms and e-commerce solutions",
    icon: "shopping-cart"
  },
  {
    id: "crm",
    name: "CRM & Sales",
    description: "Customer relationship management and sales tools",
    icon: "users"
  }
];

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI's powerful conversational AI assistant for text generation and problem-solving",
    category: "ai-chatbots",
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
    ],
    pricing: {
      model: "free",
      startingPrice: "$0",
      freeFeatures: ["Text generation", "Problem-solving", "Creative writing", "Copywriting", "Email", "Documentation"],
      paidFeatures: ["Conversation", "Research", "Brainstorming", "Customer support", "Education", "Text generation"],
      affiliateUrl: "https://openai.com/chatgpt",
      couponCode: "OPENAI10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant with strong reasoning capabilities and safety focus",
    category: "ai-chatbots",
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
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Text generation", "Reasoning", "Analysis", "Research", "Writing", "Coding"],
      paidFeatures: ["Complex tasks", "Safety", "Ethics", "Long-form content", "Technical writing"],
      affiliateUrl: "https://anthropic.com/claude",
      couponCode: "ANTHROPIC10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-powered code editor that helps you code 10x faster with intelligent suggestions",
    category: "ai-code-assistants",
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
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Intelligent suggestions", "Code generation", "Debugging", "Refactoring"],
      paidFeatures: ["Web development", "Backend development", "Frontend development", "Python", "React", "Next.js", "Typescript"],
      affiliateUrl: "https://cursor.io",
      couponCode: "CURSOR10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI art generator that creates stunning images from text descriptions",
    category: "ai-image-generators",
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
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Image generation", "Creative design", "Marketing", "Social media"],
      paidFeatures: ["Advanced techniques", "Customization", "Branding", "Advertising"],
      affiliateUrl: "https://midjourney.com",
      couponCode: "MIDJOURNEY10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "dalle",
    name: "DALL-E",
    description: "OpenAI's image generation model that creates images from text prompts",
    category: "ai-image-generators",
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
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Image generation", "Creative design", "Marketing", "Social media"],
      paidFeatures: ["Advanced techniques", "Customization", "Branding", "Advertising"],
      affiliateUrl: "https://openai.com/dalle",
      couponCode: "DALLE10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster and smarter",
    category: "ai-code-assistants",
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
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Code generation", "Autocomplete", "Development", "API"],
      paidFeatures: ["Pair programming", "Debugging", "Web development", "Backend development", "Frontend development"],
      affiliateUrl: "https://github.com/copilot",
      couponCode: "GITHUB10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "AI writing assistant integrated with Notion for enhanced productivity",
    category: "ai-writing",
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
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Writing", "Productivity", "Note taking", "Documentation", "Project management"],
      paidFeatures: ["Brainstorming", "Organization", "Collaboration", "Knowledge management", "Planning"],
      affiliateUrl: "https://notion.com/notion-ai",
      couponCode: "NOTION10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    description: "AI-powered search engine that provides accurate, sourced answers",
    category: "productivity-tools",
    tags: ["search", "research", "information", "fact-checking", "citations", "academic", "web-search", "knowledge", "learning", "investigation", "sources"],
    videos: [
      {
        id: "perplexity-intro",
        title: "Perplexity AI Basics",
        description: "Learn to search smarter with Perplexity AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 95
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Search", "Research", "Information", "Fact checking", "Citations"],
      paidFeatures: ["Web search", "Knowledge", "Learning", "Investigation", "Sources"],
      affiliateUrl: "https://perplexity.ai",
      couponCode: "PERPLEXITY10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "jasper",
    name: "Jasper AI",
    description: "AI writing assistant for marketing copy, blogs, and content creation",
    category: "ai-writing",
    tags: ["marketing", "copywriting", "content-creation", "blog", "social-media", "advertising", "email-marketing", "seo", "branding", "sales", "landing-pages", "product-descriptions"],
    videos: [
      {
        id: "jasper-intro",
        title: "Jasper AI for Content Creation",
        description: "Create compelling content with Jasper AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 160
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Marketing", "Copywriting", "Content creation", "Blog", "Social media"],
      paidFeatures: ["Email marketing", "SEO", "Branding", "Sales", "Landing pages", "Product descriptions"],
      affiliateUrl: "https://jasper.ai",
      couponCode: "JASPER10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
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
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Video editing", "Video generation", "Creative", "Film"],
      paidFeatures: ["Animation", "Visual effects", "Content creation", "Social media", "Marketing"],
      affiliateUrl: "https://runwayml.com",
      couponCode: "RUNWAY10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "whisper",
    name: "OpenAI Whisper",
    description: "AI-powered speech recognition and transcription tool",
    category: "ai-writing",
    tags: ["transcription", "speech-recognition", "audio", "voice", "subtitles", "accessibility", "content-creation", "podcasts", "meetings", "interviews"],
    videos: [
      {
        id: "whisper-intro",
        title: "Whisper AI Transcription",
        description: "Transcribe audio with OpenAI Whisper",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Transcription", "Speech recognition", "Audio", "Voice"],
      paidFeatures: ["Subtitles", "Accessibility", "Content creation", "Podcasts", "Meetings", "Interviews"],
      affiliateUrl: "https://openai.com/whisper",
      couponCode: "WHISPER10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "AI voice synthesis and cloning for realistic speech generation",
    category: "ai-writing",
    tags: ["voice-synthesis", "text-to-speech", "voice-cloning", "audio", "content-creation", "podcasts", "audiobooks", "narration", "multilingual"],
    videos: [
      {
        id: "elevenlabs-intro",
        title: "ElevenLabs Voice Cloning",
        description: "Create realistic AI voices with ElevenLabs",
        youtubeId: "dQw4w9WgXcQ",
        duration: 150
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Voice synthesis", "Text-to-speech", "Voice cloning", "Audio"],
      paidFeatures: ["Content creation", "Podcasts", "Audiobooks", "Narration", "Multilingual"],
      affiliateUrl: "https://elevenlabs.io",
      couponCode: "ELEVENLABS10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "tableau",
    name: "Tableau AI",
    description: "AI-enhanced data visualization and business intelligence platform",
    category: "analytics",
    tags: ["data-visualization", "business-intelligence", "analytics", "dashboards", "reporting", "insights", "charts", "graphs", "data-science"],
    videos: [
      {
        id: "tableau-intro",
        title: "Tableau AI Analytics",
        description: "Create powerful data visualizations with Tableau AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 200
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Data visualization", "Business intelligence", "Analytics", "Dashboards", "Reporting"],
      paidFeatures: ["Insights", "Charts", "Graphs", "Data science"],
      affiliateUrl: "https://tableau.com",
      couponCode: "TABLEAU10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "research-rabbit",
    name: "ResearchRabbit",
    description: "AI-powered research discovery and literature mapping tool",
    category: "ai-writing",
    tags: ["research", "literature-review", "academic", "papers", "citations", "discovery", "knowledge-mapping", "scholarly", "science"],
    videos: [
      {
        id: "research-rabbit-intro",
        title: "ResearchRabbit for Literature Review",
        description: "Discover research papers with AI assistance",
        youtubeId: "dQw4w9WgXcQ",
        duration: 140
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Research", "Literature review", "Academic", "Papers", "Citations"],
      paidFeatures: ["Discovery", "Knowledge mapping", "Scholarly", "Science"],
      affiliateUrl: "https://researchrabbit.ai",
      couponCode: "RESEARCHRABBIT10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "zapier",
    name: "Zapier AI",
    description: "AI-powered workflow automation connecting thousands of apps",
    category: "productivity-tools",
    tags: ["automation", "workflow", "integration", "productivity", "no-code", "apps", "triggers", "actions", "efficiency", "business-process"],
    videos: [
      {
        id: "zapier-intro",
        title: "Zapier AI Automation",
        description: "Automate workflows with Zapier AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 165
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Automation", "Workflow", "Integration", "Productivity", "No-code"],
      paidFeatures: ["Apps", "Triggers", "Actions", "Efficiency", "Business process"],
      affiliateUrl: "https://zapier.com",
      couponCode: "ZAPIER10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "deepl",
    name: "DeepL",
    description: "AI-powered translation service with superior accuracy",
    category: "ai-writing",
    tags: ["translation", "language", "multilingual", "localization", "communication", "global", "accuracy", "context", "business"],
    videos: [
      {
        id: "deepl-intro",
        title: "DeepL Translation Mastery",
        description: "Professional translation with DeepL AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 110
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Translation", "Language", "Multilingual", "Localization", "Communication"],
      paidFeatures: ["Global", "Accuracy", "Context", "Business"],
      affiliateUrl: "https://deepl.com",
      couponCode: "DEEPL10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "bloomberg-gpt",
    name: "Bloomberg GPT",
    description: "AI assistant specialized in financial analysis and market insights",
    category: "accounting-finance",
    tags: ["finance", "trading", "market-analysis", "investment", "economics", "financial-data", "stocks", "portfolio", "risk-assessment"],
    videos: [
      {
        id: "bloomberg-intro",
        title: "Bloomberg GPT for Finance",
        description: "AI-powered financial analysis and insights",
        youtubeId: "dQw4w9WgXcQ",
        duration: 190
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Finance", "Trading", "Market analysis", "Investment", "Economics"],
      paidFeatures: ["Financial data", "Stocks", "Portfolio", "Risk assessment"],
      affiliateUrl: "https://bloomberg.com",
      couponCode: "BLOOMBERG10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "khan-academy-ai",
    name: "Khan Academy AI",
    description: "AI tutor providing personalized learning experiences",
    category: "productivity-tools",
    tags: ["education", "learning", "tutoring", "personalized", "students", "teaching", "curriculum", "adaptive", "knowledge", "skills"],
    videos: [
      {
        id: "khan-ai-intro",
        title: "Khan Academy AI Tutor",
        description: "Personalized learning with AI assistance",
        youtubeId: "dQw4w9WgXcQ",
        duration: 135
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Education", "Learning", "Tutoring", "Personalized"],
      paidFeatures: ["Students", "Teaching", "Curriculum", "Adaptive"],
      affiliateUrl: "https://khanacademy.org",
      couponCode: "KHANAi10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  {
    id: "semrush-ai",
    name: "SEMrush AI",
    description: "AI-powered SEO and marketing analytics platform",
    category: "marketing-tools",
    tags: ["seo", "marketing", "analytics", "keywords", "content-optimization", "competitor-analysis", "digital-marketing", "traffic", "rankings"],
    videos: [
      {
        id: "semrush-intro",
        title: "SEMrush AI for SEO",
        description: "Boost your SEO with AI-powered insights",
        youtubeId: "dQw4w9WgXcQ",
        duration: 175
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["SEO", "Marketing", "Analytics", "Keywords", "Content optimization"],
      paidFeatures: ["Competitor analysis", "Digital marketing", "Traffic", "Rankings"],
      affiliateUrl: "https://semrush.com",
      couponCode: "SEMrush10",
      discount: "10% off"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "ai"
  },
  
  // === NON-AI TOOLS ===
  
  // Design Tools
  {
    id: "figma",
    name: "Figma",
    description: "Collaborative interface design tool for UI/UX designers and teams",
    category: "design-tools",
    tags: ["ui-design", "ux-design", "prototyping", "collaboration", "design-systems", "wireframing", "mockups", "vector-graphics", "team-design", "web-design", "mobile-design"],
    videos: [
      {
        id: "figma-basics",
        title: "Figma Fundamentals",
        description: "Master Figma basics in 90 seconds",
        youtubeId: "dQw4w9WgXcQ",
        duration: 90
      },
      {
        id: "figma-prototyping",
        title: "Figma Prototyping",
        description: "Create interactive prototypes in Figma",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["3 Figma files", "Unlimited personal files", "Unlimited collaborators"],
      paidFeatures: ["Unlimited Figma files", "Version history", "Team libraries", "Advanced prototyping"],
      affiliateUrl: "https://figma.com",
      couponCode: "FIGMA20",
      discount: "20% off Pro"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Desktop", "Mobile"]
    },
    toolType: "software"
  },
  {
    id: "adobe-photoshop",
    name: "Adobe Photoshop",
    description: "Industry-standard photo editing and digital imaging software",
    category: "photo-editing",
    tags: ["photo-editing", "image-manipulation", "digital-art", "retouching", "compositing", "graphics", "creative", "professional", "layers", "filters"],
    videos: [
      {
        id: "photoshop-basics",
        title: "Photoshop Essentials",
        description: "Learn Photoshop fundamentals quickly",
        youtubeId: "dQw4w9WgXcQ",
        duration: 150
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$20.99/mo",
      freeFeatures: [],
      paidFeatures: ["Full Photoshop features", "Cloud storage", "Adobe Fonts", "Portfolio website"],
      affiliateUrl: "https://adobe.com/photoshop",
      discount: "First month free"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Desktop", "Mobile"]
    },
    toolType: "software"
  },
  
  // Payment Processing
  {
    id: "stripe",
    name: "Stripe",
    description: "Complete payment processing platform for online businesses",
    category: "payment-processing",
    tags: ["payments", "e-commerce", "online-payments", "credit-cards", "subscriptions", "invoicing", "marketplace", "api", "developer-friendly", "global"],
    videos: [
      {
        id: "stripe-setup",
        title: "Stripe Setup Guide",
        description: "Set up Stripe payments in 2 minutes",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      },
      {
        id: "stripe-subscriptions",
        title: "Stripe Subscriptions",
        description: "Implement recurring payments with Stripe",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["2.9% + 30¢ per transaction", "No setup fees", "Basic dashboard"],
      paidFeatures: ["Advanced reporting", "Radar fraud protection", "Custom branding"],
      affiliateUrl: "https://stripe.com",
      couponCode: "STRIPE100",
      discount: "$100 credit"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "API"]
    },
    toolType: "service"
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Global payment platform for online and mobile transactions",
    category: "payment-processing",
    tags: ["payments", "online-payments", "mobile-payments", "invoicing", "money-transfer", "buyer-protection", "seller-protection", "global", "easy-setup"],
    videos: [
      {
        id: "paypal-business",
        title: "PayPal Business Setup",
        description: "Set up PayPal for your business",
        youtubeId: "dQw4w9WgXcQ",
        duration: 90
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["2.9% + fixed fee per transaction", "Buyer protection", "Mobile app"],
      paidFeatures: ["Advanced reporting", "Multi-user access", "Custom checkout"],
      affiliateUrl: "https://paypal.com",
      discount: "No transaction fees for first $1000"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "service"
  },
  
  // Spreadsheets & Data
  {
    id: "microsoft-excel",
    name: "Microsoft Excel",
    description: "Powerful spreadsheet application for data analysis and calculations",
    category: "spreadsheets",
    tags: ["spreadsheets", "data-analysis", "calculations", "charts", "pivot-tables", "formulas", "business-intelligence", "financial-modeling", "reporting"],
    videos: [
      {
        id: "excel-basics",
        title: "Excel Fundamentals",
        description: "Master Excel basics in 90 seconds",
        youtubeId: "dQw4w9WgXcQ",
        duration: 90
      },
      {
        id: "excel-formulas",
        title: "Excel Formulas & Functions",
        description: "Essential Excel formulas every user should know",
        youtubeId: "dQw4w9WgXcQ",
        duration: 150
      },
      {
        id: "excel-pivot-tables",
        title: "Excel Pivot Tables",
        description: "Create powerful pivot tables in Excel",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$6.99/mo",
      freeFeatures: ["Excel Online (limited features)"],
      paidFeatures: ["Full Excel desktop app", "Advanced features", "1TB OneDrive storage"],
      affiliateUrl: "https://microsoft.com/excel",
      discount: "First month free"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Desktop", "Web", "Mobile"]
    },
    toolType: "software"
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    description: "Cloud-based spreadsheet application with real-time collaboration",
    category: "spreadsheets",
    tags: ["spreadsheets", "collaboration", "cloud-based", "real-time", "data-analysis", "charts", "formulas", "sharing", "free", "google-workspace"],
    videos: [
      {
        id: "sheets-basics",
        title: "Google Sheets Basics",
        description: "Get started with Google Sheets",
        youtubeId: "dQw4w9WgXcQ",
        duration: 75
      },
      {
        id: "sheets-collaboration",
        title: "Google Sheets Collaboration",
        description: "Collaborate effectively in Google Sheets",
        youtubeId: "dQw4w9WgXcQ",
        duration: 100
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "$0",
      freeFeatures: ["Unlimited sheets", "Real-time collaboration", "15GB storage"],
      paidFeatures: ["More storage", "Advanced admin controls", "Enhanced security"],
      affiliateUrl: "https://sheets.google.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "software"
  },
  
  // Productivity Tools
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases",
    category: "productivity-tools",
    tags: ["productivity", "note-taking", "project-management", "databases", "wikis", "collaboration", "templates", "organization", "workspace", "knowledge-management"],
    videos: [
      {
        id: "notion-setup",
        title: "Notion Setup & Basics",
        description: "Set up your Notion workspace",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      },
      {
        id: "notion-databases",
        title: "Notion Databases",
        description: "Master Notion databases and relations",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Unlimited pages", "Basic blocks", "Sync across devices"],
      paidFeatures: ["Unlimited file uploads", "Version history", "Advanced permissions"],
      affiliateUrl: "https://notion.so",
      discount: "50% off for students"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Desktop", "Mobile"]
    },
    toolType: "software"
  },
  
  // E-commerce
  {
    id: "shopify",
    name: "Shopify",
    description: "Complete e-commerce platform for online stores and retail point-of-sale",
    category: "ecommerce",
    tags: ["e-commerce", "online-store", "retail", "pos", "inventory", "payments", "shipping", "marketing", "themes", "apps"],
    videos: [
      {
        id: "shopify-store-setup",
        title: "Shopify Store Setup",
        description: "Create your Shopify store in 90 seconds",
        youtubeId: "dQw4w9WgXcQ",
        duration: 90
      },
      {
        id: "shopify-customization",
        title: "Shopify Theme Customization",
        description: "Customize your Shopify store design",
        youtubeId: "dQw4w9WgXcQ",
        duration: 150
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$29/mo",
      freeFeatures: ["14-day free trial"],
      paidFeatures: ["Online store", "Unlimited products", "24/7 support", "SSL certificate"],
      affiliateUrl: "https://shopify.com",
      discount: "3 months for $1/month"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform"
  },
  
  // Development Tools
  {
    id: "visual-studio-code",
    name: "Visual Studio Code",
    description: "Free, powerful code editor with extensive extension ecosystem",
    category: "development-tools",
    tags: ["code-editor", "ide", "programming", "extensions", "debugging", "git", "intellisense", "free", "cross-platform", "microsoft"],
    videos: [
      {
        id: "vscode-setup",
        title: "VS Code Setup & Extensions",
        description: "Set up VS Code for maximum productivity",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      },
      {
        id: "vscode-shortcuts",
        title: "VS Code Shortcuts & Tips",
        description: "Essential VS Code shortcuts and productivity tips",
        youtubeId: "dQw4w9WgXcQ",
        duration: 90
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "$0",
      freeFeatures: ["Full IDE features", "Extensions", "Git integration", "Debugging"],
      paidFeatures: [],
      affiliateUrl: "https://code.visualstudio.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Desktop"]
    },
    toolType: "software"
  },
  
  // Communication
  {
    id: "slack",
    name: "Slack",
    description: "Team communication platform for workplace collaboration",
    category: "communication",
    tags: ["team-communication", "messaging", "collaboration", "channels", "integrations", "file-sharing", "video-calls", "workflow", "remote-work"],
    videos: [
      {
        id: "slack-setup",
        title: "Slack Workspace Setup",
        description: "Set up your Slack workspace effectively",
        youtubeId: "dQw4w9WgXcQ",
        duration: 100
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["10,000 messages", "10 integrations", "1-on-1 video calls"],
      paidFeatures: ["Unlimited messages", "Unlimited integrations", "Group video calls"],
      affiliateUrl: "https://slack.com",
      discount: "First 3 months free"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Desktop", "Mobile"]
    },
    toolType: "platform"
  },
  
  // Analytics
  {
    id: "google-analytics",
    name: "Google Analytics",
    description: "Web analytics service for tracking and reporting website traffic",
    category: "analytics",
    tags: ["web-analytics", "traffic-analysis", "user-behavior", "conversion-tracking", "reporting", "insights", "free", "google", "data"],
    videos: [
      {
        id: "ga4-setup",
        title: "Google Analytics 4 Setup",
        description: "Set up GA4 for your website",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      },
      {
        id: "ga4-reports",
        title: "GA4 Reports & Insights",
        description: "Understanding GA4 reports and data",
        youtubeId: "dQw4w9WgXcQ",
        duration: 150
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "$0",
      freeFeatures: ["Standard reports", "Real-time data", "Audience insights"],
      paidFeatures: ["Advanced analysis", "Data retention", "Support"],
      affiliateUrl: "https://analytics.google.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "service"
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