import React from 'react';
import Placeholder from 'components/placeholder/placeholder';
import {useForecastHistory} from 'hooks/useForecastHistory';
import WeatherTile from 'components/weather-tile/weather-tile';
import {View} from 'react-native';
import {checkForecastdayType} from 'utils/checkForecastdayType';
import styles from './weather-history.styles';

type WeatherHistoryProps = {date: Date; city: string | null};
const WeatherHistory = ({date, city}: WeatherHistoryProps): JSX.Element => {
  const {data, isFetched, isLoading} = useForecastHistory(city, date);

  if (data) {
    return (
      <View style={styles.WeatherHistory__view}>
        <WeatherTile day={checkForecastdayType(data)} />
      </View>
    );
  }
  return <Placeholder isFetching={isFetched || isLoading} />;
};

export default WeatherHistory;
