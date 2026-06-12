import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              borderRadius: '50px', 
              background: 'rgba(0, 240, 255, 0.1)',
              color: 'var(--accent-cyan)',
              fontWeight: 600,
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
              border: '1px solid rgba(0, 240, 255, 0.2)'
            }}>
              Hi, I´m Santiago Puentes Giraldo
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem' }}
          >
            Web Developer <br />
            <span className="text-gradient">Creative & Modern</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2.5rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.8
            }}
          >
            I transform complex ideas into intuitive, eye-catching digital experiences. 
            With a focus on React, interface design, and full-stack development.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary">
              See Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline glass">
              Contact <Download size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
