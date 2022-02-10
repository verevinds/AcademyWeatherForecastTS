import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  WeatherTile__titleDay: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    color: '#fff',
    margin: 20,
  },
  WeatherTile__avgTemp: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    color: '#fff',
    position: 'absolute',
    bottom: 20,
    right: 20,
    textAlign: 'right',
  },
  WeatherTile__IconWearher: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -60}, {translateY: -60}],
    height: 120,
    width: 120,
  },
  WeatherTile__forecastBlock: {
    backgroundColor: '#373AF5',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#2C2D76',
    borderRadius: 8,
    flex: 1,
  },
});
