import { initialState } from '../initialState';

const { INSERT_PROMOTIONS_TO_LIST, REMOVE_PROMOTIONS_TO_LIST } = require('../actions/selected-promotions.action');


const insertPromotionsToListReducer = (state = initialState.selectedPromotions, action) => {
  switch (action.type) {
    case INSERT_PROMOTIONS_TO_LIST: {
      const nextState = { ...state };
      nextState[action.promotion.id] = action.promotion;
      return nextState;
    }
    case REMOVE_PROMOTIONS_TO_LIST: {
      const nextState = { ...state };
      delete nextState[action.id];
      return nextState;
    }
    default:
      return state;
  }
};

export default insertPromotionsToListReducer;
