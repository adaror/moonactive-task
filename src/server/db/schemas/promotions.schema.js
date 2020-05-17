const mongoose = require('mongoose');

const { Schema } = mongoose;

const promotionsSchema = new Schema({
  promotionName: { type: String, index: true },
  type: { type: String, index: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  userGroupName: { type: String },
});

module.exports = promotionsSchema;
