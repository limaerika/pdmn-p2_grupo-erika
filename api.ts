// src/services/api.ts
import axios from 'axios';

const apiKey = 'live_nqRDxSgaF0bFzRgyEQ7BG2epPNkk6GT9Y33Blkl8Tf03g927uaKhtB1xRzwcwuSi';
const baseURL = 'https://api.thecatapi.com/v1';

const api = axios.create({
  baseURL,
  headers: {
    'x-api-key': apiKey
  }
});

export const getCatPhotos = async (limit = 5) => {
  const response = await api.get('/images/search', {
    params: { limit }
  });
  return response.data;
};

export default api; // Exportar a instância axios
