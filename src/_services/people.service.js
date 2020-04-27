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
    return await API.put(
      `people/${people.id}`,
      {
        headers: headers,
      },
      people
    );
  },
  delete: async (id) => {
    return await API.delete(`people/${id}`, {
      headers: headers,
    });
  },
};
