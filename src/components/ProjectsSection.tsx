import { motion } from 'framer-motion';
//import { Code } from 'lucide-react';
import { GitHub } from '@mui/icons-material'; 


const projects = [
  {
    id: 1,
    title: 'Shop Dev',
    description: 'A space-themed sales platform. Includes a dynamic shopping cart and advanced admin panel.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    tags: ['TypeScript', 'CSS', 'Tailwind', 'JS'],
    github: 'https://github.com/Santiagxxx/ShopDev.git'
  },
  {
    id: 2,
    title: 'Analytics Management App - SGIN V8',
    description: 'A system for managing large datasets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'C++'],
    github: 'https://github.com/Santiagxxx/SGIN-V8.git'

  },
  {
    id: 3,
    title: 'HuertaDirecta',
    description: 'A system for information, sales, payments, and product management with e-commerce for our agricultural region.',
    image: 'https://adagri.com/wp-content/uploads/2026/01/Adagri_blog_Kampanie-Performance-Max-w-ecommerce-rolniczym.jpg',
    tags: ['TypeScript', 'Java', 'PostgreSQL', 'Spring Boot'],
    github: 'https://github.com/HuertaDirectaProject/HdirectaJava.git'
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="project-image"
                />
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(to top, rgba(5,5,5,0.9), transparent)',
                  pointerEvents: 'none'
                }}></div>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.2rem 0.8rem', 
                      background: 'rgba(0, 240, 255, 0.1)', 
                      color: 'var(--accent-cyan)',
                      borderRadius: '20px',
                      border: '1px solid rgba(0, 240, 255, 0.2)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', padding: '0.5rem' }}>
                    <GitHub fontSize="small" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .card:hover .project-image {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};
