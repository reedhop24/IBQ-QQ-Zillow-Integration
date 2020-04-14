const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

const post = require('./routes/proxy');
app.use('/integrations', post);

mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true }, () => {
      console.log('connected to db');
  });

app.listen(port, () => {
  console.log('server listening on port ' + port);
});
