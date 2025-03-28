import React from 'react';
import '../Styles.css';

type WordDisplayProps = {
  word: string;
  guessedLetters: Set<string>;
};

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters }) => {
  return (
    <div className="word-display">
      {word.split('').map((letter, index) => {
        const isSpace = letter === ' ';
        const isVisible = guessedLetters.has(letter);

        return (
          <span
            key={index}
            className={`letter ${isSpace ? 'space' : ''}`}
          >
            {isSpace ? '\u00A0' : isVisible ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default WordDisplay;
