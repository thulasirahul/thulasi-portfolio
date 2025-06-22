import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const nameParts = ['Th', 'ul', 'as', 'i', ' ', 'Ra', 'hu', 'l', ' ', 'J']
  const [hoverIndex, setHoverIndex] = useState(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    setMouse({ x, y })
  }

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent text-white"
      onMouseMove={handleMouseMove}
    >
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[200px] opacity-30"
          animate={{ x: mouse.x * 50, y: mouse.y * 40 }}
          transition={{ type: 'spring', stiffness: 20, damping: 30 }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-400 rounded-full blur-[160px] opacity-20"
          animate={{ x: mouse.x * -30, y: mouse.y * -20 }}
          transition={{ type: 'spring', stiffness: 20, damping: 30 }}
          style={{ bottom: '5%', right: '10%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 rounded-full blur-[140px] opacity-25"
          animate={{ x: mouse.x * 40, y: mouse.y * -40 }}
          transition={{ type: 'spring', stiffness: 25, damping: 25 }}
          style={{ top: '40%', left: '60%' }}
        />
      </div>

      <motion.section
        className="text-center px-4 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/undraw_chill-guy-avatar_tqsm.svg"
          alt="Developer"
          className="w-40 mx-auto mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold flex justify-center gap-1 flex-wrap mt-2 mb-2">
          {nameParts.map((part, i) => {
            const distance = hoverIndex !== null ? Math.abs(hoverIndex - i) : null
            let scale = 'scale-100'
            let opacity = 'opacity-100'
            let color = 'text-white'

            if (distance === 0) {
              scale = 'scale-110'
              color = 'text-cyan-400'
            } else if (distance === 1) {
              scale = 'scale-105'
              color = 'text-cyan-300'
            } else if (distance === 2) {
              scale = 'scale-100'
              color = 'text-cyan-200'
            } else if (distance !== null) {
              opacity = 'opacity-40'
            }

            return (
              <span
                key={i}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`transition-all duration-300 transform ${scale} ${color} ${opacity}`}
              >
                {part === ' ' ? '\u00A0' : part}
              </span>
            )
          })}
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          Aspiring Software Engineer | Data Analyst
        </p>

        <p className="mt-6 text-sm text-gray-500 max-w-xl mx-auto">
          Turning data into powerful insights using AI & ML. Passionate about building scalable solutions and exploring emerging technologies.
        </p>

        <a
          href="/Thulasi Rahul Software.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
        >
          View Resume
        </a>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-6 text-sm text-cyan-400"
        >
          ↓ Scroll
        </motion.div>
      </motion.section>
    </div>
  )
}
