import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import Skills from '../components/Skills';
import Decorations from '../components/Decorations';
import StickyNote from '../components/StickyNote';

const About = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="page-content">
        <div className="fade-in">Loading...</div>
      </div>
    );
  }

  if (!content) return null;

  const { education, publications, positions } = content;

  return (
    <motion.div
      className="page-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Decorations />
      
      {/* Sticky Notes */}
      <StickyNote 
        color="yellow" 
        rotation="2deg" 
        top="15%" 
        right="5%" 
        width="180px"
      >
        Quick facts about me
      </StickyNote>
      
      <StickyNote 
        color="blue" 
        rotation="-1.5deg" 
        bottom="15%" 
        right="12%" 
        width="200px"
        singleTape={true}
      >
        Always learning something new
      </StickyNote>

      {/* Education Section */}
      <section className="section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education {education.sticker}
        </motion.h2>

        <motion.div 
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="degree">{education.degree}</h3>
          <p className="university">{education.university}, {education.location}</p>
          <p className="duration">{education.duration}</p>
          <div className="gpa">GPA: {education.gpa}</div>
          
          {education.achievements && (
            <div style={{ marginTop: '1rem' }}>
              <h4 style={{ color: 'var(--ink-blue)', marginBottom: '0.5rem' }}>Achievements:</h4>
              <ul className="achievements">
                {education.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {education.previous && (
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '2px dashed var(--ink-purple)' }}>
              <h4 style={{ color: 'var(--ink-purple)', marginBottom: '0.5rem' }}>Previous Education:</h4>
              <p><strong>{education.previous.degree}</strong></p>
              <p>{education.previous.institution}, {education.previous.location}</p>
              <p>{education.previous.duration} • {education.previous.percentage}</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* Publications Section */}
      {publications && publications.length > 0 && (
        <section className="section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Publications
          </motion.h2>

          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              className="publication-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-venue">{pub.conference}</p>
              <p className="duration">{pub.date}</p>
              <p className="project-description">{pub.description}</p>
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="doi-link">
                View Publication
              </a>
            </motion.div>
          ))}
        </section>
      )}

      {/* Skills Section */}
      <Skills />

      {/* Positions of Responsibility */}
      {positions && positions.length > 0 && (
        <section className="section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Campus Involvement 🎯
          </motion.h2>

          {positions.map((position, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <h3 className="company-name">{position.organization}</h3>
              <p className="position">{position.title}</p>
              <p className="duration">{position.duration} • {position.location}</p>
            </motion.div>
          ))}

          {/* Add E-Cell entry here, no bullets */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="company-name">Entrepreneurship Cell, RVCE</h3>
            <p className="position">Senior Associate</p>
            <p className="duration">Dec 2022 - July 2024 • Bangalore, India</p>
            <p>Organized events with 4000+ footfall<br/>Managed corporate partnerships and sponsorships<br/>Led team coordination and event management</p>
          </motion.div>
        </section>
      )}
    </motion.div>
  );
};

export default About;
