import React from 'react';

function ChoiceInput({
    generateQuestion,
    updateScore,
    options,
    props,
    answer,
}) {
    function handleChange(event) {
        const userSelection = event.target.value;

        if (userSelection === answer) {
            console.log('Correct!!');
            updateScore(1);
            generateQuestion();
        } else {
            console.log('Wrong!!');
            updateScore(0);
        }
    }

    return (
        <ul className="choice-list">
            {options.map((character, idx) => (
                <li key={idx} className="choice-item">
                    <input
                        type="radio"
                        id={`choice-${idx}`}
                        name="quiz-choice"
                        value={character}
                        onChange={handleChange}
                    />
                    <label htmlFor={`choice-${idx}`}>{character}</label>
                </li>
            ))}
        </ul>
    );
}

export default ChoiceInput;
