import { useEffect, useRef, useState } from 'react'

/**
 * useSwipe Hook
 * 
 * Detects swipe gestures: right, left, and down (from top 10% of screen).
 * Returns callbacks that can be used to handle swipe events.
 * 
 * @param {Object} options
 * @param {number} options.minSwipeDistance - Minimum distance in pixels to trigger swipe (default: 50)
 * @param {number} options.maxSwipeTime - Maximum time in ms for a swipe gesture (default: 300)
 * @returns {Object} Object with swipe detection callbacks
 */
const useSwipe = ({ minSwipeDistance = 50, maxSwipeTime = 300 } = {}) => {
  const [swipeDirection, setSwipeDirection] = useState(null)
  const touchStartRef = useRef(null)
  const touchStartTimeRef = useRef(null)

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0]
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY
      }
      touchStartTimeRef.current = Date.now()
    }

    const handleTouchEnd = (e) => {
      if (!touchStartRef.current || !touchStartTimeRef.current) return

      const touch = e.changedTouches[0]
      const touchEnd = {
        x: touch.clientX,
        y: touch.clientY
      }
      const touchDuration = Date.now() - touchStartTimeRef.current

      // Calculate swipe distance
      const deltaX = touchEnd.x - touchStartRef.current.x
      const deltaY = touchEnd.y - touchStartRef.current.y
      const distanceX = Math.abs(deltaX)
      const distanceY = Math.abs(deltaY)

      // Check if swipe is fast enough and within time limit
      if (touchDuration > maxSwipeTime) {
        touchStartRef.current = null
        touchStartTimeRef.current = null
        return
      }

      // Determine swipe direction
      if (distanceX > distanceY && distanceX > minSwipeDistance) {
        // Horizontal swipe
        if (deltaX > 0) {
          setSwipeDirection('right')
        } else {
          setSwipeDirection('left')
        }
      } else if (distanceY > distanceX && distanceY > minSwipeDistance) {
        // Vertical swipe
        const startYPercent = (touchStartRef.current.y / window.innerHeight) * 100
        if (deltaY > 0 && startYPercent < 10) {
          // Swipe down from top 10%
          setSwipeDirection('down')
        } else if (deltaY < 0) {
          // Swipe up
          setSwipeDirection('up')
        }
      }

      // Reset after a delay to allow state updates to be processed
      setTimeout(() => {
        touchStartRef.current = null
        touchStartTimeRef.current = null
        setSwipeDirection(null)
      }, 300)
    }

    // Mouse events for desktop testing (simulate swipe with drag)
    const handleMouseDown = (e) => {
      touchStartRef.current = {
        x: e.clientX,
        y: e.clientY
      }
      touchStartTimeRef.current = Date.now()
    }

    const handleMouseUp = (e) => {
      if (!touchStartRef.current || !touchStartTimeRef.current) return

      const touchEnd = {
        x: e.clientX,
        y: e.clientY
      }
      const touchDuration = Date.now() - touchStartTimeRef.current

      const deltaX = touchEnd.x - touchStartRef.current.x
      const deltaY = touchEnd.y - touchStartRef.current.y
      const distanceX = Math.abs(deltaX)
      const distanceY = Math.abs(deltaY)

      if (touchDuration > maxSwipeTime) {
        touchStartRef.current = null
        touchStartTimeRef.current = null
        return
      }

      if (distanceX > distanceY && distanceX > minSwipeDistance) {
        if (deltaX > 0) {
          setSwipeDirection('right')
        } else {
          setSwipeDirection('left')
        }
      } else if (distanceY > distanceX && distanceY > minSwipeDistance) {
        const startYPercent = (touchStartRef.current.y / window.innerHeight) * 100
        if (deltaY > 0 && startYPercent < 10) {
          setSwipeDirection('down')
        } else if (deltaY < 0) {
          setSwipeDirection('up')
        }
      }

      setTimeout(() => {
        touchStartRef.current = null
        touchStartTimeRef.current = null
        setSwipeDirection(null)
      }, 300)
    }

    // Add event listeners
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [minSwipeDistance, maxSwipeTime])

  return {
    swipeDirection,
    swipeRight: swipeDirection === 'right',
    swipeLeft: swipeDirection === 'left',
    swipeDown: swipeDirection === 'down',
    swipeUp: swipeDirection === 'up'
  }
}

export default useSwipe
