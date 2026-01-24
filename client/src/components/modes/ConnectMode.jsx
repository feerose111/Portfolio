import { motion } from 'framer-motion'
import './ConnectMode.css'

/**
 * ConnectMode Component
 * 
 * Social/resume mode activated by swiping left.
 * Full-screen overlay displaying connection options.
 * Exit by swiping right.
 */
const ConnectMode = () => {
  return (
    <motion.div
      className="connect-mode"
      initial={{ opacity: 0, scale: 0.96, x: '-100%' }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.96, x: '-100%' }}
      transition={{ type: 'spring', stiffness: 120, damping: 22 }}
    >
      <div className="connect-content">
        <h1 className="connect-heading">Connect</h1>
        <div className="connect-links">
          <a href="#" className="connect-link">LinkedIn</a>
          <a href="#" className="connect-link">GitHub</a>
          <a href="#" className="connect-link resume-link">Download Resume</a>
          <a href="#" className="connect-link">Email</a>
        </div>
      </div>
    </motion.div>
  )
}

export default ConnectMode
