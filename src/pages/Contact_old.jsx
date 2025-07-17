import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "gudurudinesh.cd22@rvce.edu.in",
      link: "mailto:gudurudinesh.cd22@rvce.edu.in"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91-8309301256",
      link: "tel:+918309301256"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "dinesh-guduru-b332b2264",
      link: "https://linkedin.com/in/dinesh-guduru-b332b2264/"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "Dinesh052",
      link: "https://github.com/Dinesh052/"
    }
  ]

  const quickLinks = [
    {
      title: "Resume",
      description: "Download my latest resume",
      action: "Download PDF",
      icon: <ExternalLink size={16} />
    },
    {
      title: "LinkedIn Profile",
      description: "Connect with me professionally",
      action: "Visit Profile",
      link: "https://linkedin.com/in/dinesh-guduru-b332b2264/",
      icon: <Linkedin size={16} />
    },
    {
      title: "GitHub Repository",
      description: "Explore my open source contributions",
      action: "View Projects",
      link: "https://github.com/Dinesh052/",
      icon: <Github size={16} />
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
            <h1 className="section-title">Get In Touch</h1>
            
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                I'm always interested in new opportunities, collaborations, and meaningful conversations. 
                Feel free to reach out if you'd like to discuss technology, projects, or potential opportunities.
              </p>
            </div>

            <div className="grid grid-2">
              <div>
                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Contact Information</h2>
                <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="paper card"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                        <div style={{ 
                          padding: 'var(--spacing-sm)', 
                          background: 'var(--paper-aged)', 
                          borderRadius: '50%',
                          color: 'var(--ink-dark)',
                          boxShadow: 'var(--shadow-subtle)'
                        }}>
                          {contact.icon}
                        </div>
                        <div>
                          <h4 style={{ margin: 0, color: 'var(--ink-dark)' }}>{contact.label}</h4>
                          <p style={{ margin: 0, color: 'var(--ink-medium)', fontSize: '0.875rem' }}>
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Quick Actions</h2>
                <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      className="paper paper-crumpled card"
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ flex: 1 }}>
                          <h4 className="card-title" style={{ marginBottom: 'var(--spacing-xs)' }}>
                            {link.title}
                          </h4>
                          <p style={{ margin: '0 0 var(--spacing-md) 0', color: 'var(--ink-medium)', fontSize: '0.875rem' }}>
                            {link.description}
                          </p>
                          {link.link ? (
                            <a 
                              href={link.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="btn"
                              style={{ fontSize: '0.75rem', padding: 'var(--spacing-xs) var(--spacing-sm)' }}
                            >
                              {link.icon}
                              {link.action}
                            </a>
                          ) : (
                            <button 
                              className="btn"
                              style={{ fontSize: '0.75rem', padding: 'var(--spacing-xs) var(--spacing-sm)' }}
                            >
                              {link.icon}
                              {link.action}
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, var(--paper-bg) 0%, var(--paper-aged) 100%)' }}>
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>
              <MapPin size={20} color="var(--ink-dark)" />
              <h2>Currently Based In</h2>
            </div>
            
            <div className="paper card" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Bangalore, India</h3>
              <p style={{ margin: 0, color: 'var(--ink-medium)' }}>
                Working as a Software Engineer Intern at Walmart Global Tech and 
                pursuing B.E in Computer Science and Engineering at R.V College of Engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{ textAlign: 'center' }}
          >
            <h2 className="section-title">Let's Build Something Amazing Together</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xl)', color: 'var(--ink-medium)', maxWidth: '600px', margin: '0 auto var(--spacing-xl) auto' }}>
              Whether you're looking for a software engineer, have an exciting project in mind, 
              or just want to chat about technology and innovation, I'd love to hear from you.
            </p>
            <a 
              href="mailto:gudurudinesh.cd22@rvce.edu.in"
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}
            >
              <Mail size={18} />
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
