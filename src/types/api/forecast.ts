export type Location = {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};
export type Day = {
  avgtemp_c: number;
  condition: {
    code: number;
    icon: string;
    text: string;
  };
};
export type Forecastday = {
  date: string;
  day: Day;
};
export type Forecast = {
  forecastday: Forecastday[];
};
export type ForecastResponse = {
  location: Location;
  forecast: Forecast;
};
