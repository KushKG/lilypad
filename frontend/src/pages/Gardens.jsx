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
import GardenContext from "../components/GardenContext";
import AddButton from "../components/AddButton";

export default function Gardens({ navigation }) {
  const { gardens } = useContext(GardenContext);
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#B8E6AC",
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
        <Text style={styles.editText}>
          {editingMode ? "Done Editing" : "Edit Gardens"}
        </Text>
      </TouchableOpacity>
      {gardens.map((garden, index) => (
        <View
          key={garden.id}
          style={[styles.gardenContainer, editingMode && styles.editMode]}
        >
          <TouchableOpacity
            onPress={() => navigateToGarden(index)}
            style={styles.garden}
          >
          <View style={styles.row}>
            <View style={styles.gardenInfo}>
                <Text style={styles.text}>{garden.name}</Text>
                <Text style={styles.description}>{garden.caption}</Text>
              </View>
              <View style={styles.reminderView}>
                <Text>Next Reminder</Text>
                <Text style={styles.reminderText}>5:00pm 04/07</Text>
              </View>
          </View>
            
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
      <TouchableOpacity onPress={navigateToNewPage}>
        <View style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Garden</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: '45%',
    backgroundColor: "green",
    alignSelf: 'center',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10
  },
  addButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  container: {
    flex: 1,
  },
  gardenContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    marginBottom: 5,
    alignSelf: "center",
    borderColor: "#000", 
  },
  garden: {
    padding: 18,
    paddingLeft: 40,
    flex: 1, 
    borderColor: "black",
  },
  deleteButton: {
    backgroundColor: "#C70000",
    padding: 14,
    height: "100%",
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
  },
  description: {
    marginTop: 2,
    color: 'gray',
    fontStyle: 'italic',
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  gardenInfo: {
    textAlign: 'left'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  reminderView: {
    paddingRight: 20
  },
  reminderText: {
    fontSize: 18,
  }
});
