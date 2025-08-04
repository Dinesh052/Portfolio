import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import Decorations from '../components/Decorations';
import StickyNote from '../components/StickyNote';

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
      
      {/* Sticky Note */}
      <StickyNote 
        color="pink" 
        rotation="1.5deg" 
        top="18%" 
        left="5%" 
        width="160px"
      >
        Open to opportunities
      </StickyNote>

      <section className="section">
        <motion.h2 
          className="section-title center-no-underline"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', display: 'block', width: '100%' }}
        >
          Let's Connect!
        </motion.h2>

        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
        >
          <h3 style={{
            fontFamily: 'Amatic SC, cursive',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: 'var(--ink-dark)'
          }}>Contact Details</h3>
          <div className="contact-links" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={22}/> LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={22}/> GitHub
            </a>
            <a href={personal.resume} target="_blank" rel="noopener noreferrer" className="contact-link" style={{ background: 'var(--sticky-green)', color: 'var(--ink-dark)' }}>
              <MapPin size={22}/> View Resume
            </a>
          </div>
          <div style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: 'var(--ink-dark)' }}>
            {personal.email}<br/>
            {personal.phone}<br/>
            Bangalore, India
          </div>
          <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#4a3b2f' }}>
            I'm always excited to discuss new opportunities, innovative projects, or just have a chat about technology and AI! Feel free to reach out.
          </p>
        </motion.div>

        {/* Fun contact methods */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '2rem', maxWidth: '500px', margin: '2rem auto 0' }}
        >
          <h3 style={{ 
            fontFamily: 'Shadows Into Light, cursive', 
            fontSize: '1.5rem', 
            marginBottom: '1rem',
            color: 'var(--ink-blue)',
            textAlign: 'center'
          }}>
            Let's grab a coffee and talk tech!
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
