import { useState } from 'react'
import './StoryChapter.css'

/**
 * StoryChapter Component
 * 
 * Elegant chapter sections with smooth reveal animations
 * Logo displayed beside content on desktop, above on mobile
 */
const StoryChapter = ({ title, content, year, index }) => {
  const [isTouched, setIsTouched] = useState(false)
  const isEven = index % 2 === 0

  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouched(false), 300)
  }

  return (
    <section className={`story-chapter ${isEven ? 'align-left' : 'align-right'}`}>
      <div 
        className={`chapter-wrapper ${isTouched ? 'touched' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="chapter-logo-side">
          <div className="logo-placeholder-large">
            <div className="logo-icon">🎓</div>
            <span className="logo-text">Logo</span>
          </div>
        </div>
        
        <div className="chapter-container">
          <div className="chapter-year">{year}</div>
          <div className="chapter-content">
            <h2 className="chapter-title">{title}</h2>
            <p className="chapter-text">{content}</p>
          </div>
          <div className="chapter-line"></div>
        </div>
      </div>
    </section>
  )
}

export default StoryChapter