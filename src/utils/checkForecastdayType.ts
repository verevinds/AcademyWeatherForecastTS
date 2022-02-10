import type {Forecastday} from 'types/api/forecast';

export const checkForecastdayType = (el: any): Forecastday | undefined =>
  el.date && el.day ? el : undefined;
