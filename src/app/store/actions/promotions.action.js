import * as promotionsService from '../../services/promotions.service';

export const INSERT_PROMOTIONS_DETAILS = 'INSERT_PROMOTIONS_DETAILS';
export const SET_PAGE = 'SET_PAGE';
export const INSERT_TOP_PROMOTION_DETAILS = 'INSERT_TOP_PROMOTION_DETAILS';
export const CLEAN_ARRAY = 'CLEAN_ARRAY';

function fetchData(page) {
  return promotionsService.getPromotions(page);
}

export function insertPromotionDetails(page) {
  return function (dispatch) {
    return fetchData(page).then((res) => {
      dispatch({
        type: INSERT_PROMOTIONS_DETAILS,
        data: {promotions: res.data, page},
      });
    });
  };
}

export function setPage(page) {
  return {
    type: SET_PAGE,
    page,
  };
}

export function cleanArray() {
  return {
    type: CLEAN_ARRAY,
  };
}

export function insertTopPromotionDetails(page) {
  return function (dispatch) {
    return fetchData(page).then((res) => {
      dispatch({
        type: INSERT_TOP_PROMOTION_DETAILS,
        data: {promotions: res.data, page},
      });
    });
  };
}


