import React, { useState, useMemo } from "react";
import { View, Text, Button, Modal, StyleSheet, TextInput } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
const Scheduler = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [act_name, setAct_name] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [selected, setSelected] = useState(date); // รับวันที่เริ่มต้นแบบ ISO
  const ip = "192.168.1.102"
  const marked = useMemo(
    () => ({
      [selected]: {
        selected: true,
        selectedColor: "#88CF88",
        selectedTextColor: "white",
      },
    }),
    [selected]
  );

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || time;
    setShow(false);
    setTime(currentDate);

    // ปรับค่า `time` เมื่อผู้ใช้เลือกเวลา
  };

  const save = async () => {
    setModalVisible(!modalVisible);

    const requestData = {
      userId: "romeAengNa",
      appointmentDetail: act_name,
      appointmentTime: selected + " " + time.toLocaleTimeString(),
    };

    try {
      const response = await axios.post(
        `http://${ip}:8082/appointment-service/appointment`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // รับข้อมูลหรือทำอย่างอื่นที่คุณต้องการ
      console.log(response.data);
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดขึ้นในการร้องขอ
      console.error(error);
    }
  };

  return (
    <View>
      {/* <Text>Scheduler</Text> */}
      <Calendar
        initialDate={date}
        markedDates={marked}
        onDayPress={(day) => {
          setSelected(day.dateString);
          console.log("selected day", day);
        }}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Add Activity
            </Text>
            <View style={styles.label}>
              <Text style={{ marginRight: 5 }}>Activity :</Text>
              <TextInput
                value={act_name}
                onChangeText={(text) => setAct_name(text)}
                style={styles.input}
                placeholder="Activity Name"
              ></TextInput>
            </View>
            <View style={styles.label}>
              <Text style={{ marginRight: 5 }}>Time :</Text>
              <TextInput
                editable={false}
                value={time.toLocaleTimeString()}
                style={[styles.input, { color: "black" }]}
              ></TextInput>
            </View>
            <Button title="Select Time" onPress={() => setShow(true)} />
            <Button
              title="Close"
              onPress={() => {
                setModalVisible(!modalVisible);
                setAct_name(""); // เซตเป็นค่าเริ่มต้นหรือค่าที่คุณต้องการ
                setTime(new Date()); // เซตเป็นค่าเริ่มต้นหรือค่าที่คุณต้องการ
              }}
            />
            <Button title="Save" onPress={save} />
          </View>
        </View>
      </Modal>
      {selected === date ? (
        <Text style={styles.head}>Today</Text>
      ) : (
        <Text style={styles.head}>{selected}</Text>
      )}
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
          Activity
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Chemistry Class
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>13.00</Text>
        </View>
      </View>
      <Button
        title="Add Activity"
        onPress={() => setModalVisible(true)}
      ></Button>
      {show && (
        <DateTimePicker
          testID="timePicker"
          value={time}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
          setTime=""
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    marginLeft: 20,
    marginVertical: 20,
  },
  button: {
    marginVertical: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    marginLeft: 5,
    borderRadius: 10,
    paddingLeft: 10,
  },
  label: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 300,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Scheduler;
