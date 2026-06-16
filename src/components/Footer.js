import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '60px 32px 32px',
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px', marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              <span style={{ color: 'var(--white)' }}>Publish</span>{' '}
              <span style={{ color: 'var(--accent-blue)' }}>Support</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, maxWidth: '260px' }}>
              Software development and publishing solutions — from code to print.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>Navigation</div>
            {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/contact', 'Contact']].map(([href, label]) => (
              <div key={href} style={{ marginBottom: '10px' }}>
                <Link href={href} style={{ color: 'var(--text-secondary)', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >{label}</Link>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>Services</div>
            {['Software Development', 'Book Publishing', 'Article Publishing', 'Technical Writing', 'Cloud Solutions'].map(s => (
              <div key={s} style={{ marginBottom: '10px', color: 'var(--text-secondary)', fontSize: '14px' }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px' }}>Contact</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
              <div>publishsupport.com</div>
              <div>info@publishsupport.com</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            © {year} Publish Support. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            Software · Publishing · Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
