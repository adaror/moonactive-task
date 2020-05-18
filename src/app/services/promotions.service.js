import axios from 'axios';

function generateData() {
  return axios.post('/generateData');
}

function getPromotions(page) {
  return axios.get(`/promotions?page=${page}`);
}

export {
  generateData,
  getPromotions,
};
