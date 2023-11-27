import { AxiosResponse } from 'axios';
import { User } from '@/interfaces/user';
import api from './api';

const authService = {
  login: async ({ login, password }: User): Promise<any> => {
    try {
      const response = await api.post('/users/login', { login, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async ({ login, password, email }: User) => {
    try {
        const response = await api.post('/users/register', { login, password, email });
        return response.data;
      } catch (error) {
        throw error;
      }
  }
};

export default authService;
