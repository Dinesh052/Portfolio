import React from 'react'
import { motion } from 'framer-motion'
import { Award, Code, Calendar, Users, ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "GovBuild: No-Code Service Builder for Governments",
      subtitle: "Enterprise Architecture Project | Mentored by Laurence Berry (Komo, UK)",
      duration: "Apr 2025 - Jun 2025",
      type: "TOGAF-aligned Enterprise Project",
      description: [
        "Designed an enterprise architecture for GovTech using TOGAF ADM phases to enable rapid development of digital public services.",
        "Implemented a no-code prototype enabling local governments to configure service workflows, integrated with AI for citizen query handling.",
        "Mapped architecture to Indian digital infrastructure (e.g., DigiLocker, Aadhaar, UPI) and analyzed deployment in real-world municipalities."
      ],
      tags: ["Enterprise Architecture", "TOGAF", "GovTech", "No-Code", "AI Integration"],
      featured: true
    },
    {
      title: "Swarm Drones in SAR Operations",
      subtitle: "Smart India Hackathon Winner",
      duration: "July 2024 - Dec 2024",
      type: "National Level Project",
      description: [
        "Led a team to victory in Smart India Hackathon 2024, developing an innovative drone-based search and rescue system that processes aerial imagery into 3D terrain maps without requiring specialized hardware.",
        "Implemented real-time transformer algorithm for object detection trained on real and synthetic datasets, optimized for Jetson hardware.",
        "Validated system performance in photorealistic simulation environment (260 sq.km) using Unreal Engine and AirSim for multi-drone scenarios."
      ],
      tags: ["Computer Vision", "Drones", "AI/ML", "Unreal Engine", "Real-time Processing"],
      achievement: "All India First Place",
      featured: true
    },
    {
      title: "Study Chatbot using Palm API",
      subtitle: "Course Project | Design Thinking Lab",
      duration: "Feb 2024 - Apr 2024",
      type: "Academic Project",
      description: [
        "Developed an AI-powered educational chatbot using Palm API with personalized learning capabilities.",
        "Conducted user research with 100+ participants to optimize the chatbot's responses and features.",
        "Implemented natural language processing for educational content delivery and assessment."
      ],
      tags: ["AI/ML", "NLP", "API Integration", "User Research", "Education Tech"]
    },
    {
      title: "Surface Level Crack Detection System",
      subtitle: "Academic Project | Course Project: Environment and Sustainability",
      duration: "July 2023 - Sept 2023",
      type: "Computer Vision Project",
      description: [
        "Implemented computer vision techniques for crack detection in infrastructure and automated notification system.",
        "Developed image processing algorithms for accurate crack identification and measurement.",
        "Created automated alerting system for infrastructure maintenance teams."
      ],
      tags: ["Computer Vision", "OpenCV", "Infrastructure", "Automation", "Image Processing"]
    },
    {
      title: "Brain Tumor Detection",
      subtitle: "Machine Learning Project",
      duration: "Jul 2023 - Sept 2023",
      type: "Healthcare AI",
      description: [
        "Developed a CNN-based model for automated detection of brain tumors with a secure Flask-based web interface.",
        "Implemented deep learning techniques for medical image analysis with high accuracy.",
        "Created user-friendly web interface for medical professionals to upload and analyze brain scans."
      ],
      tags: ["Deep Learning", "CNN", "Flask", "Healthcare", "Medical Imaging"]
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
            <h1 className="section-title">Key Projects</h1>
            
            <div style={{ display: 'grid', gap: 'var(--spacing-xl)' }}>
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className={`paper card ${project.featured ? 'paper-elevated' : 'paper-crumpled'}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  style={{ 
                    border: project.featured ? '2px solid var(--ink-dark)' : '1px solid rgba(212, 196, 168, 0.4)',
                    position: 'relative'
                  }}
                >
                  {project.achievement && (
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '20px',
                      background: 'var(--ink-dark)',
                      color: 'var(--paper-bg)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Award size={12} />
                      {project.achievement}
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                    <Code size={16} />
                    <span className="card-subtitle">{project.type}</span>
                    <Calendar size={14} />
                    <span className="card-subtitle">{project.duration}</span>
                  </div>
                  
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-subtitle" style={{ marginBottom: 'var(--spacing-md)' }}>
                    {project.subtitle}
                  </p>
                  
                  <ul style={{ margin: '0 0 var(--spacing-md) 0', paddingLeft: 'var(--spacing-lg)' }}>
                    {project.description.map((desc, i) => (
                      <li key={i} style={{ marginBottom: 'var(--spacing-sm)', color: 'var(--ink-medium)' }}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-xs)' }}>
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        style={{
                          background: 'var(--paper-aged)',
                          color: 'var(--ink-dark)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          border: '1px solid rgba(212, 196, 168, 0.4)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, var(--paper-bg) 0%, var(--paper-aged) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Technical Approach</h2>
          
          <div className="grid grid-3">
            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                <Code size={16} />
                <h3 className="card-title" style={{ margin: 0 }}>Problem Solving</h3>
              </div>
              <p className="card-content">
                Each project begins with thorough problem analysis, stakeholder research, 
                and solution architecture design before implementation.
              </p>
            </motion.div>

            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                <Users size={16} />
                <h3 className="card-title" style={{ margin: 0 }}>Team Leadership</h3>
              </div>
              <p className="card-content">
                Experience leading cross-functional teams, managing project timelines, 
                and coordinating with stakeholders for successful delivery.
              </p>
            </motion.div>

            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                <Award size={16} />
                <h3 className="card-title" style={{ margin: 0 }}>Innovation Focus</h3>
              </div>
              <p className="card-content">
                Emphasis on cutting-edge technologies, novel approaches, and real-world 
                impact through innovative solutions and research.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects
