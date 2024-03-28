import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { get_gardens } from '../controllers/firebase_controller';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Gardens({ navigation }) {
  const [gardens, setGardens] = useState([]);

  useEffect(() => {
    const fetchGardens = async () => {
      const temp_gardens = await get_gardens();
      setGardens(temp_gardens);
    };
    fetchGardens();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const fetchGardens = async () => {
        const temp_gardens = await get_gardens();
        setGardens(temp_gardens);
      };
      fetchGardens();
    }, [])
  );

  const navigateToNewPage = () => {
    navigation.navigate('Create Garden');
  };

  const navigateToGarden = (index) => {
    navigation.navigate('Garden View', {"data": gardens[index]})
  }

  return (
    <View style={styles.container}>
      {gardens.map((garden, index) => (
        <TouchableOpacity key={garden.id} onPress={() => navigateToGarden(index)} style={styles.garden}>
          <Text style={styles.text}>{garden.name}</Text>
      </TouchableOpacity>
      ))}
      <Button title={"Add Garden"} onPress={navigateToNewPage}>click me</Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  garden: {
    backgroundColor: '#e0e0e0', // Background color of the button
    padding: 40, // Padding around the text
    marginVertical: 5, // Vertical margin between items
    borderRadius: 8, // Border radius for rounded corners
    width: '100%', // Take up full width
    alignItems: 'center', // Center the text horizontally
  },
  text: {
    fontSize: 18, // Font size of the text
    fontWeight: 'bold', // Bold text
  },
});