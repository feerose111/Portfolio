import NeuralGrid from '../ui/NeuralGrid'

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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-page-bg dark:bg-page-bg-dark">
      {/* Neural Grid Background */}
      <NeuralGrid />
      
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-page-bg/80 via-card-bg/60 to-tint/80 dark:from-page-bg-dark/80 dark:via-card-bg-dark/60 dark:to-tint-dark/80" style={{ zIndex: 2 }}></div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto z-10" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Profile Photo - left side on desktop */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-center lg:-ml-8">
            <div className="relative">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary dark:from-primary-dark via-accent dark:via-accent-dark to-light dark:to-light-dark rounded-full blur-xl scale-110 animate-spin" style={{animationDuration: '4s'}}></div>
              <img
                src="/profile.jpg"
                alt="Firoj Raut"
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl ring-4 ring-card-bg/80 dark:ring-card-bg-dark/80 relative z-10"
              />
            </div>
          </div>

          {/* Content - right side on desktop */}
          <div className="order-2 lg:order-2 text-center lg:text-left space-y-8 overflow-visible">
            {/* Title with character hover animations */}
            <div className="w-full overflow-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight relative mb-6 tracking-wide text-center lg:text-left">
                <span className="overflow-visible">
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">C</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">r</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">e</span>
                  <span className="inline-block text-teal-200 dark:text-violet-600 hover:text-teal-700 dark:hover:text-white hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">a</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">t</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">e</span>
                  <span className="inline-block w-2 sm:w-4"> </span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">t</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">h</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">r</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">o</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">u</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">g</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">h</span>
                  <span className="inline-block w-2 sm:w-4"> </span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">y</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">o</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">u</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">r</span>
                  <span className="inline-block w-2 sm:w-4"> </span>
                  <span className="inline-block text-teal-200 dark:text-violet-600 hover:text-teal-700 dark:hover:text-white hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">i</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">m</span>
                  <span className="inline-block text-teal-200 dark:text-violet-600 hover:text-teal-700 dark:hover:text-white hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">a</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">g</span>
                  <span className="inline-block text-teal-200 dark:text-violet-600 hover:text-teal-700 dark:hover:text-white hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">i</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">n</span>
                  <span className="inline-block text-teal-200 dark:text-violet-600 hover:text-teal-700 dark:hover:text-white hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">a</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">t</span>
                  <span className="inline-block text-teal-200 dark:text-violet-600 hover:text-teal-700 dark:hover:text-white hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">i</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">o</span>
                  <span className="inline-block text-teal-700 dark:text-white hover:text-teal-200 dark:hover:text-violet-600 hover:-translate-y-1.5 hover:scale-105 transition-all duration-180 ease-out cursor-default">n</span>
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <h2 className="text-lg md:text-xl font-medium leading-relaxed opacity-70 mb-8 uppercase tracking-widest text-primary dark:text-accent-dark">
              Seek only what your heart desire
            </h2>

            {/* Intro */}
            <p className="text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-body-primary dark:text-body-primary-dark">
              Creative developer passionate about building meaningful digital experiences that inspire and connect people.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-primary dark:bg-primary-dark hover:bg-accent dark:hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View projects
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-transparent border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark hover:border-accent dark:hover:border-accent-dark hover:text-accent dark:hover:text-accent-dark font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1"
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
