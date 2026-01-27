import { useState, useEffect } from 'react'
import './ScrollToTop.css'

/**
 * ScrollToTop Component
 * 
 * Floating button that appears after scrolling down
 * Smoothly scrolls back to top when clicked
 * GUARANTEED TO BE VISIBLE with inline styles + CSS
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
        console.log('Scroll to top button should be visible')
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility)
    
    // Check initial scroll position
    toggleVisibility()

    // Cleanup
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Inline styles to GUARANTEE visibility (overrides any CSS)
  const buttonStyle = {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4), 0 0 0 0 rgba(59, 130, 246, 0.4)',
    zIndex: 999999,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    pointerEvents: isVisible ? 'auto' : 'none'
  }

  const buttonHoverStyle = {
    backgroundColor: '#2563eb',
    transform: 'scale(1.05) translateY(-2px)',
    boxShadow: '0 6px 28px rgba(59, 130, 246, 0.5)'
  }

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      onMouseEnter={(e) => {
        if (isVisible) {
          Object.assign(e.target.style, buttonHoverStyle)
        }
      }}
      onMouseLeave={(e) => {
        if (isVisible) {
          e.target.style.backgroundColor = '#3b82f6'
          e.target.style.transform = 'scale(1) translateY(0)'
          e.target.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.4)'
        }
      }}
      style={buttonStyle}
      aria-label="Scroll to top"
      type="button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}

export default ScrollToTop