import express from 'express';

const app = express();

//test for the get request 
app.get('/test', (req, res) => {
    return res.status(200)
        .send("Test is working");
});

//test for post request
app.post('/test', (req, res) => {
    return res.status(200)
        .send("Test is working");
});


app.listen(3002, () => console.log('live on 3002'));

export default app;

