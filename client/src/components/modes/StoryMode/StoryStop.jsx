import { useState } from 'react'
import './StoryStop.css'

/**
 * StoryStop Component
 * 
 * Elegant milestone markers with card-style presentation
 * Logo displayed beside content on desktop, above on mobile
 */
const StoryStop = ({ label, title, subtitle, description }) => {
  const [isTouched, setIsTouched] = useState(false)

  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouched(false), 300)
  }

  return (
    <div className="story-stop">
      <div className="stop-container">
        <div className="stop-marker">
          <div className="marker-dot"></div>
        </div>
        
        <div className="stop-content-wrapper">
          <div className="stop-logo-side">
            <div className="logo-placeholder-large">
              <div className="logo-icon">🏢</div>
              <span className="logo-text">Logo</span>
            </div>
          </div>
          
          <div 
            className={`stop-card ${isTouched ? 'touched' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="stop-label">{label}</div>
            <h3 className="stop-title">{title}</h3>
            <div className="stop-subtitle">{subtitle}</div>
            {description && <p className="stop-description">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryStop