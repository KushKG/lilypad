import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

export default function AddButton({ addFunction }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addFunction} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    right: 20,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
});
