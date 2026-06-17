'use client'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <style>{`
        .btn-primary { transition: opacity 0.2s; }
        .btn-primary:hover { opacity: 0.85; }
        .svc-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; padding: 28px; transition: border-color 0.2s; }
        .svc-card-blue:hover { border-color: var(--accent-blue) !important; }
        .svc-card-purple:hover { border-color: #7B5EFA !important; }
      `}</style>

      <section style={{ padding: '80px 32px', borderBottom: '1px solid var(--border)', background: `radial-gradient(ellipse at 70% 30%, rgba(0,170,255,0.07) 0%, transparent 60%)` }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ fontSize: '13px', color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Our Services</div>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px' }}>Two Crafts.<br/>One Team.</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              From custom ERP systems for growing businesses to publishing support services — we deliver professional solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>


      <section style={{ padding: '80px 32px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <div style={{ width: '4px', height: '40px', background: '#7B5EFA', borderRadius: '2px' }}/>
            <h2 style={{ fontSize: '32px', fontWeight: 700 }}>Publishing Support Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Editing & Proofreading', desc: 'Professional editing and proofreading services to ensure your manuscript is clear, consistent, and error-free — from structural edits to final polish.', icon: '✏️' },
              { title: 'Indexing', desc: 'Comprehensive indexing services for books, academic texts, and technical documents — making your content easy to navigate and reference.', icon: '📑' },
              { title: 'Mapping', desc: 'Custom maps and visual diagrams for books, academic publications, and reference materials — clear, accurate, and professionally designed.', icon: '🗺️' },
              { title: 'Layout & Design', desc: 'Professional page layout and typesetting for print and digital publications — beautifully formatted and ready for publishing.', icon: '🎨' },
              { title: 'Technical Writing', desc: 'Clear and precise technical writing for academic papers, manuals, and reference documents — written for the people who use them.', icon: '📋' },
              { title: 'Manuscript Preparation', desc: 'Full manuscript preparation support — formatting, style guide compliance, and submission-ready documents for authors and academics.', icon: '📝' },
            ].map(s => (
              <div key={s.title} className="svc-card svc-card-purple">
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
            ))}
          </div>
        </div>
      </section>

                
      <section style={{ padding: '80px 32px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <div style={{ width: '4px', height: '40px', background: 'var(--accent-blue)', borderRadius: '2px' }}/>
            <h2 style={{ fontSize: '32px', fontWeight: 700 }}>Software Development</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { title: 'ERP Development', desc: 'Custom Enterprise Resource Planning solutions for small to medium-sized businesses — streamline your operations, finance, HR, inventory, and more in one integrated system.', icon: '🏢' },
              { title: 'Web Applications', desc: 'Full-stack web apps built with modern frameworks — React, Next.js, Node.js, and more.', icon: '🌐' },
              { title: 'Desktop Software', desc: 'Cross-platform desktop applications for Windows, Mac, and Linux.', icon: '💻' },
              { title: 'APIs & Backends', desc: 'Robust REST and GraphQL APIs, database design, and backend infrastructure.', icon: '⚙️' },
              { title: 'Automation Tools', desc: 'Custom scripts, bots, and automation workflows that save time.', icon: '🤖' },
              { title: 'Cloud Solutions', desc: 'Cloud architecture, deployment pipelines, and managed hosting.', icon: '☁️' },
              { title: 'CMS & Portals', desc: 'Content management systems and client portals tailored to how your team works.', icon: '📊' },
            ].map(s => (
              <div key={s.title} className="svc-card svc-card-blue">
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
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
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-blue-dim)', border: '1px solid var(--accent-blue-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--accent-blue)' }}>{i + 1}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>{p.step}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px', textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>Start a Project</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>Tell us what you're working on and we'll put together a plan.</p>
          <Link href="/contact" className="btn-primary" style={{
            display: 'inline-block', padding: '14px 36px', borderRadius: '8px',
            background: 'var(--accent-blue)', color: '#000', fontWeight: 600, fontSize: '15px',
          }}>Contact Us</Link>
        </div>
      </section>
    </div>
  )
}
