import React from 'react';

function GameOver({ startOver, resetAnime }) {
    function handleClick() {
        startOver();
    }

    function handleReset() {
        resetAnime();
    }

    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={handleClick}>Play again</button>
            <button onClick={handleReset}>Reset Anime</button>
        </div>
    );
}

export default GameOver;
