let express = require('express');
let router = express.Router();

//QueryString => query property in request object
//localhost:3000/person?name=Thomas
router.get('/person', (req, res) => {
    if(req.query.name) {
        res.send(`You have request a per: ${req.query.name}`);
    } else {
        res.send(`bad request`);
    }
});

//params property in request object
//localhost:3000/person/thomas
router.get('/person/:name', (req, res) => {
    res.send(`You have request a personas: ${req.params.name}`);
});

router.get('/error', (req, res) => {
    throw new Error('This is a force error');
});


module.exports = router 