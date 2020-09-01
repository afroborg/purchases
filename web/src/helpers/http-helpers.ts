import { config } from '@/config';
import axios from 'axios';

export const getAsync = <T>(endpoint: string): Promise<T> =>
  new Promise((resolve, reject) => {
    axios
      .get<T>(config.API_URL + endpoint)
      .then((d) => resolve(d.data))
      .catch(reject);
  });

export const postAsync = <T>(endpoint: string, data: any): Promise<T> =>
  new Promise((resolve, reject) => {
    axios
      .post<T>(config.API_URL + endpoint, data)
      .then((d) => resolve(d.data))
      .catch(reject);
  });

export const deleteAsync = <T>(endpoint: string): Promise<T> =>
  new Promise((resolve, reject) => {
    axios
      .delete<T>(config.API_URL + endpoint)
      .then((d) => resolve(d.data))
      .catch(reject);
  });
