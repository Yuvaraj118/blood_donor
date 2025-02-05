const express = require('express');
const app = express();
const mongoose = require('mongoose');
const donorRouter = require('./Routes/DonorRoutes');

app.use(express.json());
app.use(donorRouter);


app.listen(5000, () => console.log('Server running on port 5000'));

mongoose.connect('mongodb://localhost:27017/Donor')
    .then(() => console.log('Database connected...'))
    .catch((err) => console.log(err));



app.get('/', (req, res) => {
    res.send('Blood Bank Management System Backend is running...');
});
