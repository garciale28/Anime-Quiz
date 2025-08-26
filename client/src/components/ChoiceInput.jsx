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

    function handleChange(event) {
        const userSelection = event.target.value;
        setSelectedOption(userSelection);

        if (userSelection === answer) {
            console.log('Correct!!');
            updateScore(1);
            generateQuestion();
        } else {
            console.log('Wrong!!');
            updateScore(0);
        }
    }

    useEffect(() => {
        setSelectedOption('');
    }, [options]);

    return (
        <ul className="choice-list">
            {options.map((character, idx) => (
                <li key={idx} className="choice-item">
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
            ))}
        </ul>
    );
}

export default ChoiceInput;
