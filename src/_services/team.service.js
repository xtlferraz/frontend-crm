import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

export const teamService = {
  register: async (team) => {
    return await API.post(`team/`, team, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('team/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`team/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (team) => {
    return await API.put(
      `team/${team.id}`,
      {
        headers: headers,
      },
      team
    );
  },
  delete: async (id) => {
    return await API.delete(`team/${id}`, {
      headers: headers,
    });
  },
};
