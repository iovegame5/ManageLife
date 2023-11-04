import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import SchedulerStack from "./Team/Scheduler/Navigations/SchedulerStack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SchedulerStack">
        <Drawer.Screen name="SchedulerStack" component={SchedulerStack} />
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
