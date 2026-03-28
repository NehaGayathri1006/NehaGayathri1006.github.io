import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Shield, Zap, Target } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const About = () => {
  const skillSets = [
    { title: "Languages", icon: <Code size={20} />, skills: ["C", "Java", "Python", "JavaScript", "TypeScript"] },
    { title: "Frameworks", icon: <Zap size={20} />, skills: ["React.js", "Node.js", "Express", "Vite"] },
    { title: "Database", icon: <Database size={20} />, skills: ["MySQL", "PostgreSQL", "MongoDB"] },
    { title: "Security", icon: <Shield size={20} />, skills: ["Zero Trust", "DevOps", "Cybersecurity"] }
  ];

  const interests = ["AI Research", "System Architecture", "Open Source", "Cybersecurity", "IoT", "UX Design"];

  return (
    <section id="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient">About</span>
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem' }}>
        
        {/* Background & Interests */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BookOpen size={22} color="var(--accent-primary)" /> Background
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
            I am a <strong style={{ color: 'var(--text-primary)' }}>B.Tech Computer Science</strong> student with deep passion for building scalable real-world applications. 
            My journey started in academia and grew into hands-on full-stack engineering.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            I enjoy exploring how modern web platforms can become more <strong style={{ color: 'var(--text-primary)' }}>intelligent and secure</strong>. Currently 
            diving deeper into React, APIs, and AI-powered application development.
          </p>
          
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Target size={22} color="var(--accent-primary)" /> Interests
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {interests.map((interest, i) => (
              <motion.span 
                key={interest} 
                className="skill-tag"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {skillSets.map((set, idx) => (
            <motion.div 
              key={idx} 
              className="glass-card" 
              style={{ padding: '1.5rem' }}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
                {set.icon}
                <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{set.title}</span>
              </div>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {set.skills.map(s => (
                  <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '5px', height: '5px', background: 'var(--accent-primary)', borderRadius: '50%', flexShrink: 0 }}></div>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
