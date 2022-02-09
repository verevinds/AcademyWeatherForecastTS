import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.Header__block}>
      <View style={[styles.Header__blockSplite, styles.Header__blockSplite_up]}>
        <Text style={[styles.Header__title_font, styles.Header__title_up]}>
          Weather
        </Text>
      </View>
      <View
        style={[styles.Header__blockSplite, styles.Header__blockSplite_down]}>
        <Text style={[styles.Header__title_font, styles.Header__title_down]}>
          forecast
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header__block: {
    display: 'flex',
    justifyContent: 'center',
  },
  Header__blockSplite: {
    width: '50%',
  },
  Header__blockSplite_up: {
    alignSelf: 'flex-start',
    marginLeft: 6,
  },
  Header__blockSplite_down: {
    alignSelf: 'flex-end',
    marginRight: 6,
  },
  Header__title_font: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
  },
  Header__title_up: {textAlign: 'right'},
  Header__title_down: {textAlign: 'left'},
});

export default Header;
