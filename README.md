# Hillsdale Community Foundation Website

A modern, statically generated website for the Hillsdale Community Foundation built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Static Site Generation**: Fast, SEO-friendly pages generated at build time
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design that works on all devices
- **Blog System**: Markdown-based blog posts with front matter support
- **Google Calendar Integration**: Embedded calendar showing upcoming events
- **Custom Domain**: Configured for deployment to `www.hillsdalecommunityfoundation.org`

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd site-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Your site will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── _components/     # Reusable React components
│   │   ├── about/          # About page
│   │   ├── events/         # Events page
│   │   ├── get-involved/   # Get Involved page
│   │   ├── programs/       # Programs page
│   │   ├── resources/      # Resources page
│   │   └── posts/          # Dynamic blog post pages
│   ├── interfaces/         # TypeScript type definitions
│   └── lib/               # Utility functions and API helpers
├── _posts/                # Markdown blog posts
├── content/               # Additional markdown content
├── public/                # Static assets (images, favicon, etc.)
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server (after build)
npm run typecheck # Run TypeScript type checking
```

### Key Technologies

- **[Next.js 14](https://nextjs.org/)**: React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[React](https://react.dev/)**: UI library
- **[Remark](https://remarkjs.com/)**: Markdown processor
- **[Gray Matter](https://github.com/jonschlinkert/gray-matter)**: Front matter parser

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in the `_posts/` directory
2. Add front matter at the top:
```markdown
---
title: 'Your Post Title'
excerpt: 'A brief description of your post'
coverImage: '/assets/blog/your-post/cover.jpg'
date: '2025-06-13T05:35:07.322Z'
author:
  name: 'Author Name'
  picture: '/assets/blog/authors/author.jpeg'
ogImage:
  url: '/assets/blog/your-post/cover.jpg'
---

Your markdown content goes here...
```

### Editing Page Content

- Homepage content: `content/homepage.md`
- About page: `src/app/about/page.tsx`
- Other pages: Located in their respective directories under `src/app/`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:
```bash
# Add any environment variables here
```

### Google Calendar Integration

The events page includes an embedded Google Calendar. To change the calendar:

1. Open `src/app/_components/upcoming-events.tsx`
2. Replace the `calendarId` variable with your Google Calendar ID

### Deployment Configuration

The site is configured for GitHub Pages deployment with:
- `basePath: '/nextjs-demo'` for production
- `assetPrefix: '/nextjs-demo/'` for production
- Conditional configuration that only applies these settings in production

## 🚀 Deployment

### Custom Domain (Current Setup)

The site is configured for deployment to a custom domain: `https://www.hillsdalecommunityfoundation.org`

1. **Build the site:**
```bash
npm run build
```

2. **Deploy to GitHub Pages:**
The site will be deployed to your custom domain automatically via GitHub Actions.

### GitHub Pages with Subdirectory (Alternative)

If you want to deploy to `https://yourusername.github.io/repository-name/` instead:

1. Update `next.config.js` to include basePath:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
  // ... other config
}
```

2. Remove the `CNAME` file from the `public/` directory

### Manual Deployment

1. **Export static files:**
```bash
npm run build
```

2. **Deploy the `out/` directory** to your web server

### Vercel (Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/site-demo)

## 🐛 Troubleshooting

### CSS Not Loading in Development

This was a known issue that has been fixed. The problem was caused by the `basePath` configuration interfering with local development. The fix:

- `next.config.js` now conditionally applies `basePath` only in production
- Duplicate `src/public/` directory was removed
- Tailwind configuration updated to include all necessary content paths

### Common Issues

- **Port 3000 in use**: The dev server will automatically try port 3001
- **Build errors**: Run `npm run typecheck` to identify TypeScript issues
- **Styling issues**: Ensure Tailwind classes are included in the content paths
- **CSS not loading on GitHub Pages**: Ensure the `basePath` in `next.config.js` matches your repository name exactly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test locally: `npm run dev`
5. Build and test production: `npm run build`
6. Commit your changes: `git commit -m 'Add feature'`
7. Push to the branch: `git push origin feature-name`
8. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the Hillsdale Community Foundation

---

Built with ❤️ for the Hillsdale Community Foundation
