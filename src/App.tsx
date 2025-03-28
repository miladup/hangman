import React from 'react';
import Game from "./Game";
import './Styles.css';


const App: React.FC = () => {
    console.log("App rendering");
    return (
        <div className="app">
            <h1>Jeu du Pendu</h1>
            <Game />
        </div>
    );
};

export default App;