const mongoose = require('mongoose');

function Database() {
    const URL = process.env.DB;

    mongoose.connect(URL).then(() => console.log('Database Connected'))
    .catch((err) => console.log(err));
}


module.exports = Database;