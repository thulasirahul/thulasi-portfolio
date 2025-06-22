import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const res = await fetch("https://formspree.io/f/xnnvzdyz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    })

    if (res.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <h2 className="text-3xl font-semibold underline-hover mb-6">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all duration-200"
        >
          {submitted ? (
            <p className="text-green-400">✅ Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-white">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-150"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-150"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-150"
              ></textarea>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded transition-all duration-150"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              label: 'Email',
              value: 'jthulasirahul@gmail.com',
              link: null
            },
            {
              label: 'LinkedIn',
              value: 'linkedin.com/in/thulasirahulj',
              link: 'https://linkedin.com/in/thulasirahulj'
            },
            {
              label: 'GitHub',
              value: 'github.com/thulasirahul',
              link: 'https://github.com/thulasirahul'
            },
            {
              label: 'LeetCode',
              value: 'leetcode.com/jthulasirahul',
              link: 'https://leetcode.com/jthulasirahul'
            }
          ].map((box, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all duration-200"
            >
              <h3 className="font-bold text-white">{box.label}</h3>
              {box.link ? (
                <a href={box.link} target="_blank" className="text-blue-400 text-sm hover:underline">
                  {box.value}
                </a>
              ) : (
                <p className="text-blue-300 text-sm">{box.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
