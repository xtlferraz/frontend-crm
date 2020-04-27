import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const groupService = {
  register: async (group) => {
    return await API.post(`group/`, group, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('group/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`group/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (group) => {
    return await API.put(
      `group/${group.id}`,
      {
        headers: headers,
      },
      group
    );
  },
  delete: async (id) => {
    return await API.delete(`group/${id}`, {
      headers: headers,
    });
  },
};
