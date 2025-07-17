import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';

const Skills = () => {
  const { content, loading } = useContent();

  if (loading) return <div className="fade-in">Loading skills...</div>;
  if (!content) return null;

  const { skills } = content;

  return (
    <section className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="skills-grid">
        {/* Programming Languages */}
        <motion.div 
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>Programming Languages</h3>
          {skills.programming.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-item-simple"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Data Science */}
        <motion.div 
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Data Science & ML</h3>
          {skills.datascience.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-item-simple"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div 
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Tools & Technologies</h3>
          {skills.tools.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-item-simple"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          className="skill-category soft-skills"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Soft Skills</h3>
          {skills.soft.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="soft-skill-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
