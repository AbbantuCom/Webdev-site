'use client'

const LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#work',     label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about',    label: 'About' },
  { href: '#contact',  label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--obsidian)',
      borderTop: '1px solid var(--glass-border)',
      padding: 'clamp(60px, 8vw, 96px) 0 clamp(32px, 4vw, 48px)',
    }}>
      <div className="container">

        {/* Top row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 48,
          paddingBottom: 56,
          borderBottom: '1px solid var(--glass-border)',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 340 }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 26,
              fontWeight: 500,
              color: 'var(--cream)',
              marginBottom: 4,
            }}>
              Aabantu
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 20,
            }}>
              African Digital Studio
            </div>
            <p style={{
              fontSize: 15,
              color: 'var(--muted)',
              lineHeight: 1.75,
            }}>
              Interactive websites with CMS included.
              Digital craftsmanship born in Africa, built for the world.
            </p>
            <div style={{
              marginTop: 24,
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '0.14em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
            }}>
              Kampala &nbsp;&middot;&nbsp; Africa &nbsp;&middot;&nbsp; Worldwide
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: 8,
            }}>
              Navigation
            </div>
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  fontWeight: 400,
                  color: 'var(--sand)',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--sand)')}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: 8,
            }}>
              Get in Touch
            </div>
            <a
              href="mailto:rafikifanaka@gmail.com"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: 'var(--gold)',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
            >
              rafikifanaka@gmail.com
            </a>
            <div style={{ marginTop: 16 }}>
              <a href="#contact" className="btn-primary" style={{ fontSize: 14, padding: '12px 24px' }}>
                <span>Start a Project</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          paddingTop: 32,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            color: 'var(--muted)',
          }}>
            &copy; {year} Aabantu. Built with purpose.
          </span>

          {/* Gold diamond row */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: 5, height: 5,
                background: 'var(--gold)',
                transform: 'rotate(45deg)',
                opacity: 0.3 + i * 0.2,
              }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
