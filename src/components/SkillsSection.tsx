import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Terminal
} from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    icon: Layout,
    color: 'var(--accent-cyan)',
    height: '360px',
    items: ['React', 'TypeScript', 'Tailwind CSS'],
    detail:
      'I build modern, responsive and interactive interfaces focused on performance, accessibility and clean user experience.'
  },
  {
    name: 'Backend & APIs',
    icon: Server,
    color: 'var(--accent-purple)',
    height: '420px',
    items: ['Node.js', 'JAVA', '.NET', 'REST APIs'],
    detail:
      'I create backend services, REST APIs and server-side logic to connect applications with databases and business processes.'
  },
  {
    name: 'Databases',
    icon: Database,
    color: 'var(--accent-magenta)',
    height: '380px',
    items: ['PostgreSQL', 'MongoDB', 'SQL Server'],
    detail:
      'I design, query and manage relational and non-relational databases, focusing on structure, performance and data integrity.'
  },
  {
    name: 'Tools',
    icon: Terminal,
    color: '#00ff88',
    height: '400px',
    items: ['Git', 'Docker', 'AWS', 'Linux'],
    detail:
      'I use development and deployment tools to manage code, environments, containers and cloud-based workflows.'
  },
  {
    name: 'Languages',
    icon: Code2,
    color: '#ffaa00',
    height: '430px',
    items: ['JavaScript', 'TypeScript', 'R', 'C#', 'Python'],
    detail:
      'I work with multiple programming languages to build web solutions, automation scripts, APIs and data-oriented applications.'
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    color: '#0088ff',
    height: '360px',
    items: ['React Native', 'Expo'],
    detail:
      'I develop mobile experiences with React Native and Expo, creating smooth, functional and cross-platform applications.'
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                    key={skill.name}
                    className="skill-card"
                    tabIndex={0}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={
                        {
                          '--skill-card-height': skill.height || '380px'
                        } as CSSProperties
                      }
                  >
                <div className="skill-card-inner">
                  {/* Frente */}
                  <div className="skill-card-face skill-card-front glass">
                    <div
                      className="skill-glow"
                      style={{ background: skill.color }}
                    ></div>

                    <div className="skill-header">
                      <div
                        className="skill-icon"
                        style={{ color: skill.color }}
                      >
                        <Icon size={32} />
                      </div>

                      <h3>{skill.name}</h3>
                    </div>

                    <ul className="skill-list">
                      {skill.items.map((item) => (
                        <li key={item}>
                          <span
                            className="skill-dot"
                            style={{ background: skill.color }}
                          ></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <span className="skill-hint">Hover to see details</span>
                  </div>

                  {/* Parte trasera */}
                  <div className="skill-card-face skill-card-back glass">
                    <div
                      className="skill-glow"
                      style={{ background: skill.color }}
                    ></div>

                    <div
                      className="skill-icon skill-icon-back"
                      style={{ color: skill.color }}
                    >
                      <Icon size={38} />
                    </div>

                    <h3>{skill.name}</h3>

                    <p>{skill.detail}</p>

                    <div className="skill-tags">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          style={{ borderColor: skill.color }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }

        .skill-card {
          height: var(--skill-card-height, 380px);
          perspective: 1200px;
          outline: none;
        }

        .skill-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .skill-card:hover .skill-card-inner,
        .skill-card:focus-within .skill-card-inner,
        .skill-card:focus .skill-card-inner {
          transform: rotateY(180deg);
        }

        .skill-card-face {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2rem;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border: 1px solid var(--card-border);
          overflow: hidden;
        }

        .skill-card-front {
          transform: rotateY(0deg);
        }

        .skill-card-back {
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.08),
              rgba(255,255,255,0.02)
            ),
            var(--glass-bg);
        }

        .skill-glow {
          position: absolute;
          top: -25px;
          right: -25px;
          width: 120px;
          height: 120px;
          filter: blur(55px);
          opacity: 0.25;
          border-radius: 50%;
          pointer-events: none;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .skill-header h3,
        .skill-card-back h3 {
          font-size: 1.3rem;
          margin: 0;
        }

        .skill-icon {
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .skill-icon-back {
          margin-bottom: 1.2rem;
        }

        .skill-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          position: relative;
          z-index: 2;
        }

        .skill-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
        }

        .skill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .skill-hint {
          position: absolute;
          left: 2rem;
          bottom: 1.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .skill-card-back p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 1rem 0 1.4rem;
          position: relative;
          z-index: 2;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          position: relative;
          z-index: 2;
          margin-top: auto;
        }

        .skill-tags span {
          font-size: 0.8rem;
          padding: 0.45rem 0.75rem;
          border: 1px solid;
          border-radius: 999px;
          color: var(--text-primary);
          background: rgba(255,255,255,0.04);
          line-height: 1;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .skill-card {
            height: auto;
            min-height: var(--skill-card-height, 400px);
          }

          .skill-card-inner {
            min-height: var(--skill-card-height, 400px);
          }
        }
      `}</style>
    </section>
  );
};