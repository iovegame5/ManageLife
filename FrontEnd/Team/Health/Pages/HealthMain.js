import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
// import { Pedometer } from 'expo-sensors';

const HealthMain = ({ navigation }) => {
  const [goal, setGoal] = useState(0)
  const [step, setStep] = useState(0)
  const [user, setUser] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.card} >
        <Text style={styles.headerText} >
          Gauge for Healthy
        </Text>
        <Progress.Bar borderRadius={50} color={"#D2FF6E"} unfilledColor={"#F2FFD4"} progress={0.1} width={300} height={30} />
        <Text style={styles.subText}>
          Goal: 1000 | 10%
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.headerText}>
          Win Streaks
        </Text>
        <Text style={styles.subText}>
          60 Day
        </Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.gridHeaderText}>
              BMI
            </Text>
            <Text style={styles.subText}>
              18.5
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.gridHeaderText}>
              Steps
            </Text>
            <Text style={styles.subText}>
              30000
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>

            <Text style={styles.gridHeaderText}>
              Calories/day
            </Text>
            <Text style={styles.subText}>
              3000
            </Text>
          </View>
          <TouchableOpacity style={styles.card} onPress={() => {
            navigation.navigate("Setting")
          }}>
            <Text style={styles.gridHeaderText}>
              Setting
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#93CFB5",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",

  },
  goalCard: {
    flex: 1,
    borderRadius: 50,
    width: "100%",
    backgroundColor: "#fff",
  },
  heightCard: {
    flex: 1,
    borderRadius: 50,
    marginTop: 15,
    width: "100%",
    backgroundColor: "#fff",
  },
  grid: {
    flex: 2,
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
  },
  row: {
    flex: 1,
  },
  card: {
    marginTop: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,

    width: "100%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 26,
  },
  gridHeaderText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subText: {
    fontSize: 20
  }
});
export default HealthMain