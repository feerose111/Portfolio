import { Link } from 'react-router-dom'

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: "ASAPP – AI-Powered Project Planning & Assistant",
      description: "AI-powered project planning assistant built with FastAPI, Streamlit, ChromaDB, and LangChain. Deployed on Render with Docker containerization.",
      technologies: ["FastAPI", "Streamlit", "ChromaDB", "LangChain", "Docker", "Render"],
      featured: true
    },
    {
      id: 2,
      title: "Semantic AI Search System",
      description: "Advanced search system using LangChain, Milvus, Elasticsearch, Kafka, and Redis for intelligent content discovery with real-time processing.",
      technologies: ["LangChain", "Milvus", "Elasticsearch", "Kafka", "Redis", "FastAPI"],
      featured: true
    },
    {
      id: 3,
      title: "Facial Emotion Recognition Using CNN",
      description: "CNN-based system for real-time emotion detection with song mapping using depthwise separable convolutions for efficient processing.",
      technologies: ["Python", "Django", "CNN", "TensorFlow", "OpenCV"],
      featured: true
    }
  ]

  return (
    <section id="featured-projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my most impactful AI and machine learning projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="mb-6">
                <div className="w-full h-40 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl mb-6 flex items-center justify-center border border-blue-100 dark:border-blue-800/30">
                  <span className="text-5xl">🤖</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Third project - full width */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 group mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {featuredProjects[2].title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {featuredProjects[2].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProjects[2].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors">
                View Details →
              </button>
            </div>
            
            <div className="w-full h-64 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl flex items-center justify-center border border-purple-100 dark:border-purple-800/30">
              <span className="text-6xl">🎭</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
