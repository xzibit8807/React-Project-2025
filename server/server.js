require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/games');
// const router = require('./router/router');

const app = express();
const port = 3030;
app.use(cors());
app.use(express.json());

// app.use(router)
app.use('/users', authRoutes);
app.use('/games', gameRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => console.log(`DataBase is up and running on  port ${port}\n => This is the way.`));
    })
    .catch(err => console.error(`Faller connecting to database:`, err.message));

mongoose.connection.on(`error`, (err) => console.log(err));
mongoose.connection.on(`disconnected`, () => console.log(`DataBase is disconnected.`));