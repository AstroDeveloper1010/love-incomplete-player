const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running port ${port}`);
});
