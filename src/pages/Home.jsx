import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import TechStack from '../components/sections/TechStack'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <div className="bg-gradient-to-b from-page-bg dark:from-page-bg-dark to-skills-band dark:to-skills-band-dark">
        <About />
      </div>
      <div className="bg-gradient-to-b from-skills-band dark:from-skills-band-dark to-page-bg dark:to-page-bg-dark">
        <TechStack />
      </div>
      <FeaturedProjects />
      <Footer />
    </div>
  )
}
