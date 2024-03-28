import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import PlantListView from "../components/PlantListView";

export default function GardenView({ route }) {

  const data = route.params.data
  for (let plant of data.plants) {
    plant["name"] = plant["plant_id"]
  }

  return (
    <View>
      {data.plants.map((data, index) => (
        <PlantListView key={index} data={data}/>
      ))}
    </View>
  );
}
