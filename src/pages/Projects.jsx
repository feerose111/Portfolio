import { useState } from 'react'
import Footer from '../components/layout/Footer'
import NeuralGrid from '../components/ui/NeuralGrid'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "ASAPP - AI-Powered Project Planning",
      description: "Intelligent project management assistant using AI for automated planning and task optimization. Features include smart task scheduling, resource allocation, and predictive analytics.",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      category: "ai",
      featured: true,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Semantic AI Search System",
      description: "Advanced search system using LangChain, Milvus & Elasticsearch for intelligent content discovery. Implements vector embeddings and semantic similarity matching.",
      technologies: ["LangChain", "Milvus", "Elasticsearch", "Python", "FastAPI"],
      category: "ai",
      featured: true,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Facial Emotion Recognition",
      description: "CNN-based system for real-time emotion detection and music recommendation mapping. Uses computer vision to analyze facial expressions and suggest appropriate music.",
      technologies: ["TensorFlow", "OpenCV", "Python", "CNN", "Flask"],
      category: "ai",
      featured: true,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Vite", "React Router"],
      category: "web",
      featured: false,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for data visualization and analysis. Built with Python and modern web technologies for business intelligence.",
      technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
      category: "data",
      featured: false,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      category: "web",
      featured: false,
      demoUrl: "#",
      codeUrl: "#"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'web', label: 'Web Development' },
    { id: 'data', label: 'Data Science' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="pt-16 min-h-screen bg-page-bg dark:bg-page-bg-dark">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center py-20 px-4 overflow-hidden bg-page-bg dark:bg-page-bg-dark">
        {/* Neural Grid Background */}
        <NeuralGrid />
        
        {/* Clean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-page-bg/80 via-card-bg/60 to-tint/80 dark:from-page-bg-dark/80 dark:via-card-bg-dark/60 dark:to-tint-dark/80" style={{ zIndex: 2 }}></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto text-center z-10" style={{ zIndex: 10 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-headings dark:text-headings-dark mb-6 leading-tight tracking-tight">
            Featured <span className="bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark bg-clip-text text-transparent">Works</span>
          </h1>
          <p className="text-xl text-subtitle dark:text-subtitle-dark max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing skills in development and creative problem-solving
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-card-bg dark:bg-card-bg-dark border-b border-card-border dark:border-card-border-dark">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary dark:bg-primary-dark text-white shadow-lg'
                    : 'bg-tint dark:bg-tint-dark text-body-primary dark:text-body-primary-dark hover:bg-accent/20 dark:hover:bg-accent-dark/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card-bg dark:bg-card-bg-dark rounded-xl card-shadow dark:card-shadow-dark hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-card-border dark:border-card-border-dark group overflow-hidden flex flex-col h-full"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl opacity-50">🚀</span>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-headings dark:text-headings-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors min-h-[60px] flex items-start">
                    {project.title}
                  </h3>
                  
                  <p className="text-body-primary dark:text-body-primary-dark mb-4 leading-relaxed min-h-[80px] max-h-[100px] overflow-hidden text-ellipsis">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 min-h-[60px] items-start">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="flex-1 bg-primary dark:bg-primary-dark text-white text-center py-2 px-4 rounded-lg hover:bg-accent dark:hover:bg-accent-dark transition-colors font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        className="flex-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark text-center py-2 px-4 rounded-lg hover:bg-card-bg dark:hover:bg-card-bg-dark transition-colors font-medium border border-card-border dark:border-card-border-dark"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-body-muted dark:text-body-muted-dark">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
