import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const eventService = {
  register: async (event) => {
    return await API.post(`event/`, event, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('event/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`event/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (event) => {
    return await API.put(
      `event/${event.id}`,
      {
        headers: headers,
      },
      event
    );
  },
  delete: async (id) => {
    return await API.delete(`event/${id}`, {
      headers: headers,
    });
  },
};
