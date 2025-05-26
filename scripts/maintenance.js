#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env.local');
const action = process.argv[2];

if (!action || !['on', 'off'].includes(action)) {
  console.error('Usage: node scripts/maintenance.js [on|off]');
  process.exit(1);
}

try {
  // Create .env.local if it doesn't exist
  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, '# Local environment variables\nNEXT_PUBLIC_MAINTENANCE_MODE=false\n');
  }

  let content = fs.readFileSync(envPath, 'utf8');
  
  if (action === 'on') {
    // Replace or add NEXT_PUBLIC_MAINTENANCE_MODE=true
    if (content.includes('NEXT_PUBLIC_MAINTENANCE_MODE=')) {
      content = content.replace(/NEXT_PUBLIC_MAINTENANCE_MODE=(true|false)/g, 'NEXT_PUBLIC_MAINTENANCE_MODE=true');
    } else {
      content += '\nNEXT_PUBLIC_MAINTENANCE_MODE=true\n';
    }
    console.log('✅ Maintenance mode ENABLED locally');
    console.log('🔧 Restart your dev server to see changes');
    console.log('🌐 For live site, use: npm run maintenance:on:live');
  } else {
    // Replace with NEXT_PUBLIC_MAINTENANCE_MODE=false
    if (content.includes('NEXT_PUBLIC_MAINTENANCE_MODE=')) {
      content = content.replace(/NEXT_PUBLIC_MAINTENANCE_MODE=(true|false)/g, 'NEXT_PUBLIC_MAINTENANCE_MODE=false');
    } else {
      content += '\nNEXT_PUBLIC_MAINTENANCE_MODE=false\n';
    }
    console.log('✅ Maintenance mode DISABLED locally');
    console.log('🚀 Restart your dev server to see changes');
    console.log('🌐 For live site, use: npm run maintenance:off:live');
  }
  
  fs.writeFileSync(envPath, content);
  
  console.log('\n📋 Next steps for local development:');
  console.log('1. Stop your dev server (Ctrl+C)');
  console.log('2. Restart: npm run dev');
  console.log('3. Visit http://localhost:3000');
  
} catch (error) {
  console.error('❌ Error updating .env.local:', error.message);
  process.exit(1);
} 