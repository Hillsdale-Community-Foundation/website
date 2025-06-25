# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## TL;DR

Quick recap of improvements since migrating from Wix in June 2025:

- Rebuilt the website on GitHub Pages using Next.js for better performance and easier maintenance.
- Added PayPal donation button and a working contact form.
- Imported images and branding assets from the old site.
- Updated board and program information with improved layouts.
- Switched to `www.hillsdalecommunityfoundation.org`.
- Automated deployments and regular dependency updates.

Since migrating from our old Wix site to GitHub Pages in June 2025, we rebuilt the site using Next.js for better performance and maintainability. Key updates include a PayPal donate button, a new contact page with a working form, and the integration of images and assets from the previous site to preserve branding. Board and program information has been refreshed and we now use automated deployment with regular dependency updates.

## [1.2.0] - 2025-06-19

### 🚀 Added in 1.2.0

- PayPal donate button for online contributions.
- Contact page with functional form.
- Development container setup script.
- Old site images and branding assets.

### 🐛 Fixed in 1.2.0

- Navigation formatting and layout inconsistencies.

### 🔧 Changed in 1.2.0

- Updated board and program information.
- Switched domain to `www.hillsdalecommunityfoundation.org`.
- Improved background opacity and page layouts.
- Dependency updates via Dependabot.

### 📚 Documentation in 1.2.0

- Updated issue and PR templates.
- Revised content summary.

## [1.1.0] - 2025-06-13

### 🚀 Added in 1.1.0

- Comprehensive project documentation in README.md.
- Development vs production configuration handling.
- Enhanced Tailwind configuration with content path for markdown files.
- Troubleshooting section in documentation.

### 🐛 Fixed in 1.1.0

- **CSS Loading Issue**: Fixed CSS not loading in development environment.
  - Modified `next.config.js` to conditionally apply `basePath` and `assetPrefix` only in production.
  - This resolves the issue where CSS was trying to load from `/nextjs-demo/_next/static/...` instead of `/_next/static/...` during local development.
- Removed duplicate `src/public/` directory that was causing asset confusion.
- Updated browserslist database to eliminate build warnings.

### 🔧 Changed in 1.1.0

- Enhanced `next.config.js` with environment-aware configuration.
- Updated `tailwind.config.ts` to include markdown files in content scanning.
- Improved documentation structure and deployment instructions.

### 🗑️ Removed in 1.1.0

- Duplicate public directory (`src/public/`) and all its contents.
- Outdated caniuse-lite database (updated to latest version).

### 📚 Documentation in 1.1.0

- Complete rewrite of README.md with:
  - Clear project overview and features.
  - Step-by-step installation and development instructions.
  - Project structure documentation.
  - Content management guide.
  - Deployment instructions for GitHub Pages.
  - Troubleshooting section.
  - Contributing guidelines.

### 🛠️ Technical Details in 1.1.0

- Node.js dependencies updated and secured.
- GitHub Actions workflow verified and ready for deployment.
- TypeScript configuration maintained and validated.
- All existing functionality preserved while fixing CSS loading issues.

## [1.0.0] - 2025-06-13

### Initial Release

- Next.js 14 application with TypeScript.
- Tailwind CSS styling.
- Markdown-based blog system.
- Google Calendar integration.
- GitHub Pages deployment configuration.
- Responsive design for mobile and desktop.
