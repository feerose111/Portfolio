import { useState, useEffect } from 'react'

const useHorizontalScroll = (containerRef) => {
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Vertical wheel to horizontal scroll translation
    const handleWheel = (e) => {
      e.preventDefault()
      const scrollAmount = e.deltaY * 2
      container.scrollLeft += scrollAmount
    }

    // Track current section based on scroll position
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const sectionWidth = container.clientWidth
      const section = Math.round(scrollLeft / sectionWidth)
      setCurrentSection(section)
    }

    // Touch/swipe support for mobile
    let startX = 0
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
      e.preventDefault()
      const currentX = e.touches[0].clientX
      const diffX = startX - currentX
      container.scrollLeft += diffX * 0.5
      startX = currentX
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('scroll', handleScroll)
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('scroll', handleScroll)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return { currentSection }
}

export default useHorizontalScroll
