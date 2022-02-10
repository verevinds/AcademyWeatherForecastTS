import type {Error} from 'types';
import type {Forecastday, ForecastResponse} from 'types/api/forecast';
import {checkForecastType} from './checkForecastType';

export const pickFirstDay =
  (fn: (data: any) => ForecastResponse | Error) =>
  (data: any): Forecastday | Error | undefined => {
    if (data.error) {
      return data as Error;
    }

    return checkForecastType(fn(data))?.forecast.forecastday[0];
  };
