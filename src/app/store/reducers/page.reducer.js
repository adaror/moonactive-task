import { SET_PAGE } from '../actions/promotions.action';
import { initialState } from '../initialState';

const setPageReducer = (state = initialState.page, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
};

export default setPageReducer;
