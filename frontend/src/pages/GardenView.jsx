import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from "react-native";
import PlantListView from "../components/PlantListView";
import GardenContext from "../components/GardenContext";
import AddButton from "../components/AddButton";
import SwipeView from "../components/SwipeView";
import { get_garden_data } from "../controllers/firebase_controller";
import { delete_plant } from "../controllers/firebase_controller";

export default function GardenView({ route, navigation }) {
    const { gardens } = useContext(GardenContext);
    const [garden, setGarden] = useState(gardens[route.params.index]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigation.setOptions({
            title: garden.name,
            headerStyle: {
                backgroundColor: "#B8E6AC",
            },
        });
        const updateGardenData = async () => {
            gardenData = await get_garden_data(gardens[route.params.index].id);
            setGarden(gardenData);
            setLoading(false);
        };
        updateGardenData();
    }, [gardens]);

    const deletePlant = (index) => {
        console.log(gardens[route.params.index].id);
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to delete this plant?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: () => {
                        delete_plant(
                            gardens[route.params.index].id,
                            index,
                            null
                        );
                        console.log("Delete Pressed");
                    },
                },
            ]
        );
    };

    const addPlant = () => {
        console.log(garden["id"]);
        navigation.navigate("Search Page", {
            gardenId: gardens[route.params.index]["id"],
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {loading ? (
                    <ActivityIndicator />
                ) : garden.plants.length == 0 ? (
                  <View style={styles.noPlantsView}>
                  <Text style={styles.noPlantsText}>
                        You have no plants 😔
                    </Text>
                    <Text style={styles.noPlantsText}>
                      Click plus below to add plants! 
                    </Text>
                  </View>
                    
                ) : (
                    garden.plants.map((plant, index) => (
                        <PlantListView
                            key={index}
                            data={plant}
                            deletePlant={deletePlant}
                        />
                    ))
                )}
            </View>
            <AddButton addFunction={addPlant} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    content: {
        flex: 1,
    },
    addButton: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 35,
        margin: 10,
        width: 70,
        height: 70,
        alignItems: "center",
        bottom: 50,
        left: 300,
    },
    addButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
    },
    noPlantsView: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 120
    },
    noPlantsText: {
        textAlign: "center",
        fontSize: 24,
        marginBottom: 10
    },
});
