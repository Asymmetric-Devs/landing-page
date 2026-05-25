# Asymmetric Devs | Premium One-Page Website

A high-fidelity, conversion-oriented "One-Page" landing page and software agency portfolio for **Asymmetric Devs**. Built with precision, top-tier engineering principles, and a modern minimalist design aesthetic.

---

## 🚀 Key Features

- **Full Multi-Theme Support (Light / Dark Mode):** Zero-flash dynamic theme toggling driven purely by CSS custom properties and custom Tailwind CSS v4 class-based variants. Automatically reads system preferences on first load and persists user selection in `localStorage`.
- **Engineering & Monospace Aesthetic:** A refined blend of modern sans-serif typography (*Outfit*) for crisp branding, combined with *JetBrains Mono* for technical highlights, metadata tags, and code blocks.
- **Micro-Animations & Smooth Scrolls:** Beautiful, GPU-accelerated motion reveals and spring-based interactions powered by Framer Motion (`motion`).
- **Tactile UI Elements:** Custom-engineered background layout grid overlays (Blueprint styling) that sit perfectly behind cards, responsive blurred glassmorphism navigation drawers, and an interactive email copier with instant copy-to-clipboard state management.
- **Next-Gen Tech Stack:** Boosted by **Next.js 16 (App Router)** and **Tailwind CSS v4**'s advanced performance using **Turbopack** for near-instant compiling and optimized static page prerendering.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (Class-based Theme Custom Properties)
- **Animations:** Framer Motion (`motion/react`)
- **Icons:** Lucide React (Optimized vector sets & bespoke inline brand SVGs)
- **Bundler/Compiler:** Turbopack

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── globals.css      # Custom Tailwind v4 Theme & Semantic Variables
│   ├── layout.tsx       # Root layout, Google Fonts loading, & SEO Meta-tags
│   └── page.tsx         # Main entry point (assembling all One-Page components)
├── components/
│   ├── Navbar.tsx       # Sticky blurred Header with animated Sol/Luna switcher & responsive drawer
│   ├── Hero.tsx         # Value proposition headline, dual CTAs, & interactive code panel
│   ├── Services.tsx     # 3-column service grid (Blueprint layout fix with background depth)
│   ├── About.tsx        # Founder descriptions, strengths list, and trust badges
│   ├── Contact.tsx      # High-conversion direct mail copier & mailto action trigger
│   └── Footer.tsx       # Minimalist social SVGs, footer links, and scroll-to-top hook
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js (v18+) and npm installed.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Asymmetric-Devs/landing-page.git
   ```
2. Navigate to the project directory:
   ```bash
   cd landing-page
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live page.

### Production Build

To build the project for production, run:
```bash
npm run build
```
This validates all TypeScript types, runs ESLint checks, and pre-renders the landing page as an optimized static HTML page (`Static / Prerendered`).
