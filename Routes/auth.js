const express = require('express');
const router = express.Router();


// this shud be private
router.get('/', (req, res) => {
    res.send('Get User.')
})


// login
router.post('/', (req, res) => {
    res.send('User has been logged in.');
})



module.exports = router;