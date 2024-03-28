import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PlantListView({ data }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <TouchableOpacity
            onPress={toggleExpand}
            style={[styles.container, isExpanded && styles.expandedContainer]}
            activeOpacity={1} // Set activeOpacity to 1
        >
            <View style={styles.row}>
                <Text style={styles.title}>{data.name}</Text>
                <Ionicons name={isExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
            </View>
            {isExpanded && (
                <View style={styles.detailsContainer}>
                    <Text>Watering: {data.watering}</Text>
                    <Text>Sun: {data.sun}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detailsContainer: {
        marginTop: 10,
    },
});
