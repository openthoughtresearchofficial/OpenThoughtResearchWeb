'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const researchAreas = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Machine learning architectures, autonomous reasoning, and structured theoretical foundations.',
  },
  {
    id: 'reasoning',
    title: 'Computational Reasoning',
    description: 'Formal verification, symbolic systems, automated theorem proving, and verified computation.',
  },
  {
    id: 'discovery',
    title: 'Scientific Discovery',
    description: 'Hypothesis generation and autonomous exploration in physical, chemical, and biological systems.',
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    description: 'Category theory, topology, and algebraic structures representing mathematical foundations.',
  },
  {
    id: 'cognitive',
    title: 'Cognitive Science',
    description: 'Cognitive architectures, computational modeling, and mental representations.',
  },
  {
    id: 'philosophy',
    title: 'Philosophy',
    description: 'Epistemology, philosophy of mind, ethics, and foundational conceptual inquiries.',
  },
]

export function ResearchBlocks() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-black">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Title */}
        <div className="mb-24">
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] font-light tracking-tight text-white">
            Research
          </h2>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-800">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              className="bg-black p-12 relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(area.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Number */}
              <div className="text-[4rem] font-light text-gray-800 mb-6 leading-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-white tracking-tight">
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-white"
                initial={{ width: 0 }}
                animate={{ width: hoveredId === area.id ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
