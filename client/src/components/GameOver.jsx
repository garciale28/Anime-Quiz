import React from 'react';

function GameOver({ startOver }) {
    function handleClick() {
        startOver();
    }

    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={handleClick}>Play again</button>
            {/* <button>Reset Anime</button> */}
        </div>
    );
}

export default GameOver;
