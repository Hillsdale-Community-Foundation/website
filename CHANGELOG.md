# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-06-13

### 🚀 Added
- Comprehensive project documentation in README.md
- Development vs production configuration handling
- Enhanced Tailwind configuration with content path for markdown files
- Troubleshooting section in documentation

### 🐛 Fixed
- **CSS Loading Issue**: Fixed CSS not loading in development environment
  - Modified `next.config.js` to conditionally apply `basePath` and `assetPrefix` only in production
  - This resolves the issue where CSS was trying to load from `/nextjs-demo/_next/static/...` instead of `/_next/static/...` during local development
- Removed duplicate `src/public/` directory that was causing asset confusion
- Updated browserslist database to eliminate build warnings

### 🔧 Changed
- Enhanced `next.config.js` with environment-aware configuration
- Updated `tailwind.config.ts` to include markdown files in content scanning
- Improved documentation structure and deployment instructions

### 🗑️ Removed
- Duplicate public directory (`src/public/`) and all its contents
- Outdated caniuse-lite database (updated to latest version)

### 📚 Documentation
- Complete rewrite of README.md with:
  - Clear project overview and features
  - Step-by-step installation and development instructions
  - Project structure documentation
  - Content management guide
  - Deployment instructions for GitHub Pages
  - Troubleshooting section
  - Contributing guidelines

### 🛠️ Technical Details
- Node.js dependencies updated and secured
- GitHub Actions workflow verified and ready for deployment
- TypeScript configuration maintained and validated
- All existing functionality preserved while fixing CSS loading issues

## [1.0.0] - 2025-06-13

### Initial Release
- Next.js 14 application with TypeScript
- Tailwind CSS styling
- Markdown-based blog system
- Google Calendar integration
- GitHub Pages deployment configuration
- Responsive design for mobile and desktop
