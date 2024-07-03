const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => {
    console.log('Connected')
})