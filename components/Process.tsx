'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    body: 'Understand your goals, audience, and what success looks like before a single line is written.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'Visual concepts that bring your brand to life — refined until every detail feels right.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'Coded with performance, accessibility, and CMS in mind from the very first commit.',
  },
  {
    number: '04',
    title: 'Launch',
    body: 'Full handover with training so you\'re confident running it yourself from day one.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: 'var(--charcoal)',
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)',
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
            How We Work
          </div>
          <h2 className="section-title">A Clear, Proven Process<br />From First Call to Launch</h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ marginTop: 88, position: 'relative' }} className="process-timeline">

          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: 28, left: '12.5%', right: '12.5%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, var(--gold-border), var(--gold-border), transparent)',
          }} className="timeline-line" />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
          }} className="steps-grid">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: i * 0.13, ease }}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                {/* Step number circle */}
                <div style={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  background: 'var(--obsidian)',
                  border: '1px solid var(--gold-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 32px',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {/* Inner glow */}
                  <div style={{
                    position: 'absolute',
                    inset: -1,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 50% 50%, rgba(107,66,38,0.15) 0%, transparent 70%)',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: 'var(--gold)',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {step.number}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(20px, 1.8vw, 24px)',
                  fontWeight: 500,
                  color: 'var(--cream)',
                  marginBottom: 12,
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: 15,
                  color: 'var(--sand)',
                  lineHeight: 1.75,
                }}>
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .process-timeline .steps-grid > div { text-align: left !important; padding-left: 72px !important; }
          .process-timeline .steps-grid > div > div:first-child { position: absolute !important; left: 0 !important; top: 0 !important; margin: 0 !important; }
          .timeline-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}
