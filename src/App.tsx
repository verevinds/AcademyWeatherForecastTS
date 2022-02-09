import BackgroundImage from 'components/background-image/background-image';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from 'components/header/header';
import Board from 'components/board/board';

const App = () => {
  return (
    <BackgroundImage>
      <SafeAreaView style={styles.App__view}>
        <Header />
        <Board />
      </SafeAreaView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  App__view: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    bottom: 0,
  },
  App__scroll: {},
});

export default App;
