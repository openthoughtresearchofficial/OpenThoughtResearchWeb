import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { RealtimeProjects } from '@/components/sections/realtime-projects'

export const metadata: Metadata = {
  title: 'Project Research — Open Thought Research',
  description: '',
}

const initialProjects = [
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

export default function ProjectResearchPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-24">
        {/* Hero */}
        <section className="py-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1800px] mx-auto">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-light tracking-tight mb-12">
              Project Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
              Our active and emerging research projects !!!
            </p>
          </div>
        </section>

        {/* Realtime Supabase Component */}
        <section className="pb-32 px-8 md:px-16 lg:px-24">
          <RealtimeProjects initialProjects={initialProjects} />
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
