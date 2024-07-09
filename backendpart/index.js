const express = require('express');
require('dotenv').config();
const app = express();
const router = require('./routes');
const Database = require('./database');
const cors = require('cors');

const corsOption = {
    credentials: true,
    origin:['http://localhost:3000']
}

app.use(cors(corsOption));

const PORT = process.env.PORT;
Database();

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => {
    console.log('Connected')
})