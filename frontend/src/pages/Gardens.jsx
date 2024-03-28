import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { delete_garden, get_gardens } from '../controllers/firebase_controller';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Gardens({ navigation }) {
  const [gardens, setGardens] = useState([]);

  useEffect(() => {
    updateGardens()
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      updateGardens()
    }, [])
  );

  const updateGardens = () => {
    const fetchGardens = async () => {
      const temp_gardens = await get_gardens();
      setGardens(temp_gardens);
    };
    fetchGardens();
  }

  const navigateToNewPage = () => {
    navigation.navigate('Create Garden');
  };

  const navigateToGarden = (index) => {
    navigation.navigate('Garden View', {"data": gardens[index]});
  };

  const deleteGarden = (index) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this garden?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            delete_garden(gardens[index].id, updateGardens)
            console.log("Delete Pressed");
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {gardens.map((garden, index) => (
        <View key={garden.id} style={styles.gardenContainer}>
          <TouchableOpacity onPress={() => navigateToGarden(index)} style={styles.garden}>
            <Text style={styles.text}>{garden.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteGarden(index)} style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Button title={"Add Garden"} onPress={navigateToNewPage}>click me</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gardenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  garden: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#ff9999',
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteText: {
    fontSize: 16,
    color: 'white',
  },
});
