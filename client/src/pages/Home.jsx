import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import TechStack from '../components/sections/TechStack'
import FeaturedProjects from '../components/sections/FeaturedProjects'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      
      {/* Clean Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            © 2025 Firoj Raut
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
