import { TutorialStep } from "@/components/tutorial-steps";

// Canva Tutorial: Create a Social Media Post (Most Popular Use Case)
export const canvaSocialMediaTutorial: TutorialStep[] = [
  {
    id: "canva-step-1",
    title: "Sign Up & Access Canva",
    description: "Create your free Canva account and access the design platform",
    instruction: "Go to canva.com and click 'Sign up' in the top right corner. Choose to sign up with Google, Facebook, or email.",
    duration: 30,
    difficulty: "easy",
    actionType: "navigate",
    targetElement: "Sign up button in top navigation",
    expectedResult: "You'll be redirected to the Canva dashboard with template options",
    tips: [
      "Use Google sign-up for fastest access",
      "Canva offers a generous free tier with thousands of templates",
      "You can upgrade to Pro later for premium features"
    ],
    shortcuts: ["Ctrl+N (New design)"]
  },
  {
    id: "canva-step-2", 
    title: "Choose Instagram Post Template",
    description: "Select the perfect template size for your social media platform",
    instruction: "Click 'Create a design' and select 'Instagram Post' from the social media section, or search for 'Instagram post' in the search bar.",
    duration: 20,
    difficulty: "easy",
    actionType: "click",
    targetElement: "Instagram Post template option",
    expectedResult: "A new 1080x1080px canvas opens with template suggestions",
    tips: [
      "Instagram posts are square (1080x1080px) - perfect for feed posts",
      "You can also choose Instagram Story (1080x1920px) for stories",
      "Templates are organized by category and style"
    ]
  },
  {
    id: "canva-step-3",
    title: "Browse & Select Template",
    description: "Choose from thousands of professionally designed templates",
    instruction: "Browse the template gallery on the left sidebar. Click on any template that catches your eye to apply it to your canvas.",
    duration: 45,
    difficulty: "easy", 
    actionType: "click",
    targetElement: "Template thumbnails in left sidebar",
    expectedResult: "Selected template loads on your canvas, ready for customization",
    tips: [
      "Use the search bar to find templates by keyword (e.g., 'food', 'business', 'quote')",
      "Filter templates by color, style, or theme",
      "Free templates have no watermark - Pro templates are marked with a crown icon"
    ],
    warnings: [
      "Pro templates require a Canva Pro subscription",
      "Some elements in free templates might be Pro-only"
    ]
  },
  {
    id: "canva-step-4",
    title: "Customize Text Content", 
    description: "Replace placeholder text with your own compelling message",
    instruction: "Double-click on any text element to edit it. Type your new text and press Enter when done.",
    duration: 60,
    difficulty: "easy",
    actionType: "type",
    targetElement: "Text elements on the canvas",
    expectedResult: "Text updates with your custom content while maintaining the design style",
    tips: [
      "Keep text concise and impactful for social media",
      "Use action words and emojis to increase engagement",
      "Consider your brand voice and target audience"
    ],
    shortcuts: ["Double-click to edit text", "Ctrl+A (Select all text)", "Ctrl+B (Bold)", "Ctrl+I (Italic)"]
  },
  {
    id: "canva-step-5",
    title: "Change Text Styling",
    description: "Customize fonts, colors, and text effects to match your brand",
    instruction: "Select the text element, then use the toolbar above to change font, size, color, and effects. Try different combinations until you're satisfied.",
    duration: 90,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Text formatting toolbar",
    expectedResult: "Text appears with your chosen styling that fits your brand aesthetic",
    tips: [
      "Stick to 2-3 fonts maximum for a clean look",
      "Use high contrast colors for readability",
      "Brand colors help with recognition and consistency",
      "Text effects like shadows can improve readability on busy backgrounds"
    ],
    warnings: [
      "Avoid using too many different fonts - it looks unprofessional",
      "Ensure text is readable on mobile devices"
    ]
  },
  {
    id: "canva-step-6",
    title: "Add or Replace Images",
    description: "Upload your own photos or choose from Canva's extensive library",
    instruction: "Click 'Uploads' in the left sidebar to add your own images, or click 'Photos' to browse Canva's stock library. Drag and drop images onto your design.",
    duration: 75,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Uploads or Photos tab in sidebar",
    expectedResult: "New image appears on your design, replacing or adding to existing visuals",
    tips: [
      "Use high-quality images (at least 1080px wide for Instagram)",
      "Ensure you have rights to use any uploaded images",
      "Canva's free photos are royalty-free and safe to use",
      "Use the search function to find specific types of images"
    ],
    shortcuts: ["Drag and drop files directly onto canvas"]
  },
  {
    id: "canva-step-7",
    title: "Adjust Image Positioning",
    description: "Resize, crop, and position images perfectly within your design",
    instruction: "Click on an image to select it. Drag the corner handles to resize, or drag the image to reposition. Use the crop tool for precise framing.",
    duration: 60,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Image corner handles and crop tool",
    expectedResult: "Image is perfectly sized and positioned within your design layout",
    tips: [
      "Hold Shift while resizing to maintain aspect ratio",
      "Double-click an image to access advanced editing options",
      "Use the alignment guides that appear when moving elements",
      "The crop tool helps focus on the most important part of an image"
    ],
    shortcuts: ["Shift+Drag (Maintain aspect ratio)", "Double-click (Edit image)"]
  },
  {
    id: "canva-step-8",
    title: "Add Design Elements",
    description: "Enhance your design with icons, shapes, and decorative elements",
    instruction: "Click 'Elements' in the left sidebar. Browse categories like icons, shapes, lines, or stickers. Click any element to add it to your design.",
    duration: 45,
    difficulty: "easy",
    actionType: "click", 
    targetElement: "Elements tab and element categories",
    expectedResult: "Decorative elements appear on your design, adding visual interest and style",
    tips: [
      "Use elements sparingly - less is often more",
      "Choose elements that match your design style and brand",
      "Icons can help communicate ideas quickly",
      "Shapes can be used as backgrounds or dividers"
    ]
  },
  {
    id: "canva-step-9",
    title: "Apply Color Scheme",
    description: "Create a cohesive look by adjusting colors throughout your design",
    instruction: "Select any element and click the color picker. Choose from suggested brand colors, or create a custom color palette that matches your brand.",
    duration: 50,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Color picker in element toolbar",
    expectedResult: "All design elements use a harmonious color scheme that represents your brand",
    tips: [
      "Use your brand colors consistently across all designs",
      "Limit your palette to 3-4 colors for best results",
      "Consider color psychology - different colors evoke different emotions",
      "Test your design in grayscale to ensure good contrast"
    ],
    warnings: [
      "Avoid using colors that are too similar - they may not show up well",
      "Consider accessibility - ensure sufficient contrast for readability"
    ]
  },
  {
    id: "canva-step-10",
    title: "Download & Share Your Design",
    description: "Export your finished design in the right format for social media",
    instruction: "Click the 'Share' button in the top right, then 'Download'. Choose PNG for best quality or JPG for smaller file size. Click 'Download' to save to your device.",
    duration: 25,
    difficulty: "easy",
    actionType: "click",
    targetElement: "Share button and download options",
    expectedResult: "Your design downloads as a high-quality image file ready for posting",
    tips: [
      "PNG format preserves transparency and quality",
      "JPG files are smaller and load faster on social media",
      "You can also share directly to social platforms from Canva",
      "Save your design to access and edit it later"
    ],
    shortcuts: ["Ctrl+S (Save design)", "Ctrl+Shift+D (Download)"]
  }
];

// ChatGPT Tutorial: Write Effective Prompts
export const chatgptPromptTutorial: TutorialStep[] = [
  {
    id: "chatgpt-step-1",
    title: "Access ChatGPT",
    description: "Navigate to ChatGPT and start a new conversation",
    instruction: "Go to chat.openai.com and sign in with your account. Click 'New Chat' to start a fresh conversation.",
    image: "/tutorial-images/chatgpt/step-1-open-chatgpt.png",
    imageAlt: "ChatGPT interface showing the New Chat button highlighted",
    duration: 20,
    difficulty: "easy",
    actionType: "navigate",
    targetElement: "New Chat button",
    expectedResult: "A blank chat interface appears, ready for your first prompt",
    tips: [
      "ChatGPT is free to use with some limitations",
      "ChatGPT Plus offers faster responses and access to GPT-4",
      "Each conversation maintains context throughout the session"
    ]
  },
  {
    id: "chatgpt-step-2",
    title: "Write a Clear, Specific Prompt",
    description: "Craft a detailed prompt that clearly explains what you want",
    instruction: "Type a specific request in the message box. Be clear about the format, tone, and length you want. For example: 'Write a professional email to a client explaining a project delay, keeping it under 150 words and maintaining a positive tone.'",
    image: "/tutorial-images/chatgpt/step-2-open-chatgpt.png",
    imageAlt: "ChatGPT interface showing a detailed prompt being typed in the message box",
    duration: 90,
    difficulty: "medium",
    actionType: "type",
    targetElement: "Message input box",
    expectedResult: "ChatGPT generates a response that closely matches your specifications",
    tips: [
      "Be specific about format (email, list, paragraph, etc.)",
      "Specify the tone (professional, casual, friendly, etc.)",
      "Include word count or length requirements",
      "Mention your target audience",
      "Provide context when relevant"
    ],
    warnings: [
      "Vague prompts lead to generic responses",
      "Don't include sensitive personal information"
    ]
  },
  {
    id: "chatgpt-step-3",
    title: "Use Role-Playing for Better Results",
    description: "Ask ChatGPT to take on a specific role or expertise",
    instruction: "Start your prompt with 'Act as a [role]' or 'You are a [profession]'. For example: 'Act as a marketing expert and suggest 5 social media strategies for a small bakery.'",
    duration: 60,
    difficulty: "medium",
    actionType: "type",
    targetElement: "Message input box",
    expectedResult: "ChatGPT responds from the perspective of the specified role with relevant expertise",
    tips: [
      "Popular roles: marketing expert, teacher, coach, consultant, writer",
      "Be specific about the expertise level (beginner, expert, etc.)",
      "Combine roles for unique perspectives",
      "Ask for step-by-step guidance when learning"
    ]
  },
  {
    id: "chatgpt-step-4",
    title: "Provide Examples and Context",
    description: "Give ChatGPT examples of what you want to improve response quality",
    instruction: "Include examples in your prompt. Say 'Here's an example of what I'm looking for:' followed by a sample. Then ask ChatGPT to create something similar.",
    duration: 75,
    difficulty: "medium",
    actionType: "type",
    targetElement: "Message input box",
    expectedResult: "ChatGPT creates content that matches your example's style and format",
    tips: [
      "Examples help ChatGPT understand your preferred style",
      "Provide 2-3 examples for best results",
      "Explain what you like about the examples",
      "Include both good and bad examples to clarify preferences"
    ]
  },
  {
    id: "chatgpt-step-5",
    title: "Ask for Multiple Options",
    description: "Request several variations to choose from",
    instruction: "Add 'Give me 3 different options' or 'Provide 5 variations' to your prompt. This gives you choices and different approaches to your request.",
    duration: 30,
    difficulty: "easy",
    actionType: "type",
    targetElement: "Message input box",
    expectedResult: "ChatGPT provides multiple variations of your requested content",
    tips: [
      "Ask for 3-5 options for best variety",
      "Request different styles or approaches",
      "You can ask for options with different tones or lengths",
      "Use the best parts from multiple options"
    ]
  },
  {
    id: "chatgpt-step-6",
    title: "Iterate and Refine",
    description: "Improve the response by asking for specific changes",
    instruction: "After receiving a response, ask for modifications: 'Make it more casual', 'Add more details about X', or 'Shorten this to 100 words'.",
    duration: 45,
    difficulty: "easy",
    actionType: "type",
    targetElement: "Message input box",
    expectedResult: "ChatGPT refines the previous response based on your feedback",
    tips: [
      "Be specific about what to change",
      "You can ask for multiple revisions",
      "Build on previous responses in the same conversation",
      "Ask 'What would make this better?' for suggestions"
    ],
    shortcuts: ["Use 'Regenerate response' for a different version"]
  },
  {
    id: "chatgpt-step-7",
    title: "Use Formatting Instructions",
    description: "Request specific formatting for better readability",
    instruction: "Ask for specific formats like 'Format as a numbered list', 'Use bullet points', 'Create a table', or 'Write in paragraph form with headers'.",
    duration: 40,
    difficulty: "easy",
    actionType: "type",
    targetElement: "Message input box",
    expectedResult: "ChatGPT formats the response exactly as requested",
    tips: [
      "Common formats: lists, tables, outlines, step-by-step guides",
      "Ask for headers and subheaders for long content",
      "Request bold or italic text for emphasis",
      "Specify if you want numbered or bulleted lists"
    ]
  },
  {
    id: "chatgpt-step-8",
    title: "Set Constraints and Parameters",
    description: "Define limits and requirements for more focused responses",
    instruction: "Include constraints like word count, reading level, or specific requirements. Example: 'Explain quantum physics in simple terms a 10-year-old could understand, using only 200 words.'",
    duration: 55,
    difficulty: "medium",
    actionType: "type",
    targetElement: "Message input box",
    expectedResult: "ChatGPT creates content that meets all your specified constraints",
    tips: [
      "Set word limits for concise responses",
      "Specify reading level (elementary, high school, college)",
      "Include 'do not include' instructions for unwanted content",
      "Set time constraints for tasks or schedules"
    ]
  },
  {
    id: "chatgpt-step-9",
    title: "Ask for Sources and Verification",
    description: "Request information about reliability and fact-checking",
    instruction: "Add 'Please include sources' or 'How can I verify this information?' to your prompts when asking for factual information.",
    duration: 35,
    difficulty: "easy",
    actionType: "type",
    targetElement: "Message input box",
    expectedResult: "ChatGPT provides guidance on verifying information and suggests reliable sources",
    tips: [
      "Always verify important facts independently",
      "Ask for multiple sources when possible",
      "Request recent information for time-sensitive topics",
      "ChatGPT can suggest where to find authoritative sources"
    ],
    warnings: [
      "ChatGPT's training data has a cutoff date",
      "Always fact-check important information",
      "Don't rely solely on AI for critical decisions"
    ]
  },
  {
    id: "chatgpt-step-10",
    title: "Save and Organize Conversations",
    description: "Keep track of useful conversations for future reference",
    instruction: "Click the conversation title to rename it with a descriptive name. Use the sidebar to organize and find previous conversations easily.",
    duration: 25,
    difficulty: "easy",
    actionType: "click",
    targetElement: "Conversation title and sidebar",
    expectedResult: "Your conversation is saved with a clear, searchable title",
    tips: [
      "Use descriptive titles like 'Marketing Ideas for Bakery'",
      "Organize conversations by project or topic",
      "You can continue conversations later to build on previous work",
      "Export important conversations for external storage"
    ],
    shortcuts: ["Ctrl+K (Search conversations)"]
  }
];

// Excel Tutorial: Create a Budget Spreadsheet
export const excelBudgetTutorial: TutorialStep[] = [
  {
    id: "excel-step-1",
    title: "Open Excel and Create New Workbook",
    description: "Start Excel and set up a new spreadsheet for your budget",
    instruction: "Open Microsoft Excel and click 'Blank workbook' to create a new file. Save it immediately with a descriptive name like 'Monthly Budget 2024'.",
    duration: 30,
    difficulty: "easy",
    actionType: "click",
    targetElement: "Blank workbook option",
    expectedResult: "A new Excel workbook opens with a blank spreadsheet ready for data entry",
    tips: [
      "Save your work frequently with Ctrl+S",
      "Use descriptive file names for easy organization",
      "Consider creating a dedicated folder for financial spreadsheets"
    ],
    shortcuts: ["Ctrl+N (New workbook)", "Ctrl+S (Save)", "F12 (Save As)"]
  },
  {
    id: "excel-step-2",
    title: "Set Up Column Headers",
    description: "Create clear headers for your budget categories",
    instruction: "In cell A1, type 'Category'. In B1, type 'Budgeted Amount'. In C1, type 'Actual Amount'. In D1, type 'Difference'. Press Tab to move between cells.",
    duration: 45,
    difficulty: "easy",
    actionType: "type",
    targetElement: "Cells A1, B1, C1, D1",
    expectedResult: "Four clear column headers are created for organizing budget data",
    tips: [
      "Use Tab to move right, Shift+Tab to move left",
      "Keep headers short but descriptive",
      "Consider adding a 'Notes' column for additional details"
    ],
    shortcuts: ["Tab (Next cell)", "Shift+Tab (Previous cell)", "Enter (Next row)"]
  },
  {
    id: "excel-step-3",
    title: "Format Header Row",
    description: "Make headers stand out with bold formatting and colors",
    instruction: "Select cells A1 to D1 by clicking A1 and dragging to D1. Click the Bold button (B) in the toolbar, then choose a background color from the Fill Color dropdown.",
    duration: 40,
    difficulty: "easy",
    actionType: "click",
    targetElement: "Bold button and Fill Color dropdown",
    expectedResult: "Header row appears bold with a colored background, clearly distinguishing it from data",
    tips: [
      "Use light colors for backgrounds to maintain readability",
      "Bold headers make the spreadsheet more professional",
      "Consider using your company or personal brand colors"
    ],
    shortcuts: ["Ctrl+B (Bold)", "Ctrl+1 (Format Cells dialog)"]
  },
  {
    id: "excel-step-4",
    title: "Enter Budget Categories",
    description: "List all your income and expense categories",
    instruction: "Starting in cell A2, enter your budget categories. Include 'Income' first, then expenses like 'Rent', 'Groceries', 'Transportation', 'Entertainment', etc. Press Enter after each entry.",
    duration: 90,
    difficulty: "easy",
    actionType: "type",
    targetElement: "Column A cells starting from A2",
    expectedResult: "A comprehensive list of budget categories is entered in column A",
    tips: [
      "Start with income categories, then list expenses",
      "Be specific with categories (e.g., 'Dining Out' vs. 'Food')",
      "Include both fixed expenses (rent) and variable expenses (entertainment)",
      "Add a 'Miscellaneous' category for unexpected expenses"
    ]
  },
  {
    id: "excel-step-5",
    title: "Enter Budgeted Amounts",
    description: "Input your planned amounts for each category",
    instruction: "Click on cell B2 and enter your budgeted amount for the first category. Continue down column B, entering amounts for each category. Use positive numbers for income, negative for expenses.",
    duration: 75,
    difficulty: "easy",
    actionType: "type",
    targetElement: "Column B cells",
    expectedResult: "All budget categories have planned amounts entered",
    tips: [
      "Use realistic amounts based on past spending",
      "Round to the nearest dollar for simplicity",
      "Consider using negative numbers for expenses to make calculations clearer",
      "Review bank statements to estimate accurate amounts"
    ],
    warnings: [
      "Be realistic with your budget amounts",
      "Don't forget irregular expenses like insurance or annual fees"
    ]
  },
  {
    id: "excel-step-6",
    title: "Create Formulas for Differences",
    description: "Calculate the difference between budgeted and actual amounts",
    instruction: "Click cell D2. Type '=C2-B2' and press Enter. This formula will calculate the difference between actual and budgeted amounts. Copy this formula down to all rows with data.",
    duration: 60,
    difficulty: "medium",
    actionType: "type",
    targetElement: "Cell D2 and formula bar",
    expectedResult: "Formula calculates differences automatically, showing overspending or savings",
    tips: [
      "Positive differences mean you spent less than budgeted",
      "Negative differences indicate overspending",
      "Copy formulas by selecting the cell and pressing Ctrl+C, then Ctrl+V",
      "Double-click the fill handle to auto-copy formulas down"
    ],
    shortcuts: ["Ctrl+C (Copy)", "Ctrl+V (Paste)", "Ctrl+D (Fill Down)"]
  },
  {
    id: "excel-step-7",
    title: "Add Summary Calculations",
    description: "Create totals for income, expenses, and overall budget",
    instruction: "Add rows for 'Total Income', 'Total Expenses', and 'Net Income'. Use SUM formulas like '=SUM(B2:B10)' to calculate totals for each column.",
    duration: 80,
    difficulty: "medium",
    actionType: "type",
    targetElement: "Summary rows and SUM formulas",
    expectedResult: "Summary calculations show total income, expenses, and net budget automatically",
    tips: [
      "Use SUM function for quick totals: =SUM(range)",
      "Separate income and expense totals for clarity",
      "Net income should equal total income minus total expenses",
      "Use absolute references ($) if you plan to copy formulas"
    ],
    shortcuts: ["Alt+= (AutoSum)", "Ctrl+Shift+Enter (Array formula)"]
  },
  {
    id: "excel-step-8",
    title: "Format Numbers as Currency",
    description: "Make your budget look professional with proper currency formatting",
    instruction: "Select all cells with monetary values (columns B, C, D). Right-click and choose 'Format Cells', then select 'Currency' and choose your preferred format.",
    duration: 50,
    difficulty: "easy",
    actionType: "click",
    targetElement: "Format Cells dialog and Currency option",
    expectedResult: "All monetary values display with proper currency symbols and formatting",
    tips: [
      "Currency formatting makes numbers easier to read",
      "Choose the appropriate currency symbol for your location",
      "Consider showing or hiding decimal places based on your preference",
      "Negative numbers can be shown in red for quick identification"
    ],
    shortcuts: ["Ctrl+Shift+$ (Currency format)", "Ctrl+1 (Format Cells)"]
  },
  {
    id: "excel-step-9",
    title: "Add Conditional Formatting",
    description: "Use colors to highlight overspending and savings automatically",
    instruction: "Select the Difference column (D). Go to Home > Conditional Formatting > Data Bars or Color Scales. Choose a format that highlights positive (green) and negative (red) values.",
    duration: 65,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Conditional Formatting menu",
    expectedResult: "Differences are color-coded, making it easy to spot overspending and savings at a glance",
    tips: [
      "Green typically indicates good (under budget)",
      "Red typically indicates overspending",
      "Data bars provide visual representation of amounts",
      "You can customize colors and rules as needed"
    ]
  },
  {
    id: "excel-step-10",
    title: "Create a Simple Chart",
    description: "Visualize your budget with a chart for better understanding",
    instruction: "Select your category names and budgeted amounts. Go to Insert > Charts and choose a Pie Chart or Column Chart. Customize the title and colors as desired.",
    duration: 70,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Insert tab and Charts section",
    expectedResult: "A visual chart displays your budget breakdown, making it easy to see spending patterns",
    tips: [
      "Pie charts work well for showing budget proportions",
      "Column charts are good for comparing categories",
      "Add a descriptive title to your chart",
      "Consider creating separate charts for income vs. expenses"
    ],
    shortcuts: ["Alt+F1 (Create default chart)", "F11 (Create chart on new sheet)"]
  }
];

// Figma Tutorial: Design a Mobile App Interface
export const figmaMobileAppTutorial: TutorialStep[] = [
  {
    id: "figma-step-1",
    title: "Create New Figma File",
    description: "Start by creating a new design file in Figma to begin your mobile app interface design",
    instruction: "Click the 'Create new file' button in your Figma dashboard or team workspace",
    image: "/tutorial-images/figma/step-1-create-file.png",
    imageAlt: "Figma dashboard showing the Create new file button highlighted with red arrow",
    duration: 15,
    difficulty: "easy",
    actionType: "click",
    targetElement: "Create new file button",
    expectedResult: "A new blank Figma file opens in the editor",
    tips: [
      "You can also use Ctrl+N (Cmd+N on Mac) as a shortcut",
      "Make sure you're in the right team workspace before creating"
    ]
  },
  {
    id: "figma-step-2", 
    title: "Add Mobile Frame",
    description: "Set up the proper canvas size for mobile app design by adding an iPhone frame",
    instruction: "Press 'F' key or click Frame tool, then select 'iPhone 14' from the preset options on the right panel",
    image: "/tutorial-images/figma/step-2-add-frame.png",
    imageAlt: "Figma interface showing Frame tool selected and iPhone 14 preset highlighted in right panel",
    duration: 20,
    difficulty: "easy", 
    actionType: "click",
    targetElement: "Frame tool (F) → iPhone 14 preset",
    expectedResult: "iPhone 14 sized frame appears on canvas (390×844px)",
    shortcuts: ["Press F key for quick Frame tool access"],
    tips: [
      "iPhone 14 size is 390×844px - perfect for modern mobile design",
      "You can also drag to create custom frame sizes"
    ]
  },
  {
    id: "figma-step-3",
    title: "Design App Header", 
    description: "Create the top navigation header with title and menu elements",
    instruction: "Add a rectangle for header background, then use Text tool (T) to add app title 'MyApp'",
    image: "/tutorial-images/figma/step-3-design-header.png",
    imageAlt: "Mobile frame with header rectangle and app title text, showing layers panel on left",
    duration: 30,
    difficulty: "medium",
    actionType: "type",
    targetElement: "Rectangle tool → Text tool (T)",
    expectedResult: "Header with background color and 'MyApp' title text",
    tips: [
      "Use height of 60-80px for mobile headers",
      "Choose contrasting colors for text visibility",
      "Consider status bar space (add 44px padding top)"
    ],
    warnings: [
      "Don't make header text too small - minimum 16px for mobile"
    ]
  },
  {
    id: "figma-step-4",
    title: "Add Navigation Icons",
    description: "Include essential navigation elements like back buttons and menus",
    instruction: "Press 'Shift+Ctrl+K' to open the icon library, or go to Plugins > Icons. Search for 'menu', 'back arrow', or other navigation icons. Drag them into your header.",
    duration: 45,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Plugins menu and icon library",
    expectedResult: "Professional navigation icons are placed in your header bar",
    tips: [
      "Use consistent icon styles throughout your app",
      "Popular icon libraries: Feather, Material Icons, Heroicons",
      "Icons should be 20-24px for mobile interfaces",
      "Ensure icons are accessible and recognizable"
    ]
  },
  {
    id: "figma-step-5",
    title: "Create Main Content Area",
    description: "Design the primary content section of your app screen",
    instruction: "Below the header, create rectangles or shapes for your main content. This could be cards, lists, images, or text areas depending on your app's purpose.",
    duration: 90,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Shape tools and content area",
    expectedResult: "Main content area is structured with appropriate layout elements",
    tips: [
      "Use cards for grouping related information",
      "Maintain consistent spacing between elements",
      "Consider the 8px grid system for alignment",
      "Leave enough white space for readability"
    ],
    warnings: [
      "Don't overcrowd the interface",
      "Ensure touch targets are at least 44px for accessibility"
    ]
  },
  {
    id: "figma-step-6",
    title: "Add Text and Typography",
    description: "Include readable text with proper hierarchy",
    instruction: "Press 'T' for the Text tool. Add headings, body text, and labels. Use different font sizes to create hierarchy: 24px for headings, 16px for body text, 14px for labels.",
    duration: 70,
    difficulty: "medium",
    actionType: "type",
    targetElement: "Text tool and typography panel",
    expectedResult: "Text elements are properly sized and create clear information hierarchy",
    tips: [
      "Use system fonts like SF Pro (iOS) or Roboto (Android) for authenticity",
      "Maintain good contrast ratios for accessibility",
      "Limit to 2-3 font sizes for consistency",
      "Use font weight (bold, regular) to create emphasis"
    ],
    shortcuts: ["T (Text tool)", "Ctrl+B (Bold)", "Ctrl+Shift+> (Increase font size)"]
  },
  {
    id: "figma-step-7",
    title: "Design Interactive Buttons",
    description: "Create buttons that look clickable and follow mobile design patterns",
    instruction: "Use rounded rectangles for buttons. Make them 44px tall minimum for easy tapping. Add text labels and use contrasting colors to make them stand out.",
    duration: 55,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Rectangle tool and corner radius settings",
    expectedResult: "Professional-looking buttons that follow mobile design best practices",
    tips: [
      "Primary buttons should use your brand color",
      "Secondary buttons can be outlined or use gray",
      "Button text should be clear and action-oriented",
      "Add subtle shadows or borders for depth"
    ]
  },
  {
    id: "figma-step-8",
    title: "Apply Consistent Colors",
    description: "Use a cohesive color palette throughout your design",
    instruction: "Create color styles by selecting an element, clicking the color picker, and clicking the '+' to save as a style. Apply these saved colors consistently across your design.",
    duration: 50,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Color picker and styles panel",
    expectedResult: "All elements use colors from a consistent, professional palette",
    tips: [
      "Limit your palette to 3-5 colors maximum",
      "Use 60-30-10 rule: 60% primary, 30% secondary, 10% accent",
      "Test colors for accessibility and contrast",
      "Consider both light and dark mode if applicable"
    ]
  },
  {
    id: "figma-step-9",
    title: "Add Visual Polish",
    description: "Enhance your design with shadows, borders, and subtle effects",
    instruction: "Select elements and add drop shadows from the Effects panel. Use subtle shadows (2px blur, 10% opacity) for depth. Add borders or background colors to define sections.",
    duration: 65,
    difficulty: "medium",
    actionType: "click",
    targetElement: "Effects panel and shadow settings",
    expectedResult: "Design has professional polish with appropriate depth and visual hierarchy",
    tips: [
      "Less is more - use subtle effects",
      "Consistent shadow direction creates realism",
      "Use shadows to show elevation and importance",
      "Test your design at actual mobile size"
    ]
  },
  {
    id: "figma-step-10",
    title: "Preview and Share",
    description: "Test your design and share it for feedback",
    instruction: "Click the Play button (▶) in the top right to preview your design. Use 'Share' to generate a link for others to view and comment on your mobile app design.",
    duration: 40,
    difficulty: "easy",
    actionType: "click",
    targetElement: "Play button and Share button",
    expectedResult: "Your mobile app design is ready for testing and feedback from others",
    tips: [
      "Preview on actual mobile devices when possible",
      "Share with stakeholders for early feedback",
      "Use Figma's commenting feature for collaboration",
      "Consider creating multiple screens for a complete flow"
    ],
    shortcuts: ["Ctrl+Alt+Enter (Present)", "Ctrl+Shift+U (Share)"]
  }
];

// Export all tutorials
export const tutorialData = {
  canva: canvaSocialMediaTutorial,
  chatgpt: chatgptPromptTutorial,
  excel: excelBudgetTutorial,
  figma: figmaMobileAppTutorial
}; 