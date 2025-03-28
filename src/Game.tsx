import React, { useState, useEffect } from 'react';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import HangmanFigure from './components/HangmanFigure';
import GameResult from './components/GameResult';
import WrongLetters from './components/WrongLetters';
import { fetchData } from './api';

const Game: React.FC = () => {
    const [word, setWord] = useState<string>('');
    const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
    const [wrongLetters, setWrongLetters] = useState<Set<string>>(new Set());
    const [errors, setErrors] = useState<number>(0);
    const maxParts = 6;

    useEffect(() => {
        loadWord();
    }, []);

    const loadWord = async () => {
        try {
            const data = await fetchData();
            const rawWord = data.word.toUpperCase();
            const formattedWord = rawWord.replace(/-/g, ' ');
            setWord(formattedWord);
    
            const initialGuessed = new Set<string>();
            if (formattedWord.includes(' ')) {
                initialGuessed.add(' ');
            }
            setGuessedLetters(initialGuessed);
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
        loadWord();
    };

    const hasWon = word.split('').every(letter => guessedLetters.has(letter));
    const hasLost = errors >= maxParts;

    return (
        <div className="Game">
            <HangmanFigure wrongGuessCount={errors} />
            <WordDisplay word={word} guessedLetters={guessedLetters} />
            <Keyboard onGuess={handleGuess} guessedLetters={new Set([...guessedLetters, ...wrongLetters])} />
            <WrongLetters letters={Array.from(wrongLetters)} />
            <GameResult hasWon={hasWon ? true : hasLost ? false : null} onRestart={restartGame} />
        </div>
    );
};

export default Game;