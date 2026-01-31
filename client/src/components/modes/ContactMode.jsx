import { motion } from 'framer-motion'
import './ContactMode.css'

/**
 * ContactMode Component
 * 
 * Contact form mode activated by swiping down from top.
 * Slide-down panel overlay with modern dark design.
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
        <div className="contact-header">
          <motion.h1 
            className="contact-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            className="contact-subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Drop me a message and I'll get back to you soon
          </motion.p>
        </div>
        
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              className="contact-input"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="contact-input"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
              rows="5"
              required
            />
          </div>
          
          <button type="submit" className="contact-submit">
            <span>Send Message</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.5 10H15.5M15.5 10L10.5 5M15.5 10L10.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.form>
      </div>
      
      <div className="contact-curtain-edge"></div>
    </motion.div>
  )
}

export default ContactMode