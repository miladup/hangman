// src/components/Keyboard.tsx
import React from 'react';

type KeyboardProps = {
    onGuess: (letter: string) => void;
    guessedLetters: Set<string>;
};

const Keyboard: React.FC<KeyboardProps> = ({ onGuess, guessedLetters }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    return (
        <div>
            {letters.map(letter => (
                <button key={letter} onClick={() => onGuess(letter)} disabled={guessedLetters.has(letter)}>
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
