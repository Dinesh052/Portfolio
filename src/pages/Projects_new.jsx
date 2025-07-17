import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Award } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import Decorations from '../components/Decorations';

const Projects = () => {
  const { content, loading } = useContent();

  if (loading) {
    return (
      <div className="page-content">
        <div className="fade-in">Loading projects...</div>
      </div>
    );
  }

  if (!content) return null;

  const { projects } = content;

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
          Key Projects 🚀
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="sticker" style={{ top: '-15px', right: '20px' }}>{project.sticker}</div>
              
              <h3 className="project-title">{project.title}</h3>
              
              {project.achievement && (
                <div style={{ 
                  background: 'var(--highlighter-yellow)', 
                  padding: '0.5rem', 
                  borderRadius: '10px', 
                  margin: '0.5rem 0',
                  border: '2px dashed var(--ink-orange)',
                  transform: 'rotate(-1deg)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ink-black)' }}>
                    <Award size={16} />
                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{project.achievement}</span>
                  </div>
                </div>
              )}

              {project.mentor && (
                <p style={{ 
                  color: 'var(--ink-blue)', 
                  fontStyle: 'italic',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  Mentored by: {project.mentor}
                </p>
              )}
              
              {project.duration && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Calendar size={16} color="var(--ink-purple)" />
                  <span style={{ color: 'var(--ink-purple)', fontSize: '0.9rem' }}>{project.duration}</span>
                </div>
              )}
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-tags">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                )}
              </div>

              {/* Random doodles for each project */}
              <div className="doodle doodle-star" style={{ 
                top: `${Math.random() * 30 + 10}%`, 
                right: `${Math.random() * 20 + 5}%` 
              }}>
                ★
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Random scattered doodles */}
      <div className="decoration decoration-1">💻</div>
      <div className="decoration decoration-2">🔧</div>
      <div className="decoration decoration-3">⚡</div>
    </motion.div>
  );
};

export default Projects;
