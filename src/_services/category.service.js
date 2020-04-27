import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const categoryService = {
  register: async (category) => {
    return await API.post(`category/`, category, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('category/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`category/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (category) => {
    return await API.put(
      `category/${category.id}`,
      {
        headers: headers,
      },
      category
    );
  },
  delete: async (id) => {
    return await API.delete(`category/${id}`, {
      headers: headers,
    });
  },
};
