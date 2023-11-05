import React from 'react'
import { View, Text } from 'react-native'
import NoteMain from '../Pages/NoteMain';
import NoteDetail from '../Pages/NoteDetail';
import { createStackNavigator } from '@react-navigation/stack';
const NoteStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator >
            <Stack.Screen name="NoteMain" component={NoteMain} options={{ headerShown: false }}/>
            <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default NoteStack
