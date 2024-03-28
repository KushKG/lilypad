import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gardens from './Gardens';
import CreateGarden from './CreateGarden';

Stack = createNativeStackNavigator();

export default function GardensNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gardens" component={Gardens} />
        <Stack.Screen name="CreateGarden" component={CreateGarden} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
