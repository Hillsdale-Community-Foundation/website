# Gemini Workspace Configuration (site-demo)

This file contains project-specific context for the `site-demo` repository.

## 1. Project Overview

- **Project Name:** site-demo
- **Description:** A Next.js website.
- **Technology Stack:**
  - **Framework:** Next.js
  - **Language:** TypeScript
  - **Styling:** Tailwind CSS
  - **Testing:** Vitest, React Testing Library

## 2. Common Commands

- **Install Dependencies:** `npm install`
- **Run Development Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Start Production Server:** `npm run start`
- **Run Tests:** `npm test`
- **Lint:** `npm run lint`
- **Format:** `npm run format`
- **Type Check:** `npm run typecheck`

## 3. Coding Conventions & Style Guide

- **Style Guide:** Next.js default, Prettier for formatting.
- **Naming:** Follow standard React/TypeScript conventions.

## 4. Important Files & Directories

- `src/`: Main application source code.
- `public/`: Static assets.
- `content/`: Content files (likely for blog posts or pages).
- `next.config.js`: Next.js configuration.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `vitest.config.ts`: Vitest configuration.

## 5. Environment & Secrets

- This project does not require any specific environment variables to run locally.

## 6. Deployment

- **Platform:** Vercel
- **Production:** A new deployment is automatically triggered on every push to the `main` branch.
- **Manual Deploy:** `vercel --prod`

## 7. Architecture & Patterns

- **Component Structure:** Components are organized by feature in the `src/components` directory.
- **Data Fetching:** Uses Next.js's built-in data fetching methods (`getStaticProps`, `getServerSideProps`).
- **Styling:** Utility-first CSS with Tailwind CSS.
