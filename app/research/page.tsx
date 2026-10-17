import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Research — Open Thought Research',
  description: 'Our research spans artificial intelligence, computational reasoning, scientific discovery, mathematics, cognitive science, and philosophy.',
}

const researchAreas = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence',
    description: 'Advancing machine learning architectures and autonomous systems through rigorous theoretical foundations and practical implementations.',
    focus: ['Neural Architecture', 'Reinforcement Learning', 'Generative Models'],
  },
  {
    id: 'reasoning',
    number: '02',
    title: 'Computational Reasoning',
    description: 'Formal methods and symbolic systems for logical inference, automated theorem proving, and verified computation.',
    focus: ['Theorem Proving', 'Logic Programming', 'Formal Verification'],
  },
  {
    id: 'discovery',
    number: '03',
    title: 'Scientific Discovery',
    description: 'AI-accelerated research in physics, chemistry, and biology. Computational methods for molecular dynamics and materials design.',
    focus: ['Molecular Dynamics', 'Protein Folding', 'Materials Science'],
  },
  {
    id: 'mathematics',
    number: '04',
    title: 'Mathematics',
    description: 'Pure and applied mathematics for AI systems. Category theory, information theory, and topological methods.',
    focus: ['Category Theory', 'Information Theory', 'Topology'],
  },
  {
    id: 'cognitive',
    number: '05',
    title: 'Cognitive Science',
    description: 'Understanding biological and artificial cognition through computational modeling and neuroscience.',
    focus: ['Computational Neuroscience', 'Cognitive Architectures', 'Consciousness'],
  },
  {
    id: 'philosophy',
    number: '06',
    title: 'Philosophy',
    description: 'Ethics, epistemology, and philosophy of mind as they relate to artificial intelligence and human cognition.',
    focus: ['AI Ethics', 'Epistemology', 'Philosophy of Mind'],
  },
]

export default function ResearchPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-24">
        {/* Hero */}
        <section className="py-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1800px] mx-auto space-y-8">
            <div className="text-xs font-mono tracking-widest text-gray-400 uppercase">
              Foundations of Research
            </div>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-light tracking-tight">
              Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl font-light leading-relaxed">
              An inquiry into the fundamental questions, underlying structures, and unexplored possibilities that
              shape our understanding of the world.
            </p>
            <p className="text-base text-gray-400 max-w-3xl font-light leading-relaxed">
              &ldquo;Open Thought Research investigates ideas at their foundations. We question assumptions,
              explore unfamiliar connections, develop conceptual frameworks, and pursue deeper understanding
              through theoretical inquiry, mathematical reasoning, computational investigation, and
              interdisciplinary research.&rdquo;
            </p>
          </div>
        </section>

        {/* Research Areas - Modular Editorial Layout */}
        <section className="pb-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1800px] mx-auto space-y-32">
            {researchAreas.map((area) => (
              <article
                key={area.id}
                className="border-t border-gray-900 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                {/* Number */}
                <div className="lg:col-span-2">
                  <div className="text-6xl md:text-7xl font-light text-gray-400 sticky top-32">
                    {area.number}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                    {area.title}
                  </h2>
                  <p className="text-lg text-gray-400 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="text-xs tracking-wider text-gray-400 uppercase">
                    Key Focus
                  </div>
                  {area.focus.map((item, i) => (
                    <div
                      key={i}
                      className="text-sm font-light text-gray-500 border-l border-gray-800 pl-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Featured Research Framework Callout */}
        <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-gray-900 bg-gray-950/40">
          <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="text-xs font-mono tracking-widest text-gray-400 uppercase">
                Featured Research Framework
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                Objective Ontology
              </h2>
              <p className="text-gray-400 text-base font-light leading-relaxed">
                An ongoing foundational inquiry into the nature, identity, structure, relationships, and
                dynamics of objectives. This framework examines questions that may be explored independently of
                any single discipline, with potential connections to philosophy, mathematics, computation,
                artificial intelligence, cognitive science, and systems research.
              </p>
            </div>
            <div>
              <Link
                href="/objective-ontology"
                className="inline-block px-8 py-4 border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-white transition-colors"
              >
                Explore the Objective Ontology Framework →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-8 md:px-16 lg:px-24 border-t border-gray-900">
          <div className="max-w-[1800px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
              Interested in Collaboration?
            </h2>
            <Link
              href="https://github.com/openthoughtresearchofficial"
              className="inline-block text-sm font-light tracking-wider text-gray-400 hover:text-white transition-colors border-b border-gray-800 hover:border-white"
            >
              View on GitHub →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
