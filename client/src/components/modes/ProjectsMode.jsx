import { useState, useEffect } from 'react'
import ProjectCard from '../ProjectCard'
import ScrollToTop from '../ui/ScrollToTop'

const ProjectsMode = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  // Sample projects data - replace with your actual data
  const sampleProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/project3.jpg',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'Scalable REST API with authentication, rate limiting, and comprehensive documentation. Built with Node.js and Express.',
      image: '/project4.jpg',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'backend'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: '/project5.jpg',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, file sharing, and emoji support.',
      image: '/project6.jpg',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'fullstack'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ]

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProjects(sampleProjects)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const ProjectSkeleton = () => (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg animate-pulse">
      <div className="h-48 bg-neutral-200 dark:bg-neutral-700"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
          <div className="h-6 w-20 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
          <div className="h-6 w-18 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
        </div>
      </div>
    </div>
  )

  return (
    <main className="w-full h-full bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 dark:from-neutral-900 dark:via-neutral-800 dark:to-primary-900/20 overflow-y-auto pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centered solutions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Try selecting a different category or check back later for new projects.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 pt-16 border-t border-neutral-200 dark:border-neutral-700">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start a Project
            </button>
            <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 dark:text-primary-400 bg-white dark:bg-neutral-800 border-2 border-primary-600 dark:border-primary-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200">
              View Resume
            </button>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </main>
  )
}

export default ProjectsMode
