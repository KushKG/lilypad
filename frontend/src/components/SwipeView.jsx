import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import PlantListView from "./PlantListView";

export default function SwipeView({ plants }) {
  return (
    <Swiper>
      {plants.map((plant, index) => (
        <View style={styles.slide} key={index}>
          <View View style={styles.titleContainer}>
            <Text style={styles.title}>{data.Name}</Text>
          </View>
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
});
