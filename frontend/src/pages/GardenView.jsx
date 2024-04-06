import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PlantListView from "../components/PlantListView";
import GardenContext from "../components/GardenContext";
import AddButton from "../components/AddButton";
import SwipeView from "../components/SwipeView";

export default function GardenView({ route, navigation }) {
  const { gardens } = useContext(GardenContext);
  const [garden, setGarden] = useState(gardens[route.params.index]);

  for (let plant of garden.plants) {
    plant["name"] = plant["plant_id"]
  }

  useEffect(() => {
    navigation.setOptions({
      title: garden.name,
      headerStyle: {
        backgroundColor: '#B8E6AC',
      },
    });
    setGarden(gardens[route.params.index])
  }, [gardens])


  const addPlant = () => {
    console.log(garden.id)
    navigation.navigate("Search Page",  {"gardenId": garden.id})
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {garden.plants.map((plant, index) => (
          <PlantListView key={index} data={plant} />
        ))}
      </View>
      <AddButton addFunction={addPlant}/>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <SwipeView plants={garden.plants} />
  //     <AddButton addFunction={addPlant}/>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 35,
    margin: 10,
    width: 70,
    height: 70,
    alignItems: 'center',
    bottom: 50,
    left: 300,
  },
  addButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
});