import React from 'react'
import { View, Text } from 'react-native'
import Scheduler from '../Pages/Scheduler'
import { createStackNavigator } from '@react-navigation/stack';
const SchedulerStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Scheduler" component={Scheduler} />
        </Stack.Navigator>
    )
}

export default SchedulerStack
