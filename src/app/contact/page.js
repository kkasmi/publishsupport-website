'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // In production, connect to a form service like Netlify Forms or Formspree
    setSent(true)
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px', borderRadius: '8px',
    background: 'var(--bg-card)', border: '1px solid var(--border)',
    color: 'var(--text-primary)', fontSize: '15px', outline: 'none',
    transition: 'border-color 0.2s', fontFamily: 'var(--font-body)',
  }

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{
        padding: '80px 32px',
        borderBottom: '1px solid var(--border)',
        background: `radial-gradient(ellipse at 50% 60%, rgba(0,170,255,0.07) 0%, transparent 60%)`,
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px' }}>
            <div style={{ fontSize: '13px', color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Contact</div>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px' }}>
              Let's Talk About Your Project
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Whether it's a software idea or a publishing project, we'd love to hear about it. Send us a message and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'start' }}>

            {/* Contact info */}
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '32px' }}>Get in Touch</h2>

              {[
                { label: 'Email', value: 'admin@publishsupport.com', icon: '✉' },
                { label: 'Website', value: 'publishsupport.com', icon: '🌐' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '8px',
                    background: 'var(--accent-blue-dim)', border: '1px solid var(--accent-blue-mid)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ color: 'var(--text-primary)', fontSize: '15px' }}>{item.value}</div>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: '40px', padding: '24px', borderRadius: '10px',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>What happens next?</h3>
                {[
                  'We review your message within 1 business day',
                  'We schedule a free 30-minute discovery call',
                  'We put together a proposal tailored to your project',
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>{i + 1}.</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '48px',
            }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out. We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Send a Message</h2>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Your Name</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@example.com"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>What are you working on?</label>
                    <select name="subject" value={form.subject} onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    >
                      <option value="">Select a service</option>
                      <option value="software">Software Development</option>
                      <option value="book">Book Publishing</option>
                      <option value="article">Article Publishing</option>
                      <option value="both">Both Software & Publishing</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Tell us about your project</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      placeholder="Describe your project, goals, and any relevant details..."
                      rows={6}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-blue)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <button type="submit" style={{
                    padding: '15px 32px', borderRadius: '8px',
                    background: 'var(--accent-blue)', color: '#000',
                    fontWeight: 600, fontSize: '15px', border: 'none',
                    cursor: 'pointer', transition: 'opacity 0.2s',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={e => e.target.style.opacity = '0.85'}
                  onMouseLeave={e => e.target.style.opacity = '1'}
                  >Send Message</button>

                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center' }}>
                    We respond within 1 business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){ section > div > div { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>
    </div>
  )
}
