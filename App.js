import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'CLICK PREPA' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

