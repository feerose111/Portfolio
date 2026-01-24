import { motion } from 'framer-motion'
import './ContactMode.css'

/**
 * ContactMode Component
 * 
 * Contact form mode activated by swiping down from top.
 * Slide-down panel overlay.
 * Exit by swiping up.
 */
const ContactMode = () => {
  return (
    <motion.div
      className="contact-mode"
      initial={{ opacity: 0, scale: 0.96, y: '-100%' }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: '-100%' }}
      transition={{ type: 'spring', stiffness: 120, damping: 22 }}
    >
      <div className="contact-content">
        <h1 className="contact-heading">Get in Touch</h1>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-input"
          />
          <textarea
            placeholder="Message"
            className="contact-textarea"
            rows="5"
          />
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactMode
