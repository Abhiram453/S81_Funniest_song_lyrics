const express = require('express');   
const app = express();
const connection = require('./connection');
require('dotenv').config();
const nameRoute = require('./controller/nameRoute');

app.use(express.json());
app.use('/api', nameRoute);

app.get('/', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected';
    res.send(`Hello World. Database connection status: ${dbStatus}`);
});

app.listen(process.env.PORT || 3000, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    } catch (error) {
        console.log('Error: ', error);
    }
});
