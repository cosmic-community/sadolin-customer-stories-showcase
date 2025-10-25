# 🎬 Sadolin Customer Stories Showcase

![App Preview](https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=300&fit=crop&auto=format)

A modern, Instagram Reels-inspired showcase platform for displaying Sadolin paint customer testimonials and transformations. Built with Next.js 15, TypeScript, and Cosmic CMS.

## ✨ Features

- 📱 Instagram-style customer story cards
- 🖼️ Before/after image comparisons
- 💬 Authentic customer testimonials
- 🎨 Featured product highlights
- 📱 Fully responsive design
- ⚡ Lightning-fast performance with Next.js 15
- 🎯 Social media integration ready

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fc7a7c92c9229c30fe5b46&clone_repository=68fc7fa592c9229c30fe5b7a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create me a reals for Instagram of sales sadolin farbs with satisfuks clients"

### Code Generation Prompt

> "Based on the content model I created for 'Create me a reals for Instagram of sales sadolin farbs with satisfuks clients', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Bun installed on your system
- A Cosmic account with the Instagram Reels content model
- Node.js 18+ (for compatibility)

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Customer Stories

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all Instagram reels
const { objects: stories } = await cosmic.objects
  .find({ type: 'instagram-reels' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get a single story by slug
const { object: story } = await cosmic.objects
  .findOne({
    type: 'instagram-reels',
    slug: 'your-story-slug'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🔗 Cosmic CMS Integration

This application integrates with your Cosmic bucket containing the Instagram Reels content type with the following structure:

- **Reel Video**: Video file (required)
- **Customer Name**: Text field for customer name
- **Customer Quote**: Textarea for testimonial
- **Featured Product**: Product name text
- **Before Image**: Image file (optional)
- **After Image**: Image file (optional)
- **Caption**: Social media caption
- **Hashtags**: Hashtags for social sharing
- **Post Date**: Date field

All content is managed through your Cosmic dashboard at [https://app.cosmicjs.com](https://app.cosmicjs.com).

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the "Deploy with Vercel" button
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Set these in your deployment platform:

- `COSMIC_BUCKET_SLUG`: Your Cosmic bucket slug
- `COSMIC_READ_KEY`: Your Cosmic read key

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

<!-- README_END -->