import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar-root"
    >
      <div className={`navbar-shell ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            <span>
              Santiago <span className="text-gradient">Dev</span>
            </span>
          </a>

          <ul className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="desktop-social">
            <ThemeToggle />
            <a
              href="https://github.com/Santiagxxx"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <GitHub fontSize="small" />
              <span className="social-text">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/santiago-puentes-giraldo-b893b6332/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <LinkedIn fontSize="small" />
              <span className="social-text">LinkedIn</span>
            </a>
          </div>

          <button
            className="mobile-toggle"
            type="button"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="mobile-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-social">
              <a
                href="https://github.com/Santiagxxx"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <GitHub fontSize="small" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/santiago-puentes-giraldo-b893b6332/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <LinkedIn fontSize="small" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 12px 16px;
          pointer-events: none;
        }

        .navbar-shell {
            pointer-events: auto;
            width: 100%;
            max-width: 1120px;
            margin: 0 auto;
            border: 1px solid var(--navbar-border);
            border-radius: 999px;
            background: var(--navbar-bg-scrolled);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            box-shadow: var(--navbar-shadow);
            transition: all 0.35s ease;
          }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0.85rem 1.2rem;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--nav-text-hover);
        }

        .navbar-logo span {
          font-size: 1.45rem;
          font-weight: 800;
          font-family: Outfit, system-ui, sans-serif;
          letter-spacing: -0.03em;
        }

        .text-gradient {
          background: linear-gradient(90deg, #a855f7, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .desktop-nav,
        .desktop-social {
          display: none;
        }

        .mobile-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-toggle:hover {
          border-color: rgba(168, 85, 247, 0.55);
          background: rgba(168, 85, 247, 0.12);
          transform: translateY(-1px);
        }

        .mobile-menu {
          pointer-events: auto;
          width: calc(100% - 32px);
          max-width: 1120px;
          margin: 10px auto 0;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          background: rgba(5, 5, 5, 0.88);
          backdrop-filter: blur(18px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
          padding: 1rem;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-links a {
          display: block;
          padding: 0.85rem 1rem;
          border-radius: 18px;
          color: var(--text-secondary, #cbd5e1);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-links a:hover {
          color: var(--text-primary, #fff);
          background: rgba(168, 85, 247, 0.12);
        }

        .mobile-social {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .mobile-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem 1rem;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary, #cbd5e1);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-social a:hover {
          color: var(--text-primary, #fff);
          border-color: rgba(168, 85, 247, 0.5);
          background: rgba(168, 85, 247, 0.12);
        }

        @media (min-width: 768px) {
        .navbar-root {
          padding: 0;
        }

        .navbar-shell {
          max-width: 100%;
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-top: none;
          background: var(--navbar-bg);
          box-shadow: none;
        }

        .navbar-shell.scrolled {
          max-width: 1120px;
          margin-top: 16px;
          border: 1px solid var(--navbar-border);
          border-radius: 999px;
          background: var(--navbar-bg-scrolled);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: var(--navbar-shadow);
        }

          .navbar-content {
            padding: 1rem 1.5rem;
          }

          .navbar-shell.scrolled .navbar-content {
            padding: 0.75rem 1.25rem;
          }

          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .nav-link {
            position: relative;
            color: var(--nav-text);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            transition: color 0.3s ease;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 100%;
            height: 2px;
            border-radius: 999px;
            background: linear-gradient(90deg, #a855f7, #7c3aed);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
          }

          .nav-link:hover {
            color: var(--nav-text-hover);
          }

          .nav-link:hover::after {
            transform: scaleX(1);
          }

          .desktop-social {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .mobile-toggle {
            display: none;
          }

          .mobile-menu {
            display: none;
          }
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0;
          color: var(--nav-text);
          padding: 0.5rem;
          border-radius: 999px;
          background: transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          color: var(--nav-text-hover);
          background: rgba(255, 255, 255, 0.1);
          gap: 0.5rem;
          padding: 0.5rem 0.9rem;
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
          max-width: 90px;
          opacity: 1;
        }

        .navbar-shell .theme-toggle {
            width: 42px;
            height: 42px;
            box-shadow: none;
            background: rgba(255, 255, 255, 0.08);
            border-color: var(--navbar-border);
            color: var(--nav-text-hover);
          }

          :root[data-theme='light'] .navbar-shell .theme-toggle {
            background: rgba(15, 23, 42, 0.06);
            color: #0f172a;
          }
      `}</style>
    </motion.nav>
  );
};