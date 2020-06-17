import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const companyService = {
  register: async (company) => {
    return await API.post(`company/`, company, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('company/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`company/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (company) => {
    return await API.put(`company/`, company, {
      headers: headers,
    });
  },
  delete: async (id) => {
    return await API.delete(`company/${id}`, {
      headers: headers,
    });
  },
};
