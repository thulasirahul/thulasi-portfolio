import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const certs = [
  {
    title: "Machine Learning Specialization - Coursera",
    image: "/certificates/Specialization certificate.png",
    link: "https://coursera.org/share/0b27c7ac0ee5c2effe43895aefdf913b"
  },
  {
    title: "The Complete Python Pro Bootcamp",
    image: "/certificates/python.jpg",
    link: "https://www.udemy.com/certificate/UC-ab30f483-5732-42d6-a6a1-0e33f241b454/"
  },

  {
    title: "Web Development Bootcamp - Udemy",
    image: "/certificates/web.jpg",
    link: "https://www.udemy.com/certificate/UC-9d592daf-f829-4e0c-bc84-bdeccf230dc4/"
  },

   {
    title: "Google Analytics for Beginners",
    image: "/certificates/go.png"
  },
  {
    title: "Introduction to Data Science",
    image: "/certificates/IntroductiontoDataScience.png"
  },
  {
    title: "Introduction to MongoDB",
    image: "/certificates/mo.png"
  }
]

export default function Certifications() {
  const [openCert, setOpenCert] = useState(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold underline-hover mb-6">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 shadow transition duration-150 ease-in hover:shadow-cyan-400/40 hover:scale-[1.02]"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded w-full object-contain h-48 cursor-pointer"
              onClick={() => setOpenCert(cert)}
            />
            <h3 className="text-lg font-bold mt-4 text-white">{cert.title}</h3>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {openCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenCert(null)}
          >
            <motion.div
              className="bg-zinc-900 rounded-lg p-4 max-w-3xl w-full max-h-[90vh] overflow-auto relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenCert(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
                aria-label="Close"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold mb-3">{openCert.title}</h3>
              <img
                src={openCert.image}
                alt={openCert.title}
                className="rounded-lg border border-zinc-700 w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
