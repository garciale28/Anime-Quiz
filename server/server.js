import express from 'express';
import cors from 'cors';

const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ fruits: ['apples', 'mangoes', 'bananas'] });
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
