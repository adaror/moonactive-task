import { combineReducers } from 'redux';
import insertPromotionsReducer from './promotions.reducer';
import setPageReducer from './page.reducer';

export default combineReducers({
  promotions: insertPromotionsReducer,
  page: setPageReducer,
});
