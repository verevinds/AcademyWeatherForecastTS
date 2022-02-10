import type {Error} from 'types';
import type {Forecastday, ForecastResponse} from 'types/api/forecast';

export const mutatialIconToUrl = (data: any): ForecastResponse | Error => {
  if (data.error) {
    return data as Error;
  }

  return {
    ...data,
    forecast: {
      ...data.forecast,
      forecastday: data.forecast.forecastday.map((el: Forecastday) => ({
        ...el,
        day: {
          ...el.day,
          condition: {
            ...el.day.condition,
            icon: 'https:' + el.day.condition.icon,
          },
        },
      })),
    },
  } as ForecastResponse;
};
