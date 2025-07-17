import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import Decorations from '../components/Decorations';

const Contact = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="page-content">
        <div className="fade-in">Loading contact info...</div>
      </div>
    );
  }

  if (!content) return null;

  const { personal } = content;

  return (
    <motion.div
      className="page-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Decorations />

      <section className="section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect! 📞
        </motion.h2>

        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
        >
          <div className="sticker" style={{ top: '-15px', right: '20px' }}>📧</div>
          
          <h3 style={{ 
            fontFamily: 'Amatic SC, cursive', 
            fontSize: '2rem', 
            marginBottom: '1rem',
            transform: 'rotate(-1deg)'
          }}>
            Get In Touch
          </h3>
          
          <p style={{ 
            fontFamily: 'Kalam, cursive', 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            color: 'var(--ink-black)'
          }}>
            I'm always excited to discuss new opportunities, innovative projects, 
            or just have a chat about technology and AI! Feel free to reach out.
          </p>

          <div className="contact-links" style={{ justifyContent: 'center' }}>
            <motion.a 
              href={`mailto:${personal.email}`} 
              className="contact-link"
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Email Me</span>
            </motion.a>
            
            <motion.a 
              href={`tel:${personal.phone}`} 
              className="contact-link"
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              <span>Call Me</span>
            </motion.a>
            
            <motion.a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href={personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
          </div>

          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem',
            background: 'var(--highlighter-yellow)',
            borderRadius: '15px',
            border: '2px dashed var(--ink-orange)',
            transform: 'rotate(1deg)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <MapPin size={20} color="var(--ink-black)" />
              <span style={{ fontWeight: 'bold', color: 'var(--ink-black)' }}>
                📍 {personal.location}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Fun contact methods */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '2rem', maxWidth: '500px', margin: '2rem auto 0' }}
        >
          <div className="sticker" style={{ top: '-15px', right: '20px' }}>☕</div>
          
          <h3 style={{ 
            fontFamily: 'Shadows Into Light, cursive', 
            fontSize: '1.5rem', 
            marginBottom: '1rem',
            color: 'var(--ink-blue)',
            textAlign: 'center'
          }}>
            Let's grab a coffee and talk tech! ☕
          </h3>
          
          <p style={{ 
            fontFamily: 'Kalam, cursive', 
            textAlign: 'center',
            color: 'var(--ink-black)',
            fontStyle: 'italic'
          }}>
            Whether it's about AI research, software development, 
            or the latest tech trends - I'm always up for a good conversation!
          </p>

          {/* Random doodles */}
          <div className="doodle doodle-heart" style={{ top: '20px', left: '20px' }}>♡</div>
          <div className="doodle doodle-smile" style={{ bottom: '20px', right: '30px' }}>☺</div>
        </motion.div>
      </section>

      {/* Background decorations */}
      <div className="decoration decoration-1">💬</div>
      <div className="decoration decoration-2">📱</div>
      <div className="decoration decoration-3">✉️</div>
    </motion.div>
  );
};

export default Contact;
