const path = require('path');
const controller = require('../controllers/controller');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}../../../dist`));
  });

  app.post('/generateData',
    controller.generateData);

  app.get('/promotions',
    controller.getPromotions);
};
