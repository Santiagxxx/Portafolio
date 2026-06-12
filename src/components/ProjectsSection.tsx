import { motion } from 'framer-motion';
import { GitHub, ArrowOutward, AutoAwesome } from '@mui/icons-material';

const projects = [
  {
    id: 1,
    title: 'Shop Dev',
    category: 'E-commerce Platform',
    highlight: 'Shopping Cart + Admin Panel',
    description:
      'A space-themed sales platform with a dynamic shopping cart, product management and an advanced admin experience.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    tags: ['TypeScript', 'CSS', 'Tailwind', 'JavaScript'],
    github: 'https://github.com/Santiagxxx/ShopDev.git'
  },
  {
    id: 2,
    title: 'SGIN V8',
    category: 'Analytics Management App',
    highlight: 'Large Dataset Management',
    description:
      'A management system designed to organize, process and analyze large volumes of information with a cleaner workflow.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'C++'],
    github: 'https://github.com/Santiagxxx/SGIN-V8.git'
  },
  {
    id: 3,
    title: 'HuertaDirecta',
    category: 'Agrotech E-commerce',
    highlight: 'Sales + Payments + Inventory',
    description:
      'A digital platform for agricultural commerce, including product management, payments and e-commerce tools for local producers.',
    image:
      'https://adagri.com/wp-content/uploads/2026/01/Adagri_blog_Kampanie-Performance-Max-w-ecommerce-rolniczym.jpg',
    tags: ['TypeScript', 'Java', 'PostgreSQL', 'Spring Boot'],
    github: 'https://github.com/HuertaDirectaProject/HdirectaJava.git'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-kicker">
            <AutoAwesome fontSize="small" />
            Selected Work
          </span>

          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>

          <p className="projects-subtitle">
            A collection of web applications focused on clean interfaces,
            useful features and real development challenges.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card glass"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />

                <div className="project-overlay"></div>

                <span className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <div className="project-top">
                  <span className="project-highlight">
                    {project.highlight}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    className="project-btn project-btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub fontSize="small" />
                    Code
                    <ArrowOutward fontSize="small" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 50%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(112, 0, 255, 0.18), transparent 65%);
          filter: blur(20px);
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 0;
        }

        .projects-heading {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 1rem;
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.08);
          border: 1px solid rgba(0, 240, 255, 0.18);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .projects-heading .section-title {
          margin-bottom: 1rem;
        }

        .projects-subtitle {
          max-width: 640px;
          margin: 0 auto;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1rem;
        }

        .projects-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }

        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
            var(--glass-bg);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: 22px;
          background: linear-gradient(
            135deg,
            rgba(0, 240, 255, 0.45),
            rgba(112, 0, 255, 0.45),
            rgba(255, 0, 60, 0.25)
          );
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 240, 255, 0.25);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.35),
            0 0 45px rgba(0, 240, 255, 0.08);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-media {
          position: relative;
          height: 230px;
          overflow: hidden;
          border-radius: 22px 22px 0 0;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease, filter 0.7s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.12);
          filter: saturate(1.15) contrast(1.05);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(5, 5, 5, 0.95), rgba(5, 5, 5, 0.25), transparent),
            linear-gradient(135deg, rgba(0, 240, 255, 0.12), rgba(112, 0, 255, 0.18));
          pointer-events: none;
        }

        .project-number {
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          background: rgba(5, 5, 5, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
        }

        .project-category {
          position: absolute;
          left: 1rem;
          bottom: 1rem;
          padding: 0.45rem 0.8rem;
          border-radius: 999px;
          color: var(--accent-cyan);
          background: rgba(5, 5, 5, 0.65);
          border: 1px solid rgba(0, 240, 255, 0.22);
          backdrop-filter: blur(12px);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .project-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 1.6rem;
        }

        .project-top {
          margin-bottom: 1rem;
        }

        .project-highlight {
          display: inline-block;
          margin-bottom: 0.7rem;
          color: var(--accent-cyan);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .project-content h3 {
          font-size: 1.55rem;
          line-height: 1.1;
          margin: 0;
        }

        .project-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-bottom: 1.4rem;
          flex: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: 1.5rem;
        }

        .project-tags span {
          font-size: 0.78rem;
          padding: 0.35rem 0.75rem;
          color: var(--text-primary);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-actions {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .project-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 14px;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease;
        }

        .project-btn-outline {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .project-btn-outline:hover {
          transform: translateY(-2px);
          color: var(--accent-cyan);
          border-color: rgba(0, 240, 255, 0.35);
          background: rgba(0, 240, 255, 0.08);
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-media {
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
};