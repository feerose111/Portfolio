import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { heroContent } from '../../data/content'
import AnimatedText from '../ui/AnimatedText'
import './hero.css'

const Hero = () => {
  const sectionRef = useRef(null)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsCompact(!entry.isIntersecting),
      { threshold: 0.2 } // little earlier
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Contact Button – fixed position */}
      <motion.div
        className="contact-button"
        animate={{ y: isCompact ? -43 : -10 }}
        transition={{ type: 'spring', stiffness: 180, damping: 24 }}
      >
        <svg
          viewBox="0 0 70 80"
          xmlns="http://www.w3.org/2000/svg"
          className="contact-button-svg"
        >
          <path
            d="M 10 20 A 25 25 0 1 1 60 20 L 60 60 Q 60 70 50 70 L 20 70 Q 10 70 10 60 Z"
            className="button-outer"
          />
          <path
            d="M 10 23 A 22 22 0 1 1 60 23 L 60 58 Q 60 68 50 68 L 20 68 Q 10 68 10 58 Z"
            className="button-inner"
          />
          <motion.path
            d="M 25 35 L 35 48 L 45 35"
            className="chevron"
            whileHover={{ y: 4 }}
            whileTap={{ y: 8, scale: 0.95 }}
          />
        </svg>
        <div className="contact-hover-text">Contact</div>
      </motion.div>

      {/* Main content – centered wrapper */}
      <div className="hero-container">
        <div className="hero-text-wrapper">
          <AnimatedText
            as={motion.h1}
            className="hero-title"
            // optional: add stagger / delay props if your AnimatedText supports them
          >
            {heroContent.title}
          </AnimatedText>

          <AnimatedText
            as={motion.p}
            className="hero-subtitle"
          >
            {heroContent.subtitle}
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}

export default Hero