import BackgroundImage from 'components/background-image/background-image';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from 'components/header/header';
import Board from 'components/board/board';
import {QueryClient, QueryClientProvider} from 'react-query';
import styles from 'styles/index';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BackgroundImage>
        <SafeAreaView style={styles.App__view}>
          <Header />
          <ScrollView>
            <Board />
          </ScrollView>
        </SafeAreaView>
      </BackgroundImage>
    </QueryClientProvider>
  );
};

export default App;
