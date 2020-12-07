const express = require('express');
const users = require('./Routes/users');
const auth = require('./Routes/auth');
const blogs = require('./Routes/blogs');

const app = express();


app.get('/', (req, res) => {
    res.json({ message: 'what it do?' });
})


// Define Routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/blogs', blogs);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
});