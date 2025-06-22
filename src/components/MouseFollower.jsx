import React, { useEffect, useRef } from 'react'

export default function MouseFollower() {
  const ring = useRef(null)
  const trailContainer = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (ring.current) {
        ring.current.animate(
          { transform: `translate(${x}px, ${y}px)` },
          { duration: 200, fill: 'forwards' }
        )
      }
      const dot = document.createElement('div')
      dot.className =
        'w-2 h-2 bg-cyan-400 rounded-full fixed pointer-events-none opacity-60 blur-[1px] z-[9999]'
      dot.style.left = `${x}px`
      dot.style.top = `${y}px`
      dot.style.transform = 'translate(-50%, -50%)'

      trailContainer.current.appendChild(dot)
      setTimeout(() => {
        dot.style.transition = 'opacity 0.3s, transform 0.3s'
        dot.style.opacity = 0
        dot.style.transform = 'translate(-50%, -50%) scale(0.5)'
      }, 0)
      setTimeout(() => {
        dot.remove()
      }, 300)
    }

    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none'
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.body.style.cursor = 'default'
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={ring}
        className="fixed top-0 left-0 w-6 h-6 border border-cyan-400 rounded-full pointer-events-none z-[9999] animate-pulse bg-gradient-to-br from-cyan-500/10 to-transparent"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div ref={trailContainer} />
    </>
  )
}
