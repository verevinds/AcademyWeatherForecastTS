import Button from 'components/button/button';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const Board = () => {
  const [isFirstButtonActive, toggleFirstButtonActive] = useState(true);
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
      <View>
        <Image
          source={require('assets/placeholder.png')}
          style={styles.Board_placeholder}
        />
        <Text style={styles.Board_placeholderText}>
          Fill in all the fields and the weather will be displayed
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Board__block: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 24,
    position: 'absolute',
    top: 104,
    bottom: 50,
    right: 0,
    left: 0,
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
    borderStyle: 'dashed',
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
