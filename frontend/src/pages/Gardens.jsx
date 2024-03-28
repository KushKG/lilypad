import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { get_gardens } from '../controllers/firebase_controller';
import { NavigationContainer } from '@react-navigation/native';
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

  const navigateToNewPage = () => {
    navigation.navigate('CreateGarden');
  };

  return (
    <View style={styles.container}>
      {gardens.map(garden => (
        <Text key={garden.id}>{garden.name}</Text>
      ))}
      <Button title={"Add Garden"} onPress={navigateToNewPage}>click me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
