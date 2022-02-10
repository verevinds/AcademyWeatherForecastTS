import React from 'react';
import Placeholder from 'components/placeholder/placeholder';
import {useForecastHistory} from 'hooks/useForecastHistory';
import WeatherTile from 'components/weather-tile/weather-tile';
import {StyleSheet, View} from 'react-native';
import {checkForecastdayType} from 'utils/checkForecastdayType';

type WeatherHistoryProps = {date: Date; city: string | null};
const WeatherHistory = ({date, city}: WeatherHistoryProps): JSX.Element => {
  const {data, isFetched, status, failureCount, error} = useForecastHistory(
    city,
    date,
  );

  console.log('useForecastHistory', data, status, failureCount, error);
  if (data) {
    return (
      <View style={styles.Board__view}>
        <WeatherTile day={checkForecastdayType(data)} />
      </View>
    );
  }
  return <Placeholder isFetching={isFetched} />;
};

const styles = StyleSheet.create({
  Board__view: {flex: 1, marginLeft: 24, marginRight: 12, marginBottom: 24},
});

export default WeatherHistory;
