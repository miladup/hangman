// src/components/GameResult.tsx
import React from 'react';

type GameResultProps = {
    hasWon: boolean;
    onRestart: () => void; // Ajout d'une prop pour la réinitialisation du jeu
};

const GameResult: React.FC<GameResultProps> = ({ hasWon, onRestart }) => {
    return (
        <div>
            {hasWon ? (
                <div>
                    <p>Félicitations ! Vous avez gagné !</p>
                    <button onClick={onRestart}>Jouer à nouveau</button>
                </div>
            ) : (
                <div>
                    <p>Vous avez perdu. Essayez encore !</p>
                    <button onClick={onRestart}>Essayer à nouveau</button>
                </div>
            )}
        </div>
    );
};

export default GameResult;
