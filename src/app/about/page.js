'use client'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .btn-primary { transition: opacity 0.2s; }
        .btn-primary:hover { opacity: 0.85; }
        .value-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 32px; }
        .stat-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; padding: 28px; display: flex; justify-content: space-between; align-items: center; }
        @media(max-width:768px){ .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>

      <section style={{ padding: '80px 32px', background: `radial-gradient(ellipse at 30% 50%, rgba(0,170,255,0.07) 0%, transparent 60%)`, borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ fontSize: '13px', color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>About Us</div>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px' }}>Built on Two Foundations</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Publish Support was founded on a simple belief: that great software and great writing are more alike than they seem. Both demand clarity, structure, and purpose. We bring both crafts together under one roof.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div className="about-grid">
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '24px' }}>Our Story</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                Publish Support grew out of a recognition that many clients needed both technical and editorial expertise — but found themselves working with separate teams who didn't communicate well with each other.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                We built a company where software developers and publishing professionals work side by side, sharing a common vocabulary and a common commitment to quality output.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Today we serve clients ranging from independent authors needing digital tools, to organizations that need both a custom platform and the editorial expertise to populate it with great content.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Books & Articles Published', value: '200+' },
                { label: 'Software Projects Delivered', value: '50+' },
                { label: 'Years of Combined Experience', value: '15+' },
                { label: 'Satisfied Clients', value: '100+' },
              ].map(stat => (
                <div key={stat.label} className="stat-card">
                  <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{stat.label}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, color: 'var(--accent-blue)' }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '48px', textAlign: 'center' }}>What We Stand For</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Clarity', icon: '◎', desc: 'We strip away complexity — in code and in prose — until only what matters remains.' },
              { title: 'Craft', icon: '◈', desc: 'Every line of code and every paragraph is treated as something worth doing properly.' },
              { title: 'Consistency', icon: '◷', desc: 'We deliver what we promise, on time, at the quality we agreed on. No surprises.' },
              { title: 'Collaboration', icon: '◉', desc: 'We work with our clients, not just for them. Your knowledge shapes every project.' },
            ].map(v => (
              <div key={v.title} className="value-card">
                <div style={{ fontSize: '28px', color: 'var(--accent-blue)', marginBottom: '16px' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '15px' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>Work With Us</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>Tell us about your project and we'll find the right way to help.</p>
          <Link href="/contact" className="btn-primary" style={{
            display: 'inline-block', padding: '14px 36px', borderRadius: '8px',
            background: 'var(--accent-blue)', color: '#000', fontWeight: 600, fontSize: '15px',
          }}>Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}
