import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PlantListView from "../components/PlantListView";
import GardenContext from "../components/GardenContext";

export default function GardenView({ route, navigation }) {
  const { gardens } = useContext(GardenContext);
  const [garden, setGarden] = useState(gardens[route.params.index]);

  for (let plant of garden.plants) {
    plant["name"] = plant["plant_id"]
  }

  useEffect(() => {
    setGarden(gardens[route.params.index])
  }, [gardens])


  const addPlant = () => {
    console.log(garden.id)
    navigation.navigate("Search Page",  {"gardenId": garden.id})
  };

  return (
    <View>
      {garden.plants.map((plant, index) => (
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