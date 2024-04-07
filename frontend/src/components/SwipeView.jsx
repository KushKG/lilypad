import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SwipeView({ data }) {
    const conversions = ["Low", "Medium", "High"];

    const characteristics = [
        { label: "Heat Tolerance", value: conversions[data["Heat Tolerance"]] },
        {
            label: "Water Requirements",
            value: conversions[data["Water Requirements"]],
        },
        { label: "Pest Tolerance", value: conversions[data["Pest Tolerance"]] },
        {
            label: "Soil Requirements",
            value: conversions[data["Soil Requirements"]],
        },
        {
            label: "Fertility Requirements",
            value: conversions[data["Fertility Requirements"]],
        },
    ];
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{data.Name}</Text>
            <Image source={{ uri: data.Image }} style={styles.modalImage} />
            <Text style={styles.characteristics}>Characteristics:</Text>
            <View style={styles.characteristicsContainer}>
                {characteristics.map((item, index) => (
                    <View key={index} style={styles.characteristicItem}>
                        <Text style={styles.characteristicLabel}>
                            {item.label}:
                        </Text>
                        <Text>{item.value}</Text>
                    </View>
                ))}
            </View>
            <Text style={styles.modalDescription}>{data.Description}</Text>
            <Button title="Close" onPress={() => setShowModal(false)} />
        </View>
    );

}

styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c9f7e1", 
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    modalDescription: {
        fontSize: 18,
        marginBottom: 20,
        color: "#333",
        textAlign: "center",
        paddingHorizontal: 40,
    },
    characteristics: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "left",
    },
    characteristicsContainer: {
        marginBottom: 20,
    },
    characteristicItem: {
        flexDirection: "row",
        marginBottom: 5,
    },
    characteristicLabel: {
        fontWeight: "bold",
        marginRight: 5,
    },
    modalImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
});