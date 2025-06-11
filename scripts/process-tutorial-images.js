// Script to process and organize tutorial screenshots
// Run with: node scripts/process-tutorial-images.js

const fs = require('fs');
const path = require('path');

// Create directory structure for tutorial images
const createDirectories = () => {
  const baseDir = path.join(process.cwd(), 'public', 'tutorial-images');
  
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
    console.log('✅ Created tutorial-images directory');
  }

  // Create tool-specific directories
  tools.forEach(tool => {
    const toolDir = path.join(baseDir, tool);
    if (!fs.existsSync(toolDir)) {
      fs.mkdirSync(toolDir, { recursive: true });
      console.log(`✅ Created ${tool} directory`);
    }
  });

  // Create README with naming conventions
  const readmeContent = `# Tutorial Images Directory

## 📁 Folder Structure
\`\`\`
tutorial-images/
├── chatgpt/
│   ├── step-1-open-interface.png
│   ├── step-2-create-prompt.png
│   └── step-3-review-output.png
├── figma/
│   ├── step-1-create-file.png
│   ├── step-2-add-frame.png
│   └── step-3-design-header.png
└── [tool-name]/
    └── step-[number]-[action-description].png
\`\`\`

## 📸 File Naming Convention
- **Format**: \`step-[number]-[action-description].png\`
- **Examples**: 
  - \`step-1-open-chatgpt.png\`
  - \`step-2-write-prompt.png\`
  - \`step-3-copy-response.png\`

## 🎯 Screenshot Guidelines
1. **Resolution**: 1200px wide (optimal)
2. **Format**: PNG with annotations
3. **Content**: Focus on relevant UI elements
4. **Annotations**: Use consistent colors
   - Red arrows for "click here"
   - Yellow highlights for important text
   - Green circles for results/success states

## 🔧 Optimization Tips
- Keep file size under 500KB when possible
- Use Snagit's "Optimize for web" export option
- Include enough context but focus on key elements
- Test readability at smaller sizes (600px wide)
`;

  fs.writeFileSync(path.join(baseDir, 'README.md'), readmeContent);
  console.log('✅ Created README.md with guidelines');
};

// Function to validate image names and suggest improvements
const validateImageNames = (directory) => {
  const validPattern = /^step-\d+-[a-z0-9-]+\.png$/;
  
  if (!fs.existsSync(directory)) {
    console.log('❌ Directory not found:', directory);
    return;
  }

  const files = fs.readdirSync(directory);
  const imageFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

  console.log(`\n📁 Checking ${directory}:`);
  
  imageFiles.forEach(file => {
    if (validPattern.test(file)) {
      console.log(`✅ ${file} - Good naming`);
    } else {
      console.log(`⚠️  ${file} - Consider renaming`);
      
      // Suggest better name
      const suggested = file
        .toLowerCase()
        .replace(/[^a-z0-9.-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      if (!file.startsWith('step-')) {
        console.log(`   💡 Suggestion: step-1-${suggested}`);
      }
    }
  });
};

// Main execution
console.log('🚀 Processing tutorial images...\n');

createDirectories();

console.log('\n🎯 Next steps:');
console.log('1. Export your Snagit screenshots as PNG files');
console.log('2. Name them using: step-[number]-[action-description].png');
console.log('3. Place them in the appropriate tool folders');
console.log('4. Update tutorial-data.ts with the image paths');
console.log('5. Run: npm run dev to test the images');

console.log('\n📝 Example workflow:');
console.log('- Export: step-1-open-chatgpt.png → public/tutorial-images/chatgpt/');
console.log('- Update: tutorialData with image: "/tutorial-images/chatgpt/step-1-open-chatgpt.png"');
console.log('- Test: localhost:3000/tool/chatgpt'); 