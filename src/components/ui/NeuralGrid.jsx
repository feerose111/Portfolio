import { useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

export default function NeuralGrid() {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const nodes = []
    const nodeCount = 50
    const maxDistance = 150

    // Theme colors
    const colors = isDark 
      ? {
          primary: '#7c3aed',
          accent: '#a78bfa',
          light: '#c4b5fd'
        }
      : {
          primary: '#0F766E',
          accent: '#14B8A6', 
          light: '#5EEAD4'
        }

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    // Initialize nodes
    const initNodes = () => {
      nodes.length = 0
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1
        })
      }
    }

    // Update node positions
    const updateNodes = () => {
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })
    }

    // Draw connections
    const drawConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4
            const accentColor = isDark ? 'rgba(167, 139, 250, ' : 'rgba(20, 184, 166, '
            ctx.strokeStyle = accentColor + opacity + ')'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Draw nodes
    const drawNodes = () => {
      nodes.forEach(node => {
        const primaryColor = isDark ? 'rgba(124, 58, 237, ' : 'rgba(15, 118, 110, '
        
        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3)
        gradient.addColorStop(0, primaryColor + '0.4)')
        gradient.addColorStop(1, primaryColor + '0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Inner node
        ctx.fillStyle = primaryColor + '0.8)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      updateNodes()
      drawConnections()
      drawNodes()
      requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    initNodes()
    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
      initNodes()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      style={{ zIndex: 3 }}
    />
  )
}
