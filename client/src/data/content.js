/**
 * Content Data Structure
 * 
 * This file contains all portfolio content as plain JavaScript objects.
 * Structured for easy updates and future API integration.
 * In the future, this data will be replaced with API calls to the MERN backend.
 * 
 * Design principles:
 * - Poetic minimalism
 * - Storytelling narrative
 * - Monochrome aesthetic with selective accent color (#FF2D55)
 */

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
  title: "Crafting Digital Narratives",
  subtitle: "Where code meets creativity, and ideas become experiences"
}

// ============================================
// ABOUT SECTION
// ============================================
export const aboutContent = {
  headline: "About",
  paragraphs: [
    "I believe in the power of thoughtful design and elegant code.",
    "Every project is a story waiting to be told.",
    "Every line of code, a word in that narrative."
  ],
  highlight: "#FF2D55" // Accent color for emphasis
}

// ============================================
// PROJECTS SECTION
// ============================================
export const projectsContent = {
  headline: "Selected Work",
  description: "Projects that define the journey",
  projects: [
    {
      id: 1,
      title: "Project One",
      description: "A cinematic experience that blends art and technology",
      category: "Web Experience",
      year: "2024",
      technologies: ["React", "Framer Motion", "Three.js"],
      featured: true
    },
    {
      id: 2,
      title: "Project Two",
      description: "Minimalist design meets powerful functionality",
      category: "Product Design",
      year: "2024",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      featured: true
    },
    {
      id: 3,
      title: "Project Three",
      description: "An exploration of digital storytelling",
      category: "Creative Development",
      year: "2023",
      technologies: ["React", "GSAP", "WebGL"],
      featured: false
    }
  ]
}

// ============================================
// CONTACT SECTION
// ============================================
export const contactContent = {
  headline: "Let's Create Together",
  subtitle: "Every great story starts with a conversation",
  email: "hello@portfolio.com",
  social: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      label: "Connect on LinkedIn"
    },
    {
      platform: "GitHub",
      url: "https://github.com",
      label: "View code on GitHub"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      label: "Follow on Twitter"
    }
  ]
}

// ============================================
// FOOTER / META CONTENT
// ============================================
export const metaContent = {
  copyright: "© 2024 Portfolio",
  credits: "Built with intention and care"
}

// ============================================
// NAVIGATION (if needed later)
// ============================================
export const navigationContent = {
  links: [
    { label: "Home", anchor: "#hero" },
    { label: "About", anchor: "#about" },
    { label: "Work", anchor: "#projects" },
    { label: "Contact", anchor: "#contact" }
  ]
}

