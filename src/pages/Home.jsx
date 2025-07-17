import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';

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
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href={`mailto:${personal.email}`} className="contact-link">
            Contact
          </a>
        </motion.div>
      </section>

      <section className="section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          Welcome to My Portfolio
        </motion.h2>
        
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <p>
            I'm a passionate Computer Science student at RVCE with a focus on AI/ML research, 
            enterprise architecture, and full-stack development. I enjoy solving complex problems 
            and building innovative solutions that make a difference.
          </p>
          <p>
            Currently working on cutting-edge research in computer vision and AI, while also 
            developing scalable enterprise applications. My work spans from academic research 
            publications to winning national hackathons.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h3>Quick Highlights</h3>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
            <li>Published researcher in AI and computer vision</li>
            <li>Smart India Hackathon winner</li>
            <li>Expertise in Python, Java, TensorFlow, and modern web technologies</li>
            <li>Experience in enterprise architecture and full-stack development</li>
          </ul>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
