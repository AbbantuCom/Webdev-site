'use client'
import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#work',     label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about',    label: 'About' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobile]   = useState(false)
  const [active, setActive]       = useState('home')
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(sec => {
        if (window.scrollY >= (sec as HTMLElement).offsetTop - 140)
          setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobile(false)

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed', inset: 0, zIndex: 998,
            background: 'rgba(44,26,14,0.35)',
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      <header
        ref={headerRef}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 999,
          padding: scrolled ? '14px 0' : '24px 0',
          background: scrolled
            ? 'rgba(245,240,232,0.92)'
            : 'rgba(245,240,232,0.6)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderBottom: scrolled
            ? '1px solid rgba(107,66,38,0.18)'
            : '1px solid rgba(107,66,38,0.08)',
          transition: 'all 0.45s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div className="container">
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* Logo */}
            <a
              href="#home"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'baseline',
                lineHeight: 1,
                textDecoration: 'none',
              }}
            >
              <span style={{ color: 'var(--sand)' }}>Web</span>
              <span style={{ color: 'var(--cream)' }}>dev</span>
            </a>

            {/* Desktop links */}
            <ul style={{
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              listStyle: 'none',
            }} className="desktop-nav">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      color: active === href.slice(1)
                        ? 'var(--gold-light)'
                        : 'var(--sand)',
                      position: 'relative',
                      paddingBottom: 4,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {label}
                    {active === href.slice(1) && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0, left: 0, right: 0,
                        height: 1,
                        background: 'var(--gold)',
                        borderRadius: 1,
                      }} />
                    )}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn-primary" style={{ fontSize: 14, padding: '12px 28px' }}>
                  <span>Let&rsquo;s Talk</span>
                </a>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobile(v => !v)}
              aria-label="Toggle menu"
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: 5,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
              }}
              className="mobile-toggle"
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: 24, height: 2,
                  background: 'var(--cream)',
                  borderRadius: 2,
                  display: 'block',
                  transition: 'all 0.3s ease',
                  transform: mobileOpen
                    ? i === 0 ? 'translateY(7px) rotate(45deg)'
                    : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                    : 'scaleX(0)'
                    : 'none',
                }} />
              ))}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position: 'fixed',
        top: 0, right: mobileOpen ? 0 : '-100%',
        width: 300, height: '100vh',
        zIndex: 999,
        background: 'rgba(245,240,232,0.97)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        borderLeft: '1px solid var(--glass-border)',
        padding: '100px 40px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        transition: 'right 0.45s cubic-bezier(0.22,1,0.36,1)',
      }}>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '24px',
              fontWeight: 500,
              color: 'var(--cream)',
              padding: '12px 0',
              borderBottom: '1px solid var(--glass-border)',
              transition: 'color 0.3s ease',
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="btn-primary"
          style={{ marginTop: 32, textAlign: 'center', justifyContent: 'center' }}
        >
          <span>Let&rsquo;s Talk</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}
