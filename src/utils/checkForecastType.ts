import type {ForecastResponse} from 'types/api/forecast';

export const checkForecastType = (el: any) =>
  el.forecast ? (el as ForecastResponse) : undefined;
