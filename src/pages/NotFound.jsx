import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ 
        paddingTop: '80px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}
        >
          <div className="paper card">
            <h1 style={{ fontSize: '4rem', margin: 0, color: 'var(--text-muted)' }}>404</h1>
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Page Not Found</h2>
            <p style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--text-secondary)' }}>
              Oops! The page you're looking for seems to have wandered off like a crumpled piece of paper. 
              Let's get you back to somewhere familiar.
            </p>
            
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center' }}>
              <Link to="/" className="btn btn-primary">
                <Home size={18} />
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NotFound
