import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
