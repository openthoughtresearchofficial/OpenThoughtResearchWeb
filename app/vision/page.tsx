import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Vision — Open Thought Research',
  description: 'Our vision for the future of intelligence, knowledge, and open research.',
}

export default function VisionPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-24">
        {/* Large Typography Statement */}
        <section className="min-h-screen flex items-center py-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1600px] mx-auto w-full">
            <h1 className="text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] leading-[0.95] font-light tracking-tight">
              A World
              <br />
              Where
              <br />
              Knowledge
              <br />
              Is Shared
            </h1>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="text-xs tracking-wider text-gray-400 uppercase sticky top-32">
                  Vision
                </div>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
                  We envision a future where artificial intelligence amplifies
                  human potential rather than replacing it—where machines and
                  minds collaborate to solve humanity&apos;s most pressing challenges.
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-400">
                  Intelligence should be understood, not merely engineered.
                  By pursuing fundamental research across multiple disciplines,
                  we aim to reveal the principles that govern thought, reasoning,
                  and knowledge itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-32 px-8 md:px-16 lg:px-24 border-t border-gray-900">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="text-xs tracking-wider text-gray-400 uppercase sticky top-32">
                  Principles
                </div>
              </div>
              <div className="lg:col-span-8 space-y-16">
                <div className="space-y-4">
                  <h3 className="text-3xl font-light tracking-tight">Open</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed max-w-xl">
                    Research should be accessible. Code should be shared.
                    Knowledge should flow freely across institutional boundaries.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-light tracking-tight">Rigorous</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed max-w-xl">
                    We pursue truth through systematic inquiry, mathematical
                    foundations, and empirical validation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-light tracking-tight">Ethical</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed max-w-xl">
                    Advanced AI must be developed responsibly, with consideration
                    for societal impact and human values.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-light tracking-tight">Long-Term</h3>
                  <p className="text-sm font-light text-gray-500 leading-relaxed max-w-xl">
                    We focus on fundamental questions that may take decades to
                    answer but reshape our understanding of intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future */}
        <section className="py-32 px-8 md:px-16 lg:px-24 border-t border-gray-900">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="text-xs tracking-wider text-gray-400 uppercase sticky top-32">
                  The Future
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl font-light leading-relaxed text-gray-400">
                  As intelligence evolves beyond our own boundaries, we face a deeper question: how do we ensure that what we create remains truthful, responsible, and aligned with the values that define what it means to be human?
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
