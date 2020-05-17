import { initialState } from '../initialState';

const { INSERT_PROMOTIONS_DETAILS, INSERT_TOP_PROMOTION_DETAILS, CLEAN_ARRAY } = require('../actions/promotions.action');

const insertPromotionsReducer = (state = initialState.promotions, action) => {
  switch (action.type) {
    case INSERT_PROMOTIONS_DETAILS:
      if (state.length >= 20) {
        return [...state.slice(10), ...action.data.promotions];
      }
      return [...state, ...action.data.promotions];
    case INSERT_TOP_PROMOTION_DETAILS: {
        return [ ...action.data.promotions, ...state.slice(0, 20)];}
    case CLEAN_ARRAY:
      return state.splice(0, 9);
    default:
      return state;
  }
};

export default insertPromotionsReducer;
