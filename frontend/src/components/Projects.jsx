import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Folder, CornerDownRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Vintage Vault",
      type: "Real-Time Research Project • Team of 4",
      description: "A full-scale e-commerce platform for second-hand items. Built with a focus on real-time listing, authentication, and database integrity.",
      tags: ["React", "Node.js", "PHP", "MySQL"],
      github: "https://github.com/NehaGayathri1006/vintage_vault",
    },
    {
      title: "AICompanion",
      type: "Personal Project",
      description: "An experimental platform leveraging TypeScript to explore AI logic and API-driven application architectures.",
      tags: ["TypeScript", "API", "Web"],
      github: "https://github.com/NehaGayathri1006/AICompanion",
    },
    {
      title: "MediSearch",
      type: "Personal Project",
      description: "A medical search application designed to help users quickly find relevant health information and resources through an intuitive, streamlined interface.",
      tags: ["React", "Node.js", "API", "Healthcare"],
      github: "https://github.com/nehagayathri1006/MediSearch",
    }
  ];

  return (
    <section id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient">Projects</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.15, duration: 0.5, ease: 'easeOut' }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <Folder size={36} color="var(--accent-primary)" strokeWidth={1.5} />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.title} source code`}
              >
                <Code size={20} />
              </a>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              {project.title}
            </h3>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1rem' }}>
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} style={{
                  fontFamily: "'Inter', monospace",
                  fontSize: '0.78rem',
                  color: 'var(--accent-primary)',
                  fontWeight: '600',
                  opacity: 0.8,
                }}>
                  {tag}{tIdx < project.tags.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: 0.6 }}>
              <CornerDownRight size={12} /> {project.type}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
