import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Objective Ontology — Open Thought Research',
  description:
    'A foundational inquiry into what objectives are, how they exist, how they are structured, and how they relate to the systems and realities in which they occur.',
}

const formalApproaches = [
  {
    label: 'Illustrative Formulation',
    title: 'Set-Theoretic & Relational Structures',
    description:
      'Objectives investigated as structured tuples over state spaces, constraint subsets, and admissible regions rather than single scalar real numbers. Modeling state spaces S, hard constraint subsets C ⊆ S, teleological target regions T ⊆ S, and admissible relational transitions.',
  },
  {
    label: 'Candidate Model',
    title: 'Directed Acyclic Graphs & Partial Orders',
    description:
      'Representing compound objectives via DAGs and partially ordered sets (O, ⪯), formalizing prerequisite dependencies, non-interfering sub-goals, and multi-dimensional preference topologies that do not require an arbitrary scalar utility function.',
  },
  {
    label: 'Illustrative Model',
    title: 'Dynamical Systems & State Trajectories',
    description:
      'Examining objective persistence and transformation through phase-space trajectories, attractor basins, and stability manifolds under non-stationary environmental feedback and temporal shifts.',
  },
  {
    label: 'Proposed Framework',
    title: 'Constraint Invariants & Boundary Certificates',
    description:
      'Formulating non-negotiable safety, ethical, and physical boundaries as strict invariant sets {s ∈ S | g_k(s) ≤ 0} with barrier certificates, ensuring inviolable limits are preserved prior to optimizing any aspirational target.',
  },
  {
    label: 'Provisional Approach',
    title: 'Temporal & Modal Logics',
    description:
      'Employing Linear Temporal Logic (LTL) and modal operators to specify satisfaction conditions over temporal horizons—formally distinguishing invariant conditions ("always maintained") from terminal milestones ("eventually reached").',
  },
]

const disciplines = [
  {
    name: 'Philosophy',
    contribution: 'Ontology, identity criteria, teleology, relational metaphysics, and epistemological justification.',
  },
  {
    name: 'Mathematics',
    contribution: 'Order theory, category theory, topology, dynamical systems, and candidate axiomatic formalisms.',
  },
  {
    name: 'Computer Science',
    contribution: 'Declarative specifications, formal verification, graph grammars, compilers, and algorithmic complexity.',
  },
  {
    name: 'Artificial Intelligence',
    contribution: 'Goal representation, multi-objective behaviors, reinforcement learning, and autonomous system testbeds.',
  },
  {
    name: 'Cognitive Science',
    contribution: 'Human and animal goal-directed behavior, intentionality, mental schemas, and perceptual grounding.',
  },
  {
    name: 'Ethics',
    contribution: 'Inviolable boundaries, deontological constraints, non-compensatory values, and normative justification.',
  },
  {
    name: 'Systems Research',
    contribution: 'Cybernetics, emergent behavior, institutional mandates, feedback loops, and multi-scale organization.',
  },
]

export default function ObjectiveOntologyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-24 min-h-screen">
        {/* Section A: Introduction */}
        <section className="py-28 px-8 md:px-16 lg:px-24 border-b border-gray-900">
          <div className="max-w-[1400px] mx-auto space-y-12">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase">
              <span>Foundational Research Framework</span>
              <span>/</span>
              <span>Open Thought Research</span>
            </div>

            <div className="space-y-8 max-w-5xl">
              <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.92] font-light tracking-tight">
                Objective
                <br />
                Ontology
              </h1>

              <div className="space-y-6 pt-2">
                <p className="text-2xl md:text-3xl text-gray-200 font-light leading-relaxed">
                  What is an objective, how does it exist, and what constitutes its identity, structure,
                  relationships, and dynamics?
                </p>

                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                  &ldquo;Objective Ontology is a foundational inquiry into the nature of objectives. It
                  investigates what objectives are, how they can be identified and represented, how they relate
                  to other objectives and conditions, and how they may change across contexts and time.&rdquo;
                </p>

                <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-4xl pt-2">
                  The framework is conceptually prior to any single discipline or implementation. Objective
                  Ontology is not defined exclusively through artificial intelligence, optimization
                  algorithms, reward functions, or computational systems. To understand what is possible, we must
                  first investigate what is fundamental: examining what an objective is in its own right before
                  restricting it to any single optimization target or application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: Core Conceptual Premise */}
        <section className="py-24 px-8 md:px-16 lg:px-24 border-b border-gray-900 bg-gray-950/20">
          <div className="max-w-[1400px] mx-auto space-y-12">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase">
              <span>01 / Conceptual Foundation</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                  Beyond Scalar Reduction
                </h2>
                <p className="text-base text-gray-400 font-light leading-relaxed">
                  An objective is not necessarily reducible to a scalar reward, a loss gradient, or a numerical
                  optimization target. In real systems—biological, cognitive, institutional, and
                  computational—objectives exhibit rich structural, relational, and contextual dimensions that
                  cannot be captured by a single real-valued measure.
                </p>
                <div className="p-5 border border-gray-900 bg-black text-xs font-mono text-gray-400 space-y-2">
                  <div className="text-white uppercase tracking-wider text-[11px]">
                    Epistemic Distinction
                  </div>
                  <p className="font-sans text-gray-400 leading-relaxed">
                    These formulations represent proposed concepts, candidate models, and open hypotheses under
                    investigation. Objective Ontology does not claim that a complete scientific ontology or
                    finalized mathematical theory already exists.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 border border-gray-900 divide-y divide-gray-900 bg-black/40">
                <div className="p-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white">
                    Identity & Representation
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                    What preserves an objective across differing formulations, syntactic descriptions,
                    coordinate systems, or computational substrates.
                  </p>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white">
                    Intended Outcomes & Teleology
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                    Distinguishing active teleological orientation and counterfactual resistance to perturbation
                    from passive causal occurrences or unguided physical equilibria.
                  </p>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white">
                    Components, Dependencies & Invariants
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                    Internal decomposition into sub-objectives, prerequisite ordering, and hard boundary
                    constraints that must never be violated, as opposed to soft metrics to maximize.
                  </p>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white">
                    Context, Dynamics & Temporal Change
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                    How objectives persist, adapt under environmental feedback, mutate, drift, or dissolve over
                    time across variable operational regimes.
                  </p>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white">
                    Conflict & Incommensurability
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                    Tensions between incompatible aims, physical resource scarcity, and non-compensatory values
                    that resist legitimate reduction to a common numerical currency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section C: Formal Foundations */}
        <section className="py-28 px-8 md:px-16 lg:px-24 border-b border-gray-900 bg-gray-950/20">
          <div className="max-w-[1400px] mx-auto space-y-16">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase">
                <span>02 / Formal Foundations</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
                Candidate Mathematical Formalisms
              </h2>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                The formal study of objectives investigates how objective-related concepts can be represented
                through mathematical structures, relations, constraints, dynamics, and representations.
                Mathematical expressions represent candidate models under theoretical scrutiny; they do not
                establish ontology merely by being displayed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-12 divide-y divide-gray-900 border border-gray-900 bg-black/50">
                {formalApproaches.map((item, idx) => (
                  <div key={idx} className="p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                    <div className="md:col-span-3 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 border border-gray-800 px-2 py-0.5 inline-block">
                        {item.label}
                      </span>
                      <h3 className="text-lg font-light text-white pt-2">
                        {item.title}
                      </h3>
                    </div>
                    <div className="md:col-span-9">
                      <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-gray-900 bg-black text-xs font-mono text-gray-400 max-w-4xl space-y-2">
              <span className="text-white uppercase tracking-wider text-[11px] block">
                Epistemic Note on Formalization
              </span>
              <p className="font-sans text-gray-400 leading-relaxed">
                Candidate formalizations are evaluated by what they model, what assumptions they require, what
                qualitative phenomena they fail to capture, and what empirical or logical evidence would be
                required to validate or refute them. They remain illustrative formal tools rather than completed
                scientific dogma.
              </p>
            </div>
          </div>
        </section>

        {/* Section D: Scope and Status */}
        <section className="py-28 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto space-y-16">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase">
                <span>03 / Scope & Status</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white">
                Disciplinary Relationships & Status
              </h2>
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                Objective Ontology is an evolving foundational research framework developed by Open Thought
                Research. Multiple disciplines contribute methods, questions, and testbeds without defining or
                owning the framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {disciplines.map((d) => (
                <div
                  key={d.name}
                  className="p-6 border border-gray-900 bg-gray-950/30 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="text-base font-light text-white tracking-tight">
                      {d.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {d.contribution}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-900/60 text-[10px] font-mono text-gray-400">
                    Contributing discipline & application domain
                  </div>
                </div>
              ))}
            </div>

            {/* Concluding Institutional Stance */}
            <div className="p-8 md:p-12 border border-gray-900 bg-gray-950/40 space-y-6 max-w-4xl">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Institutional Research Principle
              </div>
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed italic">
                &ldquo;To understand what is possible, we must first investigate what is fundamental. Open
                Thought Research investigates the foundations of objectives before restricting them to a
                particular application, establishing a disciplined inquiry into what objectives are, how they
                exist, and how their nature shapes thought, reasoning, and systems.&rdquo;
              </p>
              <div className="pt-2">
                <Link
                  href="/projectresearch"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors"
                >
                  View Related Project Research
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
