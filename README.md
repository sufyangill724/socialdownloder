# Social Media Video Downloader

A production-ready social media video/reels downloader website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Download videos from Instagram, TikTok, Facebook, and YouTube
- Mobile-responsive design
- SEO-optimized
- AdSense-friendly
- Privacy-focused
- No registration required

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (deployment)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd social-video-downloader
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
DOWNLOADER_API_URL=https://your-api-endpoint.com/download
DOWNLOADER_API_KEY=your_api_key
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=pub-xxxxxxxxxxxxxxxx
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

## License

MIT