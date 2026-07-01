'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function CTABanner() {
  return (
    <section
      id="contact"
      style={{
        background: 'var(--elevated)',
        borderTop: '1px solid var(--glass-border)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background pattern */}
      <div className="african-pattern-bg" style={{ opacity: 0.8 }} />

      {/* Gold light orbs */}
      <div style={{
        position: 'absolute',
        top: '-30%', left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw', maxWidth: 900,
        height: '80vw', maxHeight: 900,
        background: 'radial-gradient(circle at 50% 50%, rgba(107,66,38,0.12) 0%, transparent 60%)',
        pointerEvents: 'none',
        animation: 'pulseSlow 6s ease-in-out infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: 36,
            padding: '8px 20px',
            border: '1px solid var(--gold-border)',
            borderRadius: 100,
            background: 'rgba(107,66,38,0.06)',
          }}
        >
          Start a Project
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 500,
            color: 'var(--cream)',
            lineHeight: 1.1,
            marginBottom: 28,
          }}
        >
          Ready to Build Something<br />
          <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>
            Remarkable?
          </em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.22, ease }}
          style={{
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            color: 'var(--sand)',
            maxWidth: 560,
            margin: '0 auto 56px',
            lineHeight: 1.75,
          }}
        >
          Every project includes a content management system.
          No developer needed after launch — you stay in control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
          style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="mailto:rafikifanaka@gmail.com"
            className="btn-primary"
            style={{ fontSize: 16, padding: '18px 44px' }}
          >
            <span>Start Your Project</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="mailto:rafikifanaka@gmail.com"
            className="btn-ghost"
            style={{ fontSize: 16 }}
          >
            rafikifanaka@gmail.com
          </a>
        </motion.div>

        {/* Gold divider diamond row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            marginTop: 80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {[0,1,2,3,4,5,6].map(i => (
            <div key={i} style={{
              width: i === 3 ? 8 : 5,
              height: i === 3 ? 8 : 5,
              background: 'var(--gold)',
              transform: 'rotate(45deg)',
              opacity: i === 3 ? 0.7 : 0.25 + (0.1 * Math.abs(i - 3)),
              transition: 'opacity 0.3s',
            }} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
