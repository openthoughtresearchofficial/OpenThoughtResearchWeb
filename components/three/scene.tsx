'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { ParticleSystem } from './particle-system'

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      className="absolute inset-0 -z-10"
      dpr={[1, 1.5]} // Reduced from [1, 2] for better performance
      gl={{ 
        alpha: true, 
        antialias: false, // Disabled for better performance
        powerPreference: 'high-performance',
        stencil: false,
        depth: false,
      }}
      performance={{ min: 0.5 }} // Performance optimization
    >
      <Suspense fallback={null}>
        <ParticleSystem />
      </Suspense>
    </Canvas>
  )
}
