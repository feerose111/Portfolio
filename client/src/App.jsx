import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import StoryMode from './components/modes/StoryMode/StoryMode'
import ProjectsMode from './components/modes/ProjectsMode'
import ConnectMode from './components/modes/ConnectMode'
import ContactMode from './components/modes/ContactMode'
import ModeIndicator from './components/ui/ModeIndicator'
import './App.css'

function App() {
  const [mode, setMode] = useState('main') // 'main', 'projects', 'connect', 'contact'

  // Handle contact mode with vertical swipe
  const { swipeDown, swipeUp } = useVerticalSwipe()

  // Lock body scroll when in overlay modes
  useEffect(() => {
    if (mode !== 'main') {
      document.body.classList.add('overlay-active')
    } else {
      document.body.classList.remove('overlay-active')
    }
    
    return () => {
      document.body.classList.remove('overlay-active')
    }
  }, [mode])

  // Handle vertical swipes for contact mode
  useEffect(() => {
    if (swipeDown && mode === 'main') {
      setMode('contact')
    } else if (swipeUp && mode === 'contact') {
      setMode('main')
    }
  }, [swipeDown, swipeUp, mode])

  // Horizontal drag for projects/connect
  const handleDragEnd = (_, info) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    // Threshold: 25% of screen width OR fast swipe
    const SWIPE_THRESHOLD = window.innerWidth * 0.25
    const VELOCITY_THRESHOLD = 500

    if (mode === 'main') {
      if (offset > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
        setMode('projects') // swipe RIGHT to go to projects
      } else if (offset < -SWIPE_THRESHOLD || velocity < -VELOCITY_THRESHOLD) {
        setMode('connect') // swipe LEFT to go to connect
      }
    } else if (mode === 'projects') {
      if (offset < -SWIPE_THRESHOLD || velocity < -VELOCITY_THRESHOLD) {
        setMode('main') // swipe LEFT to go back
      }
    } else if (mode === 'connect') {
      if (offset > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
        setMode('main') // swipe RIGHT to go back
      }
    }
  }

  // Determine which mode to show in navigation indicator
  const navMode = mode === 'contact' ? 'main' : mode

  return (
    <div className="app">
      <ModeIndicator currentMode={navMode} />

      {/* Main Mode - Always visible as base */}
      <motion.div
        className="mode-layer"
        drag={mode === 'main' && mode !== 'contact' ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ zIndex: mode === 'main' ? 10 : 1 }}
      >
        <StoryMode />
      </motion.div>

      {/* Projects Mode - Slides in from LEFT */}
      <AnimatePresence>
        {mode === 'projects' && (
          <motion.div
            key="projects"
            className="mode-layer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ zIndex: 20 }}
          >
            <ProjectsMode />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Connect Mode - Slides in from RIGHT */}
      <AnimatePresence>
        {mode === 'connect' && (
          <motion.div
            key="connect"
            className="mode-layer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ zIndex: 20 }}
          >
            <ConnectMode />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Mode - Fullscreen overlay (vertical swipe) */}
      <AnimatePresence>
        {mode === 'contact' && <ContactMode key="contact" />}
      </AnimatePresence>
    </div>
  )
}

// Simple vertical swipe hook - works from anywhere
function useVerticalSwipe() {
  const [swipeDown, setSwipeDown] = useState(false)
  const [swipeUp, setSwipeUp] = useState(false)

  useEffect(() => {
    let startY = 0
    let startX = 0
    let isDragging = false

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        startY = e.touches[0].clientY
        startX = e.touches[0].clientX
        isDragging = true
      }
    }

    const handleTouchEnd = (e) => {
      if (!isDragging) return
      const endY = e.changedTouches[0].clientY
      const endX = e.changedTouches[0].clientX
      const diffY = endY - startY
      const diffX = endX - startX

      // Only trigger if vertical movement is dominant
      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 100) {
        if (diffY > 0) {
          setSwipeDown(true)
          setTimeout(() => setSwipeDown(false), 100)
        } else {
          setSwipeUp(true)
          setTimeout(() => setSwipeUp(false), 100)
        }
      }
      isDragging = false
    }

    // Also add mouse support for desktop
    let mouseStartY = 0
    let mouseStartX = 0
    let mouseDown = false

    const handleMouseDown = (e) => {
      mouseStartY = e.clientY
      mouseStartX = e.clientX
      mouseDown = true
    }

    const handleMouseUp = (e) => {
      if (!mouseDown) return
      const diffY = e.clientY - mouseStartY
      const diffX = e.clientX - mouseStartX

      if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 100) {
        if (diffY > 0) {
          setSwipeDown(true)
          setTimeout(() => setSwipeDown(false), 100)
        } else {
          setSwipeUp(true)
          setTimeout(() => setSwipeUp(false), 100)
        }
      }
      mouseDown = false
    }

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
  }, [])

  return { swipeDown, swipeUp }
}

export default App