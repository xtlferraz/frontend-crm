import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const peopleService = {
  register: async (people) => {
    return await API.post(`people/`, people, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('people/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`people/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (people) => {
    return await API.put(`people/update`, people, {
      headers: headers,
    });
  },
  delete: async (id) => {
    return await API.delete(`people/${id}`, {
      headers: headers,
    });
  },
};
