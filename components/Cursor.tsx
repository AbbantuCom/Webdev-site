'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return

    const el = cursorRef.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)

    const targets = document.querySelectorAll('a, button, [data-cursor]')
    targets.forEach(t => {
      t.addEventListener('mouseenter', () => el.classList.add('grow'))
      t.addEventListener('mouseleave', () => el.classList.remove('grow'))
    })

    return () => document.removeEventListener('mousemove', move)
  }, [])

  return <div id="aab-cursor" ref={cursorRef} />
}
