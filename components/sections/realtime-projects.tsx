'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export type Project = {
  id: string
  number: string
  title: string
  description: string
  focus: string[]
  created_at?: string
}

interface RealtimeProjectsProps {
  initialProjects: Project[]
}

export function RealtimeProjects({ initialProjects }: RealtimeProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)

  useEffect(() => {
    // Initial fetch to make sure we have the absolute latest
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('number', { ascending: true })

      if (!error && data) {
        setProjects(data)
      }
    }

    // Only fetch if Supabase URL is configured
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
          console.log('Real-time change received:', payload)

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

  return (
    <div className="max-w-[1800px] mx-auto space-y-32">
      {projects.map((area) => (
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
            {area.focus?.map((item, i) => (
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
      {projects.length === 0 && (
        <div className="text-center text-gray-500 py-32">
          To be updated
        </div>
      )}
    </div>
  )
}
