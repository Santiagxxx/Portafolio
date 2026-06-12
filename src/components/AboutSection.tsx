import { motion } from 'framer-motion';
import { ArrowRight, Code2, Download, Layers3, Sparkles } from 'lucide-react';

const aboutCards = [
  {
    title: 'Interface-first mindset',
    description:
      'I care about clean visuals, responsive layouts and experiences that feel intuitive from the first interaction.',
    icon: Sparkles,
    accent: 'var(--accent-cyan)'
  },
  {
    title: 'Full-stack foundation',
    description:
      'I connect frontend interfaces with backend logic, APIs and databases to build useful digital products.',
    icon: Layers3,
    accent: 'var(--accent-purple)'
  },
  {
    title: 'Code with purpose',
    description:
      'I focus on writing structured, maintainable code that solves real problems and supports future improvements.',
    icon: Code2,
    accent: 'var(--accent-magenta)'
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-container">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <span className="about-kicker">About Me</span>

          <h2>
            Building digital products with{' '}
            <span className="text-gradient">clean design</span> and solid logic.
          </h2>

          <p>
            I’m a software developer focused on creating modern, responsive and useful
            web experiences. I enjoy working across frontend interfaces, backend
            services and databases to turn ideas into functional products.
          </p>

          <div className="about-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="/Santiago-Puentes-CV.txt"
              download
              className="btn btn-outline glass"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        <div className="about-cards">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                className="about-card glass"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              >
                <div className="about-card-glow" style={{ background: card.accent }}></div>

                <div className="about-card-icon" style={{ color: card.accent }}>
                  <Icon size={26} />
                </div>

                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          overflow: hidden;
        }

        .about-container {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-copy {
          position: relative;
          z-index: 2;
        }

        .about-kicker {
          display: inline-flex;
          margin-bottom: 1rem;
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.08);
          border: 1px solid rgba(0, 240, 255, 0.18);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .about-copy h2 {
          font-size: clamp(2.2rem, 5vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.05em;
          margin-bottom: 1.2rem;
        }

        .about-copy p {
          max-width: 560px;
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .about-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .about-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.2rem;
          perspective: 1200px;
        }

        .about-card {
          position: relative;
          overflow: hidden;
          min-height: 235px;
          border-radius: 22px;
          padding: 1.6rem;
          transform-style: preserve-3d;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .about-card:nth-child(2) {
          transform: translateY(32px);
        }

        .about-card:nth-child(3) {
          grid-column: span 2;
          min-height: 200px;
        }

        .about-card:hover {
          border-color: rgba(0, 240, 255, 0.22);
          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.28);
        }

        .about-card-glow {
          position: absolute;
          top: -45px;
          right: -45px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.22;
          pointer-events: none;
        }

        .about-card-icon {
          width: 56px;
          height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.06);
          margin-bottom: 1.4rem;
        }

        .about-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .about-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        @media (max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .about-copy {
            text-align: center;
          }

          .about-copy p {
            margin-left: auto;
            margin-right: auto;
          }

          .about-actions {
            justify-content: center;
          }

          .about-card:nth-child(2) {
            transform: none;
          }
        }

        @media (max-width: 600px) {
          .about-copy h2 {
            font-size: clamp(2rem, 10vw, 2.8rem);
          }

          .about-copy p {
            font-size: 1rem;
          }

          .about-cards {
            grid-template-columns: 1fr;
          }

          .about-card,
          .about-card:nth-child(3) {
            grid-column: auto;
            min-height: auto;
            padding: 1.35rem;
          }
        }
      `}</style>
    </section>
  );
};
