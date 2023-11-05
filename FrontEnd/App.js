import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

// Screen
import SchedulerStack from "./Team/Scheduler/Navigations/SchedulerStack";
import HealthStack from "./Team/Health/Navigations/HealthStack";
import NoteStack from "./Team/Notes/Navigations/NoteStack";
import MoneyStack from "./Team/Money/Navigations/MoneyStack";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SchedulerStack">
        <Drawer.Screen
          options={{
            headerStyle: {
              backgroundColor: "#88CF88",
            },
            headerTintColor: "black",
          }}
          name="SchedulerStack"
          component={SchedulerStack}
        />
        <Drawer.Screen
          name="HealthStack"
          component={HealthStack}
          options={{
            headerStyle: {
              backgroundColor: "#88CF88",
            },
            headerTintColor: "black",
          }}
        />
        <Drawer.Screen
          name="NoteStack"
          component={NoteStack}
          options={{
            headerStyle: {
              backgroundColor: "#88CF88",
            },
            headerTintColor: "black",
          }}
        />
        <Drawer.Screen
          name="MoneyStack"
          component={MoneyStack}
          options={{
            headerStyle: {
              backgroundColor: "#88CF88",
            },
            headerTintColor: "black",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
