import { Link } from 'react-router-dom'
import { useState } from 'react'
import ProjectModal from '../ui/ProjectModal'

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }
  const featuredProjects = [
    {
      id: 1,
      title: "ASAPP – AI-Powered Project Planning & Assistant",
      description: "AI-powered project planning assistant built with FastAPI, Streamlit, ChromaDB, and LangChain. Deployed on Render with Docker containerization.",
      technologies: ["FastAPI", "Streamlit", "ChromaDB", "LangChain", "Docker", "Render"],
      is_featured: true,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Semantic AI Search System",
      description: "Advanced search system using LangChain, Milvus, Elasticsearch, Kafka, and Redis for intelligent content discovery with real-time processing.",
      technologies: ["LangChain", "Milvus", "Elasticsearch", "Kafka", "Redis", "FastAPI"],
      is_featured: true,
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Facial Emotion Recognition Using CNN",
      description: "CNN-based system for real-time emotion detection with song mapping using depthwise separable convolutions for efficient processing.",
      technologies: ["Python", "Django", "CNN", "TensorFlow", "OpenCV"],
      is_featured: true,
      demoUrl: "#",
      codeUrl: "#"
    }
  ]

  return (
    <section id="featured-projects" className="py-20 px-6 bg-page-bg dark:bg-page-bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-primary dark:from-primary-dark to-accent dark:to-accent-dark rounded-full mr-4 transition-all duration-300 hover:h-7"></div>
            <h2 className="text-4xl font-bold text-headings dark:text-headings-dark">
              Featured Projects
            </h2>
          </div>
          <p className="text-lg text-subtitle dark:text-subtitle-dark max-w-2xl mx-auto">
            A selection of my most impactful AI and machine learning projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.filter(p => p.is_featured).map((project) => (
            <div
              key={project.id}
              className="relative bg-card-bg dark:bg-card-bg-dark rounded-2xl p-6 hover:bg-accent/5 dark:hover:bg-accent-dark/5 transition-all duration-300 hover:-translate-y-1 group overflow-hidden cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 dark:from-primary-dark/10 via-accent/10 dark:via-accent-dark/10 to-light/10 dark:to-light-dark/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              <div className="mb-6">
                <div className="w-full h-32 bg-gradient-to-br from-tint dark:from-tint-dark to-tint/50 dark:to-tint-dark/50 rounded-xl mb-4 flex items-center justify-center border border-card-border dark:border-card-border-dark">
                  <span className="text-4xl">🤖</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-headings dark:text-headings-dark mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                {project.title}
              </h3>
              
              <p className="text-body-primary dark:text-body-primary-dark mb-4 leading-relaxed text-sm min-h-[120px] flex items-start">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 min-h-[60px] items-start">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark text-xs rounded-full font-medium">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(project)
                  }}
                  className="flex-1 text-primary dark:text-primary-dark hover:text-accent dark:hover:text-accent-dark font-semibold text-sm transition-colors"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark text-white font-semibold rounded-xl hover:from-accent dark:hover:from-accent-dark hover:to-light dark:hover:to-light-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
