import { initialState } from '../initialState';

const { INSERT_PROMOTIONS_DETAILS, INSERT_TOP_PROMOTION_DETAILS, CLEAN_ARRAY } = require('../actions/promotions.action');

const changeValues = (start, end, array) => {
  for (let i=start ; i<=end ; i++) {
    array[i] = ''
  }
}

const updateOldValues = (start, array, newArr) => {
  for (let i=0 ; i<newArr.length ; i++) {
    array[start + i] = newArr[i]
  }
  array.slice(array.length - 10, array.length -1);
}

const insertPromotionsReducer = (state = initialState.promotions, action) => {
  switch (action.type) {
    case INSERT_PROMOTIONS_DETAILS:
      if (state.length < 20) {
        return [...state, ...action.data.promotions];
      } else if (state.length >=20) {
        changeValues(state.length - 20, state.length - 11, state);
        return [...state, ...action.data.promotions]
      }
    case INSERT_TOP_PROMOTION_DETAILS:
        updateOldValues(state.length - 30, state, action.data.promotions);
        return state;
    case CLEAN_ARRAY:
      return state.splice(0, 9);
    default:
      return state;
  }
};

export default insertPromotionsReducer;
