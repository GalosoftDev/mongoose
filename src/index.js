let express = require('express');
let app = express();
let personRoute = require('../routes/person');
let path = require('path');

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});

app.use(personRoute);
app.use(express.static('public'));

//Middlewares
app.use((req, res, next) => {
    res.status(404).send('We think you are lost');
});

app.use((req, res, next) => {
    console.error(err.stack);
    console.log(path.join(__dirname, '../public/500'));
    //res.sendFile(path.join(__dirname, '../public/500.html'));
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.info('Server init on port 3000'));









