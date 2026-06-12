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
            <span className="hero-badge">
              Hola, bienvenido a mi portafolio
            </span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Desarrollador Web<br />
            
          </motion.h1>

          <motion.h1
            className="hero-title-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-gradient">Creativo & Moderno</span><br />
            
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transformo ideas complejas en experiencias digitales intuitivas y llamativas.
            Con enfoque en React, diseño de interfaces y desarrollo full-stack.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos <ArrowRight size={18} />
            </a>

            <a
              href="/files/HV INGLES SANTIAGO P.pdf"
              download
              className="btn btn-outline glass"
            >
              Descargar CV <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* LADO DERECHO */}
        <motion.div
          className="hero-image-wrapper"
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