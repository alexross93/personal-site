if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect(process.env.dbURI, { useNewUrlParser: true }, () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());

// static files
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/', require('./routes/routes'));

const server = app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log('Listening on port ' + (process.env.PORT || 3000));
  });