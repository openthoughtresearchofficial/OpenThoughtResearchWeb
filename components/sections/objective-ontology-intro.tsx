'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function ObjectiveOntologyIntro() {
  return (
    <section className="py-32 px-8 md:px-16 lg:px-24 bg-black border-t border-gray-900">
      <div className="max-w-[1800px] mx-auto">
        {/* Institutional Hierarchy Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase mb-8">
          <span>Foundational Framework</span>
          <span>/</span>
          <span>Open Thought Research</span>
        </div>

        {/* Featured Conceptual Statement */}
        <div className="max-w-5xl mb-24 space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] text-white">
            &ldquo;Before asking how an objective should be optimized, followed, evaluated, or changed, we must investigate what an objective is.&rdquo;
          </h2>

          <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl">
            Objective Ontology is the foundational inquiry into the nature, existence, identity, structure,
            relationships, and dynamics of objectives—conceptually independent of any single discipline or implementation.
          </p>
        </div>

        {/* Central Question & Conceptual Distinctions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-gray-900">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-mono">
              The Central Question
            </span>
            <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">
              &ldquo;What is an objective, what makes it an objective, how does it exist and relate to other things, and how can its structure and transformations be understood?&rdquo;
            </h3>
            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              Objectives are not assumed to be scalar rewards, numerical optimization targets, human intentions,
              or properties exclusive to intelligent systems. We examine objectives as structured entities with
              identities, constraints, dependencies, and contextual evolutions across realities.
            </p>
            <div className="pt-2">
              <Link
                href="/objective-ontology"
                className="inline-flex items-center gap-2 text-sm text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors font-mono text-xs uppercase tracking-wider"
              >
                Explore Objective Ontology Framework
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-900 bg-gray-950/40 hover:border-gray-800 transition-colors space-y-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                Distinction 01 / Ontology & Existence
              </span>
              <h4 className="text-base font-light text-white">
                Concept vs. Occurrence
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Distinguishing an objective as a concept requiring ontological investigation from an objective
                as an intended outcome, purpose, or physical state condition.
              </p>
            </div>

            <div className="p-6 border border-gray-900 bg-gray-950/40 hover:border-gray-800 transition-colors space-y-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                Distinction 02 / Internal Structure
              </span>
              <h4 className="text-base font-light text-white">
                Anatomy & Composition
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Examining objectives as structured entities involving internal components, dependencies,
                inviolable constraints, precedence relations, priorities, and sub-objectives.
              </p>
            </div>

            <div className="p-6 border border-gray-900 bg-gray-950/40 hover:border-gray-800 transition-colors space-y-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                Distinction 03 / Dynamics & Context
              </span>
              <h4 className="text-base font-light text-white">
                Persistence & Transformation
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Investigating how objectives persist, evolve, dissolve, interact, or generate incommensurable
                conflicts across temporal horizons and variable contexts.
              </p>
            </div>

            <div className="p-6 border border-gray-900 bg-gray-950/40 hover:border-gray-800 transition-colors space-y-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                Distinction 04 / Disciplinary Scope
              </span>
              <h4 className="text-base font-light text-white">
                Cross-Disciplinary Translation
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Analyzing how objectives are represented within particular systems—in philosophy, mathematics,
                computation, cognitive science, organizational systems, and artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
