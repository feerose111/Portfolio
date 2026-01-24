import { useState } from 'react'
import { motion } from 'framer-motion'
import { heroContent } from '../../data/content'
import AnimatedText from '../ui/AnimatedText'
import './hero.css'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="section">
      {/* Elegant hanging tab contact button */}
      <motion.div
        className="contact-button"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <svg
          width="70"
          height="80"
          viewBox="0 0 70 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="contact-button-svg"
        >
          {/* Outer shape + border */}
          <path
            d="M 10 20 A 25 25 0 1 1 60 20 L 60 60 Q 60 70 50 70 L 20 70 Q 10 70 10 60 Z"
            className="button-outer"
          />

          {/* Inner border - inset for spacing */}
          <path
            d="M 10 23 A 22 22 0 1 1 60 23 L 60 58 Q 60 68 50 68 L 20 68 Q 10 68 10 58 Z"
            className="button-inner"
          />

          {/* Larger centered downward chevron */}
          <path
            d="M 25 35 L 35 48 L 45 35"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        <div className="contact-hover-text">
          Contact
        </div>
      </motion.div>

      <div className="section-content">
        <AnimatedText as="h1" className="hero-title" delay={0.1}>
          {heroContent.title}
        </AnimatedText>

        <AnimatedText as="p" className="hero-subtitle" delay={0.3}>
          {heroContent.subtitle}
        </AnimatedText>
      </div>
    </section>
  )
}

export default Hero