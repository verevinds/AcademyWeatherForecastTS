import Button from 'components/button/button';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Arrow} from 'components/arrow/arrow';
import cities from 'const/cities';
import boardMessage from './board.message';
import Weather from 'components/weather/weather';
import WeatherHistory from 'components/weather-history/weather-history';
import styles from './broad.styles';

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

export default Board;
