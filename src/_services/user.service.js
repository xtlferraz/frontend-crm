import { authHeader } from '../_helpers';
import API from './api';

const headers = authHeader();

const logout = () => {
  localStorage.removeItem('user');
};

export const userService = {
  login: async (email, password) => {
    const auth = await API.post(`authenticate/`, { email, password });
    const { token, id } = auth.data.user;
    const config = {
      headers: { 'x-access-token': token },
    };

    const getUser = await API.get(`user/getById/${id}`, config);
    const { name } = getUser.data.result;
    const user = {
      id,
      name,
      email,
      token,
    };

    localStorage.setItem('user', JSON.stringify(user));

    return user;
  },
  logout,
  register: async (user) => {
    return await API.post(`user/`, user, {
      headers: headers,
    });
  },
  getAll: async () => {
    return API.get('user/all', {
      headers: headers,
    });
  },
  getById: async (id) => {
    return await API.get(`user/getById/${id}`, {
      headers: headers,
    });
  },
  update: async (user) => {
    return await API.put(
      `user/${user.id}`,
      {
        headers: headers,
      },
      user
    );
  },
  delete: async (id) => {
    return await API.delete(`user/${id}`, {
      headers: headers,
    });
  },
};
