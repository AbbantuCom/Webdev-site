'use client'
import { motion } from 'framer-motion'
import Tilt3D from './Tilt3D'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const SERVICES = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
    title: 'Interactive Websites',
    body: 'Animations, micro-interactions, and scroll effects that make every visit feel alive and intentional.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 14h6" />
      </svg>
    ),
    title: 'CMS Integration',
    body: 'Update your own content, images, and pages anytime — no developer required after launch.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z" />
      </svg>
    ),
    title: 'Visual Storytelling',
    body: 'Design that communicates your brand\'s message clearly, confidently, and beautifully across all screens.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: 'var(--charcoal)',
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      <div className="container">
        <motion.div
          className="centered-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            What We Build
          </div>
          <h2 className="section-title">Three Pillars Behind<br />Every Project We Ship</h2>
          <p className="section-subtitle">
            Each engagement is designed around your goals — not templates.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginTop: 72,
        }}
          className="services-grid"
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease }}
            >
            <Tilt3D
              maxTilt={9}
              perspective={900}
              scale={1.02}
              style={{
                background: 'var(--glass)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid var(--glass-border)',
                borderRadius: 20,
                padding: 'clamp(36px, 4vw, 52px)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                boxShadow: '0 4px 24px rgba(107,66,38,0.08)',
              }}
            >
              {/* Gold top accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 32, right: 32,
                height: 1,
                background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                opacity: 0.6,
              }} />

              {/* Subtle corner Adinkra motif */}
              <div style={{
                position: 'absolute',
                top: 16, right: 16,
                width: 32, height: 32,
                borderTop: '1px solid var(--gold-border)',
                borderRight: '1px solid var(--gold-border)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: 16, left: 16,
                width: 32, height: 32,
                borderBottom: '1px solid var(--gold-border)',
                borderLeft: '1px solid var(--gold-border)',
              }} />

              {/* Icon */}
              <div style={{
                width: 64, height: 64,
                borderRadius: 16,
                background: 'rgba(107,66,38,0.1)',
                border: '1px solid var(--gold-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold)',
                marginBottom: 28,
              }}>
                {svc.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(20px, 2vw, 24px)',
                fontWeight: 500,
                color: 'var(--cream)',
                marginBottom: 14,
                lineHeight: 1.3,
              }}>
                {svc.title}
              </h3>

              <p style={{
                fontSize: 16,
                color: 'var(--sand)',
                lineHeight: 1.75,
              }}>
                {svc.body}
              </p>

              {/* Bottom gold line on hover reveal */}
              {/* Bottom gold line */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 32, right: 32,
                height: 1,
                background: 'linear-gradient(90deg, transparent, var(--gold-border), transparent)',
              }} />
            </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
