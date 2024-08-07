const express = require('express');
require('dotenv').config();
const app = express();
const router = require('./routes');
const Database = require('./database');
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(cookieParser());

const corsOption = {
    origin:'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOption));

app.use('/storage', express.static('storage'));

const PORT = process.env.PORT;
Database();

app.use(express.json({limit:'8mb'}));
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => {
    console.log('Connected')
})