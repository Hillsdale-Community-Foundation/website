# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## TL;DR

Quick recap of improvements since migrating from Wix in June 2025:

- Rebuilt the website on GitHub Pages using Next.js for better performance and easier maintenance.
- Added a PayPal donation button and a working contact form.
- Added homepage feature boxes for key programs.
- Imported images and branding assets from the old site.
- Updated board and program information with improved layouts.
- Switched to `www.hillsdalecommunityfoundation.org`.
- Automated deployments and regular dependency updates.
- Established comprehensive project documentation for contributors and developers.

Since migrating from our old Wix site to GitHub Pages in June 2025, we rebuilt the site using Next.js for better performance and maintainability. Key updates include a PayPal donate button, a new contact page with a working form, homepage feature boxes for key programs, and the integration of images and assets from the previous site to preserve branding. Board and program information has been refreshed, comprehensive project documentation has been added, and we now use automated deployment with regular dependency updates.

## [1.3.0] - 2025-06-20

### 🚀 Added in 1.3.0

- Homepage feature boxes for "Annual Book Sale" and "Hillsdale Assistance Team".
- Enhanced CI/CD workflow with comprehensive linting and formatting checks.
- Pre-commit hooks for code quality enforcement.
- Vitest testing framework with React testing library support.
- ESLint and Prettier configuration for consistent code style.

### 🐛 Fixed in 1.3.0

- **Image Components**: Replaced native `<img>` tags with Next.js `<Image>` components in Avatar and DonateButton for better performance and optimization.
- **Typography**: Fixed apostrophe character in Resources page for proper rendering.
- **Build Issues**: Resolved font loading issues that were blocking CI builds by using local fonts.
- **CI Configuration**: Streamlined GitHub Actions workflow by removing unnecessary Python dependencies and focusing on Node.js environment.
- **Markdown Linting**: Fixed markdownlint errors across all documentation files.

### 🔧 Changed in 1.3.0

- **Node.js Upgrade**: Updated development environment to Node.js 20 for better performance and security.
- **Dependency Updates**: Major dependency updates including:
  - `remark` from 14.0.3 to 15.0.1
  - `remark-html` to 16.0.1
  - `eslint-config-prettier` from 9.1.0 to 10.1.5
  - Multiple npm package updates for security and performance
- **Development Environment**: Enhanced development setup with comprehensive tooling for code quality.
- **TypeScript Configuration**: Added `next-env.d.ts` to version control for consistent TypeScript types.

### 📚 Documentation in 1.3.0

- Added `AGENTS.md` with instructions for AI contributors.
- Added `CONTRIBUTING.md` with project contribution guidelines.
- Added `DEPLOYMENT.md` with deployment instructions.
- Added `SECURITY.md` with the project's security policy.
- Enhanced project documentation with improved markdown structure and linting compliance.
- Updated GitHub workflow configurations with proper security permissions.
- Improved development setup documentation and scripts.

### 🛠️ Technical Details in 1.3.0

- Configured Dependabot for automated dependency updates.
- Established comprehensive pre-commit hooks for quality assurance.
- Enhanced CI/CD pipeline with proper Node.js 20 support.
- Consolidated project configuration files for better maintainability.
- All tests now pass with the new testing framework setup.

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
