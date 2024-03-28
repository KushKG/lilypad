import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PlantListView({ data, actionElement }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <TouchableOpacity
            onPress={toggleExpand}
            style={[styles.container, isExpanded && styles.expandedContainer]}
            activeOpacity={1} 
        >
            <View style={styles.row}>
                <Text style={styles.title}>{data.name}</Text>
                <View style={styles.actionContainer}>
                    {actionElement}
                </View>
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
        alignItems: 'center',
    },
    title: {
        flex: 1, 
        fontSize: 18,
        fontWeight: 'bold',
    },
    actionContainer: {
        marginRight: 10, 
        width: 40,
        height: 40
    },
    detailsContainer: {
        marginTop: 10,
        marginLeft: 30,
    },
});
