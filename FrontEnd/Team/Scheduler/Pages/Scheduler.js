import React, {useState} from "react";
import { View, Text, Button } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import DatePicker from "react-native-date-picker";
const Scheduler = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View>
      {/* <Text>Scheduler</Text> */}
      <Calendar
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
      />
      <Button title="Open" onPress={() => setOpen(true)} />
      {/* <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      /> */}
    </View>
  );
};

export default Scheduler;
