import React from 'react'
import { motion } from 'framer-motion'
import { FaUserGraduate, FaRobot, FaBrain, FaChartLine } from 'react-icons/fa'

const items = [
  {
    icon: <FaUserGraduate className="text-teal-400 mr-3" />,
    text: "Aspiring software engineer with strong fundamentals and a deep enthusiasm for technology.",
  },
  {
    icon: <FaBrain className="text-yellow-400 mr-3" />,
    text: "Fascinated by intelligent systems — with growing interest in machine learning and deep learning.",
  },
  {
    icon: <FaRobot className="text-pink-400 mr-3" />,
    text: "Enjoys experimenting with new ideas, learning emerging trends, and building meaningful solutions.",
  },
  {
    icon: <FaChartLine className="text-indigo-400 mr-3" />,
    text: "Driven by a mindset of continuous improvement and a strong desire to create real-world impact through code.",
  },
]

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.5 }}
      className="py-16 px-6 md:px-20 bg-white/5 backdrop-blur-md rounded-xl text-white"

    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 underline-hover inline-block">
          About Me
        </h2>

        <ul className="space-y-6 text-lg">
          {items.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start text-gray-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
