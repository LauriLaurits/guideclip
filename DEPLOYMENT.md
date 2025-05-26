# GuideClip Deployment Guide

This guide covers multiple deployment options for your GuideClip application.

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is the easiest way to deploy Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

**Or use the Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Import your project
4. Deploy automatically on every push

**Environment Variables:**
- Set any required environment variables in the Vercel dashboard
- Add `NODE_ENV=production` for production builds

### 2. Netlify

```bash
# Build the application
npm run build

# Deploy to Netlify
npx netlify-cli deploy --prod --dir=out
```

**Or use Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `out` (if using static export) or `.next` (for SSR)

### 3. Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### 4. DigitalOcean App Platform

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Create new app from GitHub repository
3. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - Environment: Node.js

### 5. AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize and deploy
amplify init
amplify add hosting
amplify publish
```

### 6. Docker Deployment

```dockerfile
# Create Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t guideclip .
docker run -p 3000:3000 guideclip
```

## 🛠 Maintenance Mode

### Enable Maintenance Mode

1. **Quick Toggle:** Edit `middleware.ts` and set `MAINTENANCE_MODE = true`
2. **Environment Variable:** Set `MAINTENANCE_MODE=true` in your deployment environment
3. **Redeploy** your application

### Maintenance Mode Features

- ✅ Beautiful animated maintenance page
- ✅ Countdown timer
- ✅ Email notification signup
- ✅ Social media links
- ✅ What we're working on section
- ✅ Matches your app's design system

### Access During Maintenance

These paths remain accessible:
- `/maintenance` - Maintenance page
- `/api/health` - Health check endpoint
- `/_next/*` - Next.js assets
- `/favicon.ico` - Favicon

## 📊 Monitoring & Health Checks

### Health Check Endpoint

Your app includes a health check endpoint at `/api/health`:

```bash
curl https://your-domain.com/api/health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0",
  "environment": "production"
}
```

### Monitoring Setup

**Uptime Monitoring:**
- [UptimeRobot](https://uptimerobot.com) - Free tier available
- [Pingdom](https://pingdom.com) - Professional monitoring
- [StatusCake](https://statuscake.com) - Free and paid plans

**Performance Monitoring:**
- [Vercel Analytics](https://vercel.com/analytics) - If using Vercel
- [Google Analytics](https://analytics.google.com) - Free web analytics
- [Sentry](https://sentry.io) - Error tracking and performance

## 🔧 Pre-Deployment Checklist

### Performance Optimization

```bash
# Analyze bundle size
npm run build
npm run analyze

# Optimize images (if you add any)
# Use next/image component for automatic optimization
```

### SEO & Meta Tags

Add to your `layout.tsx`:
```tsx
export const metadata = {
  title: 'GuideClip - Master Any Tool in 90 Seconds',
  description: 'Learn AI tools and software with quick video tutorials. Master new skills fast.',
  keywords: 'AI tools, tutorials, learning, software, productivity',
  openGraph: {
    title: 'GuideClip - Master Any Tool in 90 Seconds',
    description: 'Learn AI tools and software with quick video tutorials.',
    url: 'https://your-domain.com',
    siteName: 'GuideClip',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GuideClip - Master Any Tool in 90 Seconds',
    description: 'Learn AI tools and software with quick video tutorials.',
    images: ['/og-image.jpg'],
  },
}
```

### Security Headers

Add to `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 🌍 Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Configure DNS records

### Cloudflare (Recommended for CDN)
1. Add your domain to Cloudflare
2. Update nameservers
3. Configure DNS records
4. Enable CDN and security features

## 📈 Analytics Setup

### Google Analytics 4

1. Create GA4 property
2. Add tracking code to `layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🚨 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Memory Issues:**
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Static Export Issues:**
```bash
# For static hosting (GitHub Pages, etc.)
npm run export
```

### Environment Variables

Create `.env.local` for local development:
```env
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Production environment variables:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📞 Support

If you encounter issues:
1. Check the [Next.js deployment docs](https://nextjs.org/docs/deployment)
2. Review your hosting provider's documentation
3. Check the browser console for errors
4. Verify all environment variables are set correctly

---

**Recommended Deployment:** Vercel for simplicity and performance
**Recommended Monitoring:** UptimeRobot + Google Analytics
**Recommended CDN:** Cloudflare for additional security and speed 