import { X, ExternalLink, Github } from 'lucide-react'

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card-bg dark:bg-card-bg-dark rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-card-border dark:border-card-border-dark">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-headings dark:text-headings-dark">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-tint dark:hover:bg-tint-dark rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-body-primary dark:text-body-primary-dark" />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="w-full h-48 bg-gradient-to-br from-tint dark:from-tint-dark to-tint/50 dark:to-tint-dark/50 rounded-xl flex items-center justify-center border border-card-border dark:border-card-border-dark mb-4">
              <span className="text-6xl">🚀</span>
            </div>
          </div>
          
          <p className="text-body-primary dark:text-body-primary-dark mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-headings dark:text-headings-dark mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="flex-1 bg-primary dark:bg-primary-dark hover:bg-accent dark:hover:bg-accent-dark text-white text-center py-3 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                className="flex-1 bg-tint dark:bg-tint-dark text-tint-text dark:text-tint-text-dark text-center py-3 px-4 rounded-lg hover:bg-card-bg dark:hover:bg-card-bg-dark transition-colors font-medium border border-card-border dark:border-card-border-dark flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
