import { combineReducers } from 'redux';
import insertPromotionsReducer from './promotions.reducer';
import setPageReducer from './page.reducer';
import insertPromotionsToListReducer from './selected-promotions.reducer';

export default combineReducers({
  promotions: insertPromotionsReducer,
  page: setPageReducer,
  selectedPromotions: insertPromotionsToListReducer,
});
