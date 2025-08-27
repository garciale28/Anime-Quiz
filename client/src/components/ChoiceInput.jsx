import React from 'react';
import { useState, useEffect } from 'react';

function ChoiceInput({ generateQuestion, updateScore, options, answer }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [highlight, setHighlight] = useState(false);

    function handleChange(event) {
        const userSelection = event.target.value;
        setSelectedOption(userSelection);
        setHighlight(true);

        if (userSelection === answer) {
            updateScore(1);
        } else {
            updateScore(0);
        }

        setTimeout(() => {
            setSelectedOption('');
            setHighlight(false);
            generateQuestion();
        }, 1000);
    }

    return (
        <ul className="choice-list">
            {options.map((character, idx) => {
                let className = 'choice-item';
                if (highlight) {
                    if (character === answer) className += ' correct';
                    else if (
                        character === selectedOption &&
                        character !== answer
                    )
                        className += ' wrong';
                }
                return (
                    <li key={idx} className={className}>
                        <input
                            type="radio"
                            id={`choice-${idx}`}
                            name="quiz-choice"
                            value={character}
                            checked={selectedOption === character}
                            onChange={handleChange}
                        />
                        <label htmlFor={`choice-${idx}`}>{character}</label>
                    </li>
                );
            })}
        </ul>
    );
}

export default ChoiceInput;
