import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getPlantDetailsByName } from "../controllers/data_controller";
import { LinearGradient } from "expo-linear-gradient";

export default function PlantListView({ data, actionElement }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [details, setDetails] = useState(null);

  const toggleExpand = async () => {
    if (!details) {
      const response = await getPlantDetailsByName(data.Name);
      setDetails(response);
    }
    setIsExpanded(!isExpanded);
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
        </View>
        <View style={styles.actionContainer}>{actionElement}</View>
      </View>
      {isExpanded && details && (
        <View style={styles.detailsContainer}>
          <View style={styles.column}>
            <Text style={styles.label}>Schedule:</Text>
            <Text>{details["Heat Tolerance"]}</Text>
            <Text>{details["Water Requirements"]}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Lilypad Score:</Text>
            <LinearGradient
                            colors={['#FFD700', '#32CD32']}
                            style={styles.gradient}
                            // start={{x: 0, y: 0}}
                            // end={{x: 1, y: 0}}
                        >
                            <Text style={[styles.progress, { width: (details['Lilypad'] * 100) + '%' }]}></Text>
                        </LinearGradient>
            <LinearGradient
              // Button Linear Gradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
            //   style={styles.button}
            >
              <Text style={styles.text}>Sign in with Facebook</Text>
            </LinearGradient>
            <Text>{(details["Lilypad"] * 100).toFixed(0)}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    marginRight: 10,
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
  column: {
    flex: 1,
    alignItems: "flex-start",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
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
  gradient: {
    height: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "black",
  },
});
