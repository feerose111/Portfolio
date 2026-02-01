<<<<<<< HEAD
# Portfolio
Portfolio website
=======
# Portfolio Website

A clean, modern portfolio website built with React and Vite, ready for deployment on Vercel.

## Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── profile.jpg         # Profile image
│   ├── resume.pdf          # Resume download
│   └── vite.svg
├── src/
│   ├── components/         # React components
│   │   ├── layout/         # Header and layout components
│   │   └── sections/       # Page sections (Hero, About, etc.)
│   ├── contexts/           # React contexts (Theme)
│   ├── pages/              # Main pages (Home, Story, Projects, Contact)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Deployment

This project is optimized for Vercel deployment:

- Build output directory: `dist` (Vite default)
- Static assets in `public/` directory
- No server-side dependencies
- Ready for automatic deployment detection

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Theme switching with context API
- **Smooth Navigation**: React Router with smooth scrolling
- **Modern UI**: Clean, professional design with animations
- **Performance Optimized**: Vite build system for fast loading

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: React Icons

>>>>>>> 85503a7 (initial commit)
