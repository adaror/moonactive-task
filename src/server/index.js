const express = require('express');
const config = require('./config/config');
const { connect } = require('./db');

const app = express();

app.use(express.static(`${__dirname}../../../dist`));

connect();

require('./routes/routes')(app);

app.listen(config.port, () => {
  console.info(`App is listening on ${config.port}`);
});
