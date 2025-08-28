import React, { useEffect, useMemo, useState } from 'react';
import ChoiceInput from './ChoiceInput';
import GameOver from './GameOver';

function MultipleChoice({ data, charData, resetAnime }) {
    const [score, setScore] = useState(0);
    const [quote, setQuote] = useState({});
    const [options, setOptions] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function generateQuestion() {
        const newQuote = data.data[getRandomInt(data.data.length)];
        const correctAnswer = newQuote.character;

        const incorrectPool = charData.filter((c) => c !== correctAnswer);

        const incorrectOptions = [...incorrectPool]
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

        const newOptions = [...incorrectOptions, correctAnswer].sort(
            () => 0.5 - Math.random()
        );

        setQuote(newQuote);
        setOptions(newOptions);
    }

    function updateScore(num) {
        if (num === 1) {
            setScore(score + num);
        }
        if (num === 0) {
            setScore(0);
            setTimeout(() => {
                setGameOver(true);
            }, 1000);
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
                <GameOver startOver={startOver} resetAnime={resetAnime} />
            ) : (
                <div>
                    <p className="score">Your score: {score}</p>
                    <p className="quote">{quote.quote}</p>
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
