import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '3rem 2rem 2rem', 
      textAlign: 'center', 
      borderTop: '1px solid var(--glass-border)',
      marginTop: 'auto',
      backgroundColor: 'var(--bg-primary)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        
        {/* Back to top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-secondary)',
            padding: '0.6rem',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            transition: 'all 0.3s ease',
            marginBottom: '0.5rem',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent-primary)';
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
        
        <p style={{ fontSize: '1.1rem', fontWeight: '800', letterSpacing: '-0.03em' }}>
          K. NEHA <span style={{ color: 'var(--accent-primary)' }}>GAYATHRI</span>
        </p>
        
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          Built with <Heart size={13} color="var(--accent-primary)" fill="var(--accent-primary)" /> and deep curiosity.
        </p>
        
        <p style={{ fontSize: '0.75rem', opacity: 0.4, color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} K. Neha Gayathri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
