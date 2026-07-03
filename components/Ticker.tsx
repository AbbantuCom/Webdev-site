'use client'

const ITEMS = [
  'Interactive Design',
  'CMS Included',
  'Mobile First',
  'Fast Loading',
  'SEO Ready',
  'Custom Built',
  'World-Class Quality',
]

export default function Ticker() {
  const items = [...ITEMS, ...ITEMS]

  return (
    <div
      style={{
        width: '100%',
        padding: '22px 0',
        background: 'var(--elevated)',
        borderTop: '1px solid var(--gold-border)',
        borderBottom: '1px solid var(--gold-border)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Fade masks */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg, var(--elevated) 0%, transparent 8%, transparent 92%, var(--elevated) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'inline-block',
        animation: 'tickerScroll 28s linear infinite',
        whiteSpace: 'nowrap',
      }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--sand)',
              padding: '0 32px',
            }}>
              {item}
            </span>
            <span style={{
              width: 5, height: 5,
              borderRadius: '50%',
              background: 'var(--gold)',
              opacity: 0.6,
              display: 'inline-block',
              flexShrink: 0,
            }} />
          </span>
        ))}
      </div>
    </div>
  )
}
