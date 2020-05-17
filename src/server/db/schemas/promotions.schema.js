const mongoose = require('mongoose');

const { Schema } = mongoose;

const promotionsSchema = new Schema({
  id: {type: String, index: true},
  promotionName: { type: String },
  type: { type: String },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  userGroupName: { type: String },
});

module.exports = promotionsSchema;
