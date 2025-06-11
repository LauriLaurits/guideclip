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
    fs.writeFileSync(envPath, '# Local environment variables\nMAINTENANCE_MODE=false\n');
  }

  let content = fs.readFileSync(envPath, 'utf8');
  
  if (action === 'on') {
    // Replace or add MAINTENANCE_MODE=true
    if (content.includes('MAINTENANCE_MODE=')) {
      content = content.replace(/MAINTENANCE_MODE=(true|false)/g, 'MAINTENANCE_MODE=true');
    } else {
      content += '\nMAINTENANCE_MODE=true\n';
    }
    console.log('✅ Maintenance mode ENABLED locally');
    console.log('🔧 Restart your dev server to see changes');
    console.log('🌐 For live site, set MAINTENANCE_MODE=true in your hosting platform');
  } else {
    // Replace with MAINTENANCE_MODE=false
    if (content.includes('MAINTENANCE_MODE=')) {
      content = content.replace(/MAINTENANCE_MODE=(true|false)/g, 'MAINTENANCE_MODE=false');
    } else {
      content += '\nMAINTENANCE_MODE=false\n';
    }
    console.log('✅ Maintenance mode DISABLED locally');
    console.log('🚀 Restart your dev server to see changes');
    console.log('🌐 For live site, set MAINTENANCE_MODE=false in your hosting platform');
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