import express from 'express';

const app = express();
const PORT = 3002;



app.listen(PORT, () => console.log(`Running on ${PORT}`));