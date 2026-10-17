'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function FoundationsOfResearch() {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-black border-t border-gray-900">
      <div className="max-w-[1800px] mx-auto space-y-24">
        {/* Section Label */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase">
          <span>Foundations of Research</span>
          <span>/</span>
          <span>Open Thought Research</span>
        </div>

        {/* Hero Title & Lead Inquiry */}
        <div className="max-w-5xl space-y-8">
          <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-light tracking-tight leading-[0.95] text-white">
            Research
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed">
            An inquiry into the fundamental questions, underlying structures, and unexplored possibilities that
            shape our understanding of the world.
          </p>

          <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-4xl pt-2">
            &ldquo;Open Thought Research investigates ideas at their foundations. We question assumptions,
            explore unfamiliar connections, develop conceptual frameworks, and pursue deeper understanding
            through theoretical inquiry, mathematical reasoning, computational investigation, and
            interdisciplinary research.&rdquo;
          </p>
        </div>

        {/* Two-Column Grid: Research Philosophy & Featured Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-gray-900">
          {/* Left Column: Research Philosophy */}
          <div className="lg:col-span-6 p-8 md:p-10 border border-gray-900 bg-gray-950/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono block">
                Research Philosophy
              </span>
              <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed italic">
                &ldquo;Meaningful research begins with curiosity and progresses through questioning,
                investigation, critical examination, and the refinement of ideas. We seek not only to discover
                answers, but also to understand the assumptions, structures, and questions that make new
                discoveries possible.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-gray-900/60 text-xs text-gray-400 font-mono">
              Inquiry • Conceptual Scaffolding • Multi-Disciplinary Rigor
            </div>
          </div>

          {/* Right Column: Featured Research Framework */}
          <div className="lg:col-span-6 p-8 md:p-10 border border-gray-900 bg-gray-950/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono block">
                Featured Research Framework
              </span>
              <h3 className="text-2xl font-light text-white tracking-tight">
                Objective Ontology
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                &ldquo;An ongoing foundational inquiry into the nature, identity, structure, relationships, and
                dynamics of objectives. This framework examines questions that may be explored independently of
                any single discipline, with potential connections to philosophy, mathematics, computation,
                artificial intelligence, cognitive science, and systems research.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-gray-900/60">
              <Link
                href="/objective-ontology"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors"
              >
                Explore the Objective Ontology Framework →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const ObjectiveOntologyIntro = FoundationsOfResearch
