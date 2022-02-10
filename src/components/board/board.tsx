import Button from 'components/button/button';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Arrow} from 'components/arrow/arrow';
import cities from 'const/cities';
import boardMessage from './board.message';
import Weather from 'components/weather/weather';
import WeatherHistory from 'components/weather-history/weather-history';

const Board = () => {
  const [city, setCity] = useState<string | null>(null);
  const [isFirstButtonActive, toggleFirstButtonActive] = useState(true);

  const handleSevenDaysButton = () => {
    toggleFirstButtonActive(true);
  };
  const handleInThePastButton = () => {
    toggleFirstButtonActive(false);
  };
  const handleSelect = (value: string) => {
    if (value === 'City...') {
      setCity(null);
      return;
    }
    setCity(value);
  };

  return (
    <View style={styles.Board__block}>
      <View
        style={[
          styles.Board__buttons,
          !isFirstButtonActive ? styles.Board__buttons_reverse : undefined,
        ]}>
        <Button
          onPress={handleSevenDaysButton}
          active={isFirstButtonActive}
          style={
            isFirstButtonActive
              ? styles.Board__button_leftFirstButton
              : styles.Board__button_right
          }>
          {boardMessage.threeDays}
        </Button>
        <Text style={styles.Board__dot}>·</Text>
        <Button
          onPress={handleInThePastButton}
          active={!isFirstButtonActive}
          style={
            !isFirstButtonActive
              ? styles.Board__button_left
              : styles.Board__button_right
          }>
          {boardMessage.inThePast}
        </Button>
      </View>
      <View style={styles.Board__inputBlock}>
        <RNPickerSelect
          onValueChange={handleSelect}
          placeholder={{label: 'City...', value: 'City...'}}
          Icon={Arrow}
          style={{
            iconContainer: styles.Board__selectIconContainer,
            viewContainer: styles.Board__selectViewContainer,
            inputWeb: styles.Board__selectText,
            inputIOS: styles.Board__selectText,
            inputAndroid: styles.Board__selectText,
          }}
          items={cities}
        />
      </View>
      {isFirstButtonActive ? <Weather city={city} /> : <WeatherHistory />}
    </View>
  );
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

export default Board;
