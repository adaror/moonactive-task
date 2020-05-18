export const INSERT_PROMOTIONS_TO_LIST = 'INSERT_PROMOTIONS_TO_LIST';
export const REMOVE_PROMOTIONS_TO_LIST = 'REMOVE_PROMOTIONS_TO_LIST';

export function insertPromotionToList(promotion) {
  return {
    type: INSERT_PROMOTIONS_TO_LIST,
    promotion,
  };
}

export function removePromotionToList(id) {
  return {
    type: REMOVE_PROMOTIONS_TO_LIST,
    id,
  };
}
