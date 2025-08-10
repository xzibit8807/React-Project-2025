require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/router');

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.use(router);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(port, () => console.log(`✅ Server running on port ${port}\n✅ Database connected`));
    })
    .catch(err => console.error(`❌ Error connecting to database:`, err.message));

mongoose.connection.on(`error`, (err) => console.log(err));
mongoose.connection.on(`disconnected`, () => console.log(`⚠ Database disconnected.`));
