// src/components/WordDisplay.tsx
import React from 'react';

type WordDisplayProps = {
    word: string;
    guessedLetters: Set<string>;
};

const WordDisplay: React.FC<WordDisplayProps> = ({ word, guessedLetters }) => {
    return (
        <div>
            {word.split('').map((letter) => (
                guessedLetters.has(letter) ? letter : '_'
            )).join(' ')}
        </div>
    );
};

export default WordDisplay;