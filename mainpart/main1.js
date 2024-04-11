import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState();

  const type = () => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CalendarPicker 
        onDateChange={setSelectedDate}
        selectedStartDate={selectedDate}
        customDatesStyles={[{color: 'red'}]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Calendar;
