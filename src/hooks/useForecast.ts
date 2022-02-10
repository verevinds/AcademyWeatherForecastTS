import {useQuery} from 'react-query';
import axios from 'axios';
import type {ForecastResponse} from 'types/api/forecast';
import {mutatialIconToUrl} from 'utils/mutatialIconToUrl';
import {BASE_URL_API} from 'const/api';
import {buildTransformResponse} from 'utils/buildTransformResponse';
import {useRefreshOnFocus} from './useRefreshOnFocus';

export const useForecast = (
  city: string | null = null,
  days: string = '7',
  key: string = '42becf62f3ec47178b133303221002',
) => {
  const dataQuery = useQuery(
    ['forecast', days, city],
    async () => {
      try {
        if (!BASE_URL_API) {
          throw new Error('BASE_URL_API environment variable is missing');
        }

        const response = await axios.get<ForecastResponse | Error>(
          BASE_URL_API + 'forecast.json',
          {
            params: {alerts: 'alerts', aqi: 'no', days, key, q: city},
            transformResponse: buildTransformResponse([mutatialIconToUrl]),
          },
        );

        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    {enabled: Boolean(city)},
  );

  useRefreshOnFocus(dataQuery.refetch);

  return dataQuery;
};
