'use client'
import { motion } from 'framer-motion'
import Tilt3D from './Tilt3D'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const PROJECTS = [
  {
    href: 'https://webdev.rafikifanaka.com/unicef%20uganda%20annual%20report%20website/index.html',
    title: 'UNICEF Uganda Annual Report',
    tag: 'Report Website',
    gradient: 'linear-gradient(135deg, #6B4226 0%, #C8975A 50%, #2C1A0E 100%)',
  },
  {
    href: 'https://webdev.rafikifanaka.com/agric/index.html',
    title: 'Agricultural Platform',
    tag: 'Web Platform',
    gradient: 'linear-gradient(135deg, #2C1A0E 0%, #6B8A4E 50%, #C8975A 100%)',
  },
  {
    href: 'https://webdev.rafikifanaka.com/beverages/index.html',
    title: 'Beverages Brand',
    tag: 'Brand Website',
    gradient: 'linear-gradient(135deg, #C8975A 0%, #6B4226 60%, #1A1209 100%)',
  },
  {
    href: 'https://webdev.rafikifanaka.com/construction/index.html',
    title: 'Construction Co.',
    tag: 'Corporate Site',
    gradient: 'linear-gradient(135deg, #1C1812 0%, #8A7569 50%, #C8975A 100%)',
  },
  {
    href: 'https://webdev.rafikifanaka.com/fabrication/index.html',
    title: 'Fabrication Works',
    tag: 'Industrial',
    gradient: 'linear-gradient(135deg, #0F0B07 0%, #C8975A 40%, #6B4226 100%)',
  },
  {
    href: 'https://webdev.rafikifanaka.com/recycle/index.html',
    title: 'Recycle Initiative',
    tag: 'NGO / Impact',
    gradient: 'linear-gradient(135deg, #2C4A2E 0%, #6B8A4E 50%, #C8975A 100%)',
  },
  {
    href: 'https://webdev.rafikifanaka.com/coming-soon/index.html',
    title: 'Coming Soon Page',
    tag: 'Launch',
    gradient: 'linear-gradient(135deg, #1A0F0A 0%, #6B4226 60%, #C8975A 100%)',
  },
]

export default function Portfolio() {
  return (
    <section id="work" style={{ background: 'var(--obsidian)' }}>
      <div className="container">
        <motion.div
          className="centered-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            Live Demos
          </div>
          <h2 className="section-title">Real Projects.<br />Click to Explore.</h2>
          <p className="section-subtitle">
            Each project ships with a CMS so clients stay in full control after launch.
          </p>
        </motion.div>

        {/* Gold divider */}
        <div className="gold-divider" style={{ marginTop: 48, marginBottom: 64 }}>
          <div className="gold-divider-diamond" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28,
          }}
          className="portfolio-grid"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: (i % 3) * 0.1, ease }}
            >
            <Tilt3D
              maxTilt={8}
              perspective={1000}
              scale={1.018}
              style={{
                borderRadius: 20,
                boxShadow: '0 4px 0 rgba(107,66,38,0.12), 0 8px 32px rgba(107,66,38,0.1)',
              }}
            >
            <a
              href={project.href}
              style={{
                display: 'block',
                background: 'var(--glass)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: 20,
                overflow: 'hidden',
                textDecoration: 'none',
              }}
            >
              {/* Preview thumbnail */}
              <div style={{
                height: 200,
                position: 'relative',
                overflow: 'hidden',
                background: project.gradient,
              }}>
                {/* Gradient overlay for non-iframe preview */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: project.gradient,
                }} />

                {/* iframe preview */}
                <iframe
                  src={project.href}
                  loading="lazy"
                  title={`${project.title} preview`}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '400%', height: '400%',
                    border: 'none',
                    transform: 'scale(0.25)',
                    transformOrigin: 'top left',
                    pointerEvents: 'none',
                    opacity: 0.85,
                    transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLIFrameElement).style.transform = 'scale(0.27)'
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLIFrameElement).style.transform = 'scale(0.25)'
                  }}
                />

                {/* Glass overlay on thumbnail */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(8,6,4,0.7) 100%)',
                }} />

                {/* Tag */}
                <div style={{
                  position: 'absolute',
                  top: 16, left: 16,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-pale)',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid var(--gold-border)',
                  padding: '5px 12px',
                  borderRadius: 100,
                }}>
                  {project.tag}
                </div>

                {/* Adinkra frame corners */}
                {[
                  { top: 8, right: 8, borderTop: 1, borderRight: 1 },
                  { bottom: 8, right: 8, borderBottom: 1, borderRight: 1 },
                ].map((corner, ci) => (
                  <div key={ci} style={{
                    position: 'absolute',
                    width: 20, height: 20,
                    ...corner,
                    borderStyle: 'solid',
                    borderColor: 'rgba(107,66,38,0.4)',
                    borderWidth: 0,
                    ...(corner.borderTop  ? { borderTopWidth: 1 } : {}),
                    ...(corner.borderRight ? { borderRightWidth: 1 } : {}),
                    ...(corner.borderBottom ? { borderBottomWidth: 1 } : {}),
                  }} />
                ))}
              </div>

              {/* Card body */}
              <div style={{ padding: '24px 28px 28px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(18px, 1.8vw, 21px)',
                  fontWeight: 500,
                  color: 'var(--cream)',
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}>
                  {project.title}
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--gold)',
                  letterSpacing: '0.02em',
                }}>
                  View Demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
            </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .portfolio-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
