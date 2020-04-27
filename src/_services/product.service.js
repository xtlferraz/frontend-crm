import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const productService = {
  register: async (product) => {
    return await API.post(`product/`, product, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('product/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`product/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (product) => {
    return await API.put(
      `product/${product.id}`,
      {
        headers: headers,
      },
      product
    );
  },
  delete: async (id) => {
    return await API.delete(`product/${id}`, {
      headers: headers,
    });
  },
};
