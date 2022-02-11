import {useQuery} from 'react-query';
import type {Forecastday} from 'types/api/forecast';
import {mutatialIconToUrl} from 'utils/mutatialIconToUrl';
import {DateTime} from 'luxon';
import {pickFirstDay} from 'utils/pickFirstDay';
import {buildTransformResponse} from 'utils/buildTransformResponse';
import {useRefreshOnFocus} from './useRefreshOnFocus';
import {WeatherApi} from 'api';

export const useForecastHistory = (city: string | null = null, date: Date) => {
  const formatedDate = DateTime.fromISO(date.toISOString()).toFormat(
    'yyyy-MM-dd',
  );

  const dataQuery = useQuery(
    ['forecast', 'history', formatedDate, city],
    async () => {
      try {
        const response = await WeatherApi.get<Forecastday | Error>(
          'history.json',
          {
            params: {
              dt: formatedDate,
              q: city,
            },
            transformResponse: buildTransformResponse([
              pickFirstDay(mutatialIconToUrl),
            ]),
          },
        );

        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
    {enabled: Boolean(city) && Boolean(date)},
  );

  useRefreshOnFocus(dataQuery.refetch);
  return dataQuery;
};
