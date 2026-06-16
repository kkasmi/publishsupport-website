'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <style>{`
        .btn-primary { transition: opacity 0.2s; }
        .btn-primary:hover { opacity: 0.85; }
        .btn-secondary { transition: border-color 0.2s, color 0.2s; border: 1px solid var(--border); color: var(--text-primary); }
        .btn-secondary:hover { border-color: var(--accent-blue) !important; color: var(--accent-blue) !important; }
        .service-card { transition: border-color 0.2s, transform 0.2s; border: 1px solid var(--border); }
        .service-card:hover { transform: translateY(-4px); }
        .service-card-blue:hover { border-color: #00AAFF !important; }
        .service-card-purple:hover { border-color: #7B5EFA !important; }
        .service-card-green:hover { border-color: #00C98D !important; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        @media(max-width:768px){ .hero-grid { grid-template-columns: 1fr !important; } .hero-icon { display: none !important; } }
      `}</style>

      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '120px 32px 80px',
        background: `radial-gradient(ellipse at 70% 50%, rgba(0,170,255,0.08) 0%, transparent 60%),
                     radial-gradient(ellipse at 20% 80%, rgba(0,170,255,0.04) 0%, transparent 50%)`,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(var(--accent-blue) 1px, transparent 1px), linear-gradient(90deg, var(--accent-blue) 1px, transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none' }}/>

        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', width: '100%' }}>
          <div className="hero-grid">
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--accent-blue-dim)', border: '1px solid var(--accent-blue-mid)',
                borderRadius: '100px', padding: '6px 16px', marginBottom: '28px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'block' }}/>
                <span style={{ fontSize: '13px', color: 'var(--accent-blue)', fontWeight: 500, letterSpacing: '0.5px' }}>Software & Publishing Solutions</span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px' }}>
                Where Code<br/><span style={{ color: 'var(--accent-blue)' }}>Meets the Page</span>
              </h1>

              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '480px' }}>
                Publish Support bridges two worlds — expert software development and professional publishing. We build your digital tools and bring your written work to readers.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn-primary" style={{
                  padding: '14px 32px', borderRadius: '8px',
                  background: 'var(--accent-blue)', color: '#000',
                  fontWeight: 600, fontSize: '15px', letterSpacing: '0.3px',
                }}>Explore Services</Link>
                <Link href="/about" className="btn-secondary" style={{
                  padding: '14px 32px', borderRadius: '8px', fontWeight: 500, fontSize: '15px',
                }}>About Us</Link>
              </div>
            </div>

            <div className="hero-icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(circle, rgba(0,170,255,0.15) 0%, transparent 70%)', borderRadius: '50%' }}/>
                <svg width="280" height="280" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="300" height="300" rx="66" fill="#111111"/>
                  <rect x="0" y="0" width="300" height="300" rx="66" fill="none" stroke="rgba(0,170,255,0.2)" strokeWidth="1"/>
                  <g transform="translate(74,76)">
                    <path d="M0 152 L0 4 Q0 -16 18 -20 Q72 -30 108 -6 Q148 18 148 58 Q148 98 108 112 Q86 122 60 122 L60 152 Z" fill="white" opacity="0.95"/>
                    <path d="M26 92 L26 20 Q56 14 82 30 Q104 42 104 60 Q104 80 82 90 Q60 100 30 98" fill="#111111"/>
                  </g>
                  <text x="212" y="234" fontFamily="Arial Rounded MT Bold, Arial, sans-serif" fontSize="68" fontWeight="900" fill="#00AAFF" textAnchor="middle">S</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section style={{ padding: '100px 32px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, marginBottom: '16px' }}>What We Do</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '17px', maxWidth: '520px', margin: '0 auto' }}>Two disciplines, one company — delivering quality across software and publishing.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { icon: '⌨️', title: 'Software Development', desc: 'Custom web and desktop applications, APIs, automation tools, and cloud solutions — built to your specifications.', cls: 'service-card-blue' },
              { icon: '📖', title: 'Book Publishing', desc: 'From manuscript to finished book — editing, layout, design, and distribution support for authors and publishers.', cls: 'service-card-purple' },
              { icon: '✍️', title: 'Article Publishing', desc: 'Professional editorial services for articles, reports, and digital content — structured, polished, and ready to publish.', cls: 'service-card-green' },
            ].map(service => (
              <div key={service.title} className={`service-card ${service.cls}`} style={{
                background: 'var(--bg-card)', borderRadius: '12px', padding: '36px',
              }}>
                <div style={{ fontSize: '36px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '15px' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/services" style={{ color: 'var(--accent-blue)', fontSize: '15px', fontWeight: 500, borderBottom: '1px solid var(--accent-blue)', paddingBottom: '2px' }}>View all services →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 32px', background: `radial-gradient(ellipse at center, rgba(0,170,255,0.08) 0%, transparent 70%)`, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, marginBottom: '20px' }}>Ready to start your project?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginBottom: '40px', lineHeight: 1.7 }}>
            Whether you're building software or publishing written work, we're here to help you get it done — professionally and on time.
          </p>
          <Link href="/contact" className="btn-primary" style={{
            display: 'inline-block', padding: '16px 40px', borderRadius: '8px',
            background: 'var(--accent-blue)', color: '#000', fontWeight: 600, fontSize: '16px',
          }}>Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}
