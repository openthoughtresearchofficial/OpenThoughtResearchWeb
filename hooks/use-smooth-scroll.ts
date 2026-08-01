'use client'

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      return
    }

    let rafId: number
    let targetY = window.scrollY

    const smoothScroll = () => {
      const currentY = window.scrollY
      const diff = targetY - currentY
      
      if (Math.abs(diff) > 1) {
        window.scrollTo(0, currentY + diff * 0.1)
        rafId = requestAnimationFrame(smoothScroll)
      }
    }

    const handleWheel = (e: WheelEvent) => {
      targetY += e.deltaY
      targetY = Math.max(0, Math.min(targetY, document.body.scrollHeight - window.innerHeight))
      
      if (!rafId) {
        rafId = requestAnimationFrame(smoothScroll)
      }
    }

    // Uncomment to enable custom smooth scrolling
    // window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      // window.removeEventListener('wheel', handleWheel)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])
}
