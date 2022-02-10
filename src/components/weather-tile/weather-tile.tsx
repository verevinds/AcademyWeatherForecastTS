import React from 'react';
import {Image, Text, View} from 'react-native';
import {DateTime} from 'luxon';
import styles from './weather-tile.styles';
import {Forecastday} from 'types/api/forecast';

type WeatherTileProps = {
  day?: Forecastday;
};
const WeatherTile = ({day}: WeatherTileProps): JSX.Element | null => {
  if (!day) {
    return null;
  }

  return (
    <View style={styles.WeatherTile__forecastBlock} key={day.date}>
      <Text style={styles.WeatherTile__titleDay}>
        {DateTime.fromISO(day.date).toFormat('dd MMM yyyy').toLocaleLowerCase()}
      </Text>
      <Image
        style={styles.WeatherTile__IconWearher}
        source={{uri: day.day.condition.icon}}
      />
      <Text style={styles.WeatherTile__avgTemp}>{day.day.avgtemp_c}°</Text>
    </View>
  );
};

export default WeatherTile;
