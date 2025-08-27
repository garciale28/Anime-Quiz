import React from 'react';

function GameOver({ startOver, resetAnime }) {
    function handleClick() {
        startOver();
    }

    function handleReset() {
        resetAnime();
    }

    return (
        <div className="game-over-div">
            <img src="https://images.cooltext.com/5738646.gif" />
            <h2 className="loser-heading text-lg mb-6">Fucking Loser</h2>
            <div className="flex gap-4 justify-center">
                <button
                    className="play-again-button px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    onClick={handleClick}
                >
                    Play again
                </button>
                <button
                    className="reset-button px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    onClick={handleReset}
                >
                    Reset Anime
                </button>
            </div>
        </div>
    );
}

export default GameOver;
