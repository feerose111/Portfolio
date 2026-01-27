import { useEffect } from 'react'
import Hero from '../../sections/Hero'
import StoryChapter from './StoryChapter'
import StoryStop from './StoryStop'
import ScrollToTop from '../../ui/ScrollToTop'
import { STORY_CHAPTERS, STORY_STOPS, STORY_CLOSING } from '../../../data/constants'
import './StoryMode.css'

/**
 * StoryMode Component
 * 
 * Elegant narrative journey through the developer's career
 * Features smooth scroll-triggered animations and SEO optimization
 */
const StoryMode = () => {
  useEffect(() => {
    // Set page metadata for SEO
    document.title = 'My Journey | Firoj Raut - AI Developer Portfolio'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Explore the journey of Firoj Raut from student to AI/ML developer. Experience the story of building intelligent systems with Python, FastAPI, TensorFlow, and production ML pipelines.'
      )
    } else {
      const newMeta = document.createElement('meta')
      newMeta.name = 'description'
      newMeta.content = 'Explore the journey of Firoj Raut from student to AI/ML developer. Experience the story of building intelligent systems with Python, FastAPI, TensorFlow, and production ML pipelines.'
      document.head.appendChild(newMeta)
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = 'AI Developer, Machine Learning, Deep Learning, Python, FastAPI, TensorFlow, PyTorch, LangChain, Nepal Developer, Portfolio'

    // Add Open Graph tags for social sharing
    const ogTags = [
      { property: 'og:title', content: 'My Journey | Firoj Raut - AI Developer' },
      { property: 'og:description', content: 'From student to AI/ML developer - building intelligent systems' },
      { property: 'og:type', content: 'website' }
    ]

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`)
      if (!ogTag) {
        ogTag = document.createElement('meta')
        ogTag.setAttribute('property', tag.property)
        document.head.appendChild(ogTag)
      }
      ogTag.setAttribute('content', tag.content)
    })

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    }, observerOptions)

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.story-chapter, .story-stop')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="story-mode" role="main" aria-label="Career Journey Story">
      <Hero />

      <article className="story-content-wrapper">
        {/* Interleave chapters and stops */}
        {STORY_CHAPTERS.map((chapter, index) => (
          <div key={chapter.id}>
            <StoryChapter
              title={chapter.title}
              content={chapter.content}
              year={chapter.year}
              index={index}
            />
            
            {/* Show stop after specific chapters */}
            {STORY_STOPS[index] && (
              <StoryStop
                label={STORY_STOPS[index].label}
                title={STORY_STOPS[index].title}
                subtitle={STORY_STOPS[index].subtitle}
                description={STORY_STOPS[index].description}
              />
            )}
          </div>
        ))}

        <section className="story-closing" aria-label="Contact Call to Action">
          <h2>{STORY_CLOSING.title}</h2>
          <p>{STORY_CLOSING.subtitle}</p>
        </section>
      </article>

      <ScrollToTop />
    </main>
  )
}

export default StoryMode