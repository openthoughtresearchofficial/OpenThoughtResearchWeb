import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'About — Open Thought Research',
  description: 'An independent AI research institute dedicated to advancing intelligence through rigorous science and open collaboration.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-24">
        {/* Hero */}
        <section className="py-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-light tracking-tight mb-16">
              About
            </h1>
            
            <div className="space-y-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-3">
                  <div className="text-xs tracking-wider text-gray-400 uppercase sticky top-32">
                    Founded By
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
                    <a href = "#">SURWEESH SP</a>
                  </p>
                </div>
              </div>
              {/* Introduction */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-3">
                  <div className="text-xs tracking-wider text-gray-400 uppercase sticky top-32">
                    Introduction
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
                    We are an independent research institute dedicated to advancing 
                    intelligence through rigorous science, open collaboration, 
                    and long-term thinking.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-900 pt-24">
                <div className="lg:col-span-3">
                  <div className="text-xs tracking-wider text-gray-400 uppercase sticky top-32">
                    Mission
                  </div>
                </div>
                <div className="lg:col-span-9 space-y-8">
                  <p className="text-lg font-light leading-relaxed text-gray-400">
                    To advance intelligence in all its forms—artificial, human, and 
                    collective—through fundamental research that explores the nature 
                    of thought, reasoning, and knowledge.
                  </p>
                  <p className="text-lg font-light leading-relaxed text-gray-400">
                    We conduct research across artificial intelligence, computational 
                    reasoning, scientific discovery, mathematics, cognitive science, 
                    and philosophy. Our work aims to reveal underlying principles 
                    and chart pathways toward beneficial advanced intelligence.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-900 pt-24">
                <div className="lg:col-span-3">
                  <div className="text-xs tracking-wider text-gray-400 uppercase sticky top-32">
                    Philosophy
                  </div>
                </div>
                <div className="lg:col-span-9 space-y-12">
                  <div className="border-l border-gray-800 pl-8 space-y-3">
                    <h3 className="text-xl font-light text-white">Open Research</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      Knowledge belongs to everyone. We publish openly, share our code, 
                      and collaborate across boundaries.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 space-y-3">
                    <h3 className="text-xl font-light text-white">Rigorous Science</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      We pursue truth through systematic inquiry, careful experimentation, 
                      and peer review.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 space-y-3">
                    <h3 className="text-xl font-light text-white">Long-Term Thinking</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      We focus on fundamental research that may take decades to bear fruit, 
                      valuing lasting insights over quick wins.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 space-y-3">
                    <h3 className="text-xl font-light text-white">Human-Centered AI</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      Technology should serve human flourishing, augmenting capabilities 
                      while respecting autonomy and values.
                    </p>
                  </div>
                </div>
              </div>

              {/* History */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-gray-900 pt-24">
                <div className="lg:col-span-3">
                  <div className="text-xs tracking-wider text-gray-400 uppercase sticky top-32">
                    History
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-lg font-light leading-relaxed text-gray-400">
                    Founded in 2026 by researchers who believed the future of artificial 
                    intelligence required a different approach—one grounded in rigorous 
                    science, open collaboration, and ethical development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
