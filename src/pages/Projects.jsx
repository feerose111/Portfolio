import { useState } from 'react'

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
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in AI, web development, and data science
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 group overflow-hidden"
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

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
