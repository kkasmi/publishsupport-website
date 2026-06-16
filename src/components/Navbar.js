'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-height)',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 32px',
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="/logo_vector.svg" 
            alt="Publish Support" 
            width="44" 
            height="44" 
            style={{borderRadius: '10px'}}
          />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--white)', lineHeight: 1.1 }}>Publish</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--accent-blue)', lineHeight: 1.1 }}>Support</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{
              fontSize: '14px', fontWeight: 500, letterSpacing: '0.5px',
              color: pathname === link.href ? 'var(--accent-blue)' : 'var(--text-secondary)',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--white)'}
            onMouseLeave={e => e.target.style.color = pathname === link.href ? 'var(--accent-blue)' : 'var(--text-secondary)'}
            >{link.label}</Link>
          ))}
          <Link href="/contact" style={{
            padding: '10px 24px', borderRadius: '6px',
            background: 'var(--accent-blue)', color: '#000',
            fontSize: '14px', fontWeight: 600, letterSpacing: '0.5px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
          >Get in Touch</Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
        }} className="mobile-menu-btn" aria-label="Toggle menu">
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: '24px', height: '2px', background: 'var(--text-primary)', borderRadius: '1px' }}/>
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 'var(--nav-height)', left: 0, right: 0,
          background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)',
          padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: '16px', fontWeight: 500,
              color: pathname === link.href ? 'var(--accent-blue)' : 'var(--text-primary)',
            }}>{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
