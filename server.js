const express = require('express');
const path = require('path');

const app = express();

//Port setup
const port = process.env.PORT || 8080;

//Set up index as router on root
app.use('/', require('./routes'));

//Start server
app.listen(port, () => {
  console.log('Request header parser server is listening on port ' + port);
});
