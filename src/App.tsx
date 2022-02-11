import BackgroundImage from 'components/background-image/background-image';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from 'components/header/header';
import Board from 'components/board/board';
import {QueryClient, QueryClientProvider} from 'react-query';
import styles from 'styles/index';
import {NavigationContainer} from '@react-navigation/native';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <BackgroundImage>
          <SafeAreaView style={styles.App__safeView}>
            <Header />
            <View style={styles.App__view}>
              <Board />
            </View>
          </SafeAreaView>
        </BackgroundImage>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
