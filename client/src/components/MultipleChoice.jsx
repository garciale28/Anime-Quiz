import React, { useEffect, useMemo, useState } from 'react';
import ChoiceInput from './ChoiceInput';
import GameOver from './GameOver';

function MultipleChoice({ data, charData }) {
    const [score, setScore] = useState(0);
    const [quote, setQuote] = useState({});
    const [options, setOptions] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function generateQuestion() {
        const newQuote = data.data[getRandomInt(data.data.length)];

        const newOptions = [];
        for (let i = 0; i < 4; i++) {
            newOptions.push(charData[getRandomInt(charData.length)]);
        }

        newOptions[getRandomInt(4)] = newQuote.character;

        setQuote(newQuote);
        setOptions(newOptions);
    }

    function updateScore(num) {
        if (num === 1) {
            setScore(score + num);
        }
        if (num === 0) {
            setScore(0);
            setGameOver(true);
        }
    }

    function startOver() {
        setGameOver(false);
    }

    useEffect(() => {
        generateQuestion();
    }, []);

    console.log(quote);

    return (
        <div className="game-div">
            {gameOver ? (
                <GameOver startOver={startOver} />
            ) : (
                <div>
                    <p className="quote">{quote.quote}</p>
                    <p className="score">Your score is {score}</p>
                    <div className="choice-wrapper">
                        <ChoiceInput
                            options={options}
                            answer={quote.character}
                            updateScore={updateScore}
                            generateQuestion={generateQuestion}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default MultipleChoice;
