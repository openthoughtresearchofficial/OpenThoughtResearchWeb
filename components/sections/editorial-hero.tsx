'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Scene = dynamic(() => import('@/components/three/scene').then(mod => mod.Scene), {
  ssr: false,
  loading: () => null,
})

export function EditorialHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Three.js Background */}
      {mounted && !prefersReducedMotion && (
        <div className="absolute inset-0 opacity-40">
          <Scene />
        </div>
      )}

      {/* Grid Container */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center min-h-[80vh]">
          
          {/* Left: Typography - Static */}
          <div className="space-y-8">
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.9] tracking-tight font-light">
              Open
              <br />
              Thought
              <br />
              Research
            </h1>
            
            <div className="space-y-4 max-w-lg">
              <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
                Exploring the Boundaries of Knowledge
              </p>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Investigating the foundational structures of thought, reasoning, systems,
                and the inquiry into Objective Ontology across theoretical and applied domains.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 px-8 h-12"
                asChild
              >
                <Link href="/objective-ontology">Objective Ontology</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 h-12"
                asChild
              >
                <Link href="/research">Research</Link>
              </Button>
            </div>
          </div>

          {/* Right: Logo - Hidden on small screens, scales dynamically */}
          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] xl:max-w-[400px] 2xl:max-w-[500px] aspect-square">
              <Image
                src="/assets/logo/logo.png"
                alt="Open Thought Research"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 0px, (max-width: 1280px) 300px, (max-width: 1536px) 400px, 500px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-30" />
      </div>
    </section>
  )
}
