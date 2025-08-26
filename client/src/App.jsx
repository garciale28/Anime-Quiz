import { useState, useEffect } from 'react';
import './App.css';
import MultipleChoice from './components/MultipleChoice';
import LandingPage from './components/LandingPage';

function App() {
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizData, setQuizData] = useState([]);
    const [quizOptions, setQuizOptions] = useState([]);

    function handleStartQuiz(data) {
        setQuizData(data);
        setShowQuiz(true);
        const charData = [
            ...new Set(data.data.map((quote) => quote.character)),
        ];
        setQuizOptions(charData);
    }

    function resetAnime() {
        setShowQuiz(false);
    }

    return (
        <div>
            {showQuiz ? (
                <MultipleChoice
                    data={quizData}
                    charData={quizOptions}
                    resetAnime={resetAnime}
                />
            ) : (
                <LandingPage handleStartQuiz={handleStartQuiz} />
            )}
        </div>
    );
}

export default App;
