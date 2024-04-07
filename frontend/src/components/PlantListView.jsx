import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getPlantDetailsByName } from "../controllers/data_controller";
import {deletePlant} from "../pages/GardenView";

export default function PlantListView({ data, actionElement, deletePlant }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [details, setDetails] = useState(null);

    const toggleExpand = async () => {
        if (!details) {
            const response = await getPlantDetailsByName(data.Name)
            setDetails(response)
        }
        setIsExpanded(!isExpanded);
    }; 

    const handleDeletePlant = () => {
        console.log(data.Name)
        deletePlant(data.Name);
    };

    return (
        <TouchableOpacity
            onPress={toggleExpand}
            style={[styles.container, isExpanded && styles.expandedContainer]}
            activeOpacity={1} 
        >
            <View style={styles.row}>
                <Image
                    source={{ uri: data.Image }}
                    style={styles.image}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{data.Name}</Text>
                    <Ionicons name={isExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                </View>
                <View style={styles.actionContainer}>
                    {actionElement}
                </View>
            </View>
            {isExpanded && details && (
                <View style={styles.detailsContainer}>
                    <Text>Sun: {details['Heat Tolerance']}</Text>
                    <Text>Watering: {details['Pest Tolerance']}</Text>
                    <Text>Lilypad: {details['Lilypad']}</Text>
                    <Button title="Delete Plant" onPress={handleDeletePlant} color="red" />
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    title: {
        flex: 1, 
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 5,
    },
    actionContainer: {
        marginRight: 0,     
        width: 40,
        height: 40
    },
    detailsContainer: {
        marginTop: 15,
        marginLeft: 30,
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
});