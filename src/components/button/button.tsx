import React, {PropsWithChildren} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import type {
  GestureResponderEvent,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import styles from './button.styles';

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

export default Button;
