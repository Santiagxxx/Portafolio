import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, XCircle, Download } from 'lucide-react';
import { GitHub, LinkedIn } from '@mui/icons-material';

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const response = await fetch('https://formsubmit.co/ajax/santipuentes2017@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New message from ${name} from the Portfolio`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get <span className="text-gradient">in Touch</span>
          </motion.h2>

          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="contact-info"
            >
              <div>
                <h3>Let's talk about your next project.</h3>
                <p>
                  Whether you have an idea in mind or need a developer for your team,
                  I'm here to help.
                </p>
              </div>

              <div className="contact-cards">
                <a href="mailto:santipuentes2017@gmail.com" className="card glass contact-card">
                  <div className="contact-icon contact-icon-cyan">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>santipuentes2017@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/santiago-puentes-giraldo-b893b6332/"
                  target="_blank"
                  rel="noreferrer"
                  className="card glass contact-card"
                >
                  <div className="contact-icon contact-icon-purple">
                    <LinkedIn fontSize="large" />
                  </div>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>Santiago Puentes Giraldo</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form className="card glass contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="you@email.com" required />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={4} className="form-input" placeholder="How can I help you?" required></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ justifyContent: 'center', marginTop: '1rem', opacity: status === 'loading' ? 0.7 : 1 }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  {status === 'idle' && <Send size={18} />}
                  {status === 'success' && <CheckCircle size={18} />}
                  {status === 'error' && <XCircle size={18} />}
                </button>
                {status === 'success' && (
                  <p className="form-status form-status-success">
                    Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p className="form-status form-status-error">
                    There was an error sending the message. Please try again.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        <style>{`
          .contact-section {
            position: relative;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
            gap: 3rem;
            max-width: 1000px;
            margin: 0 auto;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .contact-info h3 {
            font-size: clamp(1.8rem, 4vw, 2.2rem);
            line-height: 1.1;
            margin-bottom: 1rem;
          }

          .contact-info p {
            color: var(--text-secondary);
            font-size: 1.05rem;
            line-height: 1.65;
          }

          .contact-cards {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            text-decoration: none;
            padding: 1.5rem;
            min-width: 0;
          }

          .contact-card p {
            overflow-wrap: anywhere;
          }

          .contact-card h4 {
            font-size: 1.1rem;
            margin-bottom: 0.2rem;
          }

          .contact-icon {
            flex-shrink: 0;
            padding: 1rem;
            border-radius: 50%;
          }

          .contact-icon-cyan {
            color: var(--accent-cyan);
            background: rgba(0, 240, 255, 0.1);
          }

          .contact-icon-purple {
            color: var(--accent-purple);
            background: rgba(112, 0, 255, 0.1);
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .contact-form label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            color: var(--text-secondary);
          }

          .form-input {
            width: 100%;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            color: var(--text-primary);
            font-family: inherit;
            font-size: 1rem;
            transition: all 0.3s ease;
            outline: none;
          }

          .form-input:focus {
            border-color: var(--accent-cyan);
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 0 0 2px rgba(0, 240, 255, 0.2);
          }

          .contact-card:hover {
            transform: translateX(10px);
          }

          .form-status {
            text-align: center;
            font-size: 0.9rem;
            margin-top: -0.5rem;
          }

          .form-status-success {
            color: #00f0ff;
          }

          .form-status-error {
            color: #ff0055;
          }

          @media (max-width: 600px) {
            .contact-grid {
              gap: 2rem;
            }

            .contact-info {
              text-align: center;
            }

            .contact-card {
              align-items: flex-start;
              padding: 1.2rem;
            }

            .contact-card:hover {
              transform: translateY(-4px);
            }

            .form-input {
              font-size: 16px;
            }
          }
        `}</style>
      </section>

      <footer className="site-footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Santiago <span className="text-gradient">Dev</span>
            </a>
            <p>
              Building modern web experiences with React, TypeScript and clean interface design.
            </p>
          </div>

          <div className="footer-actions">
            <a href="/files/HV INGLES SANTIAGO P.pdf" download>
              <Download size={16} />
              CV
            </a>
            <a href="https://github.com/Santiagxxx" target="_blank" rel="noreferrer">
              <GitHub fontSize="small" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-puentes-giraldo-b893b6332/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn fontSize="small" />
              LinkedIn
            </a>
            <a href="mailto:santipuentes2017@gmail.com">
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Santiago Puentes Giraldo.</span>
          <span>React & Vite Portfolio.</span>
        </div>

        <style>{`
          .site-footer {
            position: relative;
            overflow: hidden;
            border-top: 1px solid var(--glass-border);
            padding: 3rem 0 1.5rem;
            color: var(--text-secondary);
            background:
              radial-gradient(circle at top left, rgba(0, 240, 255, 0.08), transparent 35%),
              radial-gradient(circle at top right, rgba(112, 0, 255, 0.12), transparent 35%);
          }

          .footer-container {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 2rem;
          }

          .footer-logo {
            display: inline-flex;
            margin-bottom: 0.8rem;
            color: var(--text-primary);
            font-family: Outfit, system-ui, sans-serif;
            font-size: 1.35rem;
            font-weight: 800;
            letter-spacing: -0.04em;
          }

          .footer-brand p {
            max-width: 430px;
            line-height: 1.7;
          }

          .footer-actions {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 0.75rem;
          }

          .footer-actions a {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            padding: 0.7rem 0.9rem;
            border-radius: 999px;
            color: var(--text-primary);
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--glass-border);
            transition: all 0.3s ease;
          }

          .footer-actions a:hover {
            transform: translateY(-3px);
            color: var(--accent-cyan);
            border-color: rgba(0, 240, 255, 0.3);
            background: rgba(0, 240, 255, 0.08);
          }

          .footer-bottom {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            margin-top: 2.2rem;
            padding-top: 1.2rem;
            border-top: 1px solid var(--glass-border);
            font-size: 0.9rem;
          }

          @media (max-width: 700px) {
            .site-footer {
              padding: 2.5rem 0 1.3rem;
            }

            .footer-container,
            .footer-bottom {
              flex-direction: column;
              text-align: center;
              align-items: center;
            }

            .footer-actions {
              justify-content: center;
            }
          }
        `}</style>
      </footer>
    </>
  );
};
