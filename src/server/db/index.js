const mongoose = require('mongoose');
const { dbUserName, dbPassword } = require('../config/config');

mongoose.model('promotions_list', require('./schemas/promotions.schema'));

async function connect() {
  try {
    await mongoose.connect(`mongodb://${dbUserName}:${dbPassword}@ds161322.mlab.com:61322/promotions`, { useNewUrlParser: true });
    console.info('successfully connected to mongodb');
  } catch (err) {
    console.error(`failed to connect mongodb - ${err}`);
    throw err;
  }
}

module.exports = {
  connect,
  mongoose,
  models: mongoose.models,
};
