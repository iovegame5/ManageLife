import React from 'react'
import { View, Text } from 'react-native'
import HealthMain from '../Pages/HealthMain';
import HealthSetting from '../Pages/HealthSetting';
import { createStackNavigator } from '@react-navigation/stack';
const HealthStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator >
            <Stack.Screen name="Health" component={HealthMain} options={{ headerShown: false }}/>
            <Stack.Screen name="Setting" component={HealthSetting} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default HealthStack
