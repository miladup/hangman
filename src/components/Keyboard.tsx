import React from 'react';
import '../Styles.css';

type KeyboardProps = {
  onGuess: (letter: string) => void;
  guessedLetters: Set<string>;
};

const rows = [
  'A B C D E F G H I'.split(' '),
  'J K L M N O P Q R'.split(' '),
  'S T U V W X Y Z'.split(' ')
];

const Keyboard: React.FC<KeyboardProps> = ({ onGuess, guessedLetters }) => {
  return (
    <div className="keyboard-wrapper">
      {rows.map((row, rowIndex) => (
        <div
          className={`keyboard-row ${rowIndex === 2 ? 'centered' : ''}`}
          key={rowIndex}
        >
          {row.map((letter) => (
            <button
              key={letter}
              className="key"
              onClick={() => onGuess(letter)}
              disabled={guessedLetters.has(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
