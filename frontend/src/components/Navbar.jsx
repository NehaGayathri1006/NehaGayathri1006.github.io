import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track which section is in view
      const sections = ['home', 'about', 'projects', 'certifications', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certs', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 850px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-primary);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }
        .nav-link.active { color: var(--accent-primary) !important; }
      `}</style>
      <nav style={{
        position: 'fixed',
        top: isScrolled ? '1rem' : '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: isScrolled ? 'clamp(300px, 90%, 1000px)' : '100%',
        zIndex: 1000,
        padding: isScrolled ? '0.7rem 2rem' : '1.2rem 2rem',
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        border: isScrolled ? '1px solid var(--glass-border)' : 'none',
        borderRadius: isScrolled ? '50px' : '0',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="#home" style={{
          fontSize: '1.2rem',
          fontWeight: '800',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          letterSpacing: '-0.03em',
        }}>
          <Terminal size={20} color="var(--accent-primary)" strokeWidth={3} />
          <span style={{ color: 'var(--text-primary)' }}>NEHA</span>
          <span style={{ color: 'var(--accent-primary)' }}>GAYATHRI</span>
        </a>

        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="mobile-btn" 
          style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '110%',
            left: '5%',
            width: '90%',
            background: 'var(--bg-secondary)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            textAlign: 'center',
            borderRadius: '16px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            border: '1px solid var(--glass-border)',
            animation: 'fadeIn 0.3s ease',
          }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  transition: 'background 0.2s',
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={e => e.target.style.background = 'rgba(6,182,212,0.1)'}
                onMouseLeave={e => e.target.style.background = 'transparent'}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
