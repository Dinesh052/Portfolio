import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const MobileNavigation = () => {
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
      <button
        onClick={toggleMenu}
        className="mobile-menu-button"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          padding: 'var(--spacing-sm)',
          cursor: 'pointer',
          color: 'var(--text-primary)'
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid var(--border-light)',
              zIndex: 999,
              padding: 'var(--spacing-lg) 0'
            }}
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
                          fontSize: '1.125rem',
                          fontWeight: '500',
                          color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                          textDecoration: 'none',
                          borderRadius: 'var(--radius)',
                          background: location.pathname === item.path ? 'var(--secondary-bg)' : 'transparent',
                          transition: 'all 0.2s ease'
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
        }
      `}</style>
    </>
  )
}

export default MobileNavigation
