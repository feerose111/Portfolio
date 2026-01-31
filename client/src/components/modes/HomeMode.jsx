import { projects } from '../../data/projects'

export default function HomeMode() {
  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="mb-8">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg ring-4 ring-white/70"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Your Name
          </h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 font-medium mb-6">
            Frontend Developer
          </h2>
          <div className="max-w-2xl mx-auto space-y-2 text-lg text-gray-700">
            <p>I craft beautiful, responsive web experiences with modern technologies.</p>
            <p>Passionate about clean code, user experience, and bringing ideas to life.</p>
            <p>Currently seeking opportunities to build impactful digital products.</p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            About me
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I'm a passionate frontend developer who loves creating digital experiences that are both beautiful and functional. 
              I believe great design and clean code go hand in hand.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Based in Your City, Country
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Specialized in React, TypeScript, and modern CSS
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Currently learning Three.js and WebGL
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Love building interactive and accessible web applications
              </li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Selected projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project) => (
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
                  >
                    Live →
                  </a>
                  <a
                    href={project.link}
                    className="text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors"
                  >
                    Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Let's work together
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:your.email@example.com"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact me
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Download resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-200">
          <p className="text-gray-900 font-medium mb-1">Your Name</p>
          <p className="text-gray-600 text-sm mb-1">© {new Date().getFullYear()}</p>
          <p className="text-gray-500 text-xs">Built with React & Tailwind</p>
        </footer>

      </div>
    </div>
  )
}
