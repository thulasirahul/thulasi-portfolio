import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: "Python", level: 90, type: "language" },
  { name: "Java", level: 85, type: "language" },
  { name: "JavaScript", level: 88, type: "language" },
  { name: "SQL", level: 80, type: "language" },
  { name: "Pandas", level: 75, type: "framework" },
  { name: "NumPy", level: 78, type: "framework" },
  { name: "TensorFlow", level: 70, type: "framework" },
  { name: "Scikit-learn", level: 72, type: "framework" },
  { name: "HTML", level: 95, type: "framework" },
  { name: "CSS", level: 92, type: "framework" },
  { name: "Node.js", level: 75, type: "framework" },
  { name: "React.js", level: 80, type: "framework" },
  { name: "Problem Solving", level: 88, type: "soft" },
  { name: "Communication", level: 86, type: "soft" },
  { name: "Team Collaboration", level: 84, type: "soft" },
  { name: "Quick Learning", level: 90, type: "soft" },
]

const getBarColor = (type) => {
  switch (type) {
    case "language": return "bg-blue-500"
    case "framework": return "bg-purple-500"
    case "soft": return "bg-green-500"
    default: return "bg-gray-500"
  }
}

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-bold mb-8 underline-hover inline-block">
          Skills
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <motion.div
              className={`h-3 rounded ${getBarColor(skill.type)}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2, delay: index * 0.03 }}
              viewport={{ once: false }}
            />
          </div>
        ))}
      </div>
    </motion.section>
  )
}
