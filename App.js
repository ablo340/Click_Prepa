import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Components/Home';
import Make_prep from './Components/Make_prep';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Click Prepa' }}/>
        <Stack.Screen name="Make_prep" component={Make_prep} options={{ title: 'Make your preparation' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

