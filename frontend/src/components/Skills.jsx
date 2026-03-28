import React from 'react';
import { Code2, Layout, Database, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 size={28} color="var(--accent-secondary)" />,
      skills: ["C", "Java", "Python", "Data Structures", "OOPS"]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={28} color="#61DAFB" />,
      skills: ["HTML5 / CSS3", "JavaScript", "React.js", "Responsive Design"]
    },
    {
      title: "Backend & DB",
      icon: <Database size={28} color="#8CC84B" />,
      skills: ["Node.js", "Express", "PHP", "MySQL", "REST APIs"]
    },
    {
      title: "DevOps & Security",
      icon: <Shield size={28} color="#F05032" />,
      skills: ["Zero Trust Security", "Cybersecurity Basics", "DevOps Fundamentals"]
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{cat.title}</h3>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }}></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
