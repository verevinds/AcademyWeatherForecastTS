import {useQuery} from 'react-query';
import type {ForecastResponse} from 'types/api/forecast';
import {mutatialIconToUrl} from 'utils/mutatialIconToUrl';
import {buildTransformResponse} from 'utils/buildTransformResponse';
import {useRefreshOnFocus} from './useRefreshOnFocus';
import {WeatherApi} from 'api';

export const useForecast = (
  city: string | null = null,
  days: string = '7',
  // key: string = API_KEY_TOKEN,
) => {
  const dataQuery = useQuery(
    ['forecast', days, city],
    async () => {
      try {
        const response = await WeatherApi.get<ForecastResponse | Error>(
          'forecast.json',
          {
            params: {alerts: 'alerts', aqi: 'no', days, q: city},
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
