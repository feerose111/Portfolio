export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo - left side on desktop */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl scale-110"></div>
              <img
                src="../../../image/profile.jpg"
                alt="Firoj Raut"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl ring-4 ring-white/80 dark:ring-gray-700/80 relative z-10"
              />
            </div>
          </div>

          {/* Content - right side on desktop */}
          <div className="order-2 lg:order-2 text-center lg:text-left space-y-8">
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Crafting Digital Narratives
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              Where code meets creativity, and ideas become experiences
            </h2>

            {/* Intro */}
            <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hey, I'm Firoj, an AI-focused developer who blends machine learning and clean interfaces into thoughtful digital experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View work
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
