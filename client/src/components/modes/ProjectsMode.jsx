import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import './ProjectsMode.css'

/**
 * ProjectCard Component
 * 
 * A playing card-style project card that floats in 3D space and flips on hover.
 * Starts face-down (back) and reveals project details when hovered.
 */
const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  // Generate random initial rotation and position for floating effect
  const randomRotateX = (index * 15) % 20 - 10 // -10 to 10 degrees
  const randomRotateY = (index * 23) % 20 - 10 // -10 to 10 degrees
  const randomTranslateZ = (index * 7) % 30 - 15 // -15 to 15px

  return (
    <motion.div
      className="project-card-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateX: randomRotateX,
        rotateY: randomRotateY,
        translateZ: randomTranslateZ,
        transition: {
          duration: 0.8,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1]
        }
      }}
      whileHover={{
        rotateX: [randomRotateX, randomRotateX + 1.5, randomRotateX - 1],
        rotateY: [randomRotateY, randomRotateY + 1, randomRotateY - 0.5],
        translateZ: [randomTranslateZ, randomTranslateZ + 3, randomTranslateZ - 2],
        transition: {
          duration: 6 + (index % 4) * 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onTap={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="project-card"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 1.05 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 22
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Back of card (face-down - shown by default) */}
        <div className="card-back">
          <div className="card-back-pattern"></div>
        </div>

        {/* Front of card (revealed on flip) */}
        <div className="card-front">
          <div className="card-content">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>
            <motion.button
              className="card-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/**
 * ProjectsMode Component
 */
const ProjectsMode = () => {
  return (
    <motion.div
      className="projects-mode"
      initial={{ opacity: 0, scale: 0.96, x: '100%' }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.96, x: '100%' }}
      transition={{ type: 'spring', stiffness: 120, damping: 22 }}
    >
      {/* Floating blue dots background */}
      <div className="floating-dots"></div>

      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectsMode