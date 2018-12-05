import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    return res.status(200)
        .send("Test is working");
});

app.post('/test', (req, res) => {
    return res.status(200)
        .send("Test is working");
});


app.listen(3002, () => console.log('live on 3002'));

export default app;

