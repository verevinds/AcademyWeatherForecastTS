import Button from 'components/button/button';
import {useForecast} from 'hooks/useForecast';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Board = () => {
  const [isFirstButtonActive, toggleFirstButtonActive] = useState(true);
  const {data, isSuccess} = useForecast();
  console.log(data);
  return (
    <View style={styles.Board__block}>
      <View
        style={[
          styles.Board__buttons,
          !isFirstButtonActive ? styles.Board__buttons_reverse : undefined,
        ]}>
        <Button
          onPress={() => {
            console.log('click');
            toggleFirstButtonActive(true);
          }}
          active={isFirstButtonActive}
          style={
            isFirstButtonActive
              ? styles.Board__button_left
              : styles.Board__button_right
          }>
          7 Days
        </Button>
        <Text style={styles.Board__dot}>·</Text>
        <Button
          onPress={() => {
            console.log('click');
            toggleFirstButtonActive(false);
          }}
          active={!isFirstButtonActive}
          style={
            !isFirstButtonActive
              ? styles.Board__button_left
              : styles.Board__button_right
          }>
          In the Past
        </Button>
      </View>
      <View style={styles.Board__inputBlock}>
        <TextInput
          style={styles.Board__input}
          placeholder="User Nickname"
          onChangeText={searchString => {
            console.log(searchString);
          }}
          underlineColorAndroid="transparent"
        />
      </View>
      {isSuccess ? (
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}>
          {data?.forecast.forecastday.map(day => {
            console.log(day.day.condition.icon);
            return (
              <View style={styles.Board__forecastBlock}>
                <View>
                  <Text style={styles.Board__titleDay}>{day.date}</Text>
                </View>
                <View>
                  <Image
                    style={styles.Board__IconWearher}
                    source={{uri: day.day.condition.icon}}
                  />
                </View>
                <View>
                  <Text style={styles.Board__avgTemp}>
                    {day.day.avgtemp_c}°
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <View>
          <Image
            source={require('assets/placeholder.png')}
            style={styles.Board_placeholder}
          />
          <Text style={styles.Board_placeholderText}>
            Fill in all the fields and the weather will be displayed
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    margin: 20,
    textAlign: 'right',
  },
  Board__IconWearher: {
    alignSelf: 'center',
    height: 120,
    width: 120,
  },
  Board__forecastBlock: {
    backgroundColor: '#373AF5',
    borderRadius: 8,
    width: 222,
    height: 238,
    marginRight: 16,
  },
  Board__block: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 24,
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
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  Board__button_left: {marginRight: 12},
  Board__button_right: {marginLeft: 12},
  Board__inputBlock: {
    flexDirection: 'row',
    backgroundColor: '#000',
    margin: 24,
  },
  Board__input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
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
