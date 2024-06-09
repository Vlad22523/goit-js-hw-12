import axios from 'axios';

const API_KEY = '44262674-4191f931eb8b9eeb7747e3c1c';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      page: page,
      per_page: 15,
    },
  });
  if (response.status !== 200) {
    throw new Error('Failed to fetch images');
  }
  return response.data;
}
