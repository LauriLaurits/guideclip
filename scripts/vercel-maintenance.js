#!/usr/bin/env node

const https = require('https');

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
const action = process.argv[2];

if (!action || !['on', 'off'].includes(action)) {
  console.error('Usage: node scripts/vercel-maintenance.js [on|off]');
  console.error('');
  console.error('Environment variables required:');
  console.error('- VERCEL_TOKEN: Your Vercel API token');
  console.error('- VERCEL_PROJECT_ID: Your project ID');
  process.exit(1);
}

if (!VERCEL_TOKEN || !PROJECT_ID) {
  console.error('❌ Missing required environment variables:');
  console.error('- VERCEL_TOKEN: Get from https://vercel.com/account/tokens');
  console.error('- VERCEL_PROJECT_ID: Found in your project settings');
  process.exit(1);
}

const value = action === 'on' ? 'true' : 'false';

// Update environment variable
const data = JSON.stringify({
  key: 'MAINTENANCE_MODE',
  value: value,
  target: ['production']
});

const options = {
  hostname: 'api.vercel.com',
  port: 443,
  path: `/v9/projects/${PROJECT_ID}/env`,
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${VERCEL_TOKEN}`,
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let responseData = '';
  
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 201) {
      console.log(`✅ Maintenance mode ${action === 'on' ? 'ENABLED' : 'DISABLED'}`);
      console.log('🚀 Triggering deployment...');
      
      // Trigger deployment
      triggerDeployment();
    } else {
      console.error('❌ Failed to update environment variable');
      console.error('Response:', responseData);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error:', error.message);
});

req.write(data);
req.end();

function triggerDeployment() {
  const deployData = JSON.stringify({
    name: PROJECT_ID,
    gitSource: {
      type: 'github',
      repoId: process.env.GITHUB_REPO_ID || '',
      ref: 'main'
    }
  });

  const deployOptions = {
    hostname: 'api.vercel.com',
    port: 443,
    path: '/v13/deployments',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${VERCEL_TOKEN}`,
      'Content-Type': 'application/json',
      'Content-Length': deployData.length
    }
  };

  const deployReq = https.request(deployOptions, (res) => {
    let responseData = '';
    
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    
    res.on('end', () => {
      if (res.statusCode === 200 || res.statusCode === 201) {
        const response = JSON.parse(responseData);
        console.log(`🎉 Deployment triggered: ${response.url}`);
        console.log('⏱️  Changes will be live in ~30 seconds');
      } else {
        console.error('❌ Failed to trigger deployment');
        console.error('Response:', responseData);
      }
    });
  });

  deployReq.on('error', (error) => {
    console.error('❌ Deployment error:', error.message);
  });

  deployReq.write(deployData);
  deployReq.end();
} 