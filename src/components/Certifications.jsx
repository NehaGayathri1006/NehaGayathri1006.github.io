import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Cloud } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { title: "Zero Trust Cloud Security", org: "EduSkills", icon: <Cloud size={22} /> },
    { title: "Cybersecurity Virtual Internship", org: "EduSkills", icon: <ShieldCheck size={22} /> },
    { title: "DevOps Fundamentals", org: "Infosys Springboard", icon: <Cpu size={22} /> },
  ];

  return (
    <section id="certifications">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient">Certifications</span>
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
        {certs.map((cert, idx) => (
          <motion.div 
            key={idx} 
            className="glass-card cert-card" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.25rem', 
              padding: '1.5rem',
              borderLeft: '4px solid var(--accent-primary)',
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.12, duration: 0.5 }}
          >
            <div style={{ 
              color: 'var(--accent-primary)', 
              padding: '0.6rem', 
              background: 'rgba(6,182,212,0.08)', 
              borderRadius: '10px',
              display: 'flex',
              flexShrink: 0,
            }}>
              {cert.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.2rem' }}>{cert.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{cert.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
