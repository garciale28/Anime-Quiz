import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
};

const showApi = 'http://yurippe.vercel.app/api/quotes?show=';
// const characterApi = 'https://yurippe.vercel.app/api/quotes?character='

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/submit', async (req, res) => {
    const userInput = req.body.query;
    const anime = userInput.replaceAll(' ', '%20').toLowerCase();

    try {
        const response = await axios.get(showApi + anime);
        const data = response.data;
        res.json({ data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({
            error: 'Failed to fetch data from external API',
        });
    }
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
