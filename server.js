const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));

const pathfile = path.join(__dirname, 'public');

app.use(express.static(path.join(pathfile)));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is running port ${port}`);
});
