const mongoose = require('mongoose');

mongoose.model('promotions_list', require('./schemas/promotions.schema'));

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/promotions', { useNewUrlParser: true });
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
