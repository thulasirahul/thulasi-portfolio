import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Spinal Vision – CNN Stenosis Detection",
    description: "A deep learning web application for detecting spinal lumbar stenosis from MRI and CT scan images using Convolutional Neural Networks (CNNs).",
    tech: "Python, Flask, Matplotlib, TensorFlow, Django",
    link: "https://github.com/thulasirahul/stenosis-detection-cnn",
    images: ["/proj/sten/p1.png", "/proj/sten/p2.png", "/proj/sten/p3.png", "/proj/sten/p4.png"]
  },
  {
    id: 2,
    title: "IMDB Sentiment Analysis",
    description: "Sentiment analysis on IMDB movie reviews using Python, NLP, and Logistic Regression in an end-to-end ML pipeline.",
    tech: "Python, Pandas, NumPy, Matplotlib & Seaborn, scikit-learn, NLTK",
    link: "https://github.com/thulasirahul/Sentiment-Analysis-of-Movie-Reviews-IMDB-NLP-Project",
    images: ["/proj/imdb/p1.png", "/proj/imdb/p2.png"]
  },
  {
  id: 3,
  title: "JobTracker Pro",
  description: "An AI-powered job tracking platform with resume analysis, JD keyword matching, and interactive dashboard, built using React and Firebase.",
  tech: "React, Tailwind CSS, Firebase, Framer Motion, PDF.js",
  link: "https://github.com/thulasirahul/jobtracker-pro",
  images: ["/proj/jobtracker/p1.png", "/proj/jobtracker/p2.png", "/proj/jobtracker/p3.png", "/proj/jobtracker/p4.png"]
  }
]

export default function Projects() {
  const [openId, setOpenId] = useState(null)

  const toggleProject = (id) => {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold underline-hover mb-6">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div
  key={project.id}
  className="bg-white/5 border border-white/10 backdrop-blur rounded p-5 shadow transition duration-150 ease-in hover:shadow-cyan-400/40 hover:scale-[1.02] cursor-pointer"
  onClick={() => toggleProject(project.id)}
>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-400">Click to view more</p>
            <AnimatePresence>
              {openId === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-3"
                >
                  <p className="text-gray-300">{project.description}</p>
                  <p className="text-sm text-gray-400 mb-2">Tech Used: {project.tech}</p>
                  <div className="flex gap-4 overflow-x-auto mb-3">
                    {project.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Screenshot ${index + 1}`}
                        className="h-40 rounded border border-zinc-700"
                      />
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-400 inline-block hover:underline"
                    target="_blank"
                    onClick={e => e.stopPropagation()}
                  >
                    View on GitHub
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
