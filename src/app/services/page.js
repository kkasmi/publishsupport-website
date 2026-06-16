import Link from 'next/link'

export const metadata = {
  title: 'Services — Publish Support',
  description: 'Software development and publishing services from Publish Support. Custom software, book publishing, article writing, and more.',
}

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 32px',
        borderBottom: '1px solid var(--border)',
        background: `radial-gradient(ellipse at 70% 30%, rgba(0,170,255,0.07) 0%, transparent 60%)`,
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ fontSize: '13px', color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Our Services</div>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px' }}>
              Two Crafts.<br/>One Team.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Whether you need custom software or publishing expertise, we provide the full range of services to bring your project to life.
            </p>
          </div>
        </div>
      </section>

      {/* Software Services */}
      <section style={{ padding: '80px 32px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <div style={{ width: '4px', height: '40px', background: 'var(--accent-blue)', borderRadius: '2px' }}/>
            <h2 style={{ fontSize: '32px', fontWeight: 700 }}>Software Development</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Web Applications', desc: 'Full-stack web apps built with modern frameworks — React, Next.js, Node.js, and more. Scalable, secure, and fast.', icon: '🌐' },
              { title: 'Desktop Software', desc: 'Cross-platform desktop applications for Windows, Mac, and Linux using Electron or native technologies.', icon: '💻' },
              { title: 'APIs & Backends', desc: 'Robust REST and GraphQL APIs, database design, authentication systems, and backend infrastructure.', icon: '⚙️' },
              { title: 'Automation Tools', desc: 'Custom scripts, bots, and automation workflows that save time and eliminate repetitive manual work.', icon: '🤖' },
              { title: 'Cloud Solutions', desc: 'Cloud architecture, deployment pipelines, and managed hosting on AWS, Azure, or Google Cloud.', icon: '☁️' },
              { title: 'CMS & Portals', desc: 'Content management systems and client portals tailored to how your team actually works.', icon: '📊' },
            ].map(s => (
              <div key={s.title} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '10px', padding: '28px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publishing Services */}
      <section style={{ padding: '80px 32px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <div style={{ width: '4px', height: '40px', background: '#7B5EFA', borderRadius: '2px' }}/>
            <h2 style={{ fontSize: '32px', fontWeight: 700 }}>Publishing Services</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Book Publishing', desc: 'End-to-end support for authors — editing, layout, cover design, ISBN registration, and print or digital distribution.', icon: '📚' },
              { title: 'Article Publishing', desc: 'Professional editorial services for articles, white papers, and reports. We help you say what you mean clearly.', icon: '📰' },
              { title: 'Editing & Proofreading', desc: 'Structural editing, copy editing, and proofreading to ensure your writing is clear, consistent, and error-free.', icon: '✏️' },
              { title: 'Layout & Design', desc: 'Typography, page layout, and visual design for both print and digital publications that readers enjoy using.', icon: '🎨' },
              { title: 'Technical Writing', desc: 'Documentation, user guides, API references, and technical reports — written for the people who actually use them.', icon: '📋' },
              { title: 'Digital Publishing', desc: 'Ebooks, online magazines, and digital-first publications formatted for every device and platform.', icon: '📱' },
            ].map(s => (
              <div key={s.title} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '10px', padding: '28px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#7B5EFA'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 32px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '48px', textAlign: 'center' }}>How We Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              { step: 'Discover', desc: 'We start by understanding your goals, audience, and constraints.' },
              { step: 'Plan', desc: 'A clear scope, timeline, and deliverable list — agreed before work begins.' },
              { step: 'Build', desc: 'We execute with regular check-ins, feedback loops, and transparent progress.' },
              { step: 'Deliver', desc: 'On-time delivery, complete handover, and ongoing support as needed.' },
            ].map((p, i) => (
              <div key={p.step} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'var(--accent-blue-dim)', border: '1px solid var(--accent-blue-mid)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--accent-blue)',
                }}>{i + 1}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>{p.step}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px', textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>Start a Project</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
            Tell us what you're working on and we'll put together a plan.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block', padding: '14px 36px', borderRadius: '8px',
            background: 'var(--accent-blue)', color: '#000', fontWeight: 600, fontSize: '15px',
          }}>Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
