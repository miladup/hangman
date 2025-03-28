import React from 'react';
import '../Styles.css';

type GameResultProps = {
  hasWon: boolean | null;
  onRestart: () => void;
};

const GameResult: React.FC<GameResultProps> = ({ hasWon, onRestart }) => {
  if (hasWon === null) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{hasWon ? 'Félicitations ! Vous avez gagné !' : 'Vous avez perdu. Essayez encore !'}</h2>
        <button onClick={onRestart}>Rejouer</button>
      </div>
    </div>
  );
};

export default GameResult;
