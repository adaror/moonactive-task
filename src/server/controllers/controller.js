const service = require('../services/service');

async function generateData(req, res) {
  try {
    await service.generateData();
    res.status(200).send({ status: 'ok' });
  } catch (err) {
    res.status(500).send(`Server error - ${err}`);
  }
}

async function getPromotions(req, res) {
  try {
    const { page } = req.query;
    const response = await service.getPromotions(parseInt(page));
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(`Server error - ${err}`);
  }
}

module.exports = {
  generateData,
  getPromotions,
};
