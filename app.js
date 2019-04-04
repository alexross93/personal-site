const express = require('express');
const routes = require('./routes/routes');
const app = express();

// static files
app.use(express.static('public'));

// body parser (forms)
app.use(express.urlencoded({ extended: false }));

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/', routes);

const server = app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log('Listening on port ' + (process.env.PORT || 3000));
  });