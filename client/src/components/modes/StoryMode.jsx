import Hero from '../sections/Hero'
import './StoryMode.css'

/**
 * StoryMode Component
 * 
 * Default scrollable vertical narrative mode.
 * Contains the main story content that users scroll through.
 */
const StoryMode = () => {
  return (
    <div className="story-mode">
      <Hero />
      {/* Additional story sections can be added here */}
      <section className="story-section">
        <div className="story-content">
          <h2 className="story-heading">The Journey</h2>
          <p className="story-text">
            Every line of code tells a story. Every design decision carries intention.
            This is where creativity meets technology, where ideas become experiences.
          </p>
        </div>
      </section>
    </div>
  )
}

export default StoryMode
