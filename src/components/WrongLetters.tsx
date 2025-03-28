// src/components/WrongLetters.tsx
import React from 'react';

type WrongLettersProps = {
    letters: string[];
};

const WrongLetters: React.FC<WrongLettersProps> = ({ letters }) => {
    return (
        <div>
            <p>Lettres fausses: {letters.join(', ')}</p>
        </div>
    );
};

export default WrongLetters;
