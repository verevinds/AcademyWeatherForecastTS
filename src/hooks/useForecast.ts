import {useQuery} from 'react-query';
import axios, {AxiosResponseTransformer} from 'axios';
import type {ForecastResponse} from 'types/api/forecast';
import {mutatialIconToUrl} from 'utils/mutatialIconToUrl';
import {BASE_URL_API} from 'const/api';

export const useForecast = (
  city: string | null = null,
  days: string = '7',
  key: string = '42becf62f3ec47178b133303221002',
) => {
  return useQuery(['forecast' + days + city], async () => {
    const buildTransformResponse = ():
      | AxiosResponseTransformer
      | AxiosResponseTransformer[] => {
      if (Array.isArray(axios.defaults.transformResponse)) {
        return [...axios.defaults.transformResponse, mutatialIconToUrl];
      }

      if (axios.defaults.transformResponse) {
        return [axios.defaults.transformResponse, mutatialIconToUrl];
      }
      return [mutatialIconToUrl];
    };

    try {
      if (!BASE_URL_API) {
        throw new Error('BASE_URL_API environment variable is missing');
      }

      const response = await axios.get<ForecastResponse>(BASE_URL_API, {
        params: {alerts: 'alerts', aqi: 'no', days, key, q: city},
        transformResponse: buildTransformResponse(),
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  });
};
