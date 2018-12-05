import express from 'express';

const app = express();
const PORT = 3002;

app.get('/test', (req, res) => {
    return res.status(200)
        .send("Test is working");
});

app.post('/test', (req, res) => {
    return res.status(200)
        .send("Test is working");
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));

export default app;

