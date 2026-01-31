export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ASAPP - AI-Powered Project Planning",
      description: "Intelligent project management assistant using AI for automated planning and task optimization.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Semantic AI Search System",
      description: "Advanced search system using LangChain, Milvus & Elasticsearch for intelligent content discovery.",
      technologies: ["LangChain", "Milvus", "Elasticsearch", "Python"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Facial Emotion Recognition",
      description: "CNN-based system for real-time emotion detection and music recommendation mapping.",
      technologies: ["TensorFlow", "OpenCV", "Python", "CNN"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "ML Analysis Projects",
      description: "Collection of machine learning projects focusing on data analysis and predictive modeling.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Selected Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href={project.codeUrl}
                  className="text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors"
                >
                  View Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
