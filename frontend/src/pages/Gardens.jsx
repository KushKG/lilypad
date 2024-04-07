import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { delete_garden, get_gardens } from "../controllers/firebase_controller";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GardenProvider } from "../components/GardenContext";
import GardenContext from "../components/GardenContext";
import AddButton from "../components/AddButton";

export default function Gardens({ navigation }) {
  const { gardens } = useContext(GardenContext);
  const [editingMode, setEditingMode] = useState(false);
  
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#B8E6AC',
      },
    });
  }, []);

  const toggleEditingMode = () => {
    setEditingMode(!editingMode);
  };

  const navigateToNewPage = () => {
    navigation.navigate("Create Garden");
  };

  const navigateToGarden = (index) => {
    navigation.navigate("Garden View", { index: index });
  };

  const deleteGarden = (index) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this garden?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            delete_garden(gardens[index].id, null);
            console.log("Delete Pressed");
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleEditingMode} style={styles.editButton}>
        <Text style={styles.editText}>{editingMode ? "Done Editing" : "Edit Gardens"}</Text>
      </TouchableOpacity>
      {gardens.map((garden, index) => (
        <View
          key={garden.id}
          style={[styles.gardenContainer, editingMode && styles.editMode]}
        >
          <View style={styles.separator} />
          <TouchableOpacity
            onPress={() => navigateToGarden(index)}
            style={styles.garden}
          >
            <Text style={styles.text}>{garden.name}</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          {editingMode && (
            <TouchableOpacity
              onPress={() => deleteGarden(index)}
              style={[styles.deleteButton, { height: 50 }]}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
      <AddButton addFunction={navigateToNewPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gardenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    width: "90%", // Adjust width to not reach ends of the screen
    alignSelf: "center", // Center horizontally
    borderColor: "#000", // Border color
  },
  garden: {
    padding: 18,
    flex: 1, // Expand to fill available space
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  deleteButton: {
    backgroundColor: "#C70000",
    padding: 14,
    height: "100%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteText: {
    fontSize: 16,
    color: "white",
  },
  editButton: {
    marginLeft: 10,
  },
  editText: {
    fontSize: 16,
    color: "blue",
    padding: 10,
  },
  // separator: {
  //   height: 1,
  //   backgroundColor: "#000", // Line color
  //   width: "90%", // Adjust width to not reach ends of the screen
  //   alignSelf: "center", // Center horizontally
  // },
});
