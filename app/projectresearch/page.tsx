import { Metadata } from 'next'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import Link from 'next/link'
import { RealtimeProjects, Project } from '@/components/sections/realtime-projects'

export const metadata: Metadata = {
  title: 'Project Research — Open Thought Research',
  description: 'Active and emerging research projects investigating mathematical reasoning, objective-driven systems, computational architectures, and the foundations of thought.',
}

const initialProjects: Project[] = [
  {
    id: 'oo-formalisms',
    number: '01',
    category: 'Objective Ontology',
    status: 'Active Investigation',
    title: 'Objective Representation & Invariance Formalisms',
    description: 'Investigating non-scalar representations of objectives within autonomous agents, replacing scalar reward functions with categorical, poset-based, and temporal logic specifications.',
    focus: [
      'Non-Scalar Objective Formulations',
      'Linear Temporal Logic Specifications',
      'Category-Theoretic Functors for Goal Systems',
      'Partial Orders on Preference Manifolds',
    ],
    research_question: 'How can objectives be formally represented without collapsing qualitative, multi-dimensional desiderata into scalar metrics?',
    conceptual_motivation: 'Collapsing complex objectives into single scalar real values produces unintended specification gaming, Goodhart degradation, and loss of trade-off geometry.',
    methodological_direction: 'Constructing symbolic-algebraic mappings from declarative goal statements to invariant state trajectories using posets and temporal logics.',
    open_problems: 'Tractable computational evaluation of non-scalar goal satisfaction in high-dimensional continuous state spaces.',
  },
  {
    id: 'oo-decomposition',
    number: '02',
    category: 'Objective Ontology',
    status: 'Conceptual Formulation',
    title: 'Hierarchical Objective Decomposition & Graph Grammars',
    description: 'Developing graph-grammatical and algebraic methods to study how compound goals decompose into dependency DAGs of sub-objectives, invariant constraints, and prerequisites.',
    focus: [
      'Directed Acyclic Goal Graphs',
      'Sub-Objective Interference Analysis',
      'Compositional Invariance Proofs',
      'Dynamic Prerequisite Propagation',
    ],
    research_question: 'Under what formal conditions does the local fulfillment of sub-objectives mathematically guarantee global objective integrity?',
    conceptual_motivation: 'Complex intelligent tasks are decomposed by necessity; yet sub-goal coupling frequently introduces destructive interference and perverse side-effects.',
    methodological_direction: 'Applying graph rewriting systems and categorical compositionality to model objective generation, pruning, and verification.',
    open_problems: 'Proving safety invariants under adversarial or non-stationary transition dynamics across sub-objective interfaces.',
  },
  {
    id: 'oo-conflict',
    number: '03',
    category: 'Objective Ontology',
    status: 'Active Investigation',
    title: 'Multi-Objective Pareto Boundary & Conflict Geometry',
    description: 'Analyzing the topological and geometric structures of objective conflict, constraint infeasibility, and arbitration mechanisms in multi-criterion systems.',
    focus: [
      'Non-Convex Pareto Manifolds',
      'Constraint Infeasibility Detection',
      'Deontological Safety Boundaries',
      'Dynamic Priority Re-weighting',
    ],
    research_question: 'How should mutually incompatible objectives and strict safety constraints be represented and resolved without arbitrary heuristic ranking?',
    conceptual_motivation: 'Real-world decision-making involves competing priorities that cannot be traded off smoothly. We need formal languages for inviolable constraints versus negotiable targets.',
    methodological_direction: 'Differential geometric characterization of Pareto frontiers combined with barrier certificates for forbidden state exclusion.',
    open_problems: 'Arbitration between incommensurable ethical constraints in extreme or resource-starved scenarios.',
  },
  {
    id: 'ai-arch',
    number: '04',
    category: 'Foundations of Thought',
    status: 'Active Investigation',
    title: 'Neural Architecture & Autonomous Reasoning Systems',
    description: 'Advancing machine learning architectures, recurrent state formulations, and autonomous systems through rigorous theoretical foundations and structured goal interfaces.',
    focus: [
      'Structured Latent State Spaces',
      'Autonomous Inference Loops',
      'Continuous-Time Dynamical Modeling',
      'Sample-Efficient Abstraction',
    ],
    research_question: 'How can neural models maintain stable, transparent long-horizon goal representations across variable contexts?',
    conceptual_motivation: 'Current deep models frequently drift or suffer catastrophic forgetting when optimizing over extended horizons without explicit ontological scaffolding.',
    methodological_direction: 'Hybrid neuro-symbolic architectures binding neural pattern recognition with formal invariant constraints.',
    open_problems: 'Smooth differentiable integration between discrete logical proofs and continuous latent representations.',
  },
  {
    id: 'comp-reasoning',
    number: '05',
    category: 'Foundations of Thought',
    status: 'Active Investigation',
    title: 'Computational Reasoning & Automated Verification',
    description: 'Formal methods, symbolic AI, and automated theorem proving to verify the correctness, logical consistency, and safety of computational goal structures.',
    focus: [
      'Interactive Theorem Proving',
      'Logical Consistency Verification',
      'Automated Contradiction Detection',
      'Formal Specification Languages',
    ],
    research_question: 'Can static verification detect latent contradictions in an autonomous agent\'s objective system prior to deployment?',
    conceptual_motivation: 'Safety and reliability require mathematically certifiable bounds on behavior rather than purely empirical testing over finite samples.',
    methodological_direction: 'Encoding objective constraints into SMT solvers and proof assistants (e.g. Lean, Coq) for compile-time verification.',
    open_problems: 'Scalability of formal verification to open-ended, non-deterministic environmental models.',
  },
  {
    id: 'sci-discovery',
    number: '06',
    category: 'Scientific Discovery',
    status: 'Active Investigation',
    title: 'AI-Accelerated Scientific Discovery & Physical Modeling',
    description: 'Computational methods for automated hypothesis generation, experimental design, and molecular dynamics in physics, chemistry, and biology.',
    focus: [
      'Molecular Conformation Dynamics',
      'Autonomous Experimental Workflows',
      'Symmetry-Preserving Neural Operators',
      'Physical Constraint Embedding',
    ],
    research_question: 'How can objective functions for scientific discovery balance exploratory novelty against physical conservation laws?',
    conceptual_motivation: 'Scientific discovery requires exploring beyond existing distributions while strictly honoring inviolable thermodynamic and physical invariants.',
    methodological_direction: 'Physics-informed neural operators with hard conservation constraints embedded in the manifold geometry.',
    open_problems: 'Generalization across catastrophic phase transitions and unknown reaction pathways.',
  },
]

export default function ProjectResearchPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white pt-24">
        {/* Hero */}
        <section className="py-32 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1800px] mx-auto space-y-8">
            <div className="text-xs font-mono tracking-widest text-gray-400 uppercase">
              Investigations & Initiatives
            </div>
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-light tracking-tight">
              Project Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl font-light leading-relaxed">
              Our research explores the structures, mechanisms, and principles underlying intelligence.
              These projects represent evolving investigations into mathematical reasoning, objective-driven
              systems, computational architectures, and the foundations of thought.
            </p>
          </div>
        </section>

        {/* Realtime Supabase Component */}
        <section className="pb-32 px-8 md:px-16 lg:px-24">
          <RealtimeProjects initialProjects={initialProjects} />
        </section>

        {/* CTA */}
        <section className="py-32 px-8 md:px-16 lg:px-24 border-t border-gray-900">
          <div className="max-w-[1800px] mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Interested in Collaboration?
            </h2>
            <p className="text-gray-400 font-light max-w-xl mx-auto text-sm">
              We welcome dialogue with researchers working on formal reasoning, objective representations,
              and foundations of intelligence.
            </p>
            <div>
              <Link
                href="https://github.com/openthoughtresearchofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-light tracking-wider text-gray-400 hover:text-white transition-colors border-b border-gray-800 hover:border-white pb-1"
              >
                View Research Repositories on GitHub →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
