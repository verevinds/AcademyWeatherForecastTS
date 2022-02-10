import {useForecast} from 'hooks/useForecast';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

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
        style={styles.Board__slider}
        horizontal={true}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        {checkForecastType(data)?.forecast?.forecastday.map(day => (
          <View style={styles.Board__containerTile}>
            <WeatherTile day={day} />
          </View>
        ))}
      </ScrollView>
    );
  }

  return <Placeholder isFetching={isFetching || isLoading} />;
};

const styles = StyleSheet.create({
  Board__selectIconContainer: {
    justifyContent: 'center',
    height: '100%',
  },
  Board__selectViewContainer: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    flex: 1,
  },
  Board__selectText: {
    color: '#2C2D76',
    fontSize: 16,
  },
  Board__slider: {flex: 1, marginLeft: 24},
  Board__containerTile: {
    width: 222,
    height: 238,
  },
  Board__titleDay: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#fff',
    margin: 20,
  },
  Board__forecastSlider: {
    flexDirection: 'row',
  },
  Board__avgTemp: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    color: '#fff',
    position: 'absolute',
    bottom: 20,
    right: 20,
    textAlign: 'right',
  },
  Board__IconWearher: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -60}, {translateY: -60}],
    height: 120,
    width: 120,
  },
  Board__forecastBlock: {
    backgroundColor: '#373AF5',
    borderWidth: 2,
    borderColor: '#2C2D76',
    borderRadius: 8,
    width: 222,
    height: 238,
    marginRight: 16,
  },
  Board__block: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 24,
    height: 414,
  },
  Board__dot: {
    fontSize: 40,
    lineHeight: 40,
    height: 30,
  },
  Board__buttons_reverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  Board__buttons: {
    marginLeft: 24,
    marginTop: 24,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  Board__button_left: {marginRight: 12, marginLeft: 24},
  Board__button_leftFirstButton: {marginRight: 12},
  Board__button_right: {marginLeft: 12},
  Board__inputBlock: {
    flexDirection: 'row',
    backgroundColor: 'rgba(128, 131, 164, 0.06)',
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'flex-start',
    marginVertical: 24,
    borderColor: 'rgba(128, 131, 164, 0.2)',
    borderWidth: 2,
    borderRadius: 8,
  },
  Board__input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
  },
  Board_placeholder: {
    alignSelf: 'center',
    borderColor: '#DEDEDE',
    borderWidth: 2,
  },
  Board_placeholderText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8083A4',
    width: 240,
    alignSelf: 'center',
    marginTop: 24,
  },
});
export default Weather;
