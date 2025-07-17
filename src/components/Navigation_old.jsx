import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <motion.nav 
        className="nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
              Dinesh Guduru
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                padding: 'var(--spacing-sm)',
                cursor: 'pointer',
                color: 'var(--ink-dark)'
              }}
              className="mobile-menu-button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              background: 'linear-gradient(180deg, rgba(247, 243, 233, 0.98) 0%, rgba(240, 230, 210, 0.95) 100%)',
              backdropFilter: 'blur(12px)',
              borderBottom: '2px solid rgba(212, 196, 168, 0.4)',
              zIndex: 999,
              padding: 'var(--spacing-lg) 0',
              display: 'none',
              boxShadow: '0 8px 16px rgba(60, 40, 20, 0.1)'
            }}
            className="mobile-menu"
          >
            <div className="container">
              <nav>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {navItems.map((item) => (
                    <li key={item.path} style={{ marginBottom: 'var(--spacing-md)' }}>
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        style={{
                          display: 'block',
                          padding: 'var(--spacing-md)',
                          fontSize: '1.2rem',
                          fontFamily: "'Kalam', cursive",
                          fontWeight: '500',
                          color: location.pathname === item.path ? 'var(--ink-dark)' : 'var(--ink-medium)',
                          textDecoration: 'none',
                          borderRadius: 'var(--radius)',
                          background: location.pathname === item.path ? 'var(--paper-aged)' : 'transparent',
                          transition: 'all 0.3s ease',
                          border: location.pathname === item.path ? '1px solid rgba(212, 196, 168, 0.3)' : '1px solid transparent'
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navigation
