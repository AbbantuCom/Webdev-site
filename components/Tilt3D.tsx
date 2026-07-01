'use client'
import { useRef, useState, type ReactNode, type CSSProperties, type MouseEvent } from 'react'

interface Props {
  children: ReactNode
  maxTilt?: number
  perspective?: number
  scale?: number
  style?: CSSProperties
  className?: string
}

export default function Tilt3D({
  children,
  maxTilt = 10,
  perspective = 900,
  scale = 1.025,
  style,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0, active: false })
  const [glare, setGlare] = useState({ x: 50, y: 50 })
  const rafRef = useRef<number>(0)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const nx = (e.clientX - cx) / (rect.width / 2)   // -1 to 1
      const ny = (e.clientY - cy) / (rect.height / 2)  // -1 to 1
      setTilt({ rotX: -ny * maxTilt, rotY: nx * maxTilt, active: true })
      setGlare({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    })
  }

  const onLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    setTilt({ rotX: 0, rotY: 0, active: false })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        ...style,
        transform: tilt.active
          ? `perspective(${perspective}px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) scale(${scale})`
          : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
        transition: tilt.active
          ? 'transform 0.1s ease-out'
          : 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {/* Specular glare — moves with cursor */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 10,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18) 0%, transparent 55%)`,
          opacity: tilt.active ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />
      {children}
    </div>
  )
}
