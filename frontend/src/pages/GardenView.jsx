import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PlantListView from "../components/PlantListView";

export default function GardenView({ route, navigation }) {
  const [plants, setPlants] = useState(route.params.data.plants);

  const data = route.params.data
  for (let plant of data.plants) {
    plant["name"] = plant["plant_id"]
  }

  const addPlant = () => {
    navigation.navigate("Search Page")
  };


  return (
    <View>
      {plants.map((plant, index) => (
        <PlantListView key={index} data={plant} />
      ))}
      <TouchableOpacity onPress={addPlant} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Plant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  addButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});