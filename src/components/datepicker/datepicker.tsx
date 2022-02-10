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
import styles from './datepicker.styles';

type DatePicker = {
  style: ViewStyle | TextStyle | ImageStyle;
  onChangeDate: (date: Date) => void;
};
const DatePicker = ({style, onChangeDate}: DatePicker): JSX.Element => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onPress = () => {
    setOpen(true);
  };
  const onConfirm = (value: Date) => {
    setOpen(false);
    setDate(value);
    if (onChangeDate) {
      onChangeDate(value);
    }
  };
  const onCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (onChangeDate) {
      onChangeDate(date);
    }
  }, [onChangeDate, date]);

  return (
    <ImageBackground
      style={[styles.Datepicker__imageBackground, style]}
      source={require('assets/date-place.png')}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.Datepicker__textContainer}>
          {date ? (
            <View style={styles.Datepicker__dateTextContainer}>
              <Text style={styles.Datepicker__dateDay}>
                {DateTime.fromISO(date.toISOString()).day}
              </Text>
              <Text style={styles.Datepicker__dateMonth}>
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
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </ImageBackground>
  );
};

export default DatePicker;
