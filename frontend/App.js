import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { search } from './src/controllers/data_controller';
import PlantListView from './src/components/PlantListView';
import { get_gardens } from './src/controllers/firebase_controller';
import { useEffect, useState } from 'react';
import Gardens from './src/pages/Gardens';
import Search from './src/pages/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {


  const [gardens, setGardens] = useState([])

  useEffect(() => {
    const getGardens = async () => {
      const temp_gardens = await get_gardens()
      setGardens(temp_gardens)
    }
    getGardens()
  }, [])

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Gardens} />
        <Tab.Screen name="Settings" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );

  return (
    <View style={styles.container}>
      {/* {search('example', {}).map((data, index) => {
        return <PlantListView data={data} key={index} />
      })} */}
      {gardens.map(garden => {
        return <Text key={garden.id}>{garden.name} {garden.id}</Text>
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

