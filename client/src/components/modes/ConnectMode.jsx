import { motion } from 'framer-motion'
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa'
import './ConnectMode.css'

const ConnectMode = () => {
  const items = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn size={36} />,
      color: '#0a66c2',
      href: 'https://www.linkedin.com/in/your-profile/',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={36} />,
      color: '#181717',
      href: 'https://github.com/your-username',
    },
    {
      name: 'Download Resume',
      icon: <FaFilePdf size={36} />,
      color: '#c0392b',
      href: '/resume.pdf',
      download: true,
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={36} />,
      color: '#1e88e5',
      href: 'mailto:hello@yourdomain.com',
    },
  ]

  return (
    <motion.div
      className="connect-mode"
      initial={{ opacity: 0, scale: 0.96, x: '-100%' }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.96, x: '-100%' }}
      transition={{ type: 'spring', stiffness: 120, damping: 22 }}
    >
      {/* NEW SCROLL WRAPPER */}
      <div className="connect-scroll-wrapper">
        <div className="connect-content">
          <h1 className="connect-heading">Connect</h1>

          <div className="connect-grid">
            {items.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                download={item.download}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.06 }}
              >
                <div className="connect-icon-wrapper" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <span className="connect-label">{item.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ConnectMode