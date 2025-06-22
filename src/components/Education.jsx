import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "B.E in Computer Science and Engineering",
    institution: "RMK College of Engineering and Technology",
    year: "2021 - 2025",
  },
  {
    degree: "HSC - Class XII",
    institution: "ABS Vidhya Mandhir",
    year: "2020 - 2021",
  }
];

export default function Education() {
  return (
    <motion.section
      className="py-20 px-6 md:px-12 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="education"
    >
      <h2 className="text-3xl font-bold mb-10 text-center underline-hover">Education</h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(34, 211, 238, 0.4)', transition: { duration: 0.15 }}}
            className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-md transition duration-150 ease-in hover:shadow-cyan-400/40 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold text-cyan-400">{edu.degree}</h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.year}</p>
            <p className="text-sm text-gray-500">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
