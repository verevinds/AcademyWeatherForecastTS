import {DateTime} from 'luxon';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import DatePickerComponent from 'react-native-date-picker';

type DatePicker = {
  style: ViewStyle | TextStyle | ImageStyle;
  onChangeDate: (date: Date) => void;
};
const DatePicker = ({style, onChangeDate}: DatePicker) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onPress = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (onChangeDate) {
      onChangeDate(date);
    }
  }, [onChangeDate, date]);

  return (
    <ImageBackground
      style={[
        {
          width: 44,
          height: 48,
        },
        style,
      ]}
      source={require('assets/date-place.png')}>
      <TouchableOpacity onPress={onPress}>
        <View style={{height: '100%', alignItems: 'center'}}>
          {date ? (
            <View style={{position: 'absolute', bottom: 4}}>
              <Text style={{textAlign: 'center', fontSize: 14}}>
                {DateTime.fromISO(date.toISOString()).day}
              </Text>
              <Text style={{textAlign: 'center', fontSize: 12}}>
                {DateTime.fromISO(date.toISOString())
                  .toFormat('MMM')
                  .toLocaleLowerCase()}
              </Text>
            </View>
          ) : (
            <Text>...</Text>
          )}
        </View>
      </TouchableOpacity>
      <DatePickerComponent
        modal
        mode="date"
        minimumDate={DateTime.now().minus({week: 1}).toJSDate()}
        maximumDate={new Date()}
        open={open}
        date={date}
        onConfirm={value => {
          setOpen(false);
          setDate(value);
          if (onChangeDate) {
            onChangeDate(value);
          }
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </ImageBackground>
  );
};

export default DatePicker;
