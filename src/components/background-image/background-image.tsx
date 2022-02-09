import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const BackgroundImage = (props: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <View style={styles.BackgroundImage__view}>
      <Image
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_first,
        ]}
        source={require('assets/vector1.png')}
      />
      <Image
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_second,
        ]}
        source={require('assets/vector2.png')}
      />
      <Image
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_third,
        ]}
        source={require('assets/vector3.png')}
      />
      <Image
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_third,
        ]}
        source={require('assets/vector3.png')}
      />
      <Image
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_fourth,
        ]}
        source={require('assets/vector4.png')}
      />
      <Image
        style={[
          styles.BackgroundImage__image,
          styles.BackgroundImage__image_fifth,
        ]}
        source={require('assets/vector5.png')}
      />
      {props.children}
      <Text style={styles.BackgroundImage__sign}>
        с любовью от mercury development
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BackgroundImage__view: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#373AF5',
  },
  BackgroundImage__image: {
    position: 'absolute',
  },
  BackgroundImage__image_first: {
    top: 0,
    right: 0,
  },
  BackgroundImage__image_second: {
    bottom: 0,
  },
  BackgroundImage__image_third: {
    bottom: 0,
  },
  BackgroundImage__image_fourth: {
    right: 0,
  },
  BackgroundImage__image_fifth: {
    bottom: 0,
  },
  BackgroundImage__sign: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.6,
    textTransform: 'uppercase',
    textAlign: 'center',
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
});
export default BackgroundImage;
