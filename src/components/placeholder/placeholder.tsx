import React, {Fragment} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import placeholderMessage from './placeholder.message';

type PlaceholderProps = {
  isFetching?: boolean;
};
const Placeholder = ({isFetching}: PlaceholderProps) => {
  if (!isFetching) {
    return (
      <View>
        <Fragment>
          <Image
            source={require('assets/placeholder.png')}
            style={styles.Board_placeholder}
          />
          <Text style={styles.Board_placeholderText}>
            {placeholderMessage.placeholderText}
          </Text>
        </Fragment>
      </View>
    );
  }

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Placeholder;
