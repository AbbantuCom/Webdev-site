'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(140px, 18vw, 200px) 24px clamp(80px, 10vw, 120px)',
        overflow: 'hidden',
      }}
    >
      {/* ── Background layers ── */}

      {/* African geometric pattern */}
      <div className="african-pattern-bg" style={{ opacity: 1 }} />

      {/* Warm gold light leak — top right */}
      <div style={{
        position: 'absolute',
        top: '-10%', right: '-5%',
        width: '60vw', height: '60vw',
        maxWidth: 700, maxHeight: 700,
        background: 'radial-gradient(circle at 70% 30%, rgba(107,66,38,0.18) 0%, transparent 65%)',
        animation: 'lightLeak 12s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Deep charcoal light — bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '-15%', left: '-10%',
        width: '55vw', height: '55vw',
        maxWidth: 650, maxHeight: 650,
        background: 'radial-gradient(circle at 30% 70%, rgba(107,66,38,0.12) 0%, transparent 65%)',
        animation: 'lightLeak 16s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      {/* Floating glass orbs */}
      {[
        { top: '18%', left: '7%',  size: 220, delay: 0,  color: 'rgba(107,66,38,0.06)' },
        { top: '62%', left: '4%',  size: 120, delay: 2,  color: 'rgba(107,66,38,0.04)' },
        { top: '14%', right: '6%', size: 300, delay: 4,  color: 'rgba(107,66,38,0.07)'  },
        { top: '68%', right: '10%',size: 100, delay: 1.5,color: 'rgba(107,66,38,0.05)' },
        { top: '42%', left: '48%', size: 70,  delay: 3,  color: 'rgba(107,66,38,0.04)' },
      ].map((orb, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: orb.top,
            left: (orb as { left?: string }).left,
            right: (orb as { right?: string }).right,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: orb.color,
            border: '1px solid rgba(107,66,38,0.08)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            animation: `floatSlow ${14 + i * 2}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 960 }}>

 

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(44px, 8vw, 96px)',
            fontWeight: 500,
            lineHeight: 1.08,
            color: 'var(--cream)',
            letterSpacing: '-0.01em',
          }}
        >
         Websites, Tailored to  {' '}
          <em style={{
            fontStyle: 'italic',
            color: 'var(--gold-light)',
          }}>
            Your Brand  {' '}<br/>
          </em>
         Built to Perform.<br />
        {' '}
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          style={{
            marginTop: 32,
            fontSize: 'clamp(17px, 2vw, 21px)',
            color: 'var(--sand)',
            maxWidth: 620,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.7,
          }}
        >
          Interactive websites, powerful platforms, creativity, and innovation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          style={{
            marginTop: 52,
            display: 'flex',
            gap: 20,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="#work" className="btn-primary">
            <span>View Our Work</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#services" className="btn-ghost">
            See How It Works
          </a>
        </motion.div>

        {/* Gold divider with diamond */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease }}
          style={{ marginTop: 80 }}
        >
          <div className="gold-divider">
            <div className="gold-divider-diamond" />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{
          position: 'absolute',
          bottom: 48,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}
      >
        <span>Scroll</span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'pulseSlow 2s ease-in-out infinite',
        }} />
      </motion.div>
    </section>
  )
}
