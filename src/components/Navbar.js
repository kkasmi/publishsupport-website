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
          <svg width="40" height="40" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="300" height="300" rx="66" fill="#111111"/>
            <g transform="translate(74,76)">
              <path d="M72 228 L72 80 Q72 60 90 56 Q144 46 176 68 Q210 90 210 130 Q210 170 176 184 Q154 194 128 194 L128 228 Z" fill="white" opacity="0.95"/>
              <path d="M98 168 L98 96 Q128 90 154 106 Q172 118 172 136 Q172 154 154 164 Q132 174 102 172" fill="#111111" stroke="none"/>
            </g>
            <g transform="translate(138, 240) scale(1.3, 0.75)">
              <text x="0" y="0" font-family="Arial Rounded MT Bold, Arial, sans-serif" font-size="56" font-weight="900" fill="#00AAFF" text-anchor="middle" dominant-baseline="auto">S</text>
            </g>
          </svg>
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
