const express = require('express');
const router = express.Router();
const books = require('./data.js');

router.get('/', (req, res) =>{

    res.json(books).status(200)
})
router.get('/:id', (req, res) =>{
    const {id} = req.params;
    console.log(id);
    const newbook = books.filter(item => item.id == id)
    res.json(newbook).status(200)
    })
router.post('/', (req, res) =>{
    res.send(`all book list`)
    })

    module.exports =  router;