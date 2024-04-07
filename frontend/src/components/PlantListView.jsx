import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getPlantDetailsByName } from "../controllers/data_controller";
import { deletePlant } from "../pages/GardenView";
import chroma from 'chroma-js';

export default function PlantListView({ data, actionElement, deletePlant }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [details, setDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleExpand = async () => {
    if (!details) {
      const response = await getPlantDetailsByName(data.Name);
      setDetails(response);
    }
    setIsExpanded(!isExpanded);
  };

  const handleDeletePlant = () => {
    console.log(data.Name);
    deletePlant(data.Name);
  };

  const getColorForLilypadScore = (score) => {
    const scale = chroma.scale(['red', 'yellow', 'green']).domain([0, 1]); // Red to green scale
    return scale(score).hex();
  };

  return (
    <TouchableOpacity
      onPress={toggleExpand}
      style={[styles.container, isExpanded && styles.expandedContainer]}
      activeOpacity={1}
    >
      <View style={styles.row}>
        <Image source={{ uri: data.Image }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.Name}</Text>
          <Ionicons
            name={isExpanded ? "chevron-up" : "chevron-down"}
            size={24}
            color="black"
          />
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              paddingHorizontal={4}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.actionContainer}>{actionElement}</View>
      </View>
      {isExpanded && details && (
        <View>
          <View style={styles.detailsContainer}>
            <View style={styles.column}>
              <Text style={styles.label}>Schedule:</Text>
              <Text>Sun: {details["Heat Tolerance"]}</Text>
              <Text>Watering: {details["Water Requirements"]}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Lilypad Score:</Text>
              <View style={[styles.circle, { backgroundColor: getColorForLilypadScore(details["Lilypad"]) }]}>
                <Text style={styles.scoreText}>{(details["Lilypad"] * 100).toFixed(0)}</Text>
              </View>
            </View>
          </View>
          {deletePlant != null ? <Button title="Delete Plant" onPress={handleDeletePlant} color="red" /> : <></> }
        </View>
      )}
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{data.Name}</Text>
          <Text style={styles.modalDescription}>{data.Description}</Text>
          <Button title="Close" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    fontSize: 21,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 5,
  },
  actionContainer: {
    marginRight: 0,
    width: 40,
    height: 40,
  },
  detailsContainer: {
    marginTop: 15,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
  },
  expandedContainer: {
    marginBottom: 0, // Adjust as needed
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c9f7e1", // Light green color
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Dark text color
  },
  modalDescription: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 17, // Dark text color
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  scoreText: {
    color: 'black',
  },
});