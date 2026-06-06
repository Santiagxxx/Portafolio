import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: <Layout size={32} />, color: 'var(--accent-cyan)', items: ['React', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend & APIs', icon: <Server size={32} />, color: 'var(--accent-purple)', items: ['Node.js', 'JAVA', '.NET', 'REST APIs'] },
  { name: 'Bases de Datos', icon: <Database size={32} />, color: 'var(--accent-magenta)', items: ['PostgreSQL', 'MongoDB', 'SQLServer'] },
  { name: 'Herramientas', icon: <Terminal size={32} />, color: '#00ff88', items: ['Git', 'Docker', 'AWS', 'Linux'] },
  { name: 'Lenguajes', icon: <Code2 size={32} />, color: '#ffaa00', items: ['JavaScript', 'TypeScript', 'R', 'C#'] },
  { name: 'Mobile', icon: <Smartphone size={32} />, color: '#0088ff', items: ['React Native', 'Expo'] },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Mis <span className="text-gradient">Habilidades</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="card glass skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: skill.color,
                filter: 'blur(50px)',
                opacity: 0.2,
                borderRadius: '50%'
              }}></div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '12px',
                  color: skill.color
                }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem' }}>{skill.name}</h3>
              </div>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {skill.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: skill.color }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .skill-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>
    </section>
  );
};
