const HeroSection = ({ onNavigate }) => {
  const techStack = [
    'React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Python', 'Docker'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 dark:from-neutral-900 dark:via-neutral-800 dark:to-primary-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Firoj Raut
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 font-medium">
                Full-Stack Developer & Problem Solver
              </p>
              
              <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
                I craft elegant digital experiences with modern technologies. 
                Passionate about building scalable applications that make a difference.
              </p>

              {/* Tech Stack */}
              <div className="pt-4">
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                  Technologies I work with
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => onNavigate(2)}
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30">
                <img
                  src="/profile.jpg"
                  alt="Firoj Raut"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Placeholder when image fails to load */}
                <div className="hidden w-full h-full items-center justify-center text-6xl text-primary-400">
                  👨‍💻
                </div>
              </div>
              
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-neutral-400 dark:text-neutral-500">
            <span className="text-sm font-medium">Swipe to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
