import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">

        {/* LADO IZQUIERDO */}
        <div className="hero-content">
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
          className="hero-title-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="hero-title-line">Web Developer</span>
          <span className="hero-title-line text-gradient">Creative & Modern</span>
        </motion.h1>

        <motion.div
            className="hero-mobile-image-wrapper"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
          >
            <div className="hero-mobile-glow"></div>

            <div className="hero-mobile-blob">
              <img
                src="/images/YO.png"
                alt="Foto de Santiago"
                className="hero-mobile-image"
              />
            </div>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I transform complex ideas into intuitive, eye-catching digital experiences. 
            With a focus on React, interface design, and full-stack development.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              See Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline glass">
              Contact <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* LADO DERECHO */}
        <motion.div
            className="hero-image-wrapper hero-image-desktop"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="hero-image-glow"></div>

            <div className="hero-blob">
              <img
                src="/images/YO.png"
                alt="Foto de Santiago"
                className="hero-image"
              />
            </div>
        </motion.div>

      </div>
    </section>
  );
};