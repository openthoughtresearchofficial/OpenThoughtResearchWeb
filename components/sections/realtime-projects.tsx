'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { ChevronDown, ChevronUp, Filter } from 'lucide-react'

export type Project = {
  id: string
  number: string
  title: string
  category?: string
  status?: string
  description: string
  focus: string[]
  research_question?: string
  conceptual_motivation?: string
  methodological_direction?: string
  open_problems?: string
  created_at?: string
}

interface RealtimeProjectsProps {
  initialProjects: Project[]
}

export function RealtimeProjects({ initialProjects }: RealtimeProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null)

  useEffect(() => {
    // Initial fetch to make sure we have the absolute latest from Supabase if configured
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('number', { ascending: true })

      if (!error && data && data.length > 0) {
        setProjects(data)
      }
    }

    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      fetchProjects()
    }

    // Subscribe to real-time changes
    const channel = supabase
      .channel('projects-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'projects' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setProjects((prev) => {
              const newProjects = [...prev, payload.new as Project]
              return newProjects.sort((a, b) => (a.number || '').localeCompare(b.number || ''))
            })
          }
          if (payload.eventType === 'UPDATE') {
            setProjects((prev) => {
              const updatedProjects = prev.map((p) =>
                p.id === payload.new.id ? (payload.new as Project) : p
              )
              return updatedProjects.sort((a, b) => (a.number || '').localeCompare(b.number || ''))
            })
          }
          if (payload.eventType === 'DELETE') {
            setProjects((prev) => prev.filter((p) => p.id !== payload.old.id))
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // Categories extracted from projects
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category).filter(Boolean) as string[]))]

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const toggleExpand = (id: string) => {
    setExpandedProjectId(prev => prev === id ? null : id)
  }

  return (
    <div className="max-w-[1800px] mx-auto space-y-16">
      {/* Category Filter Pills */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-3 border-b border-gray-900 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mr-2 uppercase">
            <Filter className="w-3.5 h-3.5" />
            Domain Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono px-4 py-2 transition-all border ${
                selectedCategory === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-black text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Projects List */}
      <div className="space-y-24">
        {filteredProjects.map((area) => {
          const isExpanded = expandedProjectId === area.id
          const hasExtendedDetails = Boolean(
            area.research_question ||
            area.conceptual_motivation ||
            area.methodological_direction ||
            area.open_problems
          )

          return (
            <article
              key={area.id}
              className="border-t border-gray-900 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 group"
            >
              {/* Number and Meta */}
              <div className="lg:col-span-2 space-y-3">
                <div className="text-6xl md:text-7xl font-light text-gray-400 sticky top-32">
                  {area.number}
                </div>
                {area.category && (
                  <div className="text-[11px] font-mono tracking-wider text-gray-400 uppercase pt-2">
                    {area.category}
                  </div>
                )}
                {area.status && (
                  <div className="inline-block text-[10px] font-mono uppercase px-2 py-0.5 border border-gray-800 text-gray-400">
                    {area.status}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                  {area.title}
                </h2>
                <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                  {area.description}
                </p>

                {/* Extended Details Drawer */}
                {hasExtendedDetails && (
                  <div className="pt-4">
                    <button
                      onClick={() => toggleExpand(area.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white border-b border-gray-800 hover:border-white pb-1 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          Hide Investigation Details
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          Examine Research Framework & Open Problems
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-6 p-6 border border-gray-800 bg-gray-950/70 space-y-6 text-sm">
                        {area.research_question && (
                          <div className="space-y-1">
                            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                              Core Research Question
                            </span>
                            <p className="text-gray-200 font-light italic">
                              &ldquo;{area.research_question}&rdquo;
                            </p>
                          </div>
                        )}

                        {area.conceptual_motivation && (
                          <div className="space-y-1">
                            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                              Conceptual Motivation
                            </span>
                            <p className="text-gray-400 font-light leading-relaxed">
                              {area.conceptual_motivation}
                            </p>
                          </div>
                        )}

                        {area.methodological_direction && (
                          <div className="space-y-1">
                            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                              Methodological Direction
                            </span>
                            <p className="text-gray-400 font-light leading-relaxed">
                              {area.methodological_direction}
                            </p>
                          </div>
                        )}

                        {area.open_problems && (
                          <div className="space-y-1">
                            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                              Open Problems
                            </span>
                            <p className="text-gray-400 font-light leading-relaxed pl-3 border-l border-gray-800">
                              {area.open_problems}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Focus Areas */}
              <div className="lg:col-span-4 space-y-4">
                <div className="text-xs tracking-wider text-gray-400 uppercase font-mono">
                  Key Focus Tracks
                </div>
                {area.focus?.map((item, i) => (
                  <div
                    key={i}
                    className="text-sm font-light text-gray-400 border-l border-gray-800 pl-4 py-0.5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          )
        })}

        {filteredProjects.length === 0 && (
          <div className="text-center text-gray-500 py-32 font-light">
            No projects found in this domain. To be updated.
          </div>
        )}
      </div>
    </div>
  )
}
