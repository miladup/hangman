// src/App.tsx
import React from 'react';
import Game from "./Game";


const App: React.FC = () => {
    console.log("App rendering"); // Vérifie que cela s'affiche dans la console
    return (
        <div className="app">
            <h1>Jeu de Pendu</h1>
            <Game />
        </div>
    );
};

export default App;