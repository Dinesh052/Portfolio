import React from 'react'
import { motion } from 'framer-motion'
import { Award, MapPin, Calendar } from 'lucide-react'

const About = () => {
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
            <h1 className="section-title">About Me</h1>
            
            <div className="grid grid-2">
              <div className="paper card">
                <h3 className="card-title">Who I Am</h3>
                <p className="card-content">
                  I'm a passionate Computer Science and Engineering student specializing in Data Science 
                  at R.V College of Engineering. With a strong foundation in software development and 
                  a keen interest in emerging technologies, I strive to create innovative solutions 
                  that make a meaningful impact.
                </p>
                <p className="card-content">
                  Currently working as a Software Engineer Intern at Walmart Global Tech, I'm developing 
                  MCP (Managed Commerce Platform) tools and REST APIs that enhance internal developer 
                  experience and streamline order debugging processes.
                </p>
              </div>

              <div className="paper card">
                <h3 className="card-title">My Journey</h3>
                <p className="card-content">
                  My journey in technology began with a curiosity about how systems work and a desire 
                  to build something meaningful. From achieving All India Rank 1149 in COMEDK to 
                  winning the Smart India Hackathon 2024, I've consistently pushed myself to excel 
                  in competitive environments.
                </p>
                <p className="card-content">
                  Through various internships, research publications, and leadership roles, I've 
                  developed a well-rounded perspective on technology and its applications in solving 
                  real-world problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, var(--paper-bg) 0%, var(--paper-aged) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Education & Achievements</h2>
          
          <div className="timeline">
            <motion.div 
              className="timeline-item paper card"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                <MapPin size={16} />
                <span className="card-subtitle">Bangalore, India</span>
                <Calendar size={16} />
                <span className="card-subtitle">Dec 2022 - Present</span>
              </div>
              <h3 className="card-title">R.V College of Engineering</h3>
              <p className="card-subtitle">B.E - Computer Science and Engineering (Data Science)</p>
              <p className="card-content">
                <strong>GPA: 8.11/10 (current)</strong><br />
                Specializing in Data Science with focus on machine learning, computer vision, 
                and software engineering practices.
              </p>
            </motion.div>

            <motion.div 
              className="timeline-item paper card"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                <MapPin size={16} />
                <span className="card-subtitle">Guntur, Andhra Pradesh</span>
                <Calendar size={16} />
                <span className="card-subtitle">2020 - 2022</span>
              </div>
              <h3 className="card-title">Bhashyam Junior College</h3>
              <p className="card-subtitle">Intermediate Education</p>
              <p className="card-content">
                <strong>Overall Percentage: 90.4%</strong><br />
                Strong foundation in Mathematics, Physics, and Chemistry with focus on 
                analytical thinking and problem-solving.
              </p>
            </motion.div>

            <motion.div 
              className="timeline-item paper card paper-crumpled"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                <Award size={16} />
                <span className="card-subtitle">Scholastic Achievement</span>
              </div>
              <h3 className="card-title">COMEDK Entrance Examination</h3>
              <p className="card-content">
                <strong>All India Rank 1149 (2022)</strong><br />
                Achieved top 0.5% rank among hundreds of thousands of candidates, demonstrating 
                strong academic excellence and competitive spirit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="grid grid-3">
            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="card-title">Programming Languages</h3>
              <p className="card-content">
                C, C++, Java, Python, SQL, HTML, CSS, MATLAB, R
              </p>
            </motion.div>

            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="card-title">Data Science & ML</h3>
              <p className="card-content">
                TensorFlow, NumPy, Matplotlib, OpenCV, Pandas, YOLO, RT-DETR, MCP Agents
              </p>
            </motion.div>

            <motion.div 
              className="paper paper-crumpled card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="card-title">Tools & Frameworks</h3>
              <p className="card-content">
                Git, Docker, Unreal Engine, AirSim, Ultralytics, MySQL, AWS, SpringBoot, API Development
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
