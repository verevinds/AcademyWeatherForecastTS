import {useQuery} from 'react-query';
import axios from 'axios';
import type {Forecastday} from 'types/api/forecast';
import {mutatialIconToUrl} from 'utils/mutatialIconToUrl';
import {BASE_URL_API} from 'const/api';
import {DateTime} from 'luxon';
import {pickFirstDay} from 'utils/pickFirstDay';
import {buildTransformResponse} from 'utils/buildTransformResponse';
import {useRefreshOnFocus} from './useRefreshOnFocus';

export const useForecastHistory = (
  city: string | null = null,
  date: Date,
  key: string = '42becf62f3ec47178b133303221002',
) => {
  const formatedDate = DateTime.fromISO(date.toISOString()).toFormat(
    'yyyy-MM-dd',
  );

  const dataQuery = useQuery(
    ['forecast', 'history', formatedDate, city],
    async () => {
      try {
        if (!BASE_URL_API) {
          throw new Error('BASE_URL_API environment variable is missing');
        }

        const response = await axios.get<Forecastday | Error>(
          BASE_URL_API + 'history.json',
          {
            params: {
              dt: formatedDate,
              key,
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
