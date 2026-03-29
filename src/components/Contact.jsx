import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <Mail size={18} />, text: 'nehakasturi10@gmail.com', href: 'mailto:nehakasturi10@gmail.com' },
    { icon: <Phone size={18} />, text: '+91 6309541250', href: 'tel:+916309541250' },
    { icon: <MapPin size={18} />, text: 'Singapur, India', href: null },
  ];

  return (
    <section id="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient">Contact</span>
      </motion.h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', width: '100%', maxWidth: '900px' }}>
        
        {/* Contact info */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-50px' }}
           transition={{ duration: 0.5 }}
           style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '500px' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', textAlign: 'center' }}>Get in touch</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, textAlign: 'center' }}>
            I'm always open to new opportunities, collaborations, and conversations about technology.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper 
                  key={i} 
                  href={item.href || undefined}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    color: 'var(--text-secondary)',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--glass-border)',
                    transition: 'all 0.3s ease',
                    cursor: item.href ? 'pointer' : 'default',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(6,182,212,0.3)';
                    e.currentTarget.style.background = 'rgba(6,182,212,0.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span style={{ color: 'var(--accent-primary)', display: 'flex' }}>{item.icon}</span>
                  <span style={{ fontSize: '0.95rem' }}>{item.text}</span>
                </Wrapper>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
