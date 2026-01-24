import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

/**
 * AnimatedText Component
 * 
 * A reusable component that fades in text from the bottom when it enters the viewport.
 * Uses framer-motion for smooth animations and react-intersection-observer for scroll detection.
 * Automatically handles initial viewport visibility.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The text/content to animate
 * @param {string} props.as - HTML tag to render (default: 'div')
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.delay - Animation delay in seconds (default: 0)
 * @param {number} props.duration - Animation duration in seconds (default: 0.8)
 */
const AnimatedText = ({ 
  children, 
  as: Component = 'div', 
  className = '',
  delay = 0,
  duration = 0.8
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [isVisible, setIsVisible] = useState(false)

  // Check if element is in viewport on mount (for initial load)
  useEffect(() => {
    const checkInitialView = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight
        // Element is visible if it's in the viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
          setIsVisible(true)
          return true
        }
      }
      return false
    }

    // Check immediately and after a short delay to ensure DOM is ready
    if (checkInitialView()) return
    
    const timer = setTimeout(() => {
      if (!checkInitialView()) {
        // Fallback: if still not detected after delay, make visible anyway
        setIsVisible(true)
      }
    }, 100)
    
    return () => clearTimeout(timer)
  }, [ref])

  // Update visibility when intersection observer detects it
  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 30 // Start 30px below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth feel
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={animationVariants}
    >
      <Component className={className}>
        {children}
      </Component>
    </motion.div>
  )
}

export default AnimatedText

