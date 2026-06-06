import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code, User, Mail, BookMarked, ContactRound } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>
            Santiago <span className="text-gradient">Dev</span>
          </span>
        </a>

        {/* Desktop Nav */} 
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'none', gap: '0.5rem' }} className="desktop-social">
          <a href="https://github.com/Santiagxxx" target="_blank" rel="noreferrer" className="social-link">
            <BookMarked size={20} />
            <span className="social-text">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/santiago-puentes-giraldo-b893b6332/" target="_blank" rel="noreferrer" className="social-link">
            <ContactRound size={20} />
            <span className="social-text">LinkedIn</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', display: 'flex' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{ background: 'var(--bg-color)', padding: '1rem', borderBottom: '1px solid var(--glass-border)' }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={{ display: 'block', padding: '0.5rem', color: 'var(--text-primary)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Add some simple inline CSS for media queries since we didn't add it in index.css */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .desktop-social { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 0;
          color: var(--text-secondary);
          padding: 0.4rem;
          border-radius: 20px;
          background: transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
          gap: 0.5rem;
          padding: 0.4rem 0.8rem;
        }
        
        .social-text {
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: all 0.3s ease;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .social-link:hover .social-text {
          max-width: 80px;
          opacity: 1;
        }
      `}</style>
    </motion.nav>
  );
};
