import React from 'react';

const HangmanFigure: React.FC<{ wrongGuessCount: number }> = ({ wrongGuessCount }) => {
    return (
      <svg width="200" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">

        <line x1="20" y1="230" x2="180" y2="230" stroke="white" strokeWidth="4" />
        <line x1="50" y1="230" x2="50" y2="20" stroke="white" strokeWidth="4" />
        <line x1="50" y1="20" x2="130" y2="20" stroke="white" strokeWidth="4" />
        <line x1="130" y1="20" x2="130" y2="50" stroke="white" strokeWidth="4" />
  
        {wrongGuessCount >= 1 && <circle cx="130" cy="70" r="20" stroke="white" strokeWidth="4" />}          {/* tête */}
        {wrongGuessCount >= 2 && <line x1="130" y1="90" x2="130" y2="150" stroke="white" strokeWidth="4" />} {/* corps */}
        {wrongGuessCount >= 3 && <line x1="130" y1="100" x2="100" y2="130" stroke="white" strokeWidth="4" />} {/* bras g. */}
        {wrongGuessCount >= 4 && <line x1="130" y1="100" x2="160" y2="130" stroke="white" strokeWidth="4" />} {/* bras d. */}
        {wrongGuessCount >= 5 && <line x1="130" y1="150" x2="110" y2="190" stroke="white" strokeWidth="4" />} {/* jambe g. */}
        {wrongGuessCount >= 6 && <line x1="130" y1="150" x2="150" y2="190" stroke="white" strokeWidth="4" />} {/* jambe d. */}
      </svg>
    );
  };

export default HangmanFigure;
