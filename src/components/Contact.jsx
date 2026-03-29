import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

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
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '3rem', width: '100%', maxWidth: '900px' }}>
        
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>Get in touch</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
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

        {/* Contact Form */}
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          style={{ padding: '2rem' }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
              <input type="text" name="name" required placeholder="Your full name" value={formData.name} onChange={handleChange} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
              <input type="email" name="email" required placeholder="email@example.com" value={formData.email} onChange={handleChange} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: '600', fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
              <textarea name="message" required placeholder="I'd like to talk about..." value={formData.message} onChange={handleChange}></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '0.5rem' }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'} 
              <Send size={16} />
            </button>
            
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontSize: '0.9rem', justifyContent: 'center' }}
              >
                <CheckCircle size={16} /> Message sent successfully!
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontSize: '0.9rem', justifyContent: 'center' }}
              >
                <AlertCircle size={16} /> Failed to send. Try again later.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
