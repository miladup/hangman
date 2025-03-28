// src/components/Game.tsx
import React, { useState, useEffect } from 'react';
import WordDisplay from './components/WordDisplay'; // Chemin mis à jour pour pointer vers le dossier components
import Keyboard from './components/Keyboard'; // Chemin mis à jour
import HangmanFigure from './components/HangmanFigure'; // Chemin mis à jour
import GameResult from './components/GameResult'; // Chemin mis à jour
import WrongLetters from './components/WrongLetters'; // Chemin mis à jour
import { fetchData } from './api';  // Assure-toi que cette méthode existe dans ton fichier api.tsx, chemin mis à jour

const Game: React.FC = () => {
    const [word, setWord] = useState<string>('');
    const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
    const [wrongLetters, setWrongLetters] = useState<Set<string>>(new Set());
    const [errors, setErrors] = useState<number>(0);
    const maxErrors = 8;

    useEffect(() => {
        loadWord();
    }, []);

    const loadWord = async () => {
        try {
            const data = await fetchData();
            setWord(data.word.toUpperCase());
        } catch (error) {
            console.error("Failed to fetch word:", error);
        }
    };

    const handleGuess = (letter: string) => {
        const normalizedLetter = letter.toUpperCase();
        if (word.includes(normalizedLetter)) {
            setGuessedLetters(new Set(guessedLetters.add(normalizedLetter)));
        } else {
            setWrongLetters(new Set(wrongLetters.add(normalizedLetter)));
            setErrors(errors + 1);
        }
    };

    const restartGame = () => {
        setGuessedLetters(new Set());
        setWrongLetters(new Set());
        setErrors(0);
        loadWord();  // Recharge un nouveau mot
    };

    const hasWon = word.split('').every(letter => guessedLetters.has(letter));
    const hasLost = errors >= maxErrors;

    return (
        <div className="Game">
            <HangmanFigure attempts={errors} />
            <WordDisplay word={word} guessedLetters={guessedLetters} />
            <Keyboard onGuess={handleGuess} guessedLetters={new Set([...guessedLetters, ...wrongLetters])} />
            <WrongLetters letters={Array.from(wrongLetters)} />
            <GameResult hasWon={hasWon} onRestart={restartGame} />
        </div>
    );
};

export default Game;
