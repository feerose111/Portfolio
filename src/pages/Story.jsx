import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  GraduationCap, 
  Book, 
  Bot, 
  Rocket, 
  Briefcase, 
  Zap,
  ArrowRight,
  Code
} from 'lucide-react'

export default function Story() {
  const [visibleChapters, setVisibleChapters] = useState(new Set())

  const journeyChapters = [
    {
      id: 1,
      year: '2018-2021',
      title: 'Foundation Years',
      description: 'Completed +2 Computer Science at Arniko Awasiya Secondary School, Biratnagar. First exposure to programming and computational thinking.',
      icon: GraduationCap,
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 2,
      year: '2021-2025',
      title: 'BSc. CSIT Journey',
      description: 'Pursuing BSc. Computer Science & Information Technology at Ambition College, Mid-Baneswor, Kathmandu. Deep dive into algorithms, data structures, and software engineering.',
      icon: Book,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 3,
      year: '2022-2023',
      title: 'AI Discovery',
      description: 'Discovered passion for artificial intelligence and machine learning. Started building projects with Python, TensorFlow, and PyTorch.',
      icon: Bot,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 4,
      year: '2024',
      title: 'Advanced Projects',
      description: 'Built sophisticated AI applications: Facial Emotion Recognition with CNN, Heart Disease Prediction, Parkinson\'s Detection, and Wine Quality Analysis.',
      icon: Rocket,
      color: 'from-sky-500 to-blue-500'
    },
    {
      id: 5,
      year: '2025',
      title: 'Professional Experience',
      description: 'AI/ML Intern at eSewa Pvt. Ltd. Built and deployed ML models to production with FastAPI, created scalable pipelines, and optimized models for real-time inference.',
      icon: Briefcase,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      year: '2025',
      title: 'Innovation & Impact',
      description: 'Created ASAPP (AI-Powered Project Planning Assistant) and Semantic AI Search System. Focus on turning research ideas into deployable AI products.',
      icon: Zap,
      color: 'from-teal-500 to-emerald-500'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chapterId = parseInt(entry.target.dataset.chapterId)
            setVisibleChapters(prev => new Set([...prev, chapterId]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const chapterElements = document.querySelectorAll('[data-chapter-id]')
    chapterElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16 min-h-screen bg-page-bg dark:bg-page-bg-dark">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-5 bg-gradient-to-b from-primary dark:from-primary-dark to-accent dark:to-accent-dark rounded-full mr-4 transition-all duration-300 hover:h-7"></div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-headings dark:text-headings-dark mb-6 md:mb-8 leading-tight tracking-tight">
              My <span className="bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark bg-clip-text text-transparent">Journey</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-subtitle dark:text-subtitle-dark max-w-3xl mx-auto leading-relaxed">
            From curious student to AI-focused developer - the story of continuous learning, 
            growth, and turning ideas into intelligent solutions.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary dark:from-primary-dark via-accent dark:via-accent-dark to-light dark:to-light-dark transform md:-translate-x-0.5 rounded-full"></div>
            
            <div className="space-y-12 md:space-y-20">
              {journeyChapters.map((chapter, index) => {
                const IconComponent = chapter.icon
                return (
                  <div 
                    key={chapter.id}
                    data-chapter-id={chapter.id}
                    className={`relative transition-all duration-300 ${
                      visibleChapters.has(chapter.id) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-2'
                    }`}
                    style={{
                      transform: visibleChapters.has(chapter.id) ? 'translateY(-4px)' : 'translateY(8px)'
                    }}
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline dot with icon */}
                      <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                        <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${chapter.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="text-white text-lg md:text-2xl" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 hover:-translate-y-3 hover:scale-105 transition-all duration-200">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                            <span className={`text-xs md:text-sm font-bold bg-gradient-to-r ${chapter.color} bg-clip-text text-transparent px-3 md:px-4 py-1 md:py-2 bg-gray-50 dark:bg-gray-700 rounded-full mb-2 md:mb-0 self-start`}>
                              {chapter.year}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              Chapter {chapter.id}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                            {chapter.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                            {chapter.description}
                          </p>
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="hidden md:block w-5/12"></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-tint dark:from-tint-dark to-card-bg dark:to-card-bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark rounded-full mb-6">
              <Code className="text-white text-2xl md:text-3xl" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-headings dark:text-headings-dark mb-4 md:mb-6 leading-tight tracking-tight">
              The Story Continues...
            </h2>
            <p className="text-lg md:text-xl text-body-primary dark:text-body-primary-dark max-w-2xl mx-auto leading-relaxed">
              Every line of code is a new chapter. Every project, a plot twist. 
              The best stories are written in collaboration—let's write the next one together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary dark:from-primary-dark to-accent dark:to-accent-dark text-white font-semibold text-base md:text-lg rounded-xl hover:from-accent dark:hover:from-accent-dark hover:to-light dark:hover:to-light-dark transition-all duration-300 hover:-translate-y-2"
            >
              See What I've Built
              <ArrowRight className="ml-2 text-sm md:text-base" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-card-bg dark:bg-card-bg-dark text-headings dark:text-headings-dark font-semibold text-base md:text-lg rounded-xl hover:bg-accent/10 dark:hover:bg-accent-dark/10 transition-all duration-300 hover:-translate-y-2"
            >
              Let's Write Together
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
