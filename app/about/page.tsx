import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'About — Open Thought Research',
  description: 'An independent AI research individual collections, dedicated to advancing intelligence through rigorous science and open collaboration.',
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
                    Lead
                  </div>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
                    <a href="#">SURWEESH SP</a>
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
                    We are an independent, research-first organization developing foundational ideas,
                    formal frameworks, theoretical models, and computational investigations.
                    Our core intellectual pursuit centers on investigating fundamental questions,
                    exploring ideas, and understanding the foundations of complex phenomena.
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
                    To advance human knowledge through fundamental research that explores the nature
                    of thought, reasoning, and complex systems—bridging conceptual inquiry with
                    mathematical formalization and rigorous computation.
                  </p>
                  
                  {/* Three Levels of Institutional Inquiry */}
                  <div className="border border-gray-900 bg-gray-950/60 p-8 space-y-6">
                    <div className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                      The Three Levels of Our Inquiry
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                      <div className="space-y-2">
                        <span className="text-xs font-mono text-white">01 / Foundational Inquiry</span>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          Investigating fundamental questions, conceptual frameworks, underlying assumptions,
                          and the nature of complex phenomena across disciplines.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-mono text-white">02 / Formal Development</span>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          Representing, analyzing, and modeling structures, relations, constraints,
                          and dynamical processes using mathematics and computational formalisms.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-mono text-white">03 / Disciplinary Applications</span>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          Applying foundational insights across mathematics, computer science,
                          artificial intelligence, cognitive science, philosophy, and scientific discovery.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border border-gray-900 bg-gray-950/40 space-y-3">
                    <div className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                      Research Philosophy
                    </div>
                    <p className="text-base font-light text-gray-200 leading-relaxed italic">
                      &ldquo;Meaningful research begins with curiosity and progresses through questioning,
                      investigation, critical examination, and the refinement of ideas. We seek not only to
                      discover answers, but also to understand the assumptions, structures, and questions that
                      make new discoveries possible.&rdquo;
                    </p>
                  </div>
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
                      Knowledge belongs to everyone. We publish openly, share our mathematical models
                      and code, and foster cross-disciplinary collaboration across institutional borders.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 space-y-3">
                    <h3 className="text-xl font-light text-white">Rigorous Science</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      We pursue truth through systematic inquiry, conceptual precision, mathematical
                      foundations, and empirical validation.
                    </p>
                  </div>

                  <div className="border-l border-gray-800 pl-8 space-y-3">
                    <h3 className="text-xl font-light text-white">Long-Term Thinking</h3>
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      We focus on fundamental inquiries that may take decades to mature, valuing lasting
                      conceptual breakthroughs over transient commercial product cycles.
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
                    Founded in 2026 by researchers who recognized that understanding thought, intelligence,
                    and complex systems requires investigating foundational conceptual frameworks—grounded in
                    philosophical rigor, formal mathematics, open collaboration, and ethical responsibility.
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
