// src/components/HangmanFigure.tsx
import React from 'react';

type HangmanFigureProps = {
    attempts: number;
};

const HangmanFigure: React.FC<HangmanFigureProps> = ({ attempts }) => {
    return (
        <div>
            {/* Ici, tu peux ajouter les images ou dessiner avec SVG/CSS */}
            <p>Nombre d'essais : {attempts}</p>
        </div>
    );
};

export default HangmanFigure;
