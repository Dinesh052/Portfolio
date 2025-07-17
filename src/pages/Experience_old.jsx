import React from 'react'
import { motion } from 'framer-motion'
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: "Walmart Global Tech",
      role: "Software Engineer Intern",
      duration: "May 2025 - Present",
      location: "Bangalore, India",
      description: [
        "Working on an internal Chainlit-based MCP (Managed Commerce Platform) tool used for order line debugging and diagnostics from various tools.",
        "Developing REST APIs using Java Spring Boot and Python to integrate the MCP agent system with Slack for enhanced internal developer experience.",
        "Responsible for backend enhancements and API endpoints that allow developers to interact and debug with order data directly from Slack and Chainlit interfaces."
      ],
      current: true
    },
    {
      company: "Women in Cloud, Center of Excellence",
      role: "Intern",
      duration: "Nov 2023 - Jan 2024",
      location: "Bangalore, India",
      description: [
        "Developed and deployed full-stack web applications using modern cloud technologies.",
        "Gained hands-on experience with cloud infrastructure and scalable application development."
      ]
    },
    {
      company: "Entrepreneurship Cell, RVCE",
      role: "Senior Associate",
      duration: "Dec 2022 - July 2024",
      location: "Bangalore, India",
      description: [
        "Organized events with 4000+ footfall and managed corporate partnerships and sponsorships.",
        "Led teams in organizing large-scale entrepreneurial events and workshops.",
        "Developed strong leadership and project management skills through event coordination."
      ]
    }
  ]

  const responsibilities = [
    {
      company: "Placement Department, RVCE",
      role: "Placement Coordinator",
      duration: "Aug 2024 - Present",
      location: "Bangalore, India"
    },
    {
      company: "ACM India Chapter",
      role: "Member",
      duration: "Aug 2024 - Present",
      location: "Bangalore, India"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ paddingTop: '80px' }}
    >
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="section-title">Work Experience</h1>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className={`timeline-item paper card ${exp.current ? 'paper-elevated' : 'paper-crumpled'}`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                    <Building size={16} />
                    <span className="card-subtitle">{exp.company}</span>
                    {exp.current && (
                      <span style={{ 
                        background: 'var(--text-primary)', 
                        color: 'var(--primary-bg)', 
                        padding: '2px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem' 
                      }}>
                        Current
                      </span>
                    )}
                  </div>
                  
                  <h3 className="card-title">{exp.role}</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                      <Calendar size={14} />
                      <span className="card-subtitle">{exp.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                      <MapPin size={14} />
                      <span className="card-subtitle">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul style={{ margin: 0, paddingLeft: 'var(--spacing-lg)' }}>
                    {exp.description.map((desc, i) => (
                      <li key={i} style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--text-secondary)' }}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--primary-bg)' }}>
        <div className="container">
          <h2 className="section-title">Campus Involvement</h2>
          
          <div className="grid grid-2">
            {responsibilities.map((resp, index) => (
              <motion.div 
                key={index}
                className="paper paper-crumpled card"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                  <Building size={16} />
                  <span className="card-subtitle">{resp.company}</span>
                </div>
                
                <h3 className="card-title">{resp.role}</h3>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <Calendar size={14} />
                    <span className="card-subtitle">{resp.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <MapPin size={14} />
                    <span className="card-subtitle">{resp.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Publications</h2>
          
          <motion.div 
            className="paper card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
              <h3 className="card-title">Limitations of Large Language Models</h3>
              <a 
                href="https://doi.org/10.1109/CSITSS64042.2024.10817070" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{ fontSize: '0.75rem', padding: 'var(--spacing-xs) var(--spacing-sm)' }}
              >
                <ExternalLink size={14} />
                DOI
              </a>
            </div>
            
            <p className="card-subtitle">
              IEEE International Conference on Computational System and Information Technology • February 2024
            </p>
            
            <ul style={{ margin: 0, paddingLeft: 'var(--spacing-lg)' }}>
              <li style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--text-secondary)' }}>
                Published research analyzing critical vulnerabilities in LLMs, focusing on hallucinations, biases, and adversarial attacks.
              </li>
              <li style={{ color: 'var(--text-secondary)' }}>
                Proposed mitigation strategies and evaluated their effectiveness in real-world applications.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Experience
