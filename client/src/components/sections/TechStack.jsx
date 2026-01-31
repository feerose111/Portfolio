export default function TechStack() {
  const technologies = [
    { name: 'Python', icon: '🐍', color: 'text-blue-400' },
    { name: 'FastAPI', icon: '⚡', color: 'text-green-400' },
    { name: 'Django', icon: '🎯', color: 'text-emerald-400' },
    { name: 'TensorFlow', icon: '🧠', color: 'text-orange-400' },
    { name: 'PyTorch', icon: '🔥', color: 'text-red-400' },
    { name: 'Scikit-Learn', icon: '📊', color: 'text-purple-400' },
    { name: 'LangChain', icon: '🔗', color: 'text-indigo-400' },
    { name: 'Docker', icon: '🐳', color: 'text-cyan-400' },
    { name: 'MySQL', icon: '🗄️', color: 'text-blue-400' },
    { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-500' },
    { name: 'Git', icon: '📝', color: 'text-orange-400' },
    { name: 'JavaScript', icon: '⚡', color: 'text-yellow-400' },
    { name: 'Streamlit', icon: '🚀', color: 'text-red-400' },
    { name: 'ChromaDB', icon: '💾', color: 'text-purple-400' },
    { name: 'Milvus', icon: '🔍', color: 'text-teal-400' },
    { name: 'Elasticsearch', icon: '🔎', color: 'text-yellow-400' },
    { name: 'Kafka', icon: '📡', color: 'text-green-400' },
    { name: 'Redis', icon: '⚡', color: 'text-red-400' }
  ]

  // Duplicate the array to create seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies]

  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Technologies I Work With
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Building intelligent systems with modern tools
        </p>
      </div>

      {/* Scrolling Tech Carousel */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex space-x-8 animate-scroll">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center space-x-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className={`font-medium whitespace-nowrap ${tech.color} dark:${tech.color}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
