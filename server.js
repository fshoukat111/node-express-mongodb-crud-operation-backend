const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 4300;
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const allArticles = require('./src/app/routes/article.routes')


mongoose.connect('mongodb://localhost:27017/curd_operation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('database conacted')
    })
    .catch(err => {
        console.log('err', err)
    });


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api',allArticles);

app.get("/",(req, res) => {
    res.send('Hello')
});
// require('./src/app/routes/article.routes')(app);



app.listen((port), () => {
    console.log(`port is ${port}`);
});