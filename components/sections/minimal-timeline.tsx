'use client'

import { motion } from 'framer-motion'

const timelineEvents = [
  { year: '2026', event: 'Founded' },
  { year: '2026', event: 'Pre-Research' },
  { year: '2030', event: 'Global Network' },
  { year: '2035', event: 'Research Launch' },
  { year: '2040', event: '!!!' },
]

export function MinimalTimeline() {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-black">
      <div className="max-w-[1800px] mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-800" />
          
          {/* Events */}
          <div className="flex justify-between items-start pt-8">
            {timelineEvents.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex flex-col items-center space-y-4 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Dot */}
                <div className="absolute -top-[4.5px] w-2 h-2 bg-white rounded-full" />
                
                {/* Year */}
                <div className="text-2xl md:text-3xl font-light text-white tracking-tight">
                  {item.year}
                </div>
                
                {/* Event */}
                <div className="text-xs md:text-sm text-gray-500 font-light tracking-wide">
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
