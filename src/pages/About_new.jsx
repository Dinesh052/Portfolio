import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import Skills from '../components/Skills';
import Decorations from '../components/Decorations';

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
          <div className="sticker" style={{ top: '-15px', right: '20px' }}>{education.sticker}</div>
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
            Publications 📝
          </motion.h2>

          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              className="publication-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="sticker" style={{ top: '-15px', right: '20px' }}>{pub.sticker}</div>
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
              <div className="sticker" style={{ top: '-15px', right: '20px' }}>🏆</div>
              <h3 className="company-name">{position.organization}</h3>
              <p className="position">{position.title}</p>
              <p className="duration">{position.duration} • {position.location}</p>
            </motion.div>
          ))}
        </section>
      )}

      {/* Random doodles */}
      <div className="decoration decoration-1">📚</div>
      <div className="decoration decoration-2">🎓</div>
      <div className="decoration decoration-3">✨</div>
    </motion.div>
  );
};

export default About;
