import type {ForecastResponse} from 'types/api/forecast';

export const mutatialIconToUrl = (data: ForecastResponse): ForecastResponse => {
  return {
    ...data,
    forecast: {
      ...data.forecast,
      forecastday: data.forecast.forecastday.map(el => ({
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
  };
};
