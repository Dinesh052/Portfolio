import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="hero-title">
              Hi, I'm Dinesh Guduru
            </h1>
            <p className="hero-subtitle">
              Software Engineer & Computer Science Student passionate about building 
              innovative solutions and exploring cutting-edge technologies.
            </p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
              <a 
                href="https://github.com/Dinesh052/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                <Github size={18} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/dinesh-guduru-b332b2264/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a 
                href="mailto:gudurudinesh.cd22@rvce.edu.in"
                className="btn btn-primary"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <ArrowDown size={24} color="var(--ink-faded)" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="card-title">Current Focus</h3>
              <p className="card-content">
                Working as a Software Engineer Intern at Walmart Global Tech, 
                developing MCP tools and REST APIs for order debugging systems.
              </p>
            </motion.div>

            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="card-title">Education</h3>
              <p className="card-content">
                B.E in Computer Science and Engineering (Data Science) at 
                R.V College of Engineering with a GPA of 8.11/10.
              </p>
            </motion.div>

            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="card-title">Achievements</h3>
              <p className="card-content">
                Smart India Hackathon 2024 Winner, IEEE Published Researcher, 
                and COMEDK All India Rank 1149 achiever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, var(--paper-bg) 0%, var(--paper-aged) 100%)' }}>
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <h2 className="section-title">Ready to explore my journey?</h2>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/experience" className="btn">
                Work Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
