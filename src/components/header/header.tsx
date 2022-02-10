import React from 'react';
import {Text, View} from 'react-native';
import headerMessage from './header.message';
import styles from './header.styles';

const Header = (): JSX.Element => {
  return (
    <View style={styles.Header__block}>
      <View style={[styles.Header__blockSplite, styles.Header__blockSplite_up]}>
        <Text style={[styles.Header__title_font, styles.Header__title_up]}>
          {headerMessage.weather}
        </Text>
      </View>
      <View
        style={[styles.Header__blockSplite, styles.Header__blockSplite_down]}>
        <Text style={[styles.Header__title_font, styles.Header__title_down]}>
          {headerMessage.forecast}
        </Text>
      </View>
    </View>
  );
};

export default Header;
