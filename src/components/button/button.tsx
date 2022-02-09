import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import type {
  GestureResponderEvent,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  active?: boolean;
  style?: ViewStyle | TextStyle | ImageStyle;
};
const Button = ({
  children,
  onPress,
  active,
  style,
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} disabled={active}>
      <Text
        style={[
          styles.Button__text,
          active ? styles.Button__text_active : undefined,
          style,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button__text: {
    fontSize: 24,
    lineHeight: 32,
    color: '#8083A4',
    fontWeight: 'bold',
  },
  Button__text_active: {
    color: '#2C2D76',
  },
});
export default Button;
