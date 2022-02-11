import {useForecast} from 'hooks/useForecast';
import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './weather.styles';
import {checkForecastType} from 'utils/checkForecastType';
import Placeholder from 'components/placeholder/placeholder';
import WeatherTile from 'components/weather-tile/weather-tile';

type WeatherProps = {
  city: string | null;
};
const Weather = ({city}: WeatherProps): JSX.Element => {
  const {data, isFetching, isLoading} = useForecast(city);

  if (data) {
    return (
      <ScrollView
        contentContainerStyle={styles.Weather__slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {checkForecastType(data)?.forecast?.forecastday.map(day => (
          <View style={styles.Weather__containerTile} key={day.date}>
            <WeatherTile day={day} />
          </View>
        ))}
      </ScrollView>
    );
  }

  return <Placeholder isFetching={isFetching || isLoading} />;
};

export default Weather;
