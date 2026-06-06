import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, XCircle } from 'lucide-react';

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const response = await fetch("https://formsubmit.co/ajax/santipuentes2017@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Nuevo mensaje de ${name} desde el Portafolio`,
            _template: "table"
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
      <section id="contact" className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ponte en <span className="text-gradient">Contacto</span>
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hablemos sobre tu próximo proyecto.</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Ya sea que tengas una idea en mente o necesites un desarrollador para tu equipo, estoy aquí para ayudar.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="mailto:hola@ejemplo.com" className="card glass contact-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', padding: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '50%', color: 'var(--accent-cyan)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>santipuentes2017@gmail.com</p>
                  </div>
                </a>

                <a href="#" className="card glass contact-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', padding: '1.5rem' }}>
                  <div style={{ padding: '1rem', background: 'rgba(112, 0, 255, 0.1)', borderRadius: '50%', color: 'var(--accent-purple)' }}>
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>LinkedIn</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Santiago Puentes Giraldo</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form 
                className="card glass" 
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} 
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Nombre</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="tu@email.com" required />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mensaje</label>
                  <textarea id="message" name="message" rows={4} className="form-input" placeholder="¿Cómo puedo ayudarte?" required></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ justifyContent: 'center', marginTop: '1rem', opacity: status === 'loading' ? 0.7 : 1 }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'} 
                  {status === 'idle' && <Send size={18} />}
                  {status === 'success' && <CheckCircle size={18} />}
                  {status === 'error' && <XCircle size={18} />}
                </button>
                {status === 'success' && (
                  <p style={{ color: '#00f0ff', textAlign: 'center', fontSize: '0.9rem', marginTop: '-0.5rem' }}>
                    ¡Mensaje enviado con éxito!
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ color: '#ff0055', textAlign: 'center', fontSize: '0.9rem', marginTop: '-0.5rem' }}>
                    Hubo un error al enviar el mensaje. Intenta de nuevo.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        <style>{`
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
        `}</style>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>© {new Date().getFullYear()} Santiago Puentes Giraldo. Construido con React & Vite.</p>
      </footer>
    </>
  );
};
