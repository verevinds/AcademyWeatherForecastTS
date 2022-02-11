import axios from 'axios';
import type {AxiosInstance} from 'axios';
import {API_BASE, API_KEY_TOKEN} from 'react-native-dotenv';

export const WeatherApi: AxiosInstance = axios.create({
  baseURL: API_BASE,
  params: {
    key: API_KEY_TOKEN,
  },
});
