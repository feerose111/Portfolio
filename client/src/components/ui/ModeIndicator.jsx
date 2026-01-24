import { motion } from 'framer-motion'
import './ModeIndicator.css'

const ModeIndicator = ({ currentMode }) => {
  const modes = [
    { id: 'connect', label: 'Connect' },
    { id: 'main', label: 'Main' },
    { id: 'projects', label: 'Projects' }
  ]

  return (
    <motion.div
      className="mode-dots"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
    >
      {modes.map((mode) => (
        <div
          key={mode.id}
          className={`dot ${currentMode === mode.id ? 'active' : ''}`}
          title={mode.label}
        />
      ))}
    </motion.div>
  )
}

export default ModeIndicator