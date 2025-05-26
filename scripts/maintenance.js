#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const middlewarePath = path.join(__dirname, '..', 'middleware.ts');
const action = process.argv[2];

if (!action || !['on', 'off'].includes(action)) {
  console.error('Usage: node scripts/maintenance.js [on|off]');
  process.exit(1);
}

try {
  let content = fs.readFileSync(middlewarePath, 'utf8');
  
  if (action === 'on') {
    content = content.replace(
      /const MAINTENANCE_MODE = false;/,
      'const MAINTENANCE_MODE = true;'
    );
    console.log('✅ Maintenance mode ENABLED');
    console.log('🔧 Users will be redirected to /maintenance');
    console.log('📝 Don\'t forget to redeploy your application!');
  } else {
    content = content.replace(
      /const MAINTENANCE_MODE = true;/,
      'const MAINTENANCE_MODE = false;'
    );
    console.log('✅ Maintenance mode DISABLED');
    console.log('🚀 Users can access the full application');
    console.log('📝 Don\'t forget to redeploy your application!');
  }
  
  fs.writeFileSync(middlewarePath, content);
  
  console.log('\n📋 Next steps:');
  console.log('1. Commit your changes: git add . && git commit -m "Toggle maintenance mode"');
  console.log('2. Deploy: npm run deploy:vercel (or your preferred deployment method)');
  
} catch (error) {
  console.error('❌ Error updating middleware.ts:', error.message);
  process.exit(1);
} 