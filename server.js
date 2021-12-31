const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 4300;
const bodyParser = require("body-parser");
const app = express();
require('./src/app/routes/article.routes')(app);


mongoose.connect('mongodb://localhost:27017/curd_operation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('database conacted')
    })
    .catch(err => {
        console.log('err', err)
    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/",(req, res) => {
    res.send('Hello')
});


app.listen((port), () => {
    console.log(`port is ${port}`);
});