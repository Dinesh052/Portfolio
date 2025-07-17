import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import Decorations from '../components/Decorations';

const Home = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="page-content">
        <div className="fade-in">Loading...</div>
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
      
      <section className="hero">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ delay: 0.2 }}
        >
          {personal.name}
        </motion.h1>
        
        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, rotate: 2 }}
          animate={{ opacity: 1, rotate: 1 }}
          transition={{ delay: 0.4 }}
        >
          {personal.title}
        </motion.h2>
        
        <motion.p 
          className="hero-bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {personal.bio}
        </motion.p>

        <motion.div 
          className="contact-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href={`mailto:${personal.email}`} className="contact-link">
            <Mail size={20} />
            <span>Email</span>
          </a>
          
          <a href={`tel:${personal.phone}`} className="contact-link">
            <Phone size={20} />
            <span>Call</span>
          </a>
          
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          
          <div className="contact-link">
            <MapPin size={20} />
            <span>{personal.location}</span>
          </div>
        </motion.div>
      </section>

      {/* Random doodles positioned absolutely */}
      <div className="decoration decoration-1">🚀</div>
      <div className="decoration decoration-2">✨</div>
      <div className="decoration decoration-3">💡</div>
    </motion.div>
  );
};

export default Home;
