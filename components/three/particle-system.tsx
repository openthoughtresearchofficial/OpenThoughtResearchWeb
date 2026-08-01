'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleSystemProps {
  count?: number
}

export function ParticleSystem({ count = 800 }: ParticleSystemProps) { // Reduced from 1000
  const pointsRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)

  // Generate particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const radius = 12

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      const x = radius * Math.sin(theta) * Math.cos(phi) * Math.random()
      const y = radius * Math.sin(theta) * Math.sin(phi) * Math.random()
      const z = radius * Math.cos(theta) * Math.random()

      positions.set([x, y, z], i * 3)
    }

    return positions
  }, [count])

  // Generate procedural connection lines
  const linesGeometry = useMemo(() => {
    const linePositions: number[] = []
    const particles = []
    
    // Convert positions to particle array
    for (let i = 0; i < count; i++) {
      particles.push({
        x: particlesPosition[i * 3],
        y: particlesPosition[i * 3 + 1],
        z: particlesPosition[i * 3 + 2],
      })
    }

    // Connect nearby particles - reduced complexity
    const maxDistance = 3
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dz = particles[i].z - particles[j].z
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < maxDistance && Math.random() > 0.97) { // Increased threshold for fewer lines
          linePositions.push(
            particles[i].x, particles[i].y, particles[i].z,
            particles[j].x, particles[j].y, particles[j].z
          )
        }
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
    return geometry
  }, [particlesPosition, count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (pointsRef.current) {
      // Slow orbital rotation
      pointsRef.current.rotation.y = time * 0.02
      pointsRef.current.rotation.x = Math.sin(time * 0.01) * 0.1
    }
    
    if (linesRef.current) {
      linesRef.current.rotation.y = time * 0.02
      linesRef.current.rotation.x = Math.sin(time * 0.01) * 0.1
    }
  })

  return (
    <group>
      {/* Particles */}
      <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Procedural Lines */}
      <lineSegments ref={linesRef} geometry={linesGeometry}>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}
