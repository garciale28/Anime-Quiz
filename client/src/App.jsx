import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MultipleChoice from './components/MultipleChoice';
import LandingPage from './components/LandingPage';

function App() {
    const [count, setCount] = useState(0);
    const [array, setArray] = useState([]);

    const fetchAPi = async () => {
        const response = await axios.get('http://localhost:8080/api');
        setArray(response.data.fruits);
        // console.log(response.data.fruits);
    };

    useEffect(() => {
        fetchAPi();
    }, []);

    return (
        <>
            <div>
                <LandingPage />

                {/* <MultipleChoice /> */}
            </div>
        </>
    );
}

export default App;
