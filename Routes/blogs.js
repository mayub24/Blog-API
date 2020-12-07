const express = require('express');
const { route } = require('./users');
const router = express.Router();

// get blogs
router.get('/', (req, res) => {
    res.send('Get Blogs.')
})



// post blogs
router.post('/', (req, res) => {
    res.send('Add new Blog.')
})



// update blogs
router.put('/:id', (req, res) => {
    res.send('Update Blog.')
})



// delete blogs
router.delete('/:id', (req, res) => {
    res.send('deleted.')
})



module.exports = router;