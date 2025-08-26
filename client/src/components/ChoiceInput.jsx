import React from 'react';
import { useState, useEffect } from 'react';

function ChoiceInput({
    generateQuestion,
    updateScore,
    options,
    props,
    answer,
}) {
    const [selectedOption, setSelectedOption] = useState('');
    const [highlight, setHighlight] = useState('');

    function handleChange(event) {
        const userSelection = event.target.value;
        setSelectedOption(userSelection);

        if (userSelection === answer) {
            setHighlight('correct');
            updateScore(1);
        } else {
            setHighlight('wrong');
            updateScore(0);
        }

        setTimeout(() => {
            setSelectedOption('');
            setHighlight('');
            generateQuestion();
        }, 1000);
    }

    return (
        <ul className="choice-list">
            {options.map((character, idx) => {
                let className = 'choice-item';
                if (selectedOption === character) {
                    if (highlight === 'correct') className += ' correct';
                    if (highlight === 'wrong') className += ' wrong';
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
