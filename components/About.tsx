'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const STATS = [
  { value: '100%', label: 'CMS Included — every project, no exceptions' },
  { value: 'Fast',  label: 'Turnaround without cutting corners on craft' },
  { value: '1:1',   label: 'Client training so you\'re fully in control' },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--obsidian)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: 'clamp(48px, 8vw, 100px)',
          alignItems: 'center',
        }} className="about-grid">

          {/* Left — statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            <div className="section-eyebrow">About Aabantu</div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 500,
              color: 'var(--cream)',
              lineHeight: 1.2,
              marginBottom: 32,
            }}>
              We Don&apos;t Just Build<br />
              Websites. We Build<br />
              <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>
                Digital Experiences
              </em>
              <br />That Convert.
            </h2>

            <p style={{
              fontSize: 17,
              color: 'var(--sand)',
              lineHeight: 1.8,
              maxWidth: 480,
            }}>
              Rooted in Kampala, building for the world. Every project we touch
              is an opportunity to show that African creativity and world-class
              technology are not separate things — they are the same thing.
            </p>

            {/* Brand line */}
            <div style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: '1px solid var(--glass-border)',
            }}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}>
                Kampala &middot; Africa &middot; Worldwide
              </div>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease }}
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 24,
                  padding: 'clamp(20px, 2.5vw, 28px) clamp(24px, 3vw, 32px)',
                  background: 'var(--glass)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  borderLeft: '3px solid var(--gold)',
                  borderRadius: 16,
                  transition: 'background 0.3s ease',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(22px, 2.5vw, 28px)',
                  fontWeight: 600,
                  color: 'var(--gold-light)',
                  flexShrink: 0,
                  minWidth: 64,
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontSize: 15,
                  color: 'var(--sand)',
                  lineHeight: 1.5,
                }}>
                  {stat.label}
                </span>
              </motion.div>
            ))}

            {/* Decorative gold diamond pattern */}
            <div style={{
              marginTop: 16,
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              opacity: 0.4,
            }}>
              {[0,1,2,3,4].map(i => (
                <div key={i} style={{
                  width: 6, height: 6,
                  background: i === 2 ? 'var(--gold)' : 'transparent',
                  border: '1px solid var(--gold)',
                  transform: 'rotate(45deg)',
                  opacity: i === 2 ? 1 : 0.5,
                }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
