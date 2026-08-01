'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const visionSlides = [
  { line1: 'A World Where', line2: 'Knowledge Is Shared', line3: 'And The Future', line4: 'Is Open' },
  { line1: 'Research That', line2: 'Advances Humanity', line3: 'Through Open', line4: 'Collaboration' },
  { line1: 'Intelligence', line2: 'Built On Principles', line3: 'Of Transparency', line4: 'And Trust' },
  { line1: 'The Future', line2: 'Of Thought Itself', line3: 'Explored Together', line4: 'Openly' },
]

export function VisionSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visionSlides.length)
    }, 6000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-48 px-8 md:px-16 lg:px-24 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-16">
          {/* Large Statement with Multiple Slides Animation */}
          <div className="relative h-[16rem] md:h-[20rem] lg:h-[28rem] overflow-hidden">
            {mounted ? (
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentIndex}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ 
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="absolute inset-0 text-[2.5rem] md:text-[4rem] lg:text-[6rem] leading-[1.1] font-light tracking-tight text-white"
                >
                  {visionSlides[currentIndex].line1}
                  <br />
                  {visionSlides[currentIndex].line2}
                  <br />
                  {visionSlides[currentIndex].line3}
                  <br />
                  {visionSlides[currentIndex].line4}
                </motion.h2>
              </AnimatePresence>
            ) : (
              <h2 className="absolute inset-0 text-[2.5rem] md:text-[4rem] lg:text-[6rem] leading-[1.1] font-light tracking-tight text-white">
                {visionSlides[0].line1}
                <br />
                {visionSlides[0].line2}
                <br />
                {visionSlides[0].line3}
                <br />
                {visionSlides[0].line4}
              </h2>
            )}
          </div>

          {/* Minimal Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
          >
            We advance intelligence through rigorous research, 
            open collaboration, and a commitment to understanding 
            the fundamental nature of thought itself.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
