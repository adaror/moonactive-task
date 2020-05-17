import axios from 'axios';

function getPromotions(page) {
  return axios.get(`/promotions?page=${page}`);
}

export {
  getPromotions,
};
