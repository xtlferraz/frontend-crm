import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const leadService = {
  register: async (lead) => {
    return await API.post(`lead/`, lead, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('lead/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`lead/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (lead) => {
    return await API.put(
      `lead/${lead.id}`,
      {
        headers: headers,
      },
      lead
    );
  },
  delete: async (id) => {
    return await API.delete(`lead/${id}`, {
      headers: headers,
    });
  },
};
