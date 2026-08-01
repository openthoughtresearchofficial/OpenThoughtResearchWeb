'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting

        setIsIntersecting(isElementIntersecting)

        if (isElementIntersecting) {
          setHasIntersected(true)

          if (freezeOnceVisible && node) {
            observer.unobserve(node)
          }
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(node)

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [threshold, root, rootMargin, freezeOnceVisible])

  return { ref, isIntersecting, hasIntersected }
}
