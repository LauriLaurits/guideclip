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
  youtubeId?: string; // Optional for backward compatibility
  localVideoSrc?: string; // Path to local video file
  poster?: string; // Thumbnail image for local videos
  duration: number; // in seconds
  transcript?: string; // AI-generated transcript
  resources?: {
    links: Array<{name: string, url: string, description?: string}>;
    shortcuts: string[];
    commands: string[];
    tools?: string[];
  };
  chapters?: Array<{
    time: number;
    title: string;
    description: string;
  }>;
  difficulty?: "beginner" | "intermediate" | "advanced";
  tags?: string[];
};

export type Category = {
  id: string;
  name: string;
  description: string;
  icon?: string;
};

export type Bundle = {
  id: string;
  name: string;
  description: string;
  projectType: string;
  tools: string[]; // Array of tool IDs
  estimatedCost: string;
  timeToLaunch: string;
  difficultyLevel: "beginner" | "intermediate" | "advanced";
  icon?: string;
  benefits: string[];
  steps: string[];
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
    id: "database-tools",
    name: "Database Tools",
    description: "Database management and backend services",
    icon: "database"
  },
  {
    id: "cloud-platforms",
    name: "Cloud Platforms",
    description: "Cloud computing and hosting services",
    icon: "cloud"
  },
  {
    id: "no-code-development",
    name: "No-Code Development",
    description: "Visual development platforms that require no coding",
    icon: "code"
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
    id: "communication-tools",
    name: "Communication Tools",
    description: "Team communication and messaging platforms",
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
    id: "analytics-tools",
    name: "Analytics Tools",
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
    id: "e-commerce-tools",
    name: "E-commerce Tools",
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
        localVideoSrc: "/video-tutorials/chatgpt/video-1-intro.mp4",
        duration: 135,
        difficulty: "beginner",
        tags: ["setup", "basics", "first-steps", "account"],
        transcript: "Welcome to ChatGPT! Let's get you set up and ready to go in just 2 minutes. First, navigate to chat.openai.com and click 'Sign up' if you don't have an account. You can sign up with Google, Microsoft, or email. Once logged in, you'll see the ChatGPT interface with a message box at the bottom. Click 'New Chat' to start fresh. Now you're ready to ask your first question! Try typing 'Explain quantum physics in simple terms' and hit Enter. ChatGPT will provide a clear, helpful response. Remember, be specific in your requests for better results.",
        chapters: [
          {
            time: 0,
            title: "Introduction",
            description: "Overview of ChatGPT and what we'll accomplish"
          },
          {
            time: 20,
            title: "Account Setup",
            description: "Creating your free ChatGPT account"
          },
          {
            time: 60,
            title: "Interface Tour",
            description: "Understanding the ChatGPT interface"
          },
          {
            time: 90,
            title: "First Interaction",
            description: "Making your first request to ChatGPT"
          },
          {
            time: 120,
            title: "Tips for Success",
            description: "Quick tips for better results"
          }
        ],
        resources: {
          links: [
            {
              name: "ChatGPT Official Site",
              url: "https://chat.openai.com",
              description: "Access ChatGPT directly"
            },
            {
              name: "OpenAI Help Center",
              url: "https://help.openai.com",
              description: "Get support and troubleshooting help"
            },
            {
              name: "ChatGPT Plus Upgrade",
              url: "https://openai.com/chatgpt/pricing",
              description: "Learn about ChatGPT Plus benefits"
            }
          ],
          shortcuts: [
            "Ctrl+Enter - Send message",
            "Ctrl+K - Search conversations",
            "Ctrl+Shift+O - New chat",
            "/ - Focus message input"
          ],
          commands: [
            "Explain [topic] in simple terms",
            "Write a [type] about [subject]",
            "Help me with [task]",
            "Act as a [role] and [request]"
          ],
          tools: ["Web browser", "OpenAI account"]
        }
      },
      {
        id: "chatgpt-prompts",
        title: "Advanced ChatGPT Prompting",
        description: "Master prompt engineering to get better results from ChatGPT",
        localVideoSrc: "/video-tutorials/chatgpt/video-2-prompts.mp4",
        duration: 180,
        difficulty: "intermediate",
        tags: ["prompting", "prompt-engineering", "advanced", "techniques"],
        transcript: "Now let's master the art of prompt engineering to get amazing results from ChatGPT. The key is being specific and providing context. Instead of 'write content', try 'Write a professional email to a client explaining a 2-week project delay, maintaining a positive tone, under 150 words'. Use role-playing: 'Act as a marketing expert and suggest 5 social media strategies for a small bakery'. Provide examples: 'Here's an example of the writing style I want... now create something similar about [topic]'. Ask for multiple options: 'Give me 3 different approaches to this problem'. These techniques will dramatically improve your results.",
        chapters: [
          {
            time: 0,
            title: "The Power of Specificity",
            description: "Why detailed prompts get better results"
          },
          {
            time: 45,
            title: "Role-Playing Technique",
            description: "Making ChatGPT act as an expert"
          },
          {
            time: 90,
            title: "Providing Examples",
            description: "Using examples to guide output style"
          },
          {
            time: 135,
            title: "Advanced Formatting",
            description: "Requesting specific formats and structures"
          },
          {
            time: 160,
            title: "Iteration and Refinement",
            description: "Improving responses through follow-up prompts"
          }
        ],
        resources: {
          links: [
            {
              name: "Prompt Engineering Guide",
              url: "https://platform.openai.com/docs/guides/prompt-engineering",
              description: "Official OpenAI guide to effective prompting"
            },
            {
              name: "Awesome ChatGPT Prompts",
              url: "https://github.com/f/awesome-chatgpt-prompts",
              description: "Curated list of the best ChatGPT prompts"
            },
            {
              name: "Prompt Engineering Course",
              url: "https://learn.deeplearning.ai/chatgpt-prompt-eng",
              description: "Free course by Andrew Ng on prompt engineering"
            }
          ],
          shortcuts: [
            "↑ - Edit last message",
            "Ctrl+Shift+C - Copy conversation",
            "Ctrl+/ - Regenerate response"
          ],
          commands: [
            "Act as a [profession] and [request]",
            "Explain like I'm [age/level]",
            "Format as [list/table/outline]",
            "Give me [number] different [options/approaches]",
            "Here's an example: [example]. Now create...",
            "Make it more [specific quality]"
          ],
          tools: ["Examples", "Context", "Specificity", "Role definitions"]
        }
      },
      {
        id: "chatgpt-productivity",
        title: "ChatGPT for Productivity",
        description: "Use ChatGPT to automate daily tasks and boost productivity",
        localVideoSrc: "/video-tutorials/chatgpt/video-3-productivity.mp4",
        duration: 165,
        difficulty: "intermediate",
        tags: ["productivity", "automation", "workflows", "business"],
        transcript: "Let's unlock ChatGPT's potential for massive productivity gains. Use it for email writing: 'Draft a follow-up email for a client meeting, professional tone, include action items'. For content creation: 'Create 10 social media post ideas for a fitness brand, include hashtags'. Project management: 'Break down launching a podcast into 15 actionable steps with timelines'. Research assistance: 'Summarize the key trends in renewable energy for 2024'. Code and documentation: 'Explain this code and suggest improvements'. Meeting preparation: 'Create an agenda for a product review meeting with 5 key discussion points'. These workflows can save hours daily.",
        chapters: [
          {
            time: 0,
            title: "Email and Communication",
            description: "Automating professional correspondence"
          },
          {
            time: 40,
            title: "Content Creation",
            description: "Generating marketing and social media content"
          },
          {
            time: 80,
            title: "Project Management",
            description: "Breaking down complex projects into tasks"
          },
          {
            time: 120,
            title: "Research and Analysis",
            description: "Using ChatGPT for information gathering"
          },
          {
            time: 145,
            title: "Workflow Integration",
            description: "Combining ChatGPT with your existing tools"
          }
        ],
        resources: {
          links: [
            {
              name: "ChatGPT for Business",
              url: "https://openai.com/chatgpt/enterprise",
              description: "Enterprise solutions and use cases"
            },
            {
              name: "Productivity Prompt Library",
              url: "https://prompts.chat",
              description: "Ready-to-use prompts for common tasks"
            },
            {
              name: "ChatGPT API Documentation",
              url: "https://platform.openai.com/docs/api-reference",
              description: "Integrate ChatGPT into your own applications"
            },
            {
              name: "Zapier ChatGPT Integration",
              url: "https://zapier.com/apps/chatgpt",
              description: "Automate workflows with ChatGPT"
            }
          ],
          shortcuts: [
            "Ctrl+Shift+S - Save conversation",
            "Ctrl+Shift+E - Export conversation",
            "Ctrl+F - Search in conversation"
          ],
          commands: [
            "Draft a [type] email about [topic]",
            "Create [number] [content type] for [industry]",
            "Break down [project] into actionable steps",
            "Summarize [topic] in [length]",
            "Analyze [data/text] and provide insights",
            "Create an agenda for [meeting type]"
          ],
          tools: ["Email clients", "Project management tools", "Calendar apps", "Note-taking apps", "CRM systems"]
        }
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
        title: "Getting Started with Cursor",
        description: "Install Cursor, create your first project, and set up Next.js in 90 seconds",
        localVideoSrc: "/video-tutorials/cursor/video-1-getting-started.mp4",
        duration: 90,
        difficulty: "beginner",
        tags: ["setup", "installation", "nextjs", "project-creation"],
        transcript: "Welcome to Cursor, the AI-powered code editor that makes coding 10x faster. First, let's create a new project folder. Right-click in your desired location and select 'New Folder'. Name it 'my-next-app'. Now, open this folder in Cursor by dragging it onto the Cursor icon. Next, we'll create a new Next.js project. Open the terminal with Ctrl+Shift+backtick. Type: npx create-next-app@latest dot. This installs Next.js in our current folder. Once complete, you're ready to start coding with AI assistance!",
        chapters: [
          {
            time: 0,
            title: "Introduction",
            description: "Overview of what we'll accomplish in this tutorial"
          },
          {
            time: 15,
            title: "Download & Install",
            description: "Download Cursor from cursor.io and install it"
          },
          {
            time: 30,
            title: "Create Project Folder",
            description: "Set up a new folder for your project"
          },
          {
            time: 60,
            title: "Next.js Setup",
            description: "Initialize a new Next.js project using the terminal"
          }
        ],
        resources: {
          links: [
            {
              name: "Cursor Official Website",
              url: "https://cursor.io",
              description: "Download Cursor and access documentation"
            },
            {
              name: "Next.js Documentation",
              url: "https://nextjs.org/docs",
              description: "Complete guide to Next.js framework"
            },
            {
              name: "VS Code Extensions",
              url: "https://marketplace.visualstudio.com/vscode",
              description: "Browse extensions compatible with Cursor"
            }
          ],
          shortcuts: [
            "Ctrl+K - AI command palette",
            "Ctrl+Shift+L - AI compose",
            "Ctrl+` - Toggle terminal",
            "Ctrl+Shift+` - New terminal",
            "Ctrl+P - Quick file open"
          ],
          commands: [
            "npx create-next-app@latest .",
            "npm run dev",
            "npm install",
            "npm run build"
          ],
          tools: ["Node.js", "npm", "Git"]
        }
      },
      {
        id: "cursor-ai-features",
        title: "Master Cursor's AI Features",
        description: "Learn Tab completion, Ctrl+K commands, and AI Chat for powerful coding assistance",
        localVideoSrc: "/video-tutorials/cursor/video-2-ai-features.mp4",
        duration: 165,
        difficulty: "intermediate",
        tags: ["ai-features", "tab-completion", "chat", "productivity"],
        transcript: "Now let's explore Cursor's powerful AI features. Tab completion is your best friend - start typing any code and press Tab to accept AI suggestions. For more complex requests, use Ctrl+K to open the command palette. You can ask it to 'create a React component', 'add error handling', or 'optimize this function'. The AI Chat feature lets you have conversations about your code. Select any code block and ask questions like 'explain this function' or 'how can I improve this?'. These features work together to dramatically speed up your development workflow.",
        chapters: [
          {
            time: 0,
            title: "Tab Completion",
            description: "Using AI autocomplete for faster coding"
          },
          {
            time: 45,
            title: "Ctrl+K Commands",
            description: "AI command palette for complex requests"
          },
          {
            time: 90,
            title: "AI Chat",
            description: "Conversational coding assistance"
          },
          {
            time: 135,
            title: "Workflow Integration",
            description: "Combining features for maximum productivity"
          }
        ],
        resources: {
          links: [
            {
              name: "Cursor AI Features Guide",
              url: "https://cursor.io/features",
              description: "Comprehensive guide to all AI features"
            },
            {
              name: "Cursor Keyboard Shortcuts",
              url: "https://cursor.io/docs/shortcuts",
              description: "Complete list of keyboard shortcuts"
            },
            {
              name: "Best Practices for AI Coding",
              url: "https://cursor.io/blog/best-practices",
              description: "Tips for effective AI-assisted development"
            }
          ],
          shortcuts: [
            "Tab - Accept AI suggestion",
            "Ctrl+K - AI command palette",
            "Ctrl+Shift+L - AI compose",
            "Ctrl+I - AI chat",
            "Ctrl+M - AI inline edit",
            "Escape - Dismiss AI suggestions"
          ],
          commands: [
            "create a React component",
            "add error handling",
            "optimize this function",
            "explain this code",
            "add comments",
            "refactor for readability"
          ],
          tools: ["TypeScript", "React", "ESLint", "Prettier"]
        }
      },
      {
        id: "cursor-productivity",
        title: "Cursor Productivity Workflows",
        description: "Advanced techniques for building full applications with AI assistance",
        localVideoSrc: "/video-tutorials/cursor/video-3-productivity.mp4",
        duration: 180,
        difficulty: "advanced",
        tags: ["workflows", "productivity", "full-stack", "deployment"],
        transcript: "Let's build a complete application workflow with Cursor. Start by using Ctrl+K to generate a full component structure. Ask for 'a todo app with add, delete, and edit functionality'. Cursor will scaffold the entire component. Use AI chat to iterate and improve - select code and ask 'make this more accessible' or 'add TypeScript types'. For styling, use Tab completion with Tailwind classes. When you're ready to deploy, ask Cursor to 'help me deploy this to Vercel' and it will guide you through the process. This workflow can reduce development time by 70%.",
        chapters: [
          {
            time: 0,
            title: "Project Scaffolding",
            description: "Generate full application structure with AI"
          },
          {
            time: 60,
            title: "Iterative Development",
            description: "Using AI chat for continuous improvement"
          },
          {
            time: 120,
            title: "Styling with AI",
            description: "AI-assisted CSS and Tailwind development"
          },
          {
            time: 150,
            title: "Deployment",
            description: "Deploy your application with AI guidance"
          }
        ],
        resources: {
          links: [
            {
              name: "Cursor Advanced Tutorial",
              url: "https://cursor.io/docs/advanced",
              description: "Deep dive into advanced Cursor features"
            },
            {
              name: "Vercel Deployment Guide",
              url: "https://vercel.com/docs",
              description: "Deploy your Next.js applications"
            },
            {
              name: "Tailwind CSS Documentation",
              url: "https://tailwindcss.com/docs",
              description: "Utility-first CSS framework"
            },
            {
              name: "TypeScript Handbook",
              url: "https://typescriptlang.org/docs",
              description: "Learn TypeScript for better code"
            }
          ],
          shortcuts: [
            "Ctrl+K - Generate code structures",
            "Ctrl+Shift+I - Multi-line AI edit",
            "Ctrl+D - Select word (then Tab for AI)",
            "Alt+Click - Multiple cursors",
            "Ctrl+/ - Toggle comment",
            "Ctrl+Shift+P - Command palette"
          ],
          commands: [
            "create a todo app component",
            "add TypeScript types",
            "make this more accessible",
            "add error boundaries",
            "optimize for performance",
            "deploy to Vercel"
          ],
          tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React", "ESLint"]
        }
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
    category: "analytics-tools",
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
    category: "e-commerce-tools",
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
    category: "communication-tools",
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
    category: "analytics-tools",
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
  },
  
  // Design Tools
  {
    id: "canva",
    name: "Canva",
    description: "Easy-to-use graphic design platform for creating social media posts, presentations, and marketing materials",
    category: "design-tools",
    icon: "palette",
    tags: ["design", "graphics", "social-media", "templates", "branding", "marketing", "presentations", "logos", "posters", "easy-to-use", "drag-and-drop", "collaboration"],
    videos: [
      {
        id: "canva-basics",
        title: "Canva Basics: Create Your First Design",
        description: "Learn the fundamentals of Canva and create your first social media post",
        youtubeId: "dQw4w9WgXcQ",
        duration: 120
      },
      {
        id: "canva-advanced",
        title: "Advanced Canva Techniques",
        description: "Master advanced features like brand kits, animations, and team collaboration",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      },
      {
        id: "canva-branding",
        title: "Brand Consistency in Canva",
        description: "Create and maintain consistent branding across all your designs",
        youtubeId: "dQw4w9WgXcQ",
        duration: 150
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["250,000+ templates", "100+ design types", "5GB cloud storage", "Real-time collaboration"],
      paidFeatures: ["Premium templates", "Brand kit", "Background remover", "Resize designs", "100GB storage"],
      affiliateUrl: "https://canva.com",
      couponCode: "CANVA30",
      discount: "30 days free trial"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Desktop"]
    },
    toolType: "platform"
  },

  // Additional AI Writing Tools
  {
    id: "jasper",
    name: "Jasper",
    description: "AI writing assistant for creating marketing copy, blog posts, and content at scale",
    category: "ai-writing",
    tags: ["ai-writing", "copywriting", "marketing", "blog-posts", "content-creation", "seo", "templates"],
    videos: [
      {
        id: "jasper-basics",
        title: "Jasper Basics: Write Better Copy",
        description: "Learn to create compelling marketing copy with Jasper AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$39/mo",
      paidFeatures: ["AI writing", "50+ templates", "Plagiarism checker", "SEO mode"],
      affiliateUrl: "https://jasper.ai"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "ai"
  },



  // Email Marketing Tools
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Email marketing platform for creating, sending, and tracking email campaigns",
    category: "email-marketing",
    tags: ["email-marketing", "automation", "newsletters", "campaigns", "analytics", "templates"],
    videos: [
      {
        id: "mailchimp-campaigns",
        title: "Mailchimp Email Campaigns",
        description: "Create effective email campaigns with Mailchimp",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["2,000 contacts", "10,000 sends/month", "Basic templates"],
      paidFeatures: ["Advanced automation", "A/B testing", "Advanced analytics"],
      affiliateUrl: "https://mailchimp.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform"
  },

  // Development Tools
  {
    id: "nextjs",
    name: "Next.js",
    description: "React framework for building full-stack web applications with server-side rendering",
    category: "development-tools",
    tags: ["react", "framework", "full-stack", "ssr", "vercel", "javascript", "typescript"],
    videos: [
      {
        id: "nextjs-setup",
        title: "Next.js App Setup",
        description: "Create your first Next.js application",
        youtubeId: "dQw4w9WgXcQ",
        duration: 220
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "$0",
      freeFeatures: ["Open source", "Full framework", "Community support"],
      paidFeatures: [],
      affiliateUrl: "https://nextjs.org"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "software"
  },

  // No-Code Platforms
  {
    id: "bubble",
    name: "Bubble",
    description: "No-code platform for building web applications without programming",
    category: "no-code-development",
    tags: ["no-code", "web-apps", "visual-programming", "database", "workflows"],
    videos: [
      {
        id: "bubble-app",
        title: "Build Apps with Bubble",
        description: "Create your first web app using Bubble's no-code platform",
        youtubeId: "dQw4w9WgXcQ",
        duration: 350
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["Free app", "Bubble subdomain", "Basic features"],
      paidFeatures: ["Custom domain", "More capacity", "Advanced features"],
      affiliateUrl: "https://bubble.io"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform"
  },

  {
    id: "webflow",
    name: "Webflow",
    description: "Visual web design platform for creating responsive websites without coding",
    category: "no-code-development",
    tags: ["web-design", "no-code", "responsive", "cms", "visual-design", "hosting"],
    videos: [
      {
        id: "webflow-design",
        title: "Webflow Website Design",
        description: "Design and launch your website with Webflow",
        youtubeId: "dQw4w9WgXcQ",
        duration: 280
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["2 projects", "50 CMS items", "Webflow subdomain"],
      paidFeatures: ["Custom domains", "More projects", "E-commerce"],
      affiliateUrl: "https://webflow.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform"
  },

  // Social Media Management
  {
    id: "buffer",
    name: "Buffer",
    description: "Social media management platform for scheduling and analyzing posts across multiple platforms",
    category: "marketing-tools",
    tags: ["social-media", "scheduling", "analytics", "content-planning", "multiple-platforms"],
    videos: [
      {
        id: "buffer-scheduling",
        title: "Buffer Social Media Scheduling",
        description: "Schedule and manage your social media content with Buffer",
        youtubeId: "dQw4w9WgXcQ",
        duration: 160
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "$0",
      freeFeatures: ["3 social accounts", "10 scheduled posts", "Basic analytics"],
      paidFeatures: ["More accounts", "Unlimited posts", "Advanced analytics"],
      affiliateUrl: "https://buffer.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform"
  },

  // AI Writing Tools
  {
    id: "jasper",
    name: "Jasper",
    description: "AI writing assistant for creating marketing copy, blog posts, and content at scale",
    category: "ai-writing",
    tags: ["ai-writing", "copywriting", "marketing", "blog-posts", "content-creation", "seo", "templates"],
    videos: [
      {
        id: "jasper-basics",
        title: "Jasper Basics: Write Better Copy",
        description: "Learn to create compelling marketing copy with Jasper AI",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180,
        difficulty: "beginner",
        tags: ["copywriting", "marketing", "basics"]
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$39/mo",
      paidFeatures: ["AI writing", "50+ templates", "Plagiarism checker", "SEO mode"],
      affiliateUrl: "https://jasper.ai"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Chrome Extension"]
    },
    toolType: "ai",
    icon: "pen-tool"
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description: "AI-powered copywriting tool for emails, ads, and social media content",
    category: "ai-writing",
    tags: ["ai-writing", "copywriting", "emails", "ads", "social-media"],
    videos: [
      {
        id: "copyai-workflows",
        title: "Copy.ai Workflows for Marketing",
        description: "Automate your content creation with Copy.ai workflows",
        youtubeId: "dQw4w9WgXcQ",
        duration: 240,
        difficulty: "intermediate",
        tags: ["workflows", "automation", "marketing"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["2,000 words/month", "90+ tools", "Basic templates"],
      paidFeatures: ["Unlimited words", "Priority support", "Advanced templates"],
      affiliateUrl: "https://copy.ai"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Chrome Extension"]
    },
    toolType: "ai",
    icon: "edit"
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "Advanced writing assistant with grammar checking, style suggestions, and tone detection",
    category: "ai-writing",
    tags: ["grammar", "writing", "editing", "proofreading", "style"],
    videos: [
      {
        id: "grammarly-business",
        title: "Grammarly for Business Writing",
        description: "Professional writing tips using Grammarly's advanced features",
        youtubeId: "dQw4w9WgXcQ",
        duration: 210,
        difficulty: "beginner",
        tags: ["business", "professional", "editing"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Grammar checking", "Spelling", "Basic punctuation"],
      paidFeatures: ["Advanced suggestions", "Tone detector", "Plagiarism checker"],
      affiliateUrl: "https://grammarly.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: false,
      hasIntegrations: true,
      platforms: ["Web", "Desktop", "Mobile", "Browser Extension"]
    },
    toolType: "ai",
    icon: "check-circle"
  },

  // Design Tools
  {
    id: "adobe-photoshop",
    name: "Adobe Photoshop",
    description: "Professional image editing and digital art creation software",
    category: "design-tools",
    tags: ["photo-editing", "digital-art", "design", "retouching", "graphics"],
    videos: [
      {
        id: "photoshop-basics",
        title: "Photoshop Fundamentals",
        description: "Master the essential tools and techniques in Photoshop",
        youtubeId: "dQw4w9WgXcQ",
        duration: 480,
        difficulty: "intermediate",
        tags: ["basics", "tools", "editing"]
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$20.99/mo",
      paidFeatures: ["All Photoshop features", "Cloud storage", "Adobe fonts", "Premium tutorials"],
      affiliateUrl: "https://adobe.com/photoshop"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "macOS", "iPad"]
    },
    toolType: "software",
    icon: "image"
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Digital design toolkit for creating user interfaces and user experiences",
    category: "design-tools",
    tags: ["ui-design", "ux-design", "prototyping", "mac", "vector-graphics"],
    videos: [
      {
        id: "sketch-ui-design",
        title: "UI Design with Sketch",
        description: "Create beautiful user interfaces using Sketch",
        youtubeId: "dQw4w9WgXcQ",
        duration: 360,
        difficulty: "intermediate",
        tags: ["ui", "design", "interface"]
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$9/mo",
      paidFeatures: ["Unlimited documents", "Cloud sync", "Collaboration", "Version history"],
      affiliateUrl: "https://sketch.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["macOS", "Web"]
    },
    toolType: "software",
    icon: "pen-tool"
  },

  // Video Editing Tools
  {
    id: "capcut",
    name: "CapCut",
    description: "Free video editing app with professional features for content creators",
    category: "video-editing",
    tags: ["video-editing", "mobile", "free", "social-media", "effects"],
    videos: [
      {
        id: "capcut-mobile-editing",
        title: "Mobile Video Editing with CapCut",
        description: "Create professional videos on your phone using CapCut",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300,
        difficulty: "beginner",
        tags: ["mobile", "editing", "social-media"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Basic editing", "Effects", "Music library", "Export HD"],
      paidFeatures: ["Premium effects", "No watermark", "Advanced features"],
      affiliateUrl: "https://capcut.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: false,
      hasIntegrations: false,
      platforms: ["iOS", "Android", "Web"]
    },
    toolType: "software",
    icon: "video"
  },
  {
    id: "adobe-premiere",
    name: "Adobe Premiere Pro",
    description: "Professional video editing software for filmmakers and content creators",
    category: "video-editing",
    tags: ["video-editing", "professional", "filmmaking", "post-production"],
    videos: [
      {
        id: "premiere-workflow",
        title: "Professional Video Editing Workflow",
        description: "Learn efficient video editing techniques in Premiere Pro",
        youtubeId: "dQw4w9WgXcQ",
        duration: 600,
        difficulty: "advanced",
        tags: ["professional", "workflow", "advanced"]
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$20.99/mo",
      paidFeatures: ["Full Premiere Pro", "After Effects", "Cloud storage", "Stock footage"],
      affiliateUrl: "https://adobe.com/premiere"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "macOS"]
    },
    toolType: "software",
    icon: "play"
  },

  // Productivity Tools
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace for notes, docs, databases, and project management",
    category: "productivity-tools",
    tags: ["notes", "database", "project-management", "collaboration", "workspace"],
    videos: [
      {
        id: "notion-setup",
        title: "Notion Workspace Setup",
        description: "Build the perfect productivity system with Notion",
        youtubeId: "dQw4w9WgXcQ",
        duration: 420,
        difficulty: "intermediate",
        tags: ["productivity", "setup", "workspace"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Personal use", "Unlimited pages", "Basic blocks"],
      paidFeatures: ["Team collaboration", "Advanced features", "Unlimited file uploads"],
      affiliateUrl: "https://notion.so"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Windows", "macOS", "iOS", "Android"]
    },
    toolType: "software",
    icon: "book"
  },
  {
    id: "trello",
    name: "Trello",
    description: "Visual project management tool using boards, lists, and cards",
    category: "productivity-tools",
    tags: ["project-management", "kanban", "collaboration", "visual", "teams"],
    videos: [
      {
        id: "trello-project-management",
        title: "Project Management with Trello",
        description: "Organize your projects effectively using Trello boards",
        youtubeId: "dQw4w9WgXcQ",
        duration: 240,
        difficulty: "beginner",
        tags: ["project-management", "kanban", "organization"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Personal boards", "Unlimited cards", "Basic features"],
      paidFeatures: ["Team features", "Advanced security", "Calendar view"],
      affiliateUrl: "https://trello.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "iOS", "Android", "Desktop"]
    },
    toolType: "software",
    icon: "layout"
  },
  {
    id: "asana",
    name: "Asana",
    description: "Team collaboration and project management platform",
    category: "productivity-tools",
    tags: ["project-management", "team-collaboration", "task-tracking", "workflows"],
    videos: [
      {
        id: "asana-team-collaboration",
        title: "Team Collaboration in Asana",
        description: "Manage team projects and workflows efficiently with Asana",
        youtubeId: "dQw4w9WgXcQ",
        duration: 360,
        difficulty: "intermediate",
        tags: ["team", "collaboration", "workflows"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Up to 15 team members", "Basic features", "Projects"],
      paidFeatures: ["Unlimited team members", "Advanced features", "Custom fields"],
      affiliateUrl: "https://asana.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "iOS", "Android", "Desktop"]
    },
    toolType: "software",
    icon: "users"
  },

  // Payment Processing
  {
    id: "stripe",
    name: "Stripe",
    description: "Online payment processing platform for businesses of all sizes",
    category: "payment-processing",
    tags: ["payments", "ecommerce", "subscriptions", "api", "online-payments"],
    videos: [
      {
        id: "stripe-integration",
        title: "Stripe Payment Integration",
        description: "Integrate Stripe payments into your website or app",
        youtubeId: "dQw4w9WgXcQ",
        duration: 480,
        difficulty: "advanced",
        tags: ["integration", "payments", "development"]
      }
    ],
    pricing: {
      model: "paid",
      startingPrice: "2.9% + 30¢ per transaction",
      paidFeatures: ["Online payments", "Subscriptions", "Marketplace", "Connect"],
      affiliateUrl: "https://stripe.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "API"]
    },
    toolType: "service",
    icon: "credit-card"
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Global digital payment platform for online transactions",
    category: "payment-processing",
    tags: ["payments", "digital-wallet", "international", "checkout"],
    videos: [
      {
        id: "paypal-business-setup",
        title: "PayPal Business Account Setup",
        description: "Set up PayPal for your business and start accepting payments",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300,
        difficulty: "beginner",
        tags: ["setup", "business", "payments"]
      }
    ],
    pricing: {
      model: "paid",
      startingPrice: "2.9% + fixed fee per transaction",
      paidFeatures: ["Payment processing", "Invoice tools", "Seller protection"],
      affiliateUrl: "https://paypal.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile", "Point of Sale"]
    },
    toolType: "service",
    icon: "dollar-sign"
  },
  {
    id: "square",
    name: "Square",
    description: "Complete payment and business solution for in-person and online sales",
    category: "payment-processing",
    tags: ["payments", "pos", "retail", "restaurants", "small-business"],
    videos: [
      {
        id: "square-pos-setup",
        title: "Square Point of Sale Setup",
        description: "Set up Square POS for your retail or restaurant business",
        youtubeId: "dQw4w9WgXcQ",
        duration: 360,
        difficulty: "beginner",
        tags: ["pos", "retail", "setup"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free for basic POS",
      freeFeatures: ["Basic POS", "Payment processing", "Sales reporting"],
      paidFeatures: ["Advanced features", "Employee management", "Loyalty programs"],
      affiliateUrl: "https://square.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "iOS", "Android", "Hardware"]
    },
    toolType: "service",
    icon: "square"
  },

  // Marketing Tools
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Email marketing and automation platform for businesses",
    category: "marketing-tools",
    tags: ["email-marketing", "automation", "newsletters", "campaigns"],
    videos: [
      {
        id: "mailchimp-campaigns",
        title: "Email Campaigns with Mailchimp",
        description: "Create effective email marketing campaigns using Mailchimp",
        youtubeId: "dQw4w9WgXcQ",
        duration: 420,
        difficulty: "beginner",
        tags: ["email", "campaigns", "marketing"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Up to 2,000 contacts", "10,000 emails/month", "Basic templates"],
      paidFeatures: ["Unlimited emails", "Advanced features", "24/7 support"],
      affiliateUrl: "https://mailchimp.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "service",
    icon: "mail"
  },
  {
    id: "hootsuite",
    name: "Hootsuite",
    description: "Social media management platform for scheduling and analytics",
    category: "marketing-tools",
    tags: ["social-media", "scheduling", "analytics", "management"],
    videos: [
      {
        id: "hootsuite-scheduling",
        title: "Social Media Scheduling with Hootsuite",
        description: "Automate your social media posting with Hootsuite",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300,
        difficulty: "beginner",
        tags: ["scheduling", "automation", "social-media"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["3 social profiles", "30 scheduled posts", "Basic analytics"],
      paidFeatures: ["Unlimited profiles", "Unlimited posts", "Advanced analytics"],
      affiliateUrl: "https://hootsuite.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "service",
    icon: "twitter"
  },

  // Project Management Tools
  {
    id: "monday",
    name: "Monday.com",
    description: "Work operating system for teams to run projects and workflows",
    category: "project-management",
    tags: ["project-management", "workflows", "team-collaboration", "customization"],
    videos: [
      {
        id: "monday-workflows",
        title: "Custom Workflows in Monday.com",
        description: "Build custom workflows for your team using Monday.com",
        youtubeId: "dQw4w9WgXcQ",
        duration: 480,
        difficulty: "intermediate",
        tags: ["workflows", "customization", "team"]
      }
    ],
    pricing: {
      model: "paid",
      startingPrice: "$8/user/month",
      paidFeatures: ["Custom workflows", "Time tracking", "Advanced reporting"],
      affiliateUrl: "https://monday.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "software",
    icon: "calendar"
  },

  // Communication Tools
  {
    id: "slack",
    name: "Slack",
    description: "Business communication platform for team collaboration",
    category: "communication-tools",
    tags: ["team-communication", "messaging", "collaboration", "channels"],
    videos: [
      {
        id: "slack-team-setup",
        title: "Setting Up Your Team on Slack",
        description: "Organize your team communication effectively with Slack",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300,
        difficulty: "beginner",
        tags: ["setup", "team", "communication"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["10,000 messages", "10 integrations", "File sharing"],
      paidFeatures: ["Unlimited messages", "Unlimited integrations", "Advanced features"],
      affiliateUrl: "https://slack.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Desktop", "Mobile"]
    },
    toolType: "software",
    icon: "message-circle"
  },
  {
    id: "discord",
    name: "Discord",
    description: "Voice, video, and text communication platform for communities",
    category: "communication-tools",
    tags: ["voice-chat", "communities", "gaming", "text-chat"],
    videos: [
      {
        id: "discord-server-setup",
        title: "Discord Server Setup Guide",
        description: "Create and manage your Discord community server",
        youtubeId: "dQw4w9WgXcQ",
        duration: 360,
        difficulty: "beginner",
        tags: ["server", "community", "setup"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Voice/video calls", "Text messaging", "Screen sharing"],
      paidFeatures: ["Server boosts", "Higher quality streaming", "Custom emojis"],
      affiliateUrl: "https://discord.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Desktop", "Mobile"]
    },
    toolType: "software",
    icon: "message-square"
  },

  // E-commerce Tools
  {
    id: "shopify",
    name: "Shopify",
    description: "Complete e-commerce platform for building online stores",
    category: "e-commerce-tools",
    tags: ["e-commerce", "online-store", "dropshipping", "retail"],
    videos: [
      {
        id: "shopify-store-setup",
        title: "Complete Shopify Store Setup",
        description: "Build your first online store with Shopify from scratch",
        youtubeId: "dQw4w9WgXcQ",
        duration: 720,
        difficulty: "intermediate",
        tags: ["setup", "store", "e-commerce"]
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$29/month",
      paidFeatures: ["Online store", "Payment processing", "Inventory management"],
      affiliateUrl: "https://shopify.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform",
    icon: "shopping-cart"
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    description: "Open-source e-commerce plugin for WordPress websites",
    category: "e-commerce-tools",
    tags: ["wordpress", "e-commerce", "open-source", "customizable"],
    videos: [
      {
        id: "woocommerce-setup",
        title: "WooCommerce Store Setup",
        description: "Set up an e-commerce store using WooCommerce and WordPress",
        youtubeId: "dQw4w9WgXcQ",
        duration: 600,
        difficulty: "advanced",
        tags: ["wordpress", "setup", "customization"]
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "Free",
      freeFeatures: ["Basic e-commerce", "Product management", "Payment gateways"],
      paidFeatures: ["Premium extensions", "Advanced features", "Support"],
      affiliateUrl: "https://woocommerce.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform",
    icon: "package"
  },

  // Database & Backend Tools
  {
    id: "supabase",
    name: "Supabase",
    description: "Open source Firebase alternative with PostgreSQL database",
    category: "database-tools",
    tags: ["database", "backend", "postgresql", "authentication", "realtime"],
    videos: [
      {
        id: "supabase-app-backend",
        title: "Building App Backend with Supabase",
        description: "Create a complete backend for your app using Supabase",
        youtubeId: "dQw4w9WgXcQ",
        duration: 540,
        difficulty: "advanced",
        tags: ["backend", "database", "development"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Database", "Authentication", "Real-time subscriptions"],
      paidFeatures: ["Higher limits", "Support", "Advanced features"],
      affiliateUrl: "https://supabase.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "API"]
    },
    toolType: "service",
    icon: "database"
  },
  {
    id: "airtable",
    name: "Airtable",
    description: "Database tool that combines spreadsheet simplicity with database power",
    category: "database-tools",
    tags: ["database", "spreadsheet", "collaboration", "no-code"],
    videos: [
      {
        id: "airtable-database-design",
        title: "Database Design with Airtable",
        description: "Design and build databases without code using Airtable",
        youtubeId: "dQw4w9WgXcQ",
        duration: 420,
        difficulty: "intermediate",
        tags: ["database", "no-code", "design"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Unlimited bases", "1,200 records per base", "Basic features"],
      paidFeatures: ["More records", "Advanced features", "Better support"],
      affiliateUrl: "https://airtable.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "software",
    icon: "grid"
  },

  // Analytics Tools
  {
    id: "google-analytics",
    name: "Google Analytics",
    description: "Web analytics service for tracking website traffic and user behavior",
    category: "analytics-tools",
    tags: ["analytics", "website-tracking", "user-behavior", "reporting"],
    videos: [
      {
        id: "ga4-setup",
        title: "Google Analytics 4 Setup Guide",
        description: "Set up GA4 tracking for your website and understand the reports",
        youtubeId: "dQw4w9WgXcQ",
        duration: 480,
        difficulty: "intermediate",
        tags: ["setup", "tracking", "reports"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Website analytics", "Basic reporting", "Real-time data"],
      paidFeatures: ["Advanced features", "Data sampling removal", "Support"],
      affiliateUrl: "https://analytics.google.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "service",
    icon: "bar-chart"
  },

  // No-Code Development
  {
    id: "bubble",
    name: "Bubble",
    description: "Visual programming platform for building web applications without code",
    category: "no-code-development",
    tags: ["no-code", "web-apps", "visual-programming", "database"],
    videos: [
      {
        id: "bubble-app-development",
        title: "Building Web Apps with Bubble",
        description: "Create a complete web application without writing code using Bubble",
        youtubeId: "dQw4w9WgXcQ",
        duration: 720,
        difficulty: "advanced",
        tags: ["no-code", "web-apps", "development"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["App development", "Bubble branding", "Basic features"],
      paidFeatures: ["Custom domain", "Remove branding", "More capacity"],
      affiliateUrl: "https://bubble.io"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform",
    icon: "code"
  },
  {
    id: "webflow",
    name: "Webflow",
    description: "Visual web design platform that generates clean code",
    category: "no-code-development",
    tags: ["web-design", "visual-design", "cms", "responsive"],
    videos: [
      {
        id: "webflow-responsive-design",
        title: "Responsive Web Design in Webflow",
        description: "Create beautiful, responsive websites using Webflow's visual editor",
        youtubeId: "dQw4w9WgXcQ",
        duration: 600,
        difficulty: "intermediate",
        tags: ["responsive", "design", "visual-editor"]
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["2 projects", "Webflow subdomain", "Basic features"],
      paidFeatures: ["Custom domain", "More projects", "CMS", "E-commerce"],
      affiliateUrl: "https://webflow.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform",
    icon: "layout"
  },

  // AI TOOLS - Adding more AI tools
  {
    id: "gemini",
    name: "Google Gemini",
    description: "Google's advanced AI assistant with multimodal capabilities for text, images, and code",
    category: "ai-chatbots",
    tags: ["ai", "chatbot", "google", "multimodal", "coding", "research"],
    videos: [
      {
        id: "gemini-intro",
        title: "Getting Started with Google Gemini",
        description: "Learn how to use Google's powerful AI assistant for various tasks",
        youtubeId: "dQw4w9WgXcQ",
        duration: 150
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Basic chat", "Text generation", "Limited queries"],
      paidFeatures: ["Gemini Advanced", "More queries", "Priority access"],
      affiliateUrl: "https://gemini.google.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "ai",
    icon: "sparkles"
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    description: "Microsoft's AI assistant integrated across Office 365 and Windows",
    category: "ai-chatbots",
    tags: ["ai", "microsoft", "office", "productivity", "integration"],
    videos: [
      {
        id: "copilot-office",
        title: "Microsoft Copilot in Office 365",
        description: "Boost productivity with AI assistance in Word, Excel, and PowerPoint",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$30/month",
      paidFeatures: ["Office integration", "Enterprise features", "Priority support"],
      affiliateUrl: "https://copilot.microsoft.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Web", "Mobile"]
    },
    toolType: "ai",
    icon: "bot"
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI",
    description: "Advanced AI image generator with fine-tuned models for various art styles",
    category: "ai-image-generators",
    tags: ["ai", "image-generation", "art", "design", "models"],
    videos: [
      {
        id: "leonardo-basics",
        title: "Leonardo AI Image Generation Basics",
        description: "Create stunning AI art with Leonardo's advanced models",
        youtubeId: "dQw4w9WgXcQ",
        duration: 200
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["150 tokens daily", "Basic models", "Standard quality"],
      paidFeatures: ["More tokens", "Premium models", "Higher quality", "Commercial use"],
      affiliateUrl: "https://leonardo.ai"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: false,
      platforms: ["Web"]
    },
    toolType: "ai",
    icon: "image"
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "Open-source AI image generator that runs locally or in the cloud",
    category: "ai-image-generators",
    tags: ["ai", "open-source", "image-generation", "local", "free"],
    videos: [
      {
        id: "stable-diffusion-setup",
        title: "Setting Up Stable Diffusion Locally",
        description: "Install and run Stable Diffusion on your own computer",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "Free",
      freeFeatures: ["Open source", "Local generation", "Unlimited use", "Commercial license"],
      affiliateUrl: "https://stability.ai"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Mac", "Linux", "Web"]
    },
    toolType: "ai",
    icon: "cpu"
  },
  {
    id: "claude-3",
    name: "Claude 3",
    description: "Anthropic's most advanced AI assistant with superior reasoning and safety",
    category: "ai-chatbots",
    tags: ["ai", "anthropic", "reasoning", "safety", "advanced"],
    videos: [
      {
        id: "claude-3-features",
        title: "Claude 3 Advanced Features",
        description: "Explore Claude 3's enhanced reasoning and multimodal capabilities",
        youtubeId: "dQw4w9WgXcQ",
        duration: 190
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Limited messages", "Claude 3 Haiku access"],
      paidFeatures: ["More messages", "Claude 3 Opus", "Priority access"],
      affiliateUrl: "https://claude.ai"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "API"]
    },
    toolType: "ai",
    icon: "brain"
  },

  // DESIGN TOOLS - Adding more design tools
  {
    id: "adobe-illustrator",
    name: "Adobe Illustrator",
    description: "Industry-standard vector graphics software for logos, icons, and illustrations",
    category: "design-tools",
    tags: ["vector", "design", "illustration", "logos", "adobe", "professional"],
    videos: [
      {
        id: "illustrator-basics",
        title: "Adobe Illustrator Fundamentals",
        description: "Master the basics of vector design in Illustrator",
        youtubeId: "dQw4w9WgXcQ",
        duration: 250
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$20.99/month",
      paidFeatures: ["Full Illustrator access", "Cloud sync", "Premium fonts", "Adobe Stock"],
      affiliateUrl: "https://adobe.com/illustrator"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Mac"]
    },
    toolType: "software",
    icon: "pen-tool"
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Mac-only vector design tool popular for UI/UX design and prototyping",
    category: "design-tools",
    tags: ["ui-design", "vector", "mac", "prototyping", "interface"],
    videos: [
      {
        id: "sketch-ui-design",
        title: "UI Design with Sketch",
        description: "Design modern user interfaces using Sketch's powerful tools",
        youtubeId: "dQw4w9WgXcQ",
        duration: 220
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$9/month",
      paidFeatures: ["Full Sketch access", "Cloud collaboration", "Version history"],
      affiliateUrl: "https://sketch.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Mac"]
    },
    toolType: "software",
    icon: "square"
  },
  {
    id: "adobe-xd",
    name: "Adobe XD",
    description: "UI/UX design and prototyping tool with collaboration features",
    category: "design-tools",
    tags: ["ui-design", "prototyping", "adobe", "collaboration", "wireframing"],
    videos: [
      {
        id: "xd-prototyping",
        title: "Prototyping in Adobe XD",
        description: "Create interactive prototypes and user flows in XD",
        youtubeId: "dQw4w9WgXcQ",
        duration: 200
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "Free",
      freeFeatures: ["Full XD access", "Basic prototyping", "Sharing"],
      affiliateUrl: "https://adobe.com/xd"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Mac"]
    },
    toolType: "software",
    icon: "layout"
  },
  {
    id: "invision",
    name: "InVision",
    description: "Digital product design platform with prototyping and collaboration tools",
    category: "design-tools",
    tags: ["prototyping", "collaboration", "design-system", "feedback"],
    videos: [
      {
        id: "invision-collaboration",
        title: "Design Collaboration with InVision",
        description: "Streamline design feedback and collaboration workflows",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["1 prototype", "3 active screens", "Basic collaboration"],
      paidFeatures: ["Unlimited prototypes", "Advanced features", "Team management"],
      affiliateUrl: "https://invisionapp.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mac", "Windows"]
    },
    toolType: "platform",
    icon: "eye"
  },

  // DEVELOPMENT TOOLS - Adding essential dev tools
  {
    id: "github",
    name: "GitHub",
    description: "World's leading platform for version control and collaborative software development",
    category: "development-tools",
    tags: ["git", "version-control", "collaboration", "open-source", "code-hosting"],
    videos: [
      {
        id: "github-basics",
        title: "GitHub Fundamentals",
        description: "Learn Git and GitHub basics for version control",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Unlimited public repos", "Basic private repos", "Issue tracking"],
      paidFeatures: ["Advanced security", "Team features", "Enterprise tools"],
      affiliateUrl: "https://github.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Desktop", "Mobile"]
    },
    toolType: "platform",
    icon: "git-branch"
  },
  {
    id: "visual-studio-code",
    name: "Visual Studio Code",
    description: "Free, powerful source-code editor with rich ecosystem of extensions",
    category: "development-tools",
    tags: ["ide", "editor", "microsoft", "extensions", "free", "cross-platform"],
    videos: [
      {
        id: "vscode-setup",
        title: "VS Code Setup and Extensions",
        description: "Set up the perfect development environment in VS Code",
        youtubeId: "dQw4w9WgXcQ",
        duration: 250
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "Free",
      freeFeatures: ["Full IDE", "Extensions marketplace", "Git integration", "Debugging"],
      affiliateUrl: "https://code.visualstudio.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Mac", "Linux"]
    },
    toolType: "software",
    icon: "code"
  },
  {
    id: "docker",
    name: "Docker",
    description: "Containerization platform for consistent application deployment across environments",
    category: "development-tools",
    tags: ["containers", "deployment", "devops", "virtualization"],
    videos: [
      {
        id: "docker-containers",
        title: "Docker Containers Explained",
        description: "Learn containerization basics with Docker",
        youtubeId: "dQw4w9WgXcQ",
        duration: 280
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Docker Desktop", "Personal use", "Basic features"],
      paidFeatures: ["Business features", "Enterprise support", "Advanced security"],
      affiliateUrl: "https://docker.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Mac", "Linux"]
    },
    toolType: "platform",
    icon: "package"
  },
  {
    id: "postman",
    name: "Postman",
    description: "API development and testing platform for building and testing REST APIs",
    category: "development-tools",
    tags: ["api", "testing", "development", "rest", "collaboration"],
    videos: [
      {
        id: "postman-api-testing",
        title: "API Testing with Postman",
        description: "Test and debug APIs efficiently using Postman",
        youtubeId: "dQw4w9WgXcQ",
        duration: 220
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Basic API testing", "Collections", "Limited team features"],
      paidFeatures: ["Team collaboration", "Advanced testing", "Monitoring"],
      affiliateUrl: "https://postman.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Mac", "Linux", "Web"]
    },
    toolType: "software",
    icon: "send"
  },

  // VIDEO EDITING - Adding more video tools
  {
    id: "final-cut-pro",
    name: "Final Cut Pro",
    description: "Professional video editing software for Mac with advanced features",
    category: "video-editing",
    tags: ["video-editing", "mac", "professional", "apple", "4k"],
    videos: [
      {
        id: "final-cut-basics",
        title: "Final Cut Pro Fundamentals",
        description: "Master professional video editing on Mac",
        youtubeId: "dQw4w9WgXcQ",
        duration: 350
      }
    ],
    pricing: {
      model: "paid",
      startingPrice: "$299.99",
      paidFeatures: ["Professional editing", "4K support", "Advanced effects", "Color grading"],
      affiliateUrl: "https://apple.com/final-cut-pro"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: false,
      hasIntegrations: true,
      platforms: ["Mac"]
    },
    toolType: "software",
    icon: "video"
  },
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    description: "Professional video editing, color correction, and audio post-production suite",
    category: "video-editing",
    tags: ["video-editing", "color-grading", "audio", "professional", "free"],
    videos: [
      {
        id: "davinci-color-grading",
        title: "Color Grading in DaVinci Resolve",
        description: "Professional color correction and grading techniques",
        youtubeId: "dQw4w9WgXcQ",
        duration: 400
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Full editing suite", "Color correction", "Audio editing"],
      paidFeatures: ["Advanced features", "Collaboration tools", "Neural engine"],
      affiliateUrl: "https://blackmagicdesign.com/products/davinciresolve"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: false,
      hasIntegrations: true,
      platforms: ["Windows", "Mac", "Linux"]
    },
    toolType: "software",
    icon: "film"
  },

  // PRODUCTIVITY TOOLS - Adding more productivity apps
  {
    id: "obsidian",
    name: "Obsidian",
    description: "Powerful knowledge base and note-taking app with linking and graph view",
    category: "productivity-tools",
    tags: ["notes", "knowledge-base", "linking", "markdown", "personal"],
    videos: [
      {
        id: "obsidian-setup",
        title: "Building a Knowledge Base with Obsidian",
        description: "Create connected notes and build your personal knowledge graph",
        youtubeId: "dQw4w9WgXcQ",
        duration: 280
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Personal use", "Core features", "Plugins"],
      paidFeatures: ["Commercial use", "Sync", "Publish"],
      affiliateUrl: "https://obsidian.md"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Mac", "Linux", "Mobile"]
    },
    toolType: "software",
    icon: "network"
  },
  {
    id: "todoist",
    name: "Todoist",
    description: "Powerful task management and productivity app with natural language processing",
    category: "productivity-tools",
    tags: ["tasks", "productivity", "organization", "scheduling", "cross-platform"],
    videos: [
      {
        id: "todoist-productivity",
        title: "Mastering Productivity with Todoist",
        description: "Organize your life and boost productivity with smart task management",
        youtubeId: "dQw4w9WgXcQ",
        duration: 200
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Up to 80 projects", "5 people per project", "Basic templates"],
      paidFeatures: ["300 projects", "25 people per project", "Labels & filters", "Reminders"],
      affiliateUrl: "https://todoist.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Windows", "Mac", "Mobile"]
    },
    toolType: "software",
    icon: "check-square"
  },
  {
    id: "evernote",
    name: "Evernote",
    description: "Comprehensive note-taking and organization app for capturing and organizing information",
    category: "productivity-tools",
    tags: ["notes", "organization", "capture", "web-clipper", "documents"],
    videos: [
      {
        id: "evernote-organization",
        title: "Organizing Your Digital Life with Evernote",
        description: "Capture, organize, and find information across all your devices",
        youtubeId: "dQw4w9WgXcQ",
        duration: 240
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["60MB upload", "2 devices", "Basic features"],
      paidFeatures: ["10GB upload", "Unlimited devices", "Offline access", "PDF search"],
      affiliateUrl: "https://evernote.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Windows", "Mac", "Mobile"]
    },
    toolType: "software",
    icon: "file-text"
  },

  // CLOUD PLATFORMS - Adding major cloud providers
  {
    id: "aws",
    name: "Amazon Web Services",
    description: "Comprehensive cloud computing platform with 200+ services for any workload",
    category: "cloud-platforms",
    tags: ["cloud", "aws", "infrastructure", "serverless", "storage"],
    videos: [
      {
        id: "aws-getting-started",
        title: "AWS Cloud Fundamentals",
        description: "Get started with Amazon Web Services cloud platform",
        youtubeId: "dQw4w9WgXcQ",
        duration: 450
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free tier",
      freeFeatures: ["12 months free tier", "EC2 micro instances", "S3 storage"],
      paidFeatures: ["Full service catalog", "Enterprise support", "Advanced features"],
      affiliateUrl: "https://aws.amazon.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "CLI", "Mobile"]
    },
    toolType: "platform",
    icon: "cloud"
  },
  {
    id: "vercel",
    name: "Vercel",
    description: "Frontend deployment platform optimized for modern web frameworks",
    category: "cloud-platforms",
    tags: ["deployment", "frontend", "nextjs", "jamstack", "edge"],
    videos: [
      {
        id: "vercel-deployment",
        title: "Deploy to Vercel in Minutes",
        description: "Deploy your web apps instantly with Vercel's platform",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Unlimited personal projects", "100GB bandwidth", "Serverless functions"],
      paidFeatures: ["Team features", "More bandwidth", "Advanced analytics"],
      affiliateUrl: "https://vercel.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "CLI"]
    },
    toolType: "platform",
    icon: "zap"
  },
  {
    id: "netlify",
    name: "Netlify",
    description: "Modern development platform for building fast, scalable web applications",
    category: "cloud-platforms",
    tags: ["deployment", "jamstack", "cdn", "forms", "functions"],
    videos: [
      {
        id: "netlify-features",
        title: "Netlify Platform Overview",
        description: "Build and deploy modern web apps with Netlify",
        youtubeId: "dQw4w9WgXcQ",
        duration: 220
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["100GB bandwidth", "Deploy previews", "Form handling"],
      paidFeatures: ["More bandwidth", "Team features", "Advanced security"],
      affiliateUrl: "https://netlify.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "CLI"]
    },
    toolType: "platform",
    icon: "globe"
  },

  // CRM TOOLS - Adding popular CRM solutions
  {
    id: "salesforce",
    name: "Salesforce",
    description: "World's leading CRM platform for sales, service, and marketing automation",
    category: "crm",
    tags: ["crm", "sales", "automation", "enterprise", "cloud"],
    videos: [
      {
        id: "salesforce-basics",
        title: "Salesforce CRM Fundamentals",
        description: "Master the basics of Salesforce CRM for sales success",
        youtubeId: "dQw4w9WgXcQ",
        duration: 350
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$25/user/month",
      paidFeatures: ["Contact management", "Opportunity tracking", "Reports", "Mobile app"],
      affiliateUrl: "https://salesforce.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform",
    icon: "users"
  },
  {
    id: "hubspot-crm",
    name: "HubSpot CRM",
    description: "Free CRM with powerful sales, marketing, and service tools",
    category: "crm",
    tags: ["crm", "free", "marketing", "sales", "inbound"],
    videos: [
      {
        id: "hubspot-crm-setup",
        title: "HubSpot CRM Setup and Management",
        description: "Set up and manage your sales pipeline with HubSpot's free CRM",
        youtubeId: "dQw4w9WgXcQ",
        duration: 280
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Contact management", "Deal tracking", "Basic reporting", "Email integration"],
      paidFeatures: ["Advanced automation", "Custom reporting", "Team features"],
      affiliateUrl: "https://hubspot.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform",
    icon: "heart"
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    description: "Simple, visual CRM designed to help small teams close more deals",
    category: "crm",
    tags: ["crm", "sales", "pipeline", "small-business", "visual"],
    videos: [
      {
        id: "pipedrive-pipeline",
        title: "Managing Sales Pipeline in Pipedrive",
        description: "Visualize and manage your sales process with Pipedrive",
        youtubeId: "dQw4w9WgXcQ",
        duration: 200
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$14.90/user/month",
      paidFeatures: ["Pipeline management", "Activity reminders", "Email sync", "Mobile app"],
      affiliateUrl: "https://pipedrive.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform",
    icon: "trending-up"
  },

  // SPREADSHEETS - Adding more spreadsheet tools
  {
    id: "google-sheets",
    name: "Google Sheets",
    description: "Cloud-based spreadsheet with real-time collaboration and powerful functions",
    category: "spreadsheets",
    tags: ["spreadsheet", "collaboration", "cloud", "free", "google"],
    videos: [
      {
        id: "google-sheets-formulas",
        title: "Google Sheets Formulas and Functions",
        description: "Master essential formulas and functions in Google Sheets",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["15GB storage", "Real-time collaboration", "Basic functions"],
      paidFeatures: ["More storage", "Advanced features", "Business tools"],
      affiliateUrl: "https://sheets.google.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "software",
    icon: "grid-3x3"
  },
  {
    id: "airtable",
    name: "Airtable",
    description: "Database-spreadsheet hybrid with powerful organization and collaboration features",
    category: "spreadsheets",
    tags: ["database", "spreadsheet", "collaboration", "organization", "no-code"],
    videos: [
      {
        id: "airtable-databases",
        title: "Building Databases with Airtable",
        description: "Create powerful databases using Airtable's flexible interface",
        youtubeId: "dQw4w9WgXcQ",
        duration: 260
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Unlimited bases", "1,200 records per base", "2GB attachments"],
      paidFeatures: ["More records", "Advanced features", "Team collaboration"],
      affiliateUrl: "https://airtable.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform",
    icon: "database"
  },

  // EMAIL MARKETING - Adding more email tools
  {
    id: "convertkit",
    name: "ConvertKit",
    description: "Email marketing platform designed specifically for creators and bloggers",
    category: "email-marketing",
    tags: ["email", "creators", "automation", "landing-pages", "blogging"],
    videos: [
      {
        id: "convertkit-automation",
        title: "Email Automation with ConvertKit",
        description: "Set up automated email sequences for your audience",
        youtubeId: "dQw4w9WgXcQ",
        duration: 240
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Up to 1,000 subscribers", "Unlimited sending", "Landing pages"],
      paidFeatures: ["More subscribers", "Advanced automation", "Integrations"],
      affiliateUrl: "https://convertkit.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform",
    icon: "mail"
  },
  {
    id: "mailerlite",
    name: "MailerLite",
    description: "Simple email marketing platform with drag-and-drop editor and automation",
    category: "email-marketing",
    tags: ["email", "simple", "automation", "affordable", "small-business"],
    videos: [
      {
        id: "mailerlite-campaigns",
        title: "Creating Email Campaigns in MailerLite",
        description: "Design and send beautiful email campaigns easily",
        youtubeId: "dQw4w9WgXcQ",
        duration: 180
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Up to 12,000 emails/month", "1,000 subscribers", "Landing pages"],
      paidFeatures: ["More subscribers", "Advanced features", "Priority support"],
      affiliateUrl: "https://mailerlite.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform",
    icon: "send"
  },

  // ANALYTICS TOOLS - Adding more analytics platforms
  {
    id: "mixpanel",
    name: "Mixpanel",
    description: "Advanced product analytics platform for tracking user behavior and engagement",
    category: "analytics-tools",
    tags: ["analytics", "user-behavior", "events", "funnels", "cohorts"],
    videos: [
      {
        id: "mixpanel-tracking",
        title: "User Analytics with Mixpanel",
        description: "Track user behavior and optimize your product with Mixpanel",
        youtubeId: "dQw4w9WgXcQ",
        duration: 280
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Up to 20M data points", "90-day data history", "5 reports"],
      paidFeatures: ["More data points", "Longer history", "Advanced features"],
      affiliateUrl: "https://mixpanel.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: false,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "platform",
    icon: "bar-chart"
  },
  {
    id: "hotjar",
    name: "Hotjar",
    description: "Website analytics and feedback platform with heatmaps and session recordings",
    category: "analytics-tools",
    tags: ["heatmaps", "session-recording", "feedback", "ux", "website"],
    videos: [
      {
        id: "hotjar-heatmaps",
        title: "Understanding User Behavior with Hotjar",
        description: "Use heatmaps and recordings to improve your website UX",
        youtubeId: "dQw4w9WgXcQ",
        duration: 220
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["2,000 page views/month", "3 heatmaps", "3 recordings"],
      paidFeatures: ["More page views", "Unlimited heatmaps", "Advanced features"],
      affiliateUrl: "https://hotjar.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform",
    icon: "activity"
  },

  // ACCOUNTING & FINANCE - Adding financial tools
  {
    id: "quickbooks",
    name: "QuickBooks",
    description: "Comprehensive accounting software for small to medium businesses",
    category: "accounting-finance",
    tags: ["accounting", "invoicing", "expenses", "payroll", "taxes"],
    videos: [
      {
        id: "quickbooks-setup",
        title: "QuickBooks Setup for Small Business",
        description: "Set up accounting and invoicing for your business",
        youtubeId: "dQw4w9WgXcQ",
        duration: 320
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$15/month",
      paidFeatures: ["Income/expense tracking", "Invoicing", "Reports", "Tax preparation"],
      affiliateUrl: "https://quickbooks.intuit.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Desktop", "Mobile"]
    },
    toolType: "software",
    icon: "calculator"
  },
  {
    id: "xero",
    name: "Xero",
    description: "Cloud-based accounting software designed for small businesses",
    category: "accounting-finance",
    tags: ["accounting", "cloud", "invoicing", "bank-sync", "reporting"],
    videos: [
      {
        id: "xero-basics",
        title: "Xero Accounting Fundamentals",
        description: "Master cloud accounting with Xero's platform",
        youtubeId: "dQw4w9WgXcQ",
        duration: 280
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$13/month",
      paidFeatures: ["Bank reconciliation", "Invoicing", "Expense claims", "Financial reporting"],
      affiliateUrl: "https://xero.com"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "software",
    icon: "pie-chart"
  },
  {
    id: "wave-accounting",
    name: "Wave Accounting",
    description: "Free accounting software for small businesses with invoicing and payments",
    category: "accounting-finance",
    tags: ["accounting", "free", "invoicing", "payments", "small-business"],
    videos: [
      {
        id: "wave-free-accounting",
        title: "Free Accounting with Wave",
        description: "Manage your business finances for free with Wave",
        youtubeId: "dQw4w9WgXcQ",
        duration: 200
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["Unlimited invoicing", "Accounting", "Receipt scanning"],
      paidFeatures: ["Payment processing", "Payroll", "Advanced features"],
      affiliateUrl: "https://waveapps.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web", "Mobile"]
    },
    toolType: "software",
    icon: "credit-card"
  },

  // PHOTO EDITING - Adding more photo editing tools
  {
    id: "lightroom",
    name: "Adobe Lightroom",
    description: "Professional photo editing and organization software for photographers",
    category: "photo-editing",
    tags: ["photo-editing", "raw", "organization", "presets", "professional"],
    videos: [
      {
        id: "lightroom-basics",
        title: "Adobe Lightroom Photo Editing",
        description: "Edit and organize photos like a pro with Lightroom",
        youtubeId: "dQw4w9WgXcQ",
        duration: 350
      }
    ],
    pricing: {
      model: "subscription",
      startingPrice: "$9.99/month",
      paidFeatures: ["RAW editing", "Cloud sync", "Mobile apps", "Preset sync"],
      affiliateUrl: "https://adobe.com/lightroom"
    },
    features: {
      hasFreeTier: false,
      noCodeRequired: true,
      hasAPI: false,
      hasIntegrations: true,
      platforms: ["Windows", "Mac", "Mobile"]
    },
    toolType: "software",
    icon: "sun"
  },
  {
    id: "gimp",
    name: "GIMP",
    description: "Free and open-source raster graphics editor for photo retouching and editing",
    category: "photo-editing",
    tags: ["photo-editing", "free", "open-source", "retouching", "graphics"],
    videos: [
      {
        id: "gimp-photo-editing",
        title: "Photo Editing with GIMP",
        description: "Professional photo editing for free using GIMP",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300
      }
    ],
    pricing: {
      model: "free",
      startingPrice: "Free",
      freeFeatures: ["Full photo editing", "Layers", "Filters", "Customizable interface"],
      affiliateUrl: "https://gimp.org"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Windows", "Mac", "Linux"]
    },
    toolType: "software",
    icon: "image"
  },

  // NO-CODE DEVELOPMENT - Adding more no-code tools
  {
    id: "zapier",
    name: "Zapier",
    description: "Automation platform that connects your favorite apps and services",
    category: "no-code-development",
    tags: ["automation", "integration", "workflow", "no-code", "productivity"],
    videos: [
      {
        id: "zapier-automation",
        title: "Workflow Automation with Zapier",
        description: "Automate repetitive tasks by connecting your apps",
        youtubeId: "dQw4w9WgXcQ",
        duration: 250
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["100 tasks/month", "5 Zaps", "Basic triggers"],
      paidFeatures: ["More tasks", "Premium apps", "Multi-step Zaps"],
      affiliateUrl: "https://zapier.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform",
    icon: "zap"
  },
  {
    id: "make",
    name: "Make (Integromat)",
    description: "Visual platform for creating, building and automating anything",
    category: "no-code-development",
    tags: ["automation", "visual", "integration", "advanced", "scenarios"],
    videos: [
      {
        id: "make-scenarios",
        title: "Advanced Automation with Make",
        description: "Build complex automation scenarios visually with Make",
        youtubeId: "dQw4w9WgXcQ",
        duration: 300
      }
    ],
    pricing: {
      model: "freemium",
      startingPrice: "Free",
      freeFeatures: ["1,000 operations", "2 active scenarios", "Basic integrations"],
      paidFeatures: ["More operations", "Advanced features", "Team collaboration"],
      affiliateUrl: "https://make.com"
    },
    features: {
      hasFreeTier: true,
      noCodeRequired: true,
      hasAPI: true,
      hasIntegrations: true,
      platforms: ["Web"]
    },
    toolType: "platform",
    icon: "workflow"
  }
];

// Tool Bundles for Common Projects
export const bundles: Bundle[] = [
  {
    id: "ecommerce-store",
    name: "E-commerce Store Bundle",
    description: "Everything you need to launch and run a successful online store",
    projectType: "E-commerce Business",
    tools: ["shopify", "canva", "mailchimp", "google-analytics", "chatgpt"],
    estimatedCost: "$50-150/month",
    timeToLaunch: "2-4 weeks",
    difficultyLevel: "beginner",
    icon: "shopping-cart",
    benefits: [
      "Professional online store setup",
      "Integrated payment processing",
      "Email marketing automation",
      "Performance tracking and analytics",
      "AI-powered product descriptions"
    ],
    steps: [
      "Set up Shopify store and choose theme",
      "Design product images and marketing materials with Canva",
      "Configure email marketing campaigns in Mailchimp",
      "Set up Google Analytics for tracking",
      "Use ChatGPT to write product descriptions and content"
    ]
  },
  {
    id: "saas-product",
    name: "SaaS Product Bundle",
    description: "Build and launch your software-as-a-service application",
    projectType: "SaaS Application",
    tools: ["nextjs", "supabase", "stripe", "cursor", "figma"],
    estimatedCost: "$20-100/month",
    timeToLaunch: "8-16 weeks",
    difficultyLevel: "advanced",
    icon: "code",
    benefits: [
      "Modern full-stack application",
      "Scalable database and authentication",
      "Integrated payment processing",
      "AI-powered development workflow",
      "Professional UI/UX design"
    ],
    steps: [
      "Design user interface and user experience in Figma",
      "Set up Next.js frontend application",
      "Configure Supabase database and authentication",
      "Integrate Stripe for subscription payments",
      "Use Cursor for AI-assisted development"
    ]
  },
  {
    id: "content-creator",
    name: "Content Creator Bundle",
    description: "Create, edit, and distribute engaging content across platforms",
    projectType: "Content Creation Business",
    tools: ["capcut", "canva", "buffer", "chatgpt"],
    estimatedCost: "$20-80/month",
    timeToLaunch: "1-2 weeks",
    difficultyLevel: "beginner",
    icon: "video",
    benefits: [
      "Professional video editing capabilities",
      "Consistent visual branding",
      "Automated social media scheduling",
      "AI-powered content ideas and scripts"
    ],
    steps: [
      "Plan content strategy and create templates in Canva",
      "Record and edit videos using CapCut",
      "Generate content ideas and scripts with ChatGPT",
      "Schedule and distribute content via Buffer"
    ]
  },
  {
    id: "digital-agency",
    name: "Digital Marketing Agency Bundle",
    description: "Tools to run a full-service digital marketing agency",
    projectType: "Service Business",
    tools: ["notion", "figma", "mailchimp", "google-analytics", "buffer"],
    estimatedCost: "$50-200/month",
    timeToLaunch: "3-6 weeks",
    difficultyLevel: "intermediate",
    icon: "briefcase",
    benefits: [
      "Complete client project management",
      "Professional design capabilities",
      "Email marketing services",
      "Analytics and reporting",
      "Social media management"
    ],
    steps: [
      "Set up client management system in Notion",
      "Create design assets and mockups in Figma",
      "Build email marketing campaigns in Mailchimp",
      "Set up analytics tracking with Google Analytics",
      "Manage social media presence with Buffer"
    ]
  },
  {
    id: "online-course",
    name: "Online Course Bundle",
    description: "Create, market, and sell online educational content",
    projectType: "Education Business",
    tools: ["canva", "capcut", "mailchimp", "notion", "chatgpt"],
    estimatedCost: "$30-100/month",
    timeToLaunch: "4-8 weeks",
    difficultyLevel: "intermediate",
    icon: "book-open",
    benefits: [
      "Professional course materials design",
      "Video content creation and editing",
      "Student email automation",
      "Course content organization",
      "AI-assisted curriculum development"
    ],
    steps: [
      "Develop course outline and structure in Notion",
      "Create course materials and graphics with Canva",
      "Record and edit video lessons using CapCut",
      "Set up student email sequences in Mailchimp",
      "Use ChatGPT for lesson content and quiz questions"
    ]
  },
  {
    id: "startup-mvp",
    name: "Startup MVP Bundle",
    description: "Rapidly build and validate your minimum viable product",
    projectType: "Startup Launch",
    tools: ["bubble", "figma", "google-analytics", "mailchimp", "notion"],
    estimatedCost: "$40-120/month",
    timeToLaunch: "4-10 weeks",
    difficultyLevel: "intermediate",
    icon: "rocket",
    benefits: [
      "No-code application development",
      "Professional design and prototyping",
      "User behavior tracking",
      "Email marketing for user acquisition",
      "Comprehensive project management"
    ],
    steps: [
      "Design app interface and user flow in Figma",
      "Build functional prototype with Bubble",
      "Set up user tracking with Google Analytics",
      "Create email campaigns for user onboarding in Mailchimp",
      "Manage development tasks and roadmap in Notion"
    ]
  },
  {
    id: "freelancer-business",
    name: "Freelancer Business Bundle",
    description: "Professional tools for running a successful freelance business",
    projectType: "Freelance Business",
    tools: ["notion", "canva", "stripe", "google-analytics", "chatgpt"],
    estimatedCost: "$25-75/month",
    timeToLaunch: "2-4 weeks",
    difficultyLevel: "beginner",
    icon: "user",
    benefits: [
      "Client and project management",
      "Professional branding materials",
      "Secure payment processing",
      "Portfolio and website analytics",
      "AI-powered proposal writing"
    ],
    steps: [
      "Set up client management and project tracking in Notion",
      "Create professional branding materials with Canva",
      "Configure payment processing with Stripe",
      "Track website performance with Google Analytics",
      "Use ChatGPT for proposals and client communication"
    ]
  },
  {
    id: "ai-automation",
    name: "AI Automation Bundle",
    description: "Automate your business processes with AI-powered tools",
    projectType: "Business Automation",
    tools: ["chatgpt", "notion", "mailchimp", "buffer", "google-analytics"],
    estimatedCost: "$30-100/month",
    timeToLaunch: "2-6 weeks",
    difficultyLevel: "intermediate",
    icon: "zap",
    benefits: [
      "AI-powered content generation",
      "Automated workflow management",
      "Email marketing automation",
      "Social media automation",
      "Automated reporting and analytics"
    ],
    steps: [
      "Set up automated workflows in Notion",
      "Create AI-generated content with ChatGPT",
      "Build email automation sequences in Mailchimp",
      "Schedule social media posts with Buffer",
      "Set up automated reporting with Google Analytics"
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

export const getBundleById = (id: string): Bundle | undefined => {
  return bundles.find(bundle => bundle.id === id);
};

export const getBundlesByDifficulty = (difficulty: "beginner" | "intermediate" | "advanced"): Bundle[] => {
  return bundles.filter(bundle => bundle.difficultyLevel === difficulty);
};

export const getToolsByBundle = (bundleId: string): Tool[] => {
  const bundle = getBundleById(bundleId);
  if (!bundle) return [];
  return bundle.tools.map(toolId => getToolById(toolId)).filter(Boolean) as Tool[];
}; 