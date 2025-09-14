# Smart Home Innovations - Deployment Guide

This guide provides instructions for deploying the Smart Home Innovations application to Vercel.

## Prerequisites

- Node.js 18+ installed
- Vercel CLI installed (optional)
- A Vercel account (https://vercel.com)
- Git installed

## Vercel Deployment

### Automatic Deployment (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Sign in to your Vercel account (https://vercel.com).
3. Click on "Add New..." → "Project"
4. Import your Git repository
5. Configure the project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Manual Deployment using Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Build the project locally:
   ```bash
   npm install
   npm run build
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```
   - Follow the prompts to log in if you're not already authenticated
   - Choose the appropriate options for your project

## Environment Variables

If your application requires environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your environment variables (e.g., API keys, endpoints)

## Custom Domains (Optional)

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain and follow the verification steps

## Deployment Configuration

The project includes a `vercel.json` configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/.*",
      "dest": "/index.html"
    }
  ]
}
```

## Post-Deployment

After deployment:
1. Test all application routes to ensure proper client-side routing
2. Verify that all assets are loading correctly
3. Check the Vercel deployment logs for any warnings or errors

## Troubleshooting

- **Build Failures**: Check the deployment logs in the Vercel dashboard
- **Routing Issues**: Ensure the `vercel.json` configuration includes the catch-all route
- **Environment Variables**: Verify all required environment variables are set in the Vercel project settings
