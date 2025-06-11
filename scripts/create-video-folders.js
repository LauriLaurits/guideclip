// Script to create video tutorial folder structure
// Run with: node scripts/create-video-folders.js

const fs = require('fs');
const path = require('path');

// Create directory structure for video tutorials
const createVideoDirectories = () => {
  const baseDir = path.join(process.cwd(), 'public', 'video-tutorials');
  
  const tools = [
    'chatgpt',
    'figma', 
    'canva',
    'excel',
    'cursor',
    'midjourney',
    'dalle',
    'notion',
    'perplexity'
  ];

  // Create base directory
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log('✅ Created video-tutorials directory');
  }

  // Create tool-specific directories
  tools.forEach(tool => {
    const toolDir = path.join(baseDir, tool);
    if (!fs.existsSync(toolDir)) {
      fs.mkdirSync(toolDir, { recursive: true });
      console.log(`✅ Created ${tool} video directory`);
    }
  });

  // Create README for video organization
  const readmeContent = `# Video Tutorials Organization

## Folder Structure
Each tool has its own folder containing video files:

\`\`\`
public/video-tutorials/
├── chatgpt/
│   ├── video-1-intro.mp4
│   ├── video-2-prompts.mp4
│   └── video-3-advanced.mp4
├── figma/
│   ├── video-1-basics.mp4
│   └── video-2-advanced.mp4
└── ... (other tools)
\`\`\`

## Video Naming Convention
- Use descriptive names: \`video-1-intro.mp4\`
- Include step numbers for ordering
- Keep names short but clear
- Supported formats: .mp4, .webm, .mov

## Video Specifications
- **Resolution**: 1920x1080 (Full HD) recommended
- **Format**: MP4 (H.264) for best compatibility
- **Quality**: High quality for clear UI demonstrations
- **Duration**: 2-5 minutes per video for optimal engagement

## Adding Videos
1. Export videos from your screen recording tool
2. Name them according to the convention above  
3. Place in the appropriate tool folder
4. Update the tool data in \`src/lib/data.ts\`
`;

  const readmePath = path.join(baseDir, 'README.md');
  fs.writeFileSync(readmePath, readmeContent);
  console.log('✅ Created video tutorials README');

  console.log('\n🎬 Video tutorial folders ready!');
  console.log('📁 You can now add video files to:');
  tools.forEach(tool => {
    console.log(`   📂 public/video-tutorials/${tool}/`);
  });
};

createVideoDirectories(); 