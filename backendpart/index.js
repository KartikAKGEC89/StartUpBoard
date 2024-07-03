const express = require('express');
require('dotenv').config();
const app = express();
const router = require('./routes');

const PORT = process.env.PORT;

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => {
    console.log('Connected')
})