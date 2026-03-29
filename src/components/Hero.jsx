import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Briefcase, Mail } from 'lucide-react';

const roles = ['Full-Stack Developer', 'AI Enthusiast', 'Problem Solver', 'Tech Explorer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center',
      position: 'relative',
      paddingTop: '0',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        opacity: 0.2,
        zIndex: -1,
      }}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ 
            fontSize: '0.9rem', 
            fontWeight: '700', 
            color: 'var(--accent-primary)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.4em',
            display: 'block',
            marginBottom: '1.5rem',
          }}
        >
          Welcome to my world
        </motion.span>
        
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', 
          fontWeight: '900', 
          lineHeight: 1, 
          letterSpacing: '-0.05em',
          marginBottom: '1.5rem',
        }}>
          K. Neha <br />
          <span className="text-gradient">Gayathri</span>
        </h1>
        
        {/* Typewriter role text */}
        <p style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', 
          color: 'var(--text-secondary)', 
          marginBottom: '1rem',
          minHeight: '2.5rem',
          fontWeight: '500',
        }}>
          {displayed}<span style={{ 
            color: 'var(--accent-primary)', 
            animation: 'blink 0.8s step-end infinite',
            fontWeight: '300',
          }}>|</span>
        </p>

        <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
        
        <p style={{ 
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', 
          maxWidth: '550px', 
          color: 'var(--text-secondary)', 
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>
          Building performant full-stack applications with a passion for 
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}> AI</span> and 
          <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}> modern web technologies</span>.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn-primary">
            Explore Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', justifyContent: 'center' }}
        >
          {[
            { icon: <Code size={22} />, href: 'https://github.com/nehagayathri1006', tip: 'GitHub' },
            { icon: <Briefcase size={22} />, href: 'https://www.linkedin.com/in/NehaGayathri', tip: 'LinkedIn' },
            { icon: <Mail size={22} />, href: 'mailto:nehakasturi10@gmail.com', tip: 'Email' },
          ].map((s, i) => (
            <a 
              key={i}
              href={s.href} 
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="tooltip"
              data-tip={s.tip}
              style={{ 
                color: 'var(--text-secondary)',
                padding: '0.6rem',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.background = 'rgba(6,182,212,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '2rem', color: 'var(--accent-primary)', cursor: 'pointer' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
