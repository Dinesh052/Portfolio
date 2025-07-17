import React from 'react';

const StickyNote = ({ 
  children, 
  color = 'yellow', 
  rotation = '1deg', 
  top, 
  right, 
  left, 
  bottom,
  width = '200px' 
}) => {
  const colors = {
    yellow: 'var(--sticky-yellow)',
    pink: 'var(--sticky-pink)',
    blue: 'var(--sticky-blue)',
    green: 'var(--sticky-green)'
  };

  const style = {
    position: 'absolute',
    background: colors[color],
    padding: '1rem',
    width: width,
    transform: `rotate(${rotation})`,
    boxShadow: '0 4px 8px rgba(139, 111, 71, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    fontFamily: 'Kalam, cursive',
    fontSize: '0.9rem',
    color: 'var(--ink-dark)',
    zIndex: 15,
    ...(top && { top }),
    ...(right && { right }),
    ...(left && { left }),
    ...(bottom && { bottom })
  };

  return (
    <div style={style} className="sticky-note">
      {/* Tape on top */}
      <div style={{
        position: 'absolute',
        top: '-8px',
        left: '50%',
        transform: 'translateX(-50%) rotate(-2deg)',
        width: '40px',
        height: '16px',
        background: 'var(--tape-color)',
        border: '1px solid rgba(139, 111, 71, 0.2)',
        boxShadow: '0 2px 4px var(--tape-shadow)',
        borderRadius: '2px'
      }}></div>
      {children}
    </div>
  );
};

export default StickyNote;
