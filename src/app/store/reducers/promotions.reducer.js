import { initialState } from '../initialState';

const { INSERT_PROMOTIONS_DETAILS, INSERT_TOP_PROMOTION_DETAILS } = require('../actions/promotions.action');

const insertPromotionsReducer = (state = initialState.promotions, action) => {
  switch (action.type) {
    case INSERT_PROMOTIONS_DETAILS: {
      const nextState = [...state];
      if (nextState.length >= 20) {
        return [...nextState.slice(10), ...action.data.promotions];
      }
      return [...nextState, ...action.data.promotions];
    }
    case INSERT_TOP_PROMOTION_DETAILS: {
      const nextState = [...state];
      return [...action.data.promotions, ...nextState.slice(0, 10)];
    }
    default:
      return state;
  }
};

export default insertPromotionsReducer;
