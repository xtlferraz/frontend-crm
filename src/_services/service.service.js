import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const serviceService = {
  register: async (service) => {
    return await API.post(`service/`, service, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('service/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`service/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (service) => {
    return await API.put(
      `service/${service.id}`,
      {
        headers: headers,
      },
      service
    );
  },
  delete: async (id) => {
    return await API.delete(`service/${id}`, {
      headers: headers,
    });
  },
};
