# Super Bowl LX Ad Tier Ranking

A mobile-friendly tier ranking app for Super Bowl LX commercials. 52 ads with brand thumbnails, search, drag-and-drop, and share functionality.

## Deploy in 5 minutes

### Option 1: Vercel (recommended for viral traffic)

```bash
# 1. Install deps
npm install

# 2. Test locally
npm run dev

# 3. Deploy
npx vercel
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) — auto-deploys on push. Free tier handles millions of requests.

### Option 2: Netlify

```bash
npm run build
# drag the `dist` folder to netlify.com/drop
```

### Option 3: Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist
```

## Custom domain

After deploying to Vercel, add your domain in the project settings. Point your DNS CNAME to `cname.vercel-dns.com`.

## Stack

- React 18 + Vite (fast builds, tiny bundle)
- Clearbit Logo API for brand thumbnails (free, no API key)
- localStorage for persisting rankings
- Zero backend, zero database, zero ongoing cost
- Designed for mobile-first with desktop drag-and-drop support

## Cost

$0/month on Vercel free tier. If it goes truly mega-viral (100M+ pageviews), Vercel Pro is $20/mo.
