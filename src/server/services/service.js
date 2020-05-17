const db = require('../db');

const PromotionList = db.models.promotions_list;

async function generateData() {
  try {
    const dataArr = [];

    for (let i = 0; i < 500; i++) {
      dataArr.push({
        promotionName: 'myPromotion',
        type: 'game',
        userGroupName: 'myGroup1',
      });
    }
    await PromotionList.insertMany(dataArr);
    console.log('inserted');
    return true;
  } catch (err) {
    console.error('error in generateData');
    throw err;
  }
}

async function getPromotions(page) {
  try {
    const data = await PromotionList.find({}, null, { skip: page, limit: 10 }).select('promotionName type startDate endDate userGroupName -_id');
    return data;
  } catch (err) {
    console.error('error in getPromotions');
    throw err;
  }
}

module.exports = {
  generateData,
  getPromotions,
};
