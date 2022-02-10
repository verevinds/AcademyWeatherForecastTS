import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Board__selectIconContainer: {
    justifyContent: 'center',
    height: '100%',
  },
  Board__selectViewContainer: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    flex: 1,
  },
  Board__selectText: {
    color: '#2C2D76',
    fontSize: 16,
  },
  Board__block: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 24,
    height: 414,
  },
  Board__dot: {
    fontSize: 40,
    lineHeight: 40,
    height: 30,
  },
  Board__buttons_reverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  Board__buttons: {
    marginLeft: 24,
    marginTop: 24,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  Board__button_left: {marginRight: 12, marginLeft: 24},
  Board__button_leftFirstButton: {marginRight: 12},
  Board__button_right: {marginLeft: 12},
  Board__inputBlock: {
    flexDirection: 'row',
    backgroundColor: 'rgba(128, 131, 164, 0.06)',
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'flex-start',
    marginVertical: 24,
    borderColor: 'rgba(128, 131, 164, 0.2)',
    borderWidth: 2,
    borderRadius: 8,
  },
  Board__input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
