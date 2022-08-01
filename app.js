const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

const contactUsRouter = require('./routes/contactUs');


app.use(contactUsRouter);

app.listen(4000, () => console.log("Running on 4000"));
