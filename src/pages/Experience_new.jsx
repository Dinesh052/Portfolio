import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import Decorations from '../components/Decorations';

const Experience = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="page-content">
        <div className="fade-in">Loading experience...</div>
      </div>
    );
  }

  if (!content) return null;

  const { experience } = content;

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
          Work Experience 💼
        </motion.h2>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="sticker" style={{ top: '10px', right: '10px' }}>{exp.sticker}</div>
              
              <h3 className="company-name">{exp.company}</h3>
              <p className="position">{exp.position}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={16} color="var(--pencil-gray)" />
                  <span className="duration">{exp.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} color="var(--ink-green)" />
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              
              <ul className="achievements">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>

              {/* Random doodle for each experience */}
              <div className="doodle doodle-check" style={{ 
                bottom: '10px', 
                right: `${Math.random() * 50 + 20}px` 
              }}>
                ✓
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative elements */}
      <div className="decoration decoration-1">🚀</div>
      <div className="decoration decoration-2">💡</div>
      <div className="decoration decoration-3">⭐</div>
    </motion.div>
  );
};

export default Experience;
