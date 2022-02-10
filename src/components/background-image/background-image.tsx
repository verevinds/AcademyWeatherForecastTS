import React, {PropsWithChildren} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './background-image.styles';

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

export default BackgroundImage;
