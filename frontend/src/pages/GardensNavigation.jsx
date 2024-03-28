import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gardens from './Gardens';
import GardenView from './GardenView';
import CreateGarden from './CreateGarden';

Stack = createNativeStackNavigator();

export default function GardensNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gardens" component={Gardens} />
        <Stack.Screen name="Create Garden" component={CreateGarden} />
        <Stack.Screen name="Garden View" component={GardenView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
